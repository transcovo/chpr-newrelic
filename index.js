'use strict';
if (process.env.NEW_RELIC_ENABLED === 'true') {
  if (!process.env.NEW_RELIC_LICENSE_KEY) {
    throw new Error('Inconsistent configuration: New Relic enabled but no licence key defined');
  }
  process.env.NEW_RELIC_HOME = __dirname;
  require('newrelic');
}
