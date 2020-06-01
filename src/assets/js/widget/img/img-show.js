export default [{
  type: "imgShow",
  name: "图片展示",
  positionFixed: 'auto',
  fixedTypes: ['auto', 'top', 'bottom'], // auto--正常 top--顶部悬浮  custom--自定义位置悬浮  bottom--底部悬浮
  scrollHeight: 0,
  styleType: "col1",
  styleTypes: [{
    value: "col1",
    label: "单列"
  }, {
    value: "col2",
    label: "双列"
  }],
  imglist: [{
    img: "",
    link: ""
  }],
  style: {
    margin: "0px 0px 0px 0px"
  }
}]