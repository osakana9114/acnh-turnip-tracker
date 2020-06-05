const http = require('http');
const https = require('https');
const { parse } = require('url');
const next = require('next');
const { readFileSync } = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || '0.0.0.0';

const httpsOptions =
  process.env.HTTPS_KEY && process.env.HTTPS_CERT
    ? {
        key: readFileSync(process.env.HTTPS_KEY),
        cert: readFileSync(process.env.HTTPS_CERT),
      }
    : undefined;

app.prepare().then(() => {
  (httpsOptions ? https : http)
    .createServer(httpsOptions, (req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    })
    .listen(port, hostname, err => {
      if (err) throw err;
      console.log(`> Ready on https://${hostname}:${port}`);
    });
});
