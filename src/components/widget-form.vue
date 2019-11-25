<template>
  <div class="widget-form-wrapper">
    <div
      class="widget-form-container"
      :class="pageData.theme"
      :style="{...pageData.style,backgroundImage:`url(${pageData.style.backgroundImage})`}"
    >
      <div :class="pageData.template">
        <draggable
          v-model="pageData.list"
          :group="{ name:'widget',put:true}"
          ghostClass="ghost"
          :swapThreshold="0.8"
          :animation="100"
          @add="handleWidgetAdd"
          class="widget-form-list"
          :class="{'widget-empty': pageData.list.length === 0&&!pageData.style.backgroundImage}"
        >
          <template v-for="(item,index) in pageData.list">
            <div
              v-if="item.type === 'formList'"
              :key="item.key"
              :style="item.style"
              class="widget-child-form-list"
              :class="{active: selectWg.key === item.key,'widget-view-imgshow':item.type === 'imgshow'}"
              @click="handleSelectWidget(pageData.list[index])"
            >
              <i class="el-icon-rank"></i>
              <draggable
                v-model="item.list"
                :group="{ name:'widget',put:true}"
                ghostClass="ghost"
                :swapThreshold="0.8"
                :animation="100"
                @add="formWidgetAdd"
                class="widget-form-list"
                :class="{'widget-empty': item.list.length === 0}"
              >
                <template v-for="(formItem,i) in item.list">
                  <widget-form-list
                    :item="formItem"
                    :key="formItem.key"
                    :data="item.list"
                    :index="i"
                    @click.native.stop="handleSelectWidget(item.list[i])"
                  />
                </template>
              </draggable>
              <el-button
                title="删除"
                @click.stop="handleWidgetDelete(pageData.list,index)"
                class="widget-action-delete"
                v-if="selectWg.key === item.key"
                circle
                plain
                type="danger"
              >删除</el-button>
            </div>
            <div v-else :key="item.key">
              <widget-form-list
                :item="item"
                :data="pageData.list"
                :index="index"
                @click.native.stop="handleSelectWidget(pageData.list[index])"
              />
            </div>
          </template>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Draggable from 'vuedraggable'
import WidgetFormList from './widget-form-list'

export default {
  components: {
    WidgetFormList, Draggable
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      selectWg: state => state.common.selectWg,
      pageData: state => state.common.pageData,
    })
  },
  methods: {
    handleWidgetDelete(data, index) {
      if (data.length - 1 === index) {
        if (index === 0) {
          this.$store.commit('setSelectWg', {})
        } else {
          this.$store.commit('setSelectWg', data[index - 1])
        }
      } else {
        this.$store.commit('setSelectWg', data[index + 1])
      }
      this.$nextTick(() => {
        data.splice(index, 1)
      })
    },
    handleSelectWidget(select_wg) {
      this.$store.commit('setSelectWg', select_wg);
      this.$store.commit('setConfigTab', "widget");
    },
    handleWidgetAdd(evt) {
      // console.log(evt);
      const newIndex = evt.newIndex;
      let newObj = this.$util.deepClone(this.pageData.list[newIndex]);
      newObj.key = newObj.type + '_' + Date.now() + '_' + Math.ceil(Math.random() * 1000000);
      this.$set(this.pageData.list, newIndex, newObj);
      this.$store.commit('setSelectWg', newObj);
      this.$store.commit('setConfigTab', "widget");
    },
    formWidgetAdd(evt) {
      // console.log(evt);
      const formIndex = this.pageData.list.findIndex(item => item.type === 'formList');
      const newIndex = evt.newIndex;
      let newObj = this.$util.deepClone(this.pageData.list[formIndex].list[newIndex]);
      newObj.key = newObj.type + '_' + Date.now() + '_' + Math.ceil(Math.random() * 1000000);
      this.$set(this.pageData.list[formIndex].list, newIndex, newObj);
      this.$store.commit('setSelectWg', newObj);
      this.$store.commit('setConfigTab', "widget");
    },
    setConfigTab() {
      this.$store.commit("setConfigTab", "page");
    }
  }
}
</script>
