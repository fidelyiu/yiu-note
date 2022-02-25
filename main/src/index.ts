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

app.whenReady().then(() => {
    createWindow();
    app.on("activate", function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on("window-all-closed", function () {
    if (process.platform !== "darwin") app.quit();
});

if (process.env.NODE_ENV === "development") {
    console.log("mode: development");
} else if (process.env.NODE_ENV === "production") {
    console.log("mode: production");
} else {
    console.log("mode: undefined");
}
