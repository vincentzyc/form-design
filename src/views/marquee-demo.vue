<template>
  <div>
    <marqueeY :sendVal="comment" direction="up" :durationTime="5"/>
  </div>
</template>

<script>
import marqueeY from "@/components/marquee"
export default {
  components: {
    marqueeY
  },
  data() {
    return {
      comment: [{
        "name": "冯先生",
        "mobile": "170****8441",
        "place": "重庆",
        "content": "从小跟着奶奶长大，她信了一辈子的佛了，我从以前的出了事都会拜佛到今天的每日一拜，已经是一种信仰了，只要多积德行善，下一世咱还是条好汉。"
      }, {
        "name": "姜女士",
        "mobile": "180****2717",
        "place": "包头",
        "content": "第三世的我是只萌萌的小白兔，果然兔兔那么可爱，千万不能吃兔兔。╮(๑•́ ₃•̀๑)╭"
      }, {
        "name": "曹女士",
        "mobile": "171****5347",
        "place": "辽阳",
        "content": "稀里糊涂点进来，还以为跟三生三世十里桃花一个性质的电视剧呢0.0，不过这个真的好准，我小时候和青年时代算的就跟结果说的一模一样。"
      }, {
        "name": "魏先生",
        "mobile": "151****3555",
        "place": "无锡",
        "content": "以前总听说因果循环报应不爽，但一直不明白是啥意思，看了我前四世的身份后我终于明白了，真实，简直太真实了。"
      }]
    }
  }
}
</script>