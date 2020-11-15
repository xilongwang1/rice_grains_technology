// components/ml-swiper/ml-swiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    parameter: {
      type: Object,
      value: {
        width: '686rpx',
        height: '686rpx',
        dots: true,
        dots_color: "rgba(0,0,0,.3)",
        dots_active_color: "#000000",
        autoplay: true,
        interval: 3000,
        duration: 500,
        circular: true,
        border_radius: '36rpx',
        list: ['https://i.loli.net/2020/03/31/fnZlSA1doscurev.png','https://i.loli.net/2020/03/31/fnZlSA1doscurev.png','https://i.loli.net/2020/03/31/fnZlSA1doscurev.png'],
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
    change(e) {
      console.log(e.detail.current,"子组件")
      this.triggerEvent('change', e.detail.current)
    }
  }
})
