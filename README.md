# LOEWE Editorial Craft

An agent skill that generates hand-crafted, collage-editorial HTML slide decks — inspired by LOEWE's 180th-anniversary publication visuals.

**中文文档 → [README.zh-CN.md](README.zh-CN.md)**

**Visual grammar:** red/blue dual voltage (vermilion × anagram blue), warm paper canvas, deep velvet negative space, torn-edge paper slips, hang tags, color-paper blocks, still-life objects, handwritten annotations. No thin-line decoration, no repeated card skeletons, no rotated content.

**Output:** a single-file horizontal-swipe HTML deck with keyboard navigation, TOC jump-to-page, and tap-to-zoom cards.

## When to use it

This skill is built for **high-value communication** — the decks you ship when the room matters:

- **Creative proposals & pitches** — client-facing creative work where the deck itself is part of the craft on display
- **Internal & external sharing** — team reviews, leadership readouts, cross-functional alignment decks that need to feel considered, not templated
- **Frontend / design walkthroughs** — presenting web or product work with a deck that matches the polish of the thing you're showing
- **Self-media & content** — newsletter visuals, social carousels, personal-brand decks that need a distinct editorial voice

The system is deliberately opinionated: warm paper, velvet negative space, red/blue dual voltage, collage-native layering. It reads as *made*, not *generated*.

## Contents

- `SKILL.md` — skill entry: generation workflow, hard rules, extension freedom
- `references/DESIGN.md` — full design spec (colors, type, components, Do/Don't)
- `references/text-discipline.md` — ten text-discipline rules shared across decks
- `references/origin-story.md` — how the source material was distilled into this system
- `assets/sample-deck.html` — a reference deck (double-click to browse)

## Usage

Install the `.skill` package into your agent environment, or copy this folder into your skills directory. Then ask your agent to "make a deck in the LOEWE editorial-craft style".

## License

MIT
