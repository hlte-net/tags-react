# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- Build: `npm run build` - Create production-ready build
- Dev server: `npm start` - Run development server
- Tests: `npm test` - Run all tests
- Single test: `npm test -- -t "test name"` - Run specific test

## Code Style
- Use functional components with hooks
- Follow existing import order: React, libraries, local modules
- Use styled-components for styling, reference theme variables
- Follow existing component pattern of destructuring props
- Maintain flat modern design with pastel colors (blues, yellows, greens)
- Use error states + descriptive messages for error handling
- Follow naming conventions:
  - PascalCase for components: `TagSection`
  - camelCase for functions/variables: `formatTimestamp`
  - Descriptive semantic names
- Keep thin, crisp lines in UI components
- Maintain consistent typography with Inter font
- Ensure mobile responsiveness in all components