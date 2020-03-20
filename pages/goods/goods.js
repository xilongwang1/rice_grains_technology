// pages/goods/goods.js
let store = require('../../utils/store');
import { LoginPanel } from '../../components/login/login'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    new LoginPanel() //注册组件
  },
  openLogin: function () {
    if (store.getItem('user_id', 'userInfo')) {
      wx.showToast({
        mask: true,
        title: "您已登录",
        icon: "none"
      })
    } else {
      this.__lgpanel_show(); //使用组件方法
    }
  },

  /**
   * 注册
   */
  register: function () {
    this.selectComponent('#register').openMask();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})