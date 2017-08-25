require('babel-register');

let fs = require('fs');
let webpack = require('webpack');

let config = require('./production.js').default;

webpack(config, (_error, stats) => {
  let manifest = stats.toJson().assetsByChunkName;
  let file = "webpack-manifest.json";
  let fd = fs.openSync(file, "w+");
  fs.writeFileSync(fd, JSON.stringify(manifest));
  fs.closeSync(fd);
})