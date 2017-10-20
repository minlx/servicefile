app.factory('ajaxServer', ["$http", "$q", function ($http, $q) {
    var factory = {
        ajax: function (type, url) {
            var defer = $q.defer();
            if (type === "jsonp" || type === "JSONP") {
                $.ajax({
                    url:url,
                    dataType:'jsonp',
                    success:function(data){
                        defer.resolve(data);
                    },
                    error:function(error){
                        defer.reject(error);
                    }
                })
            } else {
                $http({
                    url:url,
                    method:type
                }).success(function(data){
                    defer.resolve(data);
                }).error(function(error){
                    defer.reject(error);
                })
                return defer.promise;
            }
        }
    }
    return factory;
}]);