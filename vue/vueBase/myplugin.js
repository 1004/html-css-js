(function (w) {
    let myPlugin = {}

    //必须有isstall 方法
    myPlugin.install = function (Vue, options) {

        Vue.prototype.$myMethod = function (methodOptions) {
            console.log("示例方法调用")
        };


        Vue.directive('ok',function (el, bindings) {

        })

        //全局函数
        Vue.fun1=function () {

        }
    };

    // Vue.extend(
    //
    // );
    //
    // Vue.component('');


    //将插件对象挂载到window的属性上
    w.myPlugin = myPlugin;

})(window); //匿名函数自调用，并挂到window上，这样可以在外面直接使用window里面的属性，省略window