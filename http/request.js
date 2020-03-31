
/**
 * 1. 基本请求
 * 2. 为了后续获取数据方便, promise处理: fetch axios基于promise
 * 3. 对获取数据的状态处理: loadding toast
 * 4. 对请求头的处理,机型\大小\系统\屏幕
 */
let store = require("../utils/store.js");
let system = store.getSystemInfo();

const clientInfo = {
    "clientType": "mp",
    "appnm": "iwem",
    "model": system.model,
    "os": system.system,
    "screen": system.screenWidth + "*" + system.screenHeight,
    "version": App.version,
    "chennel": "miniprogram",
}

module.exports = {
    fetch: (url, data = {}, option = {}) => {
        let { loading = true, toast = true, method = "get" } = option;
        return new Promise((resolve, reject) => {
            if (loading) {
                wx.showLoading({
                    title: "加载中...",
                    mask: true
                })
            }
            let env = App.config.baseApi;
            console.log(env + '/api/' + url);
            
            wx.request({
                url: env + '/api/' + url,
                data,
                method,
                header: {
                    "clientInfo": JSON.stringify(clientInfo),
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                },
                success: function (result) {
                    let res = result.data; // { status_code: 200, data: '', message: "" }
                    if (res.status_code == 200) {
                        if (loading) {
                            wx.hideLoading();
                        }
                        resolve(res);
                    } else {
                        if (toast) {
                            wx.showToast({
                                mask: true,
                                title: res.msg,
                                icon: "none"
                            })
                        } else {
                            wx.hideLoading();
                        }
                    }
                },

                fail: function (err) {
                    console.log(err);

                    let msg = err.errMsg;
                    // 自己测试出来的
                    if (msg == "request:fail timeout") {
                        message = "请求超时,请稍后处理";
                    }
                    wx.showToast({
                        title: msg,
                        icon: "none"
                    })
                    reject(err);
                }
            })
        })
    }
}