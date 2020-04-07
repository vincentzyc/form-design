<template>
  <div style="width:500px;margin:0 auto">
    <div style="margin:50px auto">
      <button @click="moveup()" :style="{marginLeft:'10px',background:direction==='up'?'#409eff':'#fff'}">向上滚动（ ↑ ）</button>
      <button @click="moveleft()" :style="{marginLeft:'10px',background:direction==='left'?'#409eff':'#fff'}">向左滚动（ ← ）</button>
    </div>
    <marquee :direction="direction" :durationTime="10" class="marquee">
      <div class="marquee-wrap" :class="{'flex-inline':direction==='left'}">
        <div class="my-listbox" v-for="(item,index) in comment" :key="index" :class="{'width250':direction==='left'}">
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
      direction: "up",
      comment: [{
        "name": "冯先生",
        "mobile": "170****8441",
        "place": "重庆",
        "content": "测试测试测试，文字测试测试测试文字测，试测试测试文字测试测试，测试文字end"
      }, {
        "name": "姜女士",
        "mobile": "180****2717",
        "place": "包头",
        "content": "测试测试，测试文字测试测试测试文，字测试测试测试文字测试，测试测试文字测试，测试测试文字测试，测试测试文字end"
      }, {
        "name": "曹女士",
        "mobile": "171****5347",
        "place": "辽阳",
        "content": "测试测试测试文字测试测试测试文字end。"
      }, {
        "name": "魏先生",
        "mobile": "151****3555",
        "place": "无锡",
        "content": "测试，测试测试文字测，试测试测试文字，测试测试测试文字测试测试测试文字，测试测试测试文字，测试测试测试文字测试测，试测试文字测试测试测试测试测试文字测试测试测试文字测试文字end"
      }]
    }
  },
  methods: {
    moveleft() {
      this.direction = 'left'
    },
    moveup() {
      this.direction = 'up'
    }
  }
}
</script>

<style scoped>
.marquee {
  width: 500px;
  height: 300px;
  padding: 30px;
}
.flex-inline {
  display: inline-flex !important;
}
.marquee .my-listbox {
  padding: 20px;
  border: 1px solid #c7beb1;
}
.width250 {
  width: 250px;
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