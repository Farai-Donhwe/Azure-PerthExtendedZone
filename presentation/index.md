---
title: Presentation
layout: default
nav_order: 5
permalink: /presentation/
---

# Perth Extended Zone — SpecDev Presentation

This presentation deck provides a stakeholder-ready overview of the Perth Extended Zone Customer Playbook.

## Viewing the Presentation

### Option 1: Marp CLI (recommended)
```bash
npx @marp-team/marp-cli presentation/deck.md --html --output presentation/deck.html
```

### Option 2: VS Code
Install the [Marp for VS Code](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode) extension, then open `presentation/deck.md` and use the preview pane.

### Option 3: View the Markdown
The slide content is below in the [deck source](deck.md).

---

{% raw %}
{% include_relative deck.md %}
{% endraw %}
