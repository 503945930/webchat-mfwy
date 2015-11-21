/**
 * Created by Administrator on 2015/9/14 0014.
 */

angular.module('connection-picture', ['resource.pictures']).config([
    "$routeProvider", function($routeProvider) {
        return $routeProvider.when("/family", {
            templateUrl: "/app/connection/picture/picture-list.tpl.html",
            controller: 'FamilyCtrl'
        });
    }
]).controller('FamilyCtrl', [
    "$scope","$location","Pictures","messager", function($scope,$location,Pictures,messager) {
        $scope.delete=function(id){
           return Pictures["delete"]({id:id},function(){
               messager.success("delete successfully.");
               $scope.setPage(1);
           })
        };

        $scope.setPage = function(pageNo) {
            return Pictures.list({
                $skip: (pageNo - 1) * 10,
                $top: 10,
                $count: true
            }, function(data) {
                return $scope.data = data;

            });
        };

        return $scope.setPage(1);

    }
]);
