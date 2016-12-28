'use strict';
if (process.env.NEW_RELIC_ENABLED === 'true') {
  process.env.NEW_RELIC_HOME = __dirname;
  require('newrelic');
}
