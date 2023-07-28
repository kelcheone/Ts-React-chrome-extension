# React + TypeScript Chrome Extension Starter Kit (template)
This is a starter kit for building a Chrome extension using React and TypeScript. It uses [Webpack](https://webpack.js.org/) for bundling and can be used as a starting point for building your own Chrome extension.

## Getting Started
1. Create a new repository using this template
2. Run `yarn install` to install dependencies
3. Run `yarn build` to build the extension
4. Open Chrome and navigate to `chrome://extensions`
5. Enable developer mode
6. Click "Load unpacked" and select the `dist` folder in the project directory
7. The extension should now be loaded and visible in Chrome

## Development
Run `yarn start` to start a Webpack watch process. This will automatically rebuild the extension when changes are made. You can then load the extension in Chrome as described above.


## Folder Structure
- `src`: Contains the source code for the extension
- `src/background`: Contains the source code for the background script
- `src/contentScript`: Contains the source code for the content script
- `src/popup`: Contains the source code for the popup
- `src/static`: Contains static assets(`manifest.json` and images) that will be copied to the `dist` folder

## Note
Remember to change the `name` and `description` fields in `src/static/manifest.json` to match your extension.
Also in `webpack.common.js` change the `title` field in the `getHTMLPlugins` function to match your extension.