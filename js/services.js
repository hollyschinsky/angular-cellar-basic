'use strict';

myApp.factory('WineService', function($resource){
    return $resource('wines/wines.json', {}, {
        query: {method:'GET', isArray:true}
    });
});
