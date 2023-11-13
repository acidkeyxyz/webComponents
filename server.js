const express = require('express');
const cors = require('cors');
const path = require('path');

// create a express server with cors disabled
const port = 8080;
const server = express();

server.use(cors());
// serve static files from the current directory
server.use(express.static('.'));
// serve the index.html file
server.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'lib/index.html'));
});
// resolve all components from the lib directory
server.get('components/*', (req, res) => {
	const targetPath = 'lib/' + req.url;
	console.log('GET', req.url, '->', targetPath);
	res.sendFile(path.resolve(__dirname, targetPath));
});

// start the server
server.listen(port, () => {
	console.log(`Server started at http://localhost:${port}/`);
});

function shutdown(signal) {
	server.close();
}

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGHUP', () => shutdown('SIGHUP'));
