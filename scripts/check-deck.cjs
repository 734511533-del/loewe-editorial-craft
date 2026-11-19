#!/usr/bin/env node
// Run from a Playwright-enabled environment, or provide NODE_PATH.
const fs = require('node:fs');
const path = require('node:path');
const {pathToFileURL} = require('node:url');
let chromium;
try { ({chromium} = require('playwright')); }
catch { console.error('Playwright is required. Install it in your test environment or set NODE_PATH.'); process.exit(2); }
const input = process.argv[2];
if (!input) { console.error('Usage: node check-deck.cjs deck.html qa-output'); process.exit(2); }
const output = path.resolve(process.argv[3] || 'deck-qa');
fs.mkdirSync(output,{recursive:true});
(async()=>{
  const browser = await chromium.launch({headless:true});
  const page = await browser.newPage({viewport:{width:1280,height:720},reducedMotion:'reduce'});
  const failures = [], external = [];
  const check = (ok,message)=>{if(!ok) failures.push(message);};
  page.on('pageerror', e=>failures.push(e.message));
  page.on('console', m=>{if(m.type()==='error') failures.push(m.text());});
  await page.route(/^https?:/, route=>{external.push(route.request().url());return route.abort();});
  try {
    await page.goto(pathToFileURL(path.resolve(input)).href);
    const ids = await page.locator('.slide').evaluateAll(s=>s.map(e=>e.id));
    check(ids.length>0 && ids.every(Boolean) && new Set(ids).size===ids.length,'Missing or duplicate slide IDs');
    if(!ids.length) throw new Error('No slides');
    const links = await page.locator('[data-goto]').evaluateAll(s=>s.map(e=>e.dataset.goto));
    check(links.every(id=>ids.includes(id)),'Broken TOC targets');
    const status = ()=>page.locator('#page-status').innerText();
    await page.keyboard.press('Home');
    await page.keyboard.press('ArrowLeft');
    check(await status()===`1 / ${ids.length}`,'First-page boundary');
    check(await page.locator('#prev').isDisabled(),'Previous button boundary');
    for(let i=0;i<ids.length;i++) {
      await page.keyboard.press('Home');
      for(let j=0;j<i;j++) await page.keyboard.press('ArrowRight');
      check(await status()===`${i+1} / ${ids.length}`,'Dynamic page number '+i);
      const active=page.locator('.slide.active');
      check(await active.count()===1,'Exactly one active slide');
      check(await active.getAttribute('id')===ids[i],'Page order '+i);
      const size=await active.evaluate(e=>({h:e.scrollHeight-e.clientHeight,w:e.scrollWidth-e.clientWidth}));
      check(size.h<=2 && size.w<=2,'Desktop overflow '+ids[i]+': '+JSON.stringify(size));
      await page.screenshot({path:path.join(output,`${String(i+1).padStart(2,'0')}.png`),fullPage:true});
      const zoom=active.locator('.zoomable[data-extra]');
      for(let j=0;j<await zoom.count();j++) {
        const item=zoom.nth(j); await item.click();
        check(await page.locator('#detail-dialog').evaluate(e=>e.open),'Modal opens');
        check(await page.locator('#detail-text').innerText()===await item.getAttribute('data-extra'),'Detail preserved as text');
        const before=await status(); await page.keyboard.press('ArrowRight');
        check(await status()===before,'Modal blocks slide navigation');
        await page.locator('#detail-text').click();
        check(await page.locator('#detail-dialog').evaluate(e=>e.open),'Clicking detail keeps modal open');
        await page.keyboard.press('Escape');
        check(!await page.locator('#detail-dialog').evaluate(e=>e.open),'Escape closes modal');
        check(await item.evaluate(e=>document.activeElement===e),'Focus restored');
        await item.click(); await page.locator('#detail-close').click();
        check(!await page.locator('#detail-dialog').evaluate(e=>e.open),'Close button');
      }
      const targets=await active.locator('[data-goto]').evaluateAll(s=>s.map(e=>e.dataset.goto));
      for(const target of targets) {
        await page.keyboard.press('Home');for(let j=0;j<i;j++)await page.keyboard.press('ArrowRight');
        await page.locator('.slide.active [data-goto]').evaluateAll((buttons,id)=>buttons.find(b=>b.dataset.goto===id).click(),target);
        check(await page.locator('.slide.active').getAttribute('id')===target,'TOC jump '+target);
      }
    }
    await page.keyboard.press('End');await page.keyboard.press('ArrowRight');
    check(await status()===`${ids.length} / ${ids.length}`,'Last-page boundary');
    check(await page.locator('#next').isDisabled(),'Next button boundary');
    check(await page.locator('img').evaluateAll(imgs=>imgs.every(i=>i.complete&&i.naturalWidth>0)),'Broken images');
    await page.setViewportSize({width:390,height:844});
    for(let i=0;i<ids.length;i++){
      await page.keyboard.press('Home');for(let j=0;j<i;j++)await page.keyboard.press('ArrowRight');
      check(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2),'Mobile horizontal overflow '+ids[i]);
      const active=page.locator('.slide.active');
      check(await active.evaluate(e=>e.scrollWidth<=e.clientWidth+2),'Mobile content overflow '+ids[i]);
      await page.screenshot({path:path.join(output,`mobile-${i+1}.png`),fullPage:true});
    }
    await page.emulateMedia({media:'print'});
    check(await page.locator('.slide').evaluateAll(s=>s.every(e=>getComputedStyle(e).display!=='none')),'Print includes all slides');
    check(await page.locator('.print-detail').evaluateAll(s=>s.every(e=>getComputedStyle(e).display!=='none')),'Print includes details');
    check(!await page.locator('.controls').isVisible(),'Print hides controls');
    check(external.length===0,'External requests: '+external.join(', '));
    fs.writeFileSync(path.join(output,'result.json'),JSON.stringify({input:path.resolve(input),pages:ids.length,viewports:['1280x720','390x844'],failures,external,scope:'Runtime and geometry checks; manual visual/content review required'},null,2));
    console.log(JSON.stringify({pages:ids.length,failures,output},null,2));
    process.exitCode=failures.length?1:0;
  } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
