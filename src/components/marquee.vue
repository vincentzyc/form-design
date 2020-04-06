<template>
  <div class="my-outbox" ref="outbox">
    <div class="my-inbox" ref="movebox">
      <div class="my-listbox" v-for="(item,index) in realSendVal" :key="index">
        <div class="my-title">
          {{item.name}}
          <text class="my-utel">{{item.mobile}}</text>
          <text class="my-addr">{{item.place}}</text>
        </div>
        <div class="my-content">{{item.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-marquee-top',
  props: {
    sendVal: Array,
    durationTime: {
      type: Number,
      default: 5
    },
    direction: {
      type: String,
      default: 'up'
    }
  },
  data() {
    return {
      isShow: false
    }
  },
  computed: {
    realSendVal() {
      if (this.sendVal.length > 0) {
        return [...this.sendVal, ...this.sendVal]
      } else {
        return []
      }
    }
  }
}
</script>

<style scoped>
.my-outbox {
  color: #fee7b1;
  height: 300px;
  margin: 20px;
  background: #fee7b1;
  overflow: hidden;
  border: 2px solid #c46302;
}
.my-outbox .my-inbox {
  margin: 0 45px;
  -webkit-animation: marquee-up 5s linear infinite;
  animation: marquee-up 5s linear infinite;
}
.my-outbox .my-listbox {
  padding: 20px 0;
  font-size: 18px;
  border-bottom: 1px solid #c7beb1;
}
.my-outbox .my-title {
  color: #db7000;
  margin-bottom: 10px;
  clear: both;
  overflow: hidden;
}
.my-outbox .my-utel {
  font-size: 16px;
  margin-left: 20px;
}
.my-outbox .my-addr {
  font-size: 16px;
  float: right;
}
.my-outbox .my-content {
  text-align: justify;
  word-break: break-all;
  font-size: 14px;
  color: #53565d;
}
@keyframes marquee-up {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
}
@keyframes marquee-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>