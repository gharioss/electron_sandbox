// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld('electronAPI', {
    ping: () => ipcRenderer.invoke('ping')
})

contextBridge.exposeInMainWorld('electronTest', {
    setTitle: (title) => ipcRenderer.send('set-title', title)
  })