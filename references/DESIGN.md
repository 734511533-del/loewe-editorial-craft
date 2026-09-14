---
version: alpha
name: LOEWE-editorial-craft
description: 罗意威 180 周年「杂志×书店×工艺奖」视觉系统拆解——源自三组真实素材：白色 Amazona 手袋产品硬照、naive 理想国书店联乘橱窗、LOEWE Foundation Craft Prize 静物。性格词：**手作拼贴型编辑视觉**。暖纸画布为正文主场，深茄紫绒为负空间封面/数据页主场；红蓝双电压（朱砂红手写 + anagram 蓝大字标）一页只响一声；拼贴元素（吊牌、撕边、小兽、静物组、微旋转）替代阴影与圆角成为层级语言。

colors:
  vermilion: "#C61D2E"
  vermilion-deep: "#9E1B26"
  lacquer-red: "#B0202A"
  anagram-blue: "#2FB4E7"
  anagram-blue-soft: "#5C9DBE"
  paper: "#EDE5DE"
  paper-soft: "#F4EEE7"
  velvet: "#2B2139"
  velvet-deep: "#221A2F"
  blush: "#F0D9DE"
  ink: "#1E1B19"
  ink-on-velvet: "#F2EDE6"
  body: "#4A4440"
  body-on-velvet: "#B9AEC6"
  muted: "#8A8078"
  muted-on-velvet: "#7A6E8C"
  rattan: "#9D6335"
  terracotta: "#8F4633"
  glass-grey: "#93A4AE"

typography:
  anagram-display:
    fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif"
    fontWeight: 500
    textTransform: uppercase
    letterSpacing: 0.14em
    note: 蓝色大字标专用；词内断字（LO·EWE 式），封面 ≤92px 偏置不居中
  serif-title:
    fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif"
    fontWeight: 500
    lineHeight: 1.25
    note: 页标题、卡片标题、数据巨数；weight 500 封顶，大字不加粗
  hand-red:
    fontFamily: "'Caveat', 'Ma Shan Zheng', cursive"
    fontWeight: 700
    textTransform: uppercase
    letterSpacing: 0.18em
    color: "{colors.vermilion}"
    note: 手写红字；只写情绪不写信息，一页一处，≤3° 微斜
  label-caps:
    fontFamily: "'Space Grotesk', 'PingFang SC', sans-serif"
    fontWeight: 600
    fontSize: 13px
    letterSpacing: 0.23em
    textTransform: uppercase
    note: kicker 栏目眉，朱砂红
  mono-cap:
    fontFamily: "'Space Mono', monospace"
    fontSize: 12px
    letterSpacing: 0.08em
    note: 刊务声部：编号、出处、页码、图表标签
  body-text:
    fontFamily: "'Space Grotesk', 'PingFang SC', sans-serif"
    fontWeight: 400
    fontSize: 16px
    lineHeight: 1.65
    note: 正文；下限 18px 的例外仅限 mono-cap 刊务行

components:
  hang-tag:
    note: 实底吊牌——主题色实底 + 纸色 mono 文字 + 金属环孔；承载关键词与详情锚点，可 zoomable
  torn:
    note: 撕边纸签——clip-path 撕纸边，骑缝压叠在色版边缘，承载数据标签
  collage-card:
    note: 色纸块骑缝卡——内容卡的法定形态，色纸影错位 3-4px，无描边
  still-life:
    note: 静物组——漆红/陶土/藤色方块与圆点，摆位在页面边缘探出，是色彩的非文字出口
  mascot:
    note: 红色剪影小兽——一页至多一只，无描边无渐变，收尾或爬轴用
  stat-giant:
    note: 数据巨数——衬线 90px+，配手写批注与 mono 出处，称「数字偈」
  ribbon:
    note: 页脚进度带——mono 页码左、栏目名右

---

## Overview

LOEWE Editorial Craft 是一套手作拼贴型编辑视觉系统。全部语法来自三组真实素材：深茄紫产品硬照、米白书店橱窗、樱花粉工艺奖静物。红蓝双电压（朱砂红手写 × anagram 蓝大字标）是唯一的强调系统，一页一主一辅，永不同时抢戏。

层级不用阴影——用纸张的叠压、错位实色影（3-4px）、撕边、静物探边表达前后关系。全部内容载具水平放置（rotate 0），材质感来自纸/绒/漆/藤的真实质感，不来自倾斜。

## 硬禁令（Don't，违反即返工）

- **禁止细线装饰成分**：卡片描边、骑细彩条、行分隔线、中缝虚线、虚线网格、双细规线——分隔交给留白、色块明度差、字级差
- **禁止同质卡片复读**：「mono 小标+大字+一行说明」同骨架排排坐是 AI 舒适区；清单用编号式编辑排版，对比用明暗双版尺度差，时间轴用缎带轴+数字节点
- **禁止内容载具旋转**：色版、卡片、吊牌、纸签、静物一律 rotate(0)。仅手写批注与小兽 ≤3° 例外
- 禁止纯白 #FFFFFF 画布、纯黑 #000000 文字——暖调是体温
- 禁止阴影层级系统；唯一允许的伪影是 3-4px 错位实色剪纸影
- 禁止饼图、圆角卡片容器、玻璃拟态
- 禁止小兽加表情细节/描边/渐变；一页至多一只
- 禁止手写体写正文长句、禁止蓝色手写体——手写位只属于朱砂红
- 禁止渐变光效、霓虹、毛玻璃彩色蒙层
- 封面蓝色大标克制使用（≤92px，偏置不居中），深茄紫负空间是主角

## 页面骨架（12 页型）

| 页型 | 构成 |
|---|---|
| 封面 | 紫绒负空间 + 蓝色 anagram 大标偏置 + 静物组 + 手写批注 |
| 目录 | 编辑式目录行，色块短线 + 序号，可跳页 |
| 章节页 | 大字 + 静物 + 小兽 |
| 正文图文 | 压叠图版：色版叠色版，文字块压边探出，撕边纸签骑缝 |
| 清单页 | 编号式编辑清单（大衬线序号），唯一红块时刻 |
| 巨数页 | 数字偈：巨数 + 手写批注 + mono 出处 |
| 图表页 | 分组柱状 + 折线，无网格无轴线，柱即色票 |
| 对比页 | 明暗双版：紫绒大版本品 vs 米色小版旧款，大小即结论 |
| 时间轴 | 横向缎带轴 + 年份数字节点 + 小兽爬轴 + 实底发布块 |
| 金句页 | 一句居中 + 手写 + 落款 |
| 封底 | 紫绒 + 静物 + 刊号 |

## 交互三件套

- ← → 翻页（回弹曲线 cubic-bezier(.32,.72,0,1)）
- 目录行点击跳页（data-goto）
- .zoomable 卡片点开克隆放大、点任意处还原（data-extra 承载展开详情）
