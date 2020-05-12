import Agreement from "./agreement"
import Button from "./button"
import Form from "./form"
import Img from "./img"
import Marquee from "./marquee"
import Assist from "./assist"
import StaticText from "./static-text"
import Wechat from "./wechat"

export default [{
  name: '表单',
  value: 'form',
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
  name: '文本',
  value: 'static-text',
  data: StaticText
}, {
  name: '用户协议',
  value: 'agreement',
  data: Agreement
}, {
  name: '跑马灯',
  value: 'marquee',
  data: Marquee
}, {
  name: '微信',
  value: 'wechat',
  data: Wechat
}, {
  name: '辅助类',
  value: 'assist',
  data: Assist
}]