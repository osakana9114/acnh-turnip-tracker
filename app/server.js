const http = require('http');
const https = require('https');
const httpProxy = require('http-proxy');
const { parse } = require('url');
const next = require('next');
const { readFileSync } = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = +process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || '0.0.0.0';

const httpsOptions =
  process.env.HTTPS_KEY && process.env.HTTPS_CERT
    ? {
        key: readFileSync(process.env.HTTPS_KEY),
        cert: readFileSync(process.env.HTTPS_CERT),
      }
    : undefined;

app.prepare().then(() => {
  // プロキシ設定 httpsでないとつながらない
  const apiHeaders = {
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Expose-Headers': '*',
    'Content-Encoding': 'br',
    'Content-Type': 'application/json',
  };
  const proxy = httpProxy.createProxyServer({
    ssl: httpsOptions,
    // target: 'http://localhost:8888',
    target: process.env.NEXT_PUBLIC_TURNIP_API,
    changeOrigin: true,
    secure: httpsOptions ? true : false,
  });
  // proxy.listen(8081); // 別ポートでプロキシを起動
  proxy.on('proxyReq', function (proxyReq, req, res, options) {
    res.writeHead(200, apiHeaders);
  });
  proxy.on('error', function (err, req, res) {
    console.error('Proxy error:', err);
    res.statusCode = 500;
    res.end();
  });

  (httpsOptions ? https : http)
    .createServer(httpsOptions, (req, res) => {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      const isData = pathname.match(/^\/data\//g);
      const isTurnipApi = pathname.match(/^\/api\/turnip\-calculator\//g);
      if (isData) {
        proxy.web(req, res); // プロキシ
        // } else if (pathname === '/apple-touch-icon.png') {
        //   // (テスト) iPhone用アイコンをリダイレクトさせてみる
        //   handle(req, res, { ...parsedUrl, pathname: '/img/ico_152x152.png' });
      } else if (isTurnipApi) {
        // (仮) /api/turnip-calculator/ にアクセスしたら /data/ へリダイレクト
        res.writeHead(302, { Location: '/data/' + parsedUrl.search });
        res.end();
      } else {
        handle(req, res, parsedUrl); // 通常
      }
    })
    .listen(port, hostname, err => {
      if (err) throw err;
      console.log(`> Ready on https://${hostname}:${port}`);
    });
});
