'use strict';

var path = require('path');
var fastbootTransform = require('fastboot-transform');

module.exports = {
  name: 'ember-cli-leanplum',

  included: function (app) {
    this._super.included.apply(this, arguments);
    var libPath = path.join('node_modules', 'leanplum-sdk', 'dist', 'leanplum.js');
    var importOptions = {
      using: [{
        transformation: 'fastbootTransform'
      }]
    };

    app.import(libPath, importOptions);
  },

  importTransforms: function () {
    return {
      fastbootTransform: fastbootTransform
    }
  }
};
