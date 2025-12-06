# GitHub Repo Visibility Color

A simple browser extension that colors repository visibility badges on GitHub.

## Features

- **Public repositories**: Green border and text
- **Private repositories**: Red border and text
- **Real-time updates**: Automatically applies styles when navigating between GitHub pages without requiring a page refresh

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
