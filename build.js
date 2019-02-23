const clone = require('git-clone');
const repo = 'https://github.com/jitsi/lib-jitsi-meet';

clone(repo, './dist');