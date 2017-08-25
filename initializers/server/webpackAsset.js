import {isArray} from 'lodash/lang';
import {find} from 'lodash/collection';

let assetPath;

const findAssetInManifest = (manifest, asset, extension) => (
  isArray(manifest[asset]) ?
    find(manifest[asset], a => (a.endsWith(extension))) :
    manifest[asset]
);

if(__DEVELOPMENT__){
  assetPath = (asset, extension) => (
    `assets/${asset}.${extension}`
  )
}else{
  const fs = require('fs');
  const path = require('path');

  const manifestPath = path.join(process.cwd(), 'webpack-manifest.json');
  const fd = fs.openSync(manifestPath, "r+");
  const manifest = JSON.parse(fs.readFileSync(fd, 'utf8'));
  fs.closeSync(fd);

  assetPath = (asset, extension) => (
    `assets/${findAssetInManifest(manifest, asset, extension)}`
  );
}

export default assetPath;