# ICCV 2025 FOUND Workshop

FOUND (Foundation Data for Industrial Tech Transfer) is the public-facing website for the ICCV 2025 workshop dedicated to creating, curating, and deploying foundation-scale datasets that unlock reliable tech transfer into production environments. This repository contains the source for the event site, including the program, organizer roster, sponsor information, and contact points.

## Overview

- Static-first React Router application rendered with Vite and TypeScript.
- Tailwind CSS theming with animated backgrounds and components built on Radix UI primitives.
- JSON-backed content in `src/data` keeps schedule, program, and sponsor details editable without touching component logic.
- Supporting workshop collateral—such as CFP drafts—is tracked under `documents/`.

## Quick Links

- [Slack WG](https://found-lmv4776.slack.com)

## Tech Stack

- React 19 with React Router 7 for routing and data loading.
- Vite 6 for local development, bundling, and build output.
- TypeScript 5.7 with ESLint and Prettier enforcing style and safety.
- Tailwind CSS 4, Radix UI, and custom components from `src/components`.

## Project Structure

```
.
src/
  app/          # Layout, routes, and entry points
  components/   # Reusable UI components
  data/         # JSON content for program, sponsors, etc.
  lib/          # Shared utilities such as metadata helpers
documents/      # Workshop documents (CFP, event collateral, etc.)
public/         # Static assets served as-is
scripts/        # Automation helpers
environments/   # Deployment configuration
```

## Getting Started

### Prerequisites

The `.tool-versions` file recommends:

- Node.js 24.1.0
- Yarn 1.22.x

### Installation

```bash
yarn install
```

### Local Development

```bash
yarn dev
```

The dev server runs with React Router's integrated tooling so you can preview changes with hot reloading.

### Production Build

```bash
yarn build
```

The production bundle is emitted to `build/`. To test the built output locally:

```bash
yarn start
```

This command serves `build/server/index.js` using `@react-router/serve`.

## Deployment

- GitHub Pages deployment is automated via `.github/workflows/deploy.yaml`.
- The workflow (`deploy-to-github-pages`) is manually triggered from the Actions tab (`workflow_dispatch`).
- Jobs spin up the Docker Compose stack defined in `environments/ci`, run `yarn lint`, and build the site inside the container.
- The generated static assets in `build/client/` are uploaded as the Pages artifact and released with `actions/deploy-pages@v4`.
- Successful runs publish to the `github-pages` environment and refresh the public site automatically.

## Assets Release

```bash
gh release create v2.0.0 \
  --title "ICCV 2025 FOUND Workshop Slides (v2.0.0)" \
  --notes "Full refresh." \
  FOUND2025_opening_v2.pdf \
  FOUND2025_posters_v2.pdf \
  FOUND2025_proceedings_v2.pdf \
  FOUND2025_report_v2.pdf
```

## Quality Checks

- `yarn lint` — ESLint with a zero-warning policy for `src`.
- `yarn lint:types` — Generates router types and runs TypeScript in `--noEmit` mode.
- `yarn format` — Applies ESLint fixes and Prettier formatting.

## Content Updates

- Update workshop copy, program slots, organizers, and sponsor details through the JSON files in `src/data/`.
- Add or adjust static assets (logos, images) in `public/`.
- Long-form documents for calls, sponsorship packages, or past events live under `documents/`.

## License

A license file has not been provided. Add an appropriate license before redistributing the site content or code.
