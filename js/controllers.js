function WineListCtrl($scope,Wine,$rootScope) {
    $scope.default_pic = "generic.jpg";
    // Managing in-memory array so don't reset it if the JSON has already been retrieved initially
    if (!$rootScope.wines)
        Wine.query(function (response) { if (response!=null) { $rootScope.wines=response}});
}

function WineDetailCtrl($scope, $routeParams) {
    function filterById(wines, id){return wines.filter(function(wines) {return (wines['_id'] == id);})[0];}
    // Get the selected wine from the array of wines and it will bind to that data automatically
    $scope.wine = filterById($scope.wines, $routeParams.wineId);

    $scope.deleteWine = function () {
        // Remove the selected wine from the array of wines
        $scope.wines.splice($scope.wines.indexOf($scope.wine),1);
    }
}

function WineAddCtrl($scope, $rootScope, Wine) {
    // They may hit add before browsing the list, need to retrieve from JSON if that's the case
    if (!$rootScope.wines)
        Wine.query(function (response) { if (response!=null) { $rootScope.wines=response}});

    $scope.saveWine = function () {
        $scope.wine._id = $rootScope.wines.length+1;
        // Add the wine to the list of wines
        $rootScope.wines.push($scope.wine);
    }
}
