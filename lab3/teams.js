import http from 'http';

const PORT = 3000;
const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        const teams = teams.getALL