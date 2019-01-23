ember-cli-leanplum
==============================================================================

Ember Cli wrapper for importing and configuring Leanplum SDK


Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-cli-leanplum
```


Usage
------------------------------------------------------------------------------

This plugin will setup Leanplum SDK and add call Leanplum.start() if the proper credentials
are set in your environment.

```javascript
// config/environment.js

leanplum: {
  appId: "LEANPLUM_APP_ID",
  apiKey: "LEANPLUM_API_KEY"
}
```

It will set Leanplum.setAppIdForDevelopmentMode if set the isDevelopmentMode to true.

```javascript
if (environment === 'development') {
  ENV.leanplum.isDevelopmentMode = true
  ...
}
```

You can pass variables to Leanplum by setting them in the config.

```javascript
ENV.leanplum.variables = {
  items: {
    color: 'red',
    size: 20,
    showBadges: true
  },
  showAds: true
}
```

Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-cli-leanplum`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
