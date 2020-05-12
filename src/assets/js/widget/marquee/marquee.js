export default [{
  type: "marquee",
  name: "跑马灯",
  fixedBottom: false,
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
}]