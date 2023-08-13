// main.js
const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 780,
    height: 705,
    webPreferences: {
      nodeIntegration: true // Allow Node.js integration in the renderer process
    }
  });

  mainWindow.loadFile('index.html'); // Load the HTML file for your app

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});