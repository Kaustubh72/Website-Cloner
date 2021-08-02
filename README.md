# How to Use
1. Download the repository and Extract the files.
2. Open Command Prompt and change directory to the repository files (where *index.js* file is present)
3.  Type these Commands <br>
  ``` npm install```<br>
  ``` npm start```
4. Open your browser and browse to http://localhost:3000/
5. Give website address which you want to clone
6. Read the Instructions and Hit Clone.

## How it works
It starts Chromium in headless mode which just opens page and waits until page is loaded.
It is far from ideal because probably you need to wait until some resource is loaded or click some button or log in. Currently this module doesn't support such functionality.

### Steps
1. Creates a browser instance and opens browser in headless mode (that means it will run browser processes in the background)
2. Loads URL into the browser
3. Parse the HTML content in the browser
4. Saves the parsed content in Local Storage.

## Pupetter Pyramid
![](https://chercher.tech/images/puppeteer/puppeteer-pyramid-architecture-nodejs-chrome-edge.png)

## Keywords
```Puppeteer, NodeJS, Server-Side Rendering, Parsing, Cloning ```
