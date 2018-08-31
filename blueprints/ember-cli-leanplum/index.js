'use strict';

module.exports = {
  normalizeEntityName: function () { },

  afterInstall: function () {
    return this.addPackagesToProject([
      { name: 'leanplum-sdk', target: '^1.3.0' }
    ]);
  }
};
