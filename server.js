const next = require('next');

const http = require("http");

const url = require('url');

const path = require('path');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({dev});
const handle = app.getRequestHandler();


app.prepare().then(() => {
  http
    .createServer((req, res) => {
      const ParsedUrl = url.parse(req.url, true);
      const { pathname } = parsedUrl;
      if (pathname === "/service-worker.js") {
        const filepath = path.join(__dirname, ".next", pathname);
        app.serveStatic(req, res, filepath);
      } else {
        handle(req, res, parsedUrl);
      }
    })
    .listen(port, () => {
      console.log(`listening on port ${port}`);
    });
});