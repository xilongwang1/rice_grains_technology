
# 基础组件
>
## ml-search
>
* 搜索组件

属性|类型|默认值|必填|说明|最低版本
:--|:--|:--|:--|:--|:--
width|number|100%|false|搜索框宽度,支持%,px,rpx|1.0.0
height|number|60rpx|false|搜索框高度,支持%,px,rpx|1.0.0
border_radius|number|0|false|搜索框圆角,左上角，右上角，右下角，左下角,支持px,rpx|1.0.0
align_icon|string|left|false|搜索图标位置,left左,right右|1.0.0
border_color|string|#D5D5D5|false|搜索框边框颜色|1.0.0
keywords|string|空|false|搜索关键字|1.0.0
url|string|空|false|跳转页面地址,暂时不支持跳转tabBar页面,支持传参如 'path?key=value&key2=value2'|1.0.0
placeholder|string|请输入搜索关键字|false|搜索关键字|1.0.0
imgUrl|string|空|false|icon图标|1.0.0
mlKeyword|eventhandle||false|接收组件传参(关键字) e.detail|1.0.0
>

## ml-swiper
> 
* 滑块视图容器
>
属性|类型|默认值|必填|说明|最低版本
:--|:--|:--|:--|:--|:--
dots|boolean|false|false|是否显示分页器|1.0.0
dots_color|color|raba(0,0,0,.3)|false|分页器颜色|1.0.0
dots_active_color|color|#000000|false|当前分页器颜色|1.0.0
autoplay|boolean|false|false|是否自动切换|1.0.0
interval|number|3000|false|自动切换时间间隔|1.0.0
duration|number|500|false|滑动动画时长|1.0.0
>
## 
