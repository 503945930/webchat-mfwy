/**
 * Created by Administrator on 2015/11/8 0008.
 */
define(['app'], function (app) {
    app.factory('orderService', ['$q','$http', function ($q,$http) {
        //��ǰ��ַ��ѯ��Ƭ�۸�
        list=function(addNo){
            var deferred;
            deferred = $q.defer();
            $http.get(config.url.api+"/v1/cards?$filter=currentAdd eq '"+addNo+"'", void 0).success(function(data) {
                return deferred.resolve(data.value);
            }).error(function(error) {
                console.log(error);
                return deferred.reject(void 0);
            });
            return deferred.promise;
        };
        order=function(str){
            var deferred;
            deferred=$q.defer();
            $http.post(config.url.api+"/v1/orders",str).success(function(data){
                return deferred.resolve(data);
            }).error(function(error){
                return deferred.reject(void 0);
            });
            return deferred.promise;
        };
        wechatConfig=function(postdata){
            var deferred;
            deferred = $q.defer();
            $http.post(config.url.api+"/pay/order", postdata).success(function(data) {
                return deferred.resolve(data);
            }).error(function(error) {
                return deferred.reject(void 0);
            });
            return deferred.promise;
        };
        //����״̬Ϊ��������
        deliveryPay=function(id){
            var deferred;
            deferred = $q.defer();
            $http.post(config.url.api+"/v1/orders/after/"+id).success(function(data) {
                /*createOrder(data.value[0].c_type, data.value[0].gongyi);*/
                return deferred.resolve(data.value);
            }).error(function(error) {
                console.log(error);
                return deferred.reject(void 0);
            });
            return deferred.promise;
        };
        //�ڶ���֧��  ���¶�����
        secondPay=function(postdata){
            var deferred;
            deferred = $q.defer();
            $http.post(config.url.api+"/v1/orders/secondPay", postdata).success(function(data) {
                return deferred.resolve(data);
            }).error(function(error) {
                return deferred.reject(void 0);
            });
            return deferred.promise;
        };
        //���һ�ζ���
        lastOrder=function(openid){
            var deferred;
            deferred = $q.defer();
            $http.get(config.url.api+"/v1/orders?$top=1&$orderby=createInfo desc&$filter=openid eq '"+openid+"'").success(function(data) {
                return deferred.resolve(data.value);
            }).error(function(error) {
                return deferred.reject(void 0);
            });
            return deferred.promise;
        };

        return {list:list,
            order:order,
            getWechatConfig:wechatConfig,
            deliveryPay:deliveryPay,
            secondPay:secondPay,
            lastOrder:lastOrder

        }
    }]);
});