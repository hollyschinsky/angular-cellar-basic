'use strict';

myApp.directive('showAlert', function(){
    return function (scope, element, attrs){
        scope.$watch("showFlag",  function(newValue, oldValue){
            console.log(newValue);
            if (newValue) {
                element.removeClass("hide");
                element.addClass("show");
            }
            else {
                element.removeClass("show");
                element.addClass("hide");
            }
        }, true);
    }
});