<template>
  <draggable
    v-model="pageData[list]"
    :options="{group:'widget', ghostClass: 'ghost',swapThreshold:0.5,animation: 100}"
    @end="handleMoveEnd"
    @add="handleWidgetAdd"
    class="widget-form-list"
    :class="{'widget-empty': pageData[list].length === 0}"
  >
    <template v-for="(item, index) in pageData[list]">
      <div
        class="widget-view"
        :key="item.key"
        :class="{active: selectWg.key === item.key,'widget-view-imgshow':item.type === 'imgshow'}"
        @click="handleSelectWidget(index)"
      >
        <div v-if="item.type === 'phone'" class="wg-phone" :style="item.style">
          <div class="wg-item" :class="[item.labelPosition==='top'?'flex-column':'align-middle']">
            <div class="wg-title" v-show="item.showLabel">{{item.title}}</div>
            <div class="flex-auto">
              <input class="wg-input" v-model="item.value" :placeholder="item.placeholder">
            </div>
          </div>
          <div class="flex relative" v-if="item.showCode">
            <input placeholder="验证码" class="wg-input flex-auto">
            <button class="getVerCode-btn" :style="item.style.btnStyle">获取验证码</button>
          </div>
        </div>

        <div v-if="item.type === 'input'" class="wg-item" :class="[item.labelPosition==='top'?'flex-column':'align-middle']" :style="item.style">
          <div class="wg-title" v-show="item.showLabel">{{item.title}}</div>
          <div class="flex-auto">
            <input v-model="item.value" :placeholder="item.placeholder" class="wg-input">
          </div>
        </div>

        <div
          v-if="item.type === 'checkbox'"
          class="wg-item flex-wrap wg-checkbox"
          :class="[item.labelPosition==='top'?'flex-column':'align-middle']"
          :style="item.style"
        >
          <div class="wg-title">{{item.title}}</div>
          <div class="flex-auto">
            <label class="label" v-for="(optionsItem, key) in item.options" :key="optionsItem + key">
              <input class="wg-checkbox-input" :type="item.isRadio?'radio':'checkbox'" :value="optionsItem" v-model="item.value" style="display:none">
              <span>{{optionsItem}}</span>
            </label>
          </div>
        </div>

        <div v-if="item.type === 'select'" class="wg-item" :class="[item.labelPosition==='top'?'flex-column':'align-middle']" :style="item.style">
          <div class="wg-title" v-show="item.showLabel">{{item.title}}</div>
          <div class="flex-auto">
            <select v-model="item.value" class="wg-select flex-auto">
              <option value disabled selected hidden>{{item.placeholder}}</option>
              <option v-for="item in item.options" :key="item" :value="item" :label="item.showLabel?item.label:item"></option>
            </select>
          </div>
        </div>

        <div v-if="item.type==='switch'" class="wg-item wg-switch" :class="[item.labelPosition==='top'?'flex-column':'align-middle']" :style="item.style">
          <div class="wg-title">{{item.title}}</div>
          <label class="label">
            <input type="checkbox" class="wg-switch-input" v-model="item.value" style="display:none">
            <span class="wg-switch-core"></span>
          </label>
        </div>

        <div v-if="item.type === 'date'" class="wg-item" :class="[item.labelPosition==='top'?'flex-column':'align-middle']" :style="item.style">
          <div class="wg-title">{{item.title}}</div>
          <div class="flex-auto">
            <input type="date" v-model="item.value" class="wg-input flex-auto">
          </div>
        </div>

        <div class="flex flex-center" v-if="item.type === 'imgshow'" :class="{'img-placeholder':!item.value}" :style="item.style">
          <img v-if="item.value" :src="item.value" alt="图片展示" width="100%">
          <img v-else src="@/assets/img/img-placeholder.png" alt="图片展示">
        </div>

        <div class="flex flex-center" v-if="item.type === 'button'" :style="item.style">
          <button class="wg-button" :style="item.style.btnStyle">{{item.btnText}}</button>
        </div>

        <div v-if="item.type === 'staticText'" class="wg-staticText" :style="item.style">
          <p :style="item.style">{{item.value}}</p>
        </div>

        <el-button
          title="删除"
          @click.stop="handleWidgetDelete(index)"
          class="widget-action-delete"
          v-if="selectWg.key === item.key"
          circle
          plain
          type="danger"
        >删除</el-button>
        <el-button title="复制" @click.stop="handleWidgetClone(index)" class="widget-action-clone" v-if="selectWg.key === item.key" circle plain type="primary">复制</el-button>
      </div>
    </template>
  </draggable>
</template>

<script>
import { mapState } from 'vuex';
import Draggable from 'vuedraggable'

export default {
  components: {
    Draggable
  },
  props: {
    list: String
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      selectWg: state => state.common.selectWg,
      pageData: state => state.common.pageData
    })
  },
  methods: {
    handleMoveEnd({ newIndex, oldIndex }) {
      console.log('index', newIndex, oldIndex)
    },
    handleWidgetAdd(evt) {
      const newIndex = evt.newIndex;

      //为拖拽到容器的元素添加唯一 key
      const key = Date.parse(new Date()) + '_' + Math.ceil(Math.random() * 99999)
      let newObj = this.$api.deepClone(this.pageData[this.list][newIndex]);
      // 绑定键值
      newObj.key = this.pageData[this.list][newIndex].type + '_' + key;
      this.$set(this.pageData[this.list], newIndex, newObj)
      this.$store.commit('setSelectWg', this.pageData[this.list][newIndex]);
      this.$store.commit('setConfigTab', "widget");
    },
    handleSelectWidget(index) {
      this.$store.commit('setSelectWg', this.pageData[this.list][index]);
      this.$store.commit('setConfigTab', "widget");
    },
    handleWidgetDelete(index) {
      if (this.pageData[this.list].length - 1 === index) {
        if (index === 0) {
          this.$store.commit('setSelectWg', {})
        } else {
          this.$store.commit('setSelectWg', this.pageData[this.list][index - 1])
        }
      } else {
        this.$store.commit('setSelectWg', this.pageData[this.list][index + 1])
      }
      this.$nextTick(() => {
        this.pageData[this.list].splice(index, 1)
      })
    },
    handleWidgetClone(index) {
      let cloneData = this.$api.deepClone(this.pageData[this.list][index]);
      cloneData.key = this.pageData[this.list][index].type + '_' + Date.parse(new Date()) + '_' + Math.ceil(Math.random() * 99999)
      this.pageData[this.list].splice(index, 0, cloneData)
      this.$nextTick(() => {
        this.$store.commit('setSelectWg', this.pageData[this.list][index + 1])
      })
    },
  }
}
</script>
