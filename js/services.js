'use strict';

myApp.factory('Wine', function($resource){
    return $resource('wines/wines.json', {}, {
        query: {method:'GET', isArray:true}
    });
});
