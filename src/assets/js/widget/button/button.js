export default [{
  type: "button",
  name: "按钮",
  btnText: "提交",
  btnType: "submit",
  apiKey: "",
  positionFixed: 'auto',
  fixedTypes: ['auto', 'top', 'bottom'], // auto--正常 top--顶部悬浮  custom--自定义位置悬浮  bottom--底部悬浮
  scrollHeight: 0,
  btnTypes: [{
    value: "submit",
    label: "提交"
  }],
  style: {
    margin: "10px 10px 10px 10px",
    padding: "0px 0px 0px 0px",
    isImgBtn: false,
    value: "",
    btnStyle: {
      borderRadius: '20px',
      borderradius: 20,
      backgroundColor: "#409EFF",
      color: "#fff"
    }
  },
  animation: {
    animationName: '',
    animationduration: 2,
    animationDuration: '2s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    className: ''
  }
}]