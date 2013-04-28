function MainCtrl($scope, $window,$location) {
    $scope.addWine = function () {
        window.location.href = "#/wines/add";
        //$location.path("#/wines/add");
    };
}
MainCtrl.$inject = ['$scope', '$window','$location'];

function WineListCtrl($scope,Wine,$rootScope) {
    $scope.default_pic = "pics/generic.jpg";
    Wine.query(function (response) { if (response!=null) { $rootScope.wines=response}});
}

function WineDetailCtrl($scope, Wine, $routeParams, $location) {
    function filterById(wines, id){return wines.filter(function(wines) {return (wines['_id'] == id);})[0];}
    $scope.wine = filterById($scope.wines, $routeParams.wineId);
    $scope.saveWine = function () {
        if ($scope.wine._id!=null) {
            Wine.update({id:$scope.wine._id,wine:$scope.wine}, function (res) { if (res!=null) { $location.path("#wines")}});
        }
    }

    $scope.deleteWine = function () {
        Wine.delete({id:$scope.wine._id}, function (res) { if (res) { $location.path("#wines")}});
    }
}
WineDetailCtrl.$inject = ['$scope', 'Wine', '$routeParams','$location', '$resource'];

function WineAddCtrl($scope, Wine,$location,$resource) {
    $scope.saveWine = function () {
        $scope.wine._id = $scope.wines.length+1;
        $scope.wines.push($scope.wine);
        //Wine.save({}, $scope.wine, function (res) { if (res!=null) { $location.path("#/wines");}})
        $location.path("#/wines");
        console.log("New length " + $scope.wines.length);
    }
}
WineAddCtrl.$inject = ['$scope', 'Wine', '$location'];