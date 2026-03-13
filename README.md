# GRBC - GitHub Repo Badge Color

A simple browser extension that adds colors to GitHub repository badges.

## Features

- **Public repositories**: Green border and text
- **Private repositories**: Red border and text
- **Public template repositories**: Cornflower blue border and text
- **Instant updates**: Uses `requestAnimationFrame` and a MutationObserver to apply styles instantly when navigating GitHub, without any visual delay.

## Installation

1. Clone or download this extension to your computer
2. Open `chrome://extensions/` in Google Chrome
3. Enable **Developer mode** (toggle in top-right corner)
4. Click **Load unpacked** and select this extension folder
5. The extension is now active on `github.com`

## Files

- `manifest.json` - Extension configuration
- `content.js` - Main script that applies styles to visibility badges

## How it works

The extension uses a MutationObserver to detect DOM changes on GitHub pages and automatically applies custom styles to visibility badges without requiring a page refresh.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
