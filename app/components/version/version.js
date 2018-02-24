'use strict';

angular.module('pdhp.version', [
  'pdhp.version.interpolate-filter',
  'pdhp.version.version-directive'
])

.value('version', '0.1');
