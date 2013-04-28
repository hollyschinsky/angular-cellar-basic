'use strict';

myApp.factory('Wine', function($resource){
    return $resource('wines/wines.json', {}, {
        query: {method:'GET', params:{phoneId:'wines'}, isArray:true}
    });
});
