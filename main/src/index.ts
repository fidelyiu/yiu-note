import electron = require("electron");
import path = require("path");

const { app, BrowserWindow } = electron;

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload/index.js"),
        },
    });
    win.loadFile("../dist-render/index.html");
    win.webContents.openDevTools();
}

app.on("window-all-closed", function () {
    if (process.platform !== "darwin") app.quit();
});

app.whenReady().then(() => {
    createWindow();
    app.on("activate", function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});
