# Create Chrome Extension v3

This npm package helps you create a new manifest v3 Chrome extension with a minimal boilerplate.

## Prerequisites

Before using this package, make sure you have [Node.js](https://nodejs.org/) and npm installed on your computer.

## Usage

To create a new Chrome extension project, run the following command in your terminal:

```bash
npx create-chrome-extension-v3 my-extension
```

Replace `my-extension` with your desired project name.

This command will create a new folder with the provided project name and populate it with the necessary boilerplate files for a manifest v3 Chrome extension.

## Project Structure

After running the command, your new Chrome extension project will have the following structure:

```
my-extension/
├── images/
│ ├── icon16.png
│ ├── icon48.png
│ └── icon128.png
├── background.js
├── content.js
├── manifest.json
├── options.html
├── options.js
├── popup.html
└── popup.js
```

## Development

To start developing your Chrome extension, follow these steps:

- Open the Chrome browser and navigate to chrome://extensions/.
- Enable "Developer mode" using the toggle in the top right corner.
- Click the "Load unpacked" button and select the folder containing your Chrome extension project (my-extension).
- Your new Chrome extension should now be loaded in the browser. You can click the extension icon in the toolbar to open the popup or right-click the icon to access the options page.

For more information on developing Chrome extensions, visit the official Chrome extension documentation. https://developer.chrome.com/docs/extensions/mv3/getstarted/

## License

MIT

## Author

Eric David Smith
https://ericdavidsmith.com
