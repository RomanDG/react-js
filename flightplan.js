let plan = require('flightplan');

let tempDir = `blog-client-${new Date().getTime()}`;
let user = 'react';

plan.target('production', {
  host: '0.0.0.0',
  username: 'user',
  agent: process.env.SSH_AUTH_SOCK
});

plan.local((local) => {
  local.log('Copy files ot remote host');
  let filesToCopy = local.exec('git ls-files', {silent: true});
  local.transfer(fileToCopy, '/tmp/', tempDir);
});

plan.remote((remote) => {
  remote.exec('nvm use default');
  remote.log('move folder to web root');
  remote.exec('cp -R /tmp/'  + tempDir + ' ~');
  remote.rm('-rf /tmp/' + tempDir);

  remote.log('install dependencies');
  remote.exec('npm --prefix ~/' + tempDir + ' install ~' + tempDir);

  remote.log('build');
  remote.exec('npm --prefix ~/' + tempDir + ' run build');

  remote.log('reload application');
  remote.exec('ln -snf ~/' + tempDir + ' ~/current');
  remote.exec('(cd ~/current && pm2 restart pm2.config.js --env production)');

  remote.log('testing');
  remote.exec('npm run test');

  remote.log('done :)')
})