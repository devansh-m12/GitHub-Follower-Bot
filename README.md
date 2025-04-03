# Follozy - GitHub Follower Bot

A Chrome extension that automatically follows GitHub users. Perfect for growing your network on GitHub!

![Follozy Logo](logo.png)

## Description

Follozy is a powerful Chrome extension that automates the process of following users on GitHub. The extension works by automatically clicking follow buttons when you browse GitHub users pages, helping you expand your network with minimal effort.

## Features

- Automatically follows users on GitHub user listing pages
- Navigates through pagination automatically
- Configurable speed settings
- Works on GitHub followers/following pages

## Installation

### Step 1: Download the Extension

1. Clone this repository or download it as a ZIP file
   ```
   git clone https://github.com/YOUR-USERNAME/follozy.git
   ```
   Or download the ZIP and extract it to your preferred location

2. **Important**: Make sure you have a "logo.png" file in your extension directory. This icon file is required for the extension to show properly in Chrome.

### Step 2: Load the Extension in Chrome

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" by toggling the switch in the top right corner
3. Click on "Load unpacked" button
4. Select the folder containing the extension files (the folder with manifest.json)
5. The extension is now installed and you should see the Follozy icon in your Chrome toolbar

## How to Use

1. Navigate to any GitHub page where user follow buttons are displayed:
   - GitHub Explore page
   - User followers/following pages (e.g., `https://github.com/USERNAME?tab=followers`)
   - Organization members page

2. Once you're on a page with follow buttons, the extension will automatically:
   - Click on "Follow" buttons for each user
   - Navigate to the next page when all users on the current page are processed
   - Continue the process until all pages are complete

3. The extension runs at a reasonable speed to avoid triggering GitHub's rate limits.

## How to Stop the Bot

There are several ways to stop the bot from running:

1. **Temporary Pause**:
   - Navigate away from the GitHub page
   - Refresh the current page to interrupt the process

2. **Disable the Extension**:
   - Click on the Extensions icon in Chrome toolbar (puzzle piece)
   - Find "Follozy - GitHub Follower Bot" and toggle it off

3. **Completely Remove**:
   - Go to `chrome://extensions/`
   - Find "Follozy - GitHub Follower Bot" and click "Remove"
   - Confirm removal

## Troubleshooting

- If the bot stops working, try refreshing the page and allowing it to start again
- Make sure you're on a GitHub page that contains follow buttons
- If you're being rate-limited by GitHub, wait a few hours before trying again
- If the extension icon is not displaying in Chrome:
  - Ensure you have a "logo.png" file in your extension directory
  - Verify that the file name in the manifest.json matches the actual icon file
  - Try removing and re-adding the extension if icons don't appear after reloading

## Caution

- Using automation tools may violate GitHub's terms of service
- Use this extension responsibly and at your own risk
- Consider adding delays between follows to avoid detection

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Disclaimer

This tool is for educational purposes only. The developers are not responsible for any misuse or for any violations of GitHub's terms of service that may result from using this extension.
