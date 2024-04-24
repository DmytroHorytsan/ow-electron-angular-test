// const { app, BrowserWindow } = require('electron')
// const url = require("url");
// const path = require("path");
//
// let mainWindow
//
// function createWindow() {
//   mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//
//     webPreferences: {
//       nodeIntegration: true
//     }
//   })
//
//   mainWindow.loadURL(
//     url.format({
//       pathname: path.join(`dist/electron-test/index.html`),
//       protocol: "file:",
//       slashes: true
//     })
//   );
//   // Open the DevTools.
//   mainWindow.webContents.openDevTools()
//
//   mainWindow.on('closed', function () {
//     mainWindow = null
//   })
// }
//
// app.on('ready', createWindow)
//
// app.on('window-all-closed', function () {
//   if (process.platform !== 'darwin') app.quit()
// })
//
// app.on('activate', function () {
//   if (mainWindow === null) createWindow()
// })

const { app, BrowserWindow } = require('electron');
const url = require("url");
const path = require("path");
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Load the Angular app
  // Assuming Angular app is served from localhost:4200
  // win.loadURL('http://localhost:4200');

  win.loadURL(
    url.format({
      pathname: path.join(`dist/electron-test/index.html`),
      protocol: "file:",
      slashes: true
    })
  );

  // Open the DevTools.
  win.webContents.openDevTools();
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
