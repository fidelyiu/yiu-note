import electron = require("electron");
import path = require("path");
import { jsAdapter } from "./utils/file";

const { app, BrowserWindow } = electron;

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, jsAdapter("/preload/index.ts")),
        },
    });
    win.loadFile("../dist-render/index.html");
    win.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow();
    app.on("activate", function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on("window-all-closed", function () {
    if (process.platform !== "darwin") app.quit();
});
