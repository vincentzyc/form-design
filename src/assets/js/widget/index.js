import Agreement from "./agreement"
import Button from "./button"
import Form from "./form"
import Img from "./img"
import Marquee from "./marquee"
import Assist from "./assist"
import StaticText from "./static-text"
import Wechat from "./wechat"
import Video from "./video"
import Sms from "./sms"

// 组件的type字段对应示意图片文件名 （小驼峰命名）

export default [{
  name: '表单',
  value: 'form',  // 对应同级组件文件夹名，下同。 （命名方式: aaa-bbb）
  data: Form
}, {
  name: '按钮',
  value: 'button',
  data: Button
}, {
  name: '图片',
  value: 'img',
  data: Img
}, {
  name: '视频',
  value: 'video',
  data: Video
}, {
  name: '文本',
  value: 'static-text',
  data: StaticText
}, {
  name: '短信',
  value: 'sms',
  data: Sms
}, {
  name: '微信',
  value: 'wechat',
  data: Wechat
}, {
  name: '用户协议',
  value: 'agreement',
  data: Agreement
}, {
  name: '跑马灯',
  value: 'marquee',
  data: Marquee
}, {
  name: '辅助类',
  value: 'assist',
  data: Assist
}]