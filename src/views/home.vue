<template>
  <div class="home">
    <Header />
    <el-container>
      <div class="form-edit-wrapper flex">
        <el-aside style="min-width:300px;width:20vw">
          <div class="flex components-list">
            <div class="flex flex-column flex-none components-title">
              <el-button
                size="small"
                round
                v-for="item in widgetLevel1"
                :key="item.value"
                :type="item.value===widgetLevel2.value?'primary':''"
                @click="handleWidget(item)"
              >{{item.name}}</el-button>
            </div>
            <ul class="flex-auto components-content">
              <div v-for="level1 in widgetLevel1" :key="level1.value" v-show="level1.value===widgetLevel2.value">
                <li v-for="level2 in level1.data" :key="level2.value">
                  <h4 class="widget-title">{{level2.name}}</h4>
                  <Draggable
                    tag="ul"
                    v-model="level2.data"
                    :group="{ name:'widget', pull:'clone', put:false }"
                    :sort="false"
                    @end="dragEnd"
                    :clone="cloneData"
                    ghostClass="ghost"
                    :filter="level2.dragOnce?'.disdraggable':''"
                  >
                    <li
                      v-for="level3 in level2.data"
                      :key="level3.apiKey"
                      class="form-edit-widget-label"
                      :class="{disdraggable:disFormList(level3)}"
                    >
                      <img
                        :src="BASE_URL+'static/img/widget/'+level1.value+'/'+level3.type+'.jpg'"
                        :alt="level3.name"
                        width="100%"
                      />
                    </li>
                  </Draggable>
                </li>
              </div>
            </ul>
          </div>
        </el-aside>

        <el-container class="center-container" direction="vertical">
          <el-header class="btn-bar" style="height: 45px;">
            <el-button type="text" size="medium" icon="el-icon-refresh" @click="handleReset()" class="mg-r15">重置</el-button>
            <el-button type="text" size="medium" icon="el-icon-view" @click="handlePreview()" class="mg-r15">预览</el-button>
            <el-button type="text" size="medium" icon="el-icon-document" @click="handleSave()" class="mg-r15">保存</el-button>
          </el-header>
          <el-main>
            <widget-form></widget-form>
          </el-main>
        </el-container>

        <el-aside class="widget-config-container" style="min-width:300px;width:20vw">
          <el-container>
            <el-header height="45px" class="flex">
              <div
                class="config-tab flex-auto"
                :class="{active: configTab=='widget'}"
                @click="handleConfigSelect('widget')"
              >字段属性</div>
              <div
                class="config-tab flex-auto"
                :class="{active: configTab=='page'}"
                @click="handleConfigSelect('page')"
              >页面属性</div>
            </el-header>
            <el-main class="config-content">
              <widget-config v-show="configTab=='widget'"></widget-config>
              <page-config v-show="configTab=='page'"></page-config>
            </el-main>
          </el-container>
        </el-aside>
      </div>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Draggable from 'vuedraggable'
import Header from '@/components/header'
import WidgetConfig from '@/components/widget-config'
import PageConfig from '@/components/page-config'
import WidgetForm from '@/components/widget-form'

import widgetLevel1 from '@/assets/js/widget'
import pageConfigData from '@/assets/js/page-config'

export default {
  name: 'form-design',
  components: {
    Draggable,
    Header,
    WidgetConfig,
    PageConfig,
    WidgetForm
  },
  data() {
    return {
      widgetLevel1: widgetLevel1,
      widgetLevel2: widgetLevel1[0]
    }
  },
  computed: {
    ...mapState({
      pageData: state => state.common.pageData,
      configTab: state => state.common.configTab,
    })
  },
  methods: {
    handleWidget(item) {
      this.widgetLevel2 = item;
    },
    dragEnd() {
      this.$store.commit('setDragWg', '')
    },
    disFormList(wgItem) {
      // 阻止组件嵌套
      if (!this.$util.hasKey(wgItem,'list')) return false;
      if (this.pageData.list) {
        return this.pageData.list.some(v => {
          return v.type === wgItem.type;
        });
      }
      return false
    },
    cloneData(obj) {
      const elKey = Date.now() + '_' + Math.ceil(Math.random() * 1000000);
      let newObj = this.$util.deepClone(obj);
      newObj.key = newObj.type + '_' + elKey;
      this.$store.commit('setDragWg', newObj)
      return newObj;
    },
    handleConfigSelect(value) {
      this.$store.commit('setConfigTab', value)
    },
    handlePreview() {
      let newWin = window.open(this.$api.previewUrl());
      let timer = setInterval(() => {
        newWin.postMessage(this.pageData, this.$api.previewUrl());
      }, 200);
      window.addEventListener('message', event => {
        if (event.origin !== this.$api.previewOrigin()) return;
        if (event.data === 'Received') clearInterval(timer)
      }, false);
    },
    handleReset() {
      this.$store.commit('setSelectWg', {});
      this.$store.commit('setPageData', this.$util.deepClone(pageConfigData.pageConfig));
    },
    handleSave() {
      this.$util.setLStorage('pageData', this.pageData);
      this.$alert('保存成功', { showClose: false });
    }
  },
  mounted() {
    this.$nextTick(function () {
      //防止火狐浏览器拖拽的时候以新标签打开
      document.body.ondrop = function (event) {
        event.preventDefault();
        event.stopPropagation();
      }
    })
  },
  created() {
    let pageData = this.$util.getLStorage('pageData');
    if (pageData) return this.$store.commit('setPageData', pageData);
    this.$store.commit('setPageData', this.$util.deepClone(pageConfigData.themes[0].pageData));
  }
}
</script>

<style lang="stylus">
@import '../assets/css/index.styl';
@import '../assets/css/widget.styl';
@import '../assets/css/config.styl';
@import '../assets/css/themes.styl';
</style>
