// pages/service/service.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /**
     * 搜索组件参数
     */
    parameter: {
      width: '300px',
        height: '60rpx',
        border_radius: '30rpx',
        align_icon: 'left',
        border_color: "#D5D5D5",
        placeholder: "输入商品名称",
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 搜索组件传递的参数 -- 关键词
   */
  mlKeywords: function(e) {
    console.log(e.detail,"父组件的值");
  },

  /**
   * swiper组件传递的参数 -- 当前banner下标
   */
  change: function (e) {
    console.log(e.detail, "父组件的值")
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