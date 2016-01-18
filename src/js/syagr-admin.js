require('es6-promise').polyfill(); // for IE

require('ng-admin/src/javascripts/ng-admin/Main/MainModule');
require('ng-admin/src/javascripts/ng-admin/Crud/CrudModule');

import CustomFactory from './syagr-admin/lib/CustomFactory';


var factory = angular.module('AdminDescriptionModule', []);
factory.constant('AdminDescription', new CustomFactory());

var ngadmin = angular.module('ng-admin', ['ui.select', 'main', 'crud', 'AdminDescriptionModule']);
ngadmin.config(function(NgAdminConfigurationProvider, AdminDescription) {
    NgAdminConfigurationProvider.setAdminDescription(AdminDescription);
});

ngadmin.config(function(uiSelectConfig) {
    uiSelectConfig.theme = 'bootstrap';
});
