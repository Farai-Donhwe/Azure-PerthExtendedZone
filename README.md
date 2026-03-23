# Perth Extended Zone — Customer Playbook

A [Slidev](https://sli.dev)-powered presentation providing technical guidance for deploying workloads to the **Azure Perth Extended Zone**. Version 1.2.

## Contents

| Section | Description |
|---------|-------------|
| What are Azure Extended Zones? | Architecture overview and key scenarios |
| Perth Extended Zone | Why it matters for Western Australia |
| Deployment Scenarios | Standalone and Extension deployment patterns |
| Services, SLAs & ISVs | Available services, timelines, and partner solutions |
| Networking & Connectivity | Topologies, ExpressRoute, internet access |
| Business Continuity & DR | Availability, backup, and recovery |
| Security & Compliance | Security services and data residency |
| Design Considerations | Resource organisation, management, observability |
| Pricing & Key Decisions | Billing model and design recommendations |
| Competitive Positioning | Azure PEZ vs AWS Local Zones |

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (included with Node.js)

## Getting Started

```bash
# Clone the repository
git clone https://github.com/DonFarCreative/Perth-Extended-Zone.git
cd Perth-Extended-Zone/presentation

# Install dependencies
npm install

# Start the dev server (opens in browser at http://localhost:3030)
npm run dev
```

## Available Scripts

Run these from the `presentation/` directory:

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Slidev dev server with hot-reload |
| `npm run build` | Build the presentation as a static SPA |
| `npm run export` | Export the slides to PDF |

## Project Structure

```
Perth-Extended-Zone/
├── presentation/
│   ├── slides.md              # Main slide deck (Slidev markdown)
│   ├── components/            # Custom Vue components used in slides
│   │   ├── OverviewDiagram.vue    # Azure Extended Zone architecture diagram
│   │   ├── DeployStandalone.vue   # Standalone deployment scenario diagram
│   │   ├── DeployExtension.vue    # Extension deployment scenario diagram
│   │   └── VersionBadge.vue       # Version badge component
│   ├── public/
│   │   ├── favicon.svg        # Azure favicon
│   │   └── images/            # Slide images extracted from source document
│   ├── theme/                 # Custom Slidev theme
│   │   ├── layouts/
│   │   ├── style.css
│   │   └── setup/
│   └── package.json
├── docs/                      # Supporting documentation
│   ├── overview/
│   ├── design-considerations/
│   ├── appendix/
│   └── use-cases.md
└── src document/              # Original source document (Word)
```

## Deploying as a Static Site

Build the presentation into a static SPA that can be hosted on any web server or GitHub Pages:

```bash
cd presentation
npm run build
```

The output is written to `presentation/dist/`. Deploy this folder to your hosting platform.

### GitHub Pages

The build script is preconfigured with `--base /Perth-Extended-Zone/presentation/dist/` for GitHub Pages. To deploy:

1. Push the built `dist/` folder to the `gh-pages` branch, or
2. Configure GitHub Pages to serve from the appropriate directory in repository settings.

### Azure Static Web Apps

```bash
# Install the Azure SWA CLI
npm install -g @azure/static-web-apps-cli

# Build and deploy
cd presentation
npm run build
swa deploy dist/ --deployment-token <YOUR_TOKEN>
```

## Exporting to PDF

```bash
cd presentation
npm run export
```

This generates a PDF file in the `presentation/` directory. Requires [Playwright](https://playwright.dev/) (installed automatically on first export).

## Presenter Mode

While the dev server is running, press **P** or navigate to `http://localhost:3030/presenter` to open presenter mode with speaker notes and slide previews.

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `→` / `Space` | Next slide |
| `←` | Previous slide |
| `O` | Slides overview |
| `D` | Toggle dark mode |
| `P` | Presenter mode |
| `F` | Fullscreen |

## License

ISC
