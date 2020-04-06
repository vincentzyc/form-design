<template>
  <div>
    <marquee :sendVal="comment" direction="up" :durationTime="5">
      <div class="marquee">
        <div class="my-listbox" v-for="(item,index) in comment" :key="index">
          <div class="my-title">
            {{item.name}}
            <text class="my-utel">{{item.mobile}}</text>
            <text class="my-addr">{{item.place}}</text>
          </div>
          <div class="my-content">{{item.content}}</div>
        </div>
      </div>
    </marquee>
  </div>
</template>

<script>
import marquee from "@/components/marquee"
export default {
  components: {
    marquee
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

<style scoped>
.marquee .my-listbox {
  padding: 20px 0;
  font-size: 18px;
  border-bottom: 1px solid #c7beb1;
}
.marquee .my-title {
  color: #db7000;
  margin-bottom: 10px;
  clear: both;
  overflow: hidden;
}
.marquee .my-utel {
  font-size: 16px;
  margin-left: 20px;
}
.marquee .my-addr {
  font-size: 16px;
  float: right;
}
.marquee .my-content {
  text-align: justify;
  word-break: break-all;
  font-size: 14px;
  color: #53565d;
}
</style>