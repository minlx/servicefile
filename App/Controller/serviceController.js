app.controller('serviceController', ["$scope", "$interval", "serviceServer", function ($scope, $interval, serviceServer) {
    serviceServer.getProduct().then(function (result) {
        $scope.items = result;
    })
    $scope.loadMore = function () {
        var obj = {
            "titleBig": "猜你喜欢",
            "arr": [
                {
                    "img": "Content/img/img_12.jpg",
                    "title": "一汽大众-全新旅途L",
                    "des": "一汽大众-全新旅途L享2年0利率",
                    "price": "1元",
                    "originalPrice": "1.44万"
                },
                {
                    "img": "Content/img/img_13.jpg",
                    "title": "一汽大众-全新旅途L",
                    "des": "一汽大众-全新旅途L享2年0利率",
                    "price": "1元",
                    "originalPrice": "1.44万"
                }
            ]
        }
        $scope.items.push(obj);
    }
    var nowTime = +new Date();
    var expirationDate = +new Date(2017, 10, 22);
    $scope.nTime = expirationDate - nowTime;
    $interval(function () {
        $scope.nTime -= 1000;
    }, 1000)

}]);