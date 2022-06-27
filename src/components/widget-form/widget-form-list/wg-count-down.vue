<template>
  <div :style="{...item.style,backgroundImage:`url(${item.style.backgroundImage})`}" class="wg-countdown">
    <p class="flex flex-center">
      <span class="countdown-title">{{item.title}}</span>
      <template v-if="!isFinished">
        <span :style="item.timeStyle" class="countdown-timeblock" v-if="parseTime.days>0">{{parseTime.days}}</span>
        <span :style="item.unitStyle" class="countdown-colon" v-if="parseTime.days>0">天</span>
        <span
          :style="item.timeStyle"
          class="countdown-timeblock"
          v-if="parseTime.days>0||parseTime.hours>0"
        >{{parseTime.hours>9?parseTime.hours:'0'+parseTime.hours}}</span>
        <span :style="item.unitStyle" class="countdown-colon" v-if="parseTime.days>0||parseTime.hours>0">时</span>
        <span
          :style="item.timeStyle"
          class="countdown-timeblock"
          v-if="parseTime.days>0||parseTime.hours>0||parseTime.minutes>0"
        >{{parseTime.minutes>9?parseTime.minutes:'0'+parseTime.minutes}}</span>
        <span
          :style="item.unitStyle"
          class="countdown-colon"
          v-if="parseTime.days>0||parseTime.hours>0||parseTime.minutes>0"
        >分</span>
        <span
          :style="item.timeStyle"
          class="countdown-timeblock"
        >{{parseTime.seconds>9?parseTime.seconds:'0'+parseTime.seconds}}</span>
        <span :style="item.unitStyle" class="countdown-colon">秒</span>
      </template>
      <span class="countdown-empty" v-else>请选择倒计时结束时间</span>
    </p>
  </div>
</template>

<script>
import { CountDownTypes } from "@/assets/js/widget/count-down/count-down"
const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      timer: 0,
      isFinished: true,
      parseTime: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    }
  },
  watch: {
    'item.countDownType'(nval) {
      if (nval) {
        clearInterval(this.timer)
        this.initCountDown()
      }
    },
    'item.endTime'(nTime) {
      if (nTime) {
        clearInterval(this.timer)
        this.initCountDown()
      }
    }
  },
  methods: {
    getTime(time) {
      const days = Math.floor(time / DAY);
      const hours = Math.floor(time % DAY / HOUR);
      const minutes = Math.floor(time % HOUR / MINUTE);
      const seconds = Math.floor(time % MINUTE / SECOND);
      return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      };
    },
    initEndTimeCountDown() {
      this.isFinished = this.item.endTime < Date.now()
      if (this.isFinished) return
      this.parseTime = this.getTime(this.item.endTime - Date.now())
      this.timer = setInterval(() => {
        this.isFinished = this.item.endTime < Date.now()
        this.parseTime = this.getTime(this.item.endTime - Date.now())
      }, 1000);
    },
    initDayLoopCountDown() {
      this.isFinished = false
      const today = new Date().toLocaleDateString()
      const todayTimeStamp = new Date(today).getTime()
      const tomorrowTimeStamp = todayTimeStamp + 24 * 60 * 60 * 1000
      this.parseTime = this.getTime(tomorrowTimeStamp - Date.now())
      this.timer = setInterval(() => {
        this.parseTime = this.getTime(tomorrowTimeStamp - Date.now())
      }, 1000);
    },
    initCountDown() {
      switch (this.item.countDownType) {
        case CountDownTypes.endTime:
          this.initEndTimeCountDown()
          break;
        case CountDownTypes.dayLoop:
          this.initDayLoopCountDown()
          break;
        default:
          this.initEndTimeCountDown()
          break;
      }
    }
  },
  created() {
    if (!Object.prototype.hasOwnProperty.call(this.item, 'countDownType')) {
      this.$set(this.item, 'countDownType', CountDownTypes.endTime)
    }
    this.initCountDown()
  },
  beforeDestroy() {
    this.timer = null
  }
}
</script>