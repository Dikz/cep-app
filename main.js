const { app, BrowserWindow  } = require('electron')

let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({
		title: 'CEP App',
		width: 600,
		height: 600,
		show: false,
		webPreferences: {
			nodeIntegration: true
		}
	})

	mainWindow.loadFile('index.html')
	mainWindow.on('ready-to-show', mainWindow.show)
	mainWindow.on('closed', () => (mainWindow = null))
}

app.on('ready', createWindow)
