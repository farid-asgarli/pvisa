const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const production = process.env.NODE_ENV === "production";
const port = process.env.PORT || 3000;
const app = next({ production });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
    console.clear();
    console.log(`\x1b[32m`, `> Production server is ready`);
    console.log(`\x1b[33m`, `> Available on http://localhost:${port}`);
  });
});

// Be sure to pass `true` as the second argument to `url.parse`.
// This tells it to parse the query portion of the URL.
