function WineListCtrl($scope,WineService,$rootScope) {
    $scope.default_pic = "generic.jpg";
    // Managing in-memory array so don't reset it if the JSON has already been retrieved initially
    if (!$rootScope.wines)
        WineService.query(function (response) { if (response!=null) {$rootScope.wines=response}});
}

function WineDetailCtrl($scope, $routeParams) {
    $scope.showFlag = false;
    $scope.year = /^[0-9]{4,4}$/; //use for validation

    // Get the selected wine from the array of wines and it will bind to that data automatically
    function filterById(wines, id){return wines.filter(function(wines) {return (wines['_id'] == id);})[0];}
    $scope.wine = filterById($scope.wines, $routeParams.wineId);

    $scope.saveWine = function () {
        $scope.showFlag = true;
    }

    $scope.deleteWine = function (wine) {
        // Remove the selected wine from the array of wines
        $scope.wines.splice($scope.wines.indexOf(wine),1);
    }
}

function WineAddCtrl($scope, $rootScope, WineService) {
    $scope.showFlag = false;
    $scope.wine = [];
    $scope.wine.country = "USA";
    $scope.wine.region = "California";

    $scope.year = /^[0-9]{4,4}$/; //use for validation
    // They may click add before browsing the list, need to retrieve from JSON if that's the case
    if (!$rootScope.wines)
        WineService.query(function (response) { if (response!=null) {$rootScope.wines=response}});

    $scope.saveWine = function () {
        $scope.wine._id = $rootScope.wines.length+1;
        // Add the wine to the list of wines
        $rootScope.wines.push($scope.wine);
        $scope.showFlag = true;
    }

    $scope.deleteWine = function (wine) {
        // Remove the selected wine from the array of wines
        $scope.wines.splice($scope.wines.indexOf(wine),1);
    }
}
