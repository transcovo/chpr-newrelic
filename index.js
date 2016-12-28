'use strict';
if (process.env.NEW_RELIC_ENABLED !== 'false') {
  process.env.NEW_RELIC_HOME = __dirname;
  require('newrelic');
}
