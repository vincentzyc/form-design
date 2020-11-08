<template>
  <div>
    <el-form-item v-if="showConfigBtn">
      <el-button @click="openPopup" size="small" type="primary">配置弹窗内容</el-button>
    </el-form-item>
    <BuilderPopup @close="closePopup" ref="builderPopup" v-model="showPopup">
      <Draggable
        :animation="100"
        :class="{'widget-empty': popupList.length === 0}"
        :group="{ name:'widget',put:!dragWg.hasOwnProperty('list')}"
        :swapThreshold="0.6"
        @add="handleWidgetAdd"
        class="widget-form-list wg-padding"
        ghostClass="ghost"
        v-model="popupList"
      >
        <template v-for="(formItem,i) in popupList">
          <WidgetFormList
            :data="popupList"
            :index="i"
            :isPopup="true"
            :item="formItem"
            :key="formItem.key"
            @emptied="closePopup"
          />
        </template>
      </Draggable>
    </BuilderPopup>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Draggable from 'vuedraggable'
import WidgetFormList from '@/components/widget-form/widget-form-list/index'
import BuilderPopup from '@/components/base/BuilderPopup'
export default {
  components: {
    Draggable,
    WidgetFormList,
    BuilderPopup
  },
  props: {
    selectWg: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      wgId: null,
      showPopup: false,
      popupList: []
    }
  },
  computed: {
    showConfigBtn() {
      if (this.showPopup) return false
      return this.$util.hasKey(this.selectWg, 'popupList')
    },
    ...mapState({
      pageData: state => state.common.pageData,
      dragWg: state => state.common.dragWg
    })
  },
  methods: {
    setWgPopupList(list) {
      if (!Array.isArray(list) || list.length === 0) return;
      for (const item of list) {
        if (Array.isArray(item.list) && item.list.length > 0) {
          this.setWgPopupList(item.list)
        }
        if (item.key === this.wgId) {
          item.popupList = this.popupList
          return item
        }
      }
    },
    closePopup() {
      const newWgData = this.setWgPopupList(this.pageData.list)
      if (newWgData && this.wgId !== this.selectWg.key) {
        this.$store.commit('setSelectWg', newWgData)
        this.$store.commit('setConfigTab', "widget");
        if (this.showPopup === false) this.wgId = null
      }
    },
    openPopup() {
      if (this.showPopup) return
      if (this.selectWg.popupList.length > 0) this.popupList = this.selectWg.popupList
      this.wgId = this.selectWg.key
      this.showPopup = true;
    },
    handleWidgetAdd(evt) {
      const newIndex = evt.newIndex;
      this.$store.commit('setSelectWg', this.popupList[newIndex])
      this.$store.commit('setConfigTab', "widget");
    }
  },
  created() {
    //监听保存操作，组件赋值popupList
    this.$root.$on("formDesign_savePage", () => this.setWgPopupList(this.pageData.list))
  }
}
</script>