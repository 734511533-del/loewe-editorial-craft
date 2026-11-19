# LOEWE Editorial Craft

An agent skill for editorial-collage HTML presentations inspired by LOEWE. It keeps warm paper, deep purple, red/blue accents and editorial typography while adapting page count and composition to the content. It is not an official LOEWE tool.

[中文使用说明](README.zh-CN.md)

Copy this folder into an agent's skills directory, preserving its structure. Ask for an editorial-collage presentation and supply the audience, material and desired format. The default output is a standalone offline HTML file. Native editable PowerPoint requires a separate presentation tool and validation.

The six-page `assets/sample-deck.html` is a working runtime and example, not a mandatory outline. It includes keyboard and button navigation, ID-based TOC links, supplementary dialogs, narrow-screen reading and print styles. Example metrics are explicitly simulated. No external fonts, scripts or images are required.

Read `SKILL.md` for the workflow and `references/validation.md` for verification. `scripts/check-deck.cjs` uses Playwright and Chromium to check runtime behavior and capture screenshots. Content and visual review remain necessary.

The original README stated MIT but the repository did not include a LICENSE file. This revision records that gap without inventing a copyright holder. Third-party brand assets are not included or licensed by this package.
