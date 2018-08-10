import Raven from 'raven-js';
function init() {
  Raven.config('https://2a62cb24c5734a33b1b63c3235d26abf@sentry.io/1259844', {
    release: '0-0-0',
    environment: 'development-test',
  }).install();
}
function log(error) {
  Raven.captureException(error);
}

export default {
  init,
  log,
};
