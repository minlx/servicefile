app.factory('serviceServer', ["ajaxServer", function (ajaxServer) {
    var serviceServer = {
        getProduct: function () {
            return ajaxServer.ajax("get", "http://localhost:8090/?car");
        }
    };
    return serviceServer;
}]);