import FormList from "./form-list"
import PhoneList from "./phone"
import InputList from "./input"
import CheckboxList from "./checkbox"
import DateList from "./date"
import Select from "./select"
import Switch from "./switch"
import RandomCode from "./random-code"
import Hpicker from "./h-picker"

export default [{
  name: "表单内容区",
  value: "formList",
  dragOnce: true,
  data: FormList
}, {
  name: "手机",
  value: "phone",
  data: PhoneList
}, {
  name: "输入框",
  value: "input",
  data: InputList
}, {
  name: "随机码",
  value: "randomCode",
  data: RandomCode
}, {
  name: "选择框",
  value: "checkbox",
  data: CheckboxList
}, {
  name: "日期选择器",
  value: "date",
  data: DateList
}, {
  name: "横向滑动单选",
  value: "hPicker",
  data: Hpicker
}, {
  name: "下拉选择框",
  value: "select",
  data: Select
}, {
  name: "开关",
  value: "switch",
  data: Switch
}]