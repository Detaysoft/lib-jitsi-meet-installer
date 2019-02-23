const fs = require('fs');
const path = require('path');
// const rimraf = require('rimraf');

fs.copyFileSync(path.join(__dirname, 'dist', 'lib-jitsi-meet.min.js'), path.join(__dirname, 'lib-jitsi-meet.min.js'));

// removed for being slow.
// rimraf(path.join(__dirname, 'dist'), () => {});
