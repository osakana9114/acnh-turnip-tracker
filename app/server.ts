const http = require('http');
const https = require('https');
const httpProxy = require('http-proxy');
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
  const proxy = httpProxy.createProxyServer({
    ssl: httpsOptions,
    target: process.env.NEXT_PUBLIC_TURNIP_API,
    changeOrigin: true,
    secure: httpsOptions ? true : false,
  });
  // proxy.listen(8081); // 別ポートでプロキシを起動
  proxy.on('proxyReq', function (proxyReq, req, res, options) {
    res.writeHead(200, {
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Expose-Headers': '*',
      'Content-Encoding': 'br',
      'Content-Type': 'application/json',
    });
  });
  proxy.on('error', function (err, req, res) {
    console.error('Proxy error:', err);
    res.statusCode = 500;
    res.end();
  });

  const server = (httpsOptions ? https : http).createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    const isApi = pathname.match(/^\/data\//g);
    if (isApi) {
      proxy.web(req, res); // プロキシ
    } else {
      handle(req, res, parsedUrl); // 通常
    }
  });

  server.listen(port, hostname, err => {
    if (err) throw err;
    console.log(`> Ready on https://${hostname}:${port}`);
  });
});
