// components/ml-search/ml-search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    parameter: {
      type: Object,
      value: {
        width: '300px',
        height: '60rpx',
        border_radius: '30rpx',
        align_icon: 'left',
        border_color: "#D5D5D5",
        placeholder: "搜索商品名称",
        keywords: "",
        url: '/pages/goods/cate/cate',
        imgUrl: '/image/icon/search.png'
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

    /**
     * 搜索框change事件
     */
    searchChange: function (e) {
      var that = this;
      that.setData({
        'parameter.keywords': e.detail.value.replace(/^\s+|\s+$/g, "")
      })
    },
    /**
     * 搜索enter事件
     */
    searchSubmitValue: function (e) {
      var that = this;
      if (e.detail.value.replace(/^\s+|\s+$/g, "")) {
        that.setData({
          'parameter.keywords': e.detail.value
        })
        that.navigate();
      } else {
        return wx.showToast({
          title: '请输入搜索关键词',
          icon: "none",
          duration: 1000,
          mask: true
        })
      }
    },

    /**
     * 跳转事件
     */
    navigate: function (e) {
      let that = this;
      if (!that.data.parameter.keywords) return;
      if (that.data.parameter.url) {
        wx.navigateTo({
          url: that.data.parameter.url + '?keywords=' + that.data.parameter.keywords
        })
      } else {
        this.mlKeyword(that.data.parameter.keywords);
        return;
      }
    },

    /**
     * 将搜索关键字传给父组件
     */
    mlKeyword: function (keywords) {
      let that = this;
      console.log(keywords, "子组件的值");
      
      that.triggerEvent("mlKeyword", keywords);
    }
  }
})
