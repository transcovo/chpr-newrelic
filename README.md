# chpr-newrelic

## Purpose of this library

The purpose of this library is to make a consistent integration of newrelic
in all node apps as simple as possible, and to have to modify all the projects
as rarely as possible.

This library is here to centralize the configuration of newrelic instead of
duplicating it across all node applications

## Configuration

Your app must have these environment variables defined to use this library

**NEW_RELIC_ENABLED**: `"true"` or `"false"` (default `"false"`). Defines whether
newrelic should be used or not. If set to `"false"`, newrelic won't be
loaded at all.

**NEW_RELIC_LICENSE_KEY**: The licence key to use with newrelic.

**NEW_RELIC_APP_NAME**: The application name in newrelic

Don't use any other newrelic configuration variables

## Use

Insert this line at the very top of the entry point of the process.

    require('chpr-newrelic');

Don't put a newrelic.js file in your project

## Note on testing

When making changing on this library testing is not trivial, as this project
is only plumbing between your app and newrelic.

You will need to:
- push your changes on a branch
- make changes in an app to use the branch
- deploy those changes in a testing environment
- generate load on the app
- check if everything works well

But it's ok because this project won't change a lot.
