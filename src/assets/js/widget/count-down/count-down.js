export const CountDownTypes = {
  endTime: 'endTime', // 自定义结束时间 
  dayLoop: 'dayLoop', // 自动按天循环 
}

export default [{
  type: "countDown",
  name: "倒计时",
  positionFixed: 'auto', // auto--正常  top--顶部悬浮  custom--自定义位置悬浮  bottom--底部悬浮  sticky--吸顶悬浮
  endTime: '', //倒计时结束时间
  title: '距离活动结束还剩：',
  countDownType: CountDownTypes.endTime,
  timeStyle: {
    backgroundColor: '#e6e6e6',
    fontSize: '16px',
    fontsize: 16,
    borderRadius: '5px',
    borderradius: 5,
    color: '#333',
  },
  unitStyle: {
    color: "#333",
    fontSize: '14px',
    fontsize: 14,
  },
  style: {
    padding: "5px 5px 5px 5px",
    margin: "10px 0px 10px 0px",
    color: "#333",
    fontSize: '14px',
    fontsize: 14,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    backgroundImage: ''
  }
}]