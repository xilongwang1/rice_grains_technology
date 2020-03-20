
const app = getApp();
let store = require("../../utils/store");
import Util from "../../utils/util";
let Api = app.Api;
// 组件数据
let _comData = {
    '__lgpanel__.phone': '182*****535',
    '__lgpanel__.password': 123456,
    '__lgpanel__.isHide': true,
    user_id: store.getItem('user_id')
}
//组件事件
let _comEvent = {
    __lgpanel_ok: function () {
        this.__lgpanel_hide()
    },
    __lgpanel_cancel: function () {
        console.log('Cancel')
        this.__lgpanel_hide()
    }
}
//方法
let _comMethod = {
    // 打开登录弹窗
    __lgpanel_show: function () {
        this.setData({ '__lgpanel__.isHide': false })
    },
    // 关闭登录弹窗
    __lgpanel_hide: function () {
        this.setData({ '__lgpanel__.isHide': true })
    },
    // 确认登录事件
    login(e) {
        let that = this;
        wx.login({
            success(res) {
                let userInfo = {
                    code: res.code,
                    encryptedData: e.detail.encryptedData,
                    iv: e.detail.iv,
                    signature: e.detail.signature,
                }

                app.post(Api.login, { ...userInfo }, { method: 'post' }).then(res => {
                    console.log(store.getItem('userInfo'), res.data);
                    if (res.status_code == '200') {
                        // 缓存
                        store.setItem('userInfo', res.data)
                        that.setData({ '__lgpanel__.isHide': true })
                        console.log(that.data.__lgpanel__.isHide);
                    }
                })
            }
        })




    }
}
//组件类
function LoginPanel() {
    let pages = getCurrentPages()
    let curPage = pages[pages.length - 1]
    //组件中调用页面
    this._page = curPage
    Object.assign(curPage, _comEvent, _comMethod)
    curPage.setData(_comData)

    curPage.loginPanel = this
    return this
}

export { LoginPanel }