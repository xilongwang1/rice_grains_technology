
/**
 * 路由跳转
 * 
 */

 // 映射
 const routerPath = {
    "index": "/pages/index/index"
}

module.exports = {
    // this.$router.push('/index',{ path: '/index', query: {} });
    // index?name=张三&age=20  query = { name: "张三", age: 20 } axios fetch post参数类型 querystring

    push(path,option={}) {
        if(typeof path === "string") {
           option.path = path;
        }else {
            option = path;
        }

        // 获取url: "index"
        let url = routerPath[option.path];
        // openType跳转类型
        let { query = {}, openType } = option;
        let params = this.parse(query);
        if(params) {
           url += '?' + params;
        }
        this.to(openType, url);
    },

    // 跳转方式
    to(openType, url) {
       let obj = { url }; //{ url: ... }
       if(openType === "redirect") {
           wx.redirectTo(obj);
       }else if(openType === "reLaunch") {
           wx.reLaunch(obj);
       }else if(openType === "back") {
           wx.navigateBack({
               delta: 1
           })
       }else {
           wx.navigateTo(obj);
       }
    },

    // 将url?后参数拼接起来
    parse(data) {
        let arr = [];
        for(let key in data) {
            arr.push(key + '=' +data[key]);
        }
        return arr.join("&");
    }
}