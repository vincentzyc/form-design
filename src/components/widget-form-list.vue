<template>
  <draggable
    v-model="pageData[list]"
    :options="{group:'widget', ghostClass: 'ghost',swapThreshold:0.5,animation: 100}"
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
        <!-- 手机 -->
        <div v-if="item.type === 'phone'" class="wg-phone" :style="item.style">
          <div class="wg-item" :class="[item.labelPosition==='top'?'flex-column':'align-middle']">
            <div class="wg-title" :style="{width:item.labelWidth}" v-show="item.showLabel">{{item.labelTitle}}</div>
            <div class="flex-auto">
              <input class="wg-input" v-model="item.value" :placeholder="item.placeholder">
            </div>
          </div>
          <div class="wg-item" :class="[item.labelPosition==='top'?'flex-column':'align-middle']" v-if="item.showCode">
            <div class="wg-title flex-none" v-show="item.showLabel" :style="{width:item.labelWidth}">验证码</div>
            <div class="flex flex-auto">
              <input placeholder="验证码" class="wg-input">
              <button class="getVerCode-btn" :style="item.style.btnStyle">获取验证码</button>
            </div>
          </div>
        </div>

        <!-- 输入框 -->
        <div v-if="item.type === 'input'" class="wg-item" :class="[item.labelPosition==='top'?'flex-column':'align-middle']" :style="item.style">
          <div class="wg-title" :style="{width:item.labelWidth}" v-show="item.showLabel">{{item.labelTitle}}</div>
          <div class="flex-auto">
            <input v-model="item.value" :placeholder="item.placeholder" class="wg-input">
          </div>
        </div>

        <!-- 选择框 -->
        <div
          v-if="item.type === 'checkbox'"
          class="wg-item flex-wrap wg-checkbox"
          :class="[item.labelPosition==='top'?'flex-column':'align-middle']"
          :style="item.style"
        >
          <div class="wg-title" :style="{width:item.labelWidth}">{{item.labelTitle}}</div>
          <div class="flex-auto">
            <label class="label" v-for="(optionsItem, key) in item.options" :key="optionsItem + key">
              <input class="wg-checkbox-input" :type="item.isRadio?'radio':'checkbox'" :value="optionsItem" v-model="item.value" style="display:none">
              <span>{{optionsItem}}</span>
            </label>
          </div>
        </div>

        <!-- 下拉选择 -->
        <div v-if="item.type === 'select'" class="wg-item" :class="[item.labelPosition==='top'?'flex-column':'align-middle']" :style="item.style">
          <div class="wg-title" :style="{width:item.labelWidth}" v-show="item.showLabel">{{item.labelTitle}}</div>
          <div class="flex-auto">
            <select v-model="item.value" class="wg-select flex-auto">
              <option value disabled selected hidden>{{item.placeholder}}</option>
              <option v-for="optionsItem in item.options" :key="optionsItem" :value="optionsItem" :label="item.showLabel?item.label:optionsItem"></option>
            </select>
          </div>
        </div>

        <!-- 开关 -->
        <div
          v-if="item.type==='switch'"
          class="wg-item wg-switch"
          :class="[item.labelPosition==='top'?'flex-column':'align-middle']"
          :style="item.style"
        >
          <div class="wg-title" :style="{width:item.labelWidth}">{{item.labelTitle}}</div>
          <label class="label">
            <input type="checkbox" class="wg-switch-input" v-model="item.value" style="display:none">
            <span class="wg-switch-core"></span>
          </label>
        </div>

        <!-- 日期选择 -->
        <div v-if="item.type === 'date'" class="wg-item" :class="[item.labelPosition==='top'?'flex-column':'align-middle']" :style="item.style">
          <div class="wg-title" :style="{width:item.labelWidth}">{{item.labelTitle}}</div>
          <div class="flex-auto">
            <input type="date" v-model="item.value" class="wg-input flex-auto">
          </div>
        </div>

        <!-- 图片展示 -->
        <div class="flex flex-center" v-if="item.type === 'imgshow'" :class="{'img-placeholder':!item.value}" :style="item.style">
          <img v-if="item.value" :src="item.value" alt="图片展示" width="100%">
          <img v-else src="@/assets/img/img-placeholder.png" alt="图片展示">
        </div>

        <!-- 按钮 -->
        <div class="flex flex-center" v-if="item.type === 'button'" :style="item.style">
          <button class="wg-button" :style="item.style.btnStyle">{{item.btnText}}</button>
        </div>

        <!-- 文本描述 -->
        <div v-if="item.type === 'staticText'" class="wg-staticText" :style="item.style">
          <p :style="item.style">{{item.value}}</p>
        </div>

        <!-- 横向滑动自动选择 -->
        <div class="flex flex-center" v-if="item.type === 'h-picker'" :style="item.style">
          <div class="wg-horizontal-picker">
            <div
              class="picker-item"
              v-for="optionsItem in item.options"
              :key="optionsItem"
              :style="optionsItem===item.value?{ color: optionsItem.pickerColor }:{}"
            >{{optionsItem}}</div>
          </div>
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
        <el-button
          title="复制"
          @click.stop="handleWidgetClone(index)"
          class="widget-action-clone"
          v-if="selectWg.key === item.key"
          circle
          plain
          type="primary"
        >复制</el-button>
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
    handleWidgetAdd(evt) {
      const newIndex = evt.newIndex;

      const elKey = Date.now() + '_' + Math.ceil(Math.random() * 1000000);
      let newObj = this.$util.deepClone(this.pageData[this.list][newIndex]);

      newObj.key = this.pageData[this.list][newIndex].type + '_' + elKey;
      this.$set(this.pageData[this.list], newIndex, newObj);
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
      let cloneData = this.$util.deepClone(this.pageData[this.list][index]);
      cloneData.key = this.pageData[this.list][index].type + '_' + Date.now() + '_' + Math.ceil(Math.random() * 1000000)
      this.pageData[this.list].splice(index, 0, cloneData)
      this.$nextTick(() => {
        this.$store.commit('setSelectWg', this.pageData[this.list][index + 1])
      })
    },
  }
}
</script>
