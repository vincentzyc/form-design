export default [{
  type: "marquee",
  name: "跑马灯",
  positionFixed: 'auto',
  fixedTypes: ['auto', 'top', 'bottom'], // auto--正常 top--顶部悬浮  custom--自定义位置悬浮  bottom--底部悬浮
  scrollHeight: 0,
  direction: "up", //滚动方向 向左=left  向上=up
  durationTime: 6, //滚动时长 单位秒
  isImgBtn: false,
  imgUrl: "",
  textList: [
    '李小姐34秒前已报名',
    '张先生1分钟前 已报名',
    '周先生 3分钟前 已报名',
    '梁小姐  5分钟前  已报名'
  ],
  style: {
    backgroundColor: "",
    Height: 50,
    height: '50px',
    overflow: 'hidden',
    color: "#333",
    fontsize: 14,
    fontSize: "14px",
    lineheight: 28,
    lineHeight: "28px",
    margin: "0px 0px 0px 0px"
  }
}, {
  type: "marqueeSingle",
  name: "跑马灯-单个",
  positionFixed: 'auto', // auto--正常 top--顶部悬浮  custom--自定义位置悬浮  bottom--底部悬浮
  durationTime: 2, //滚动间隔 单位秒
  textList: [{
    text: '李**34秒前已报名',
    sex: 'man'
  }, {
    text: '张**1分钟前已报名',
    sex: 'woman'
  }, {
    text: '周**3分钟前已报名',
    sex: 'man'
  }, {
    text: '梁**5分钟前已报名',
    sex: 'woman'
  }],
  style: {
    width: "200px",
    pxWidth: 200,
    height: '40px',
    pxHeight: 40,
    backgroundColor: "#333",
    color: "#fff",
    fontsize: 14,
    fontSize: "14px",
    margin: "0px 0px 0px 0px"
  }
}]