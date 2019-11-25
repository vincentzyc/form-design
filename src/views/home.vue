<template>
  <div class="home">
    <Header />
    <el-container>
      <div class="form-edit-wrapper flex">
        <el-aside style="min-width:300px;width:20vw">
          <div class="components-list">
            <div class="widget-cate">基础类组件</div>
            <draggable
              tag="ul"
              :list="basicComponents"
              :group="{ name:'widget', pull:'clone',put:false}"
              :sort="false"
              ghostClass="ghost" 
            >
              <li class="form-edit-widget-label" v-for="(item, index) in basicComponents" :key="index">
                <a>{{item.name}}</a>
              </li>
            </draggable>
            <div class="widget-cate">图片类组件</div>
            <draggable
              tag="ul"
              :list="imgComponents"
              :group="{ name:'widget', pull:'clone',put:false}"
              :sort="false"
              ghostClass="ghost" 
            >
              <li class="form-edit-widget-label" v-for="(item, index) in imgComponents" :key="index">
                <a>{{item.name}}</a>
              </li>
            </draggable>
            <div class="widget-cate">辅助类组件</div>
            <draggable
              tag="ul"
              :list="assistComponents"
              :group="{ name:'widget', pull:'clone',put:false}"
              :sort="false"
              ghostClass="ghost" 
            >
              <li class="form-edit-widget-label" v-for="(item, index) in assistComponents" :key="index">
                <a>{{item.name}}</a>
              </li>
            </draggable>
            <div class="widget-cate">高级组件</div>
            <draggable
              tag="ul"
              :list="advancedComponents"
              :group="{ name:'widget', pull:'clone',put:false}"
              filter=".disdraggable"
              :sort="false"
              ghostClass="ghost" 
            >
              <li
                class="form-edit-widget-label"
                :class="{disdraggable:disFormList}"
                v-for="(item, index) in advancedComponents"
                :key="index"
              >
                <a :style="{cursor:disFormList?'no-drop':'move'}">{{item.name}}</a>
              </li>
            </draggable>
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

import allWidget from '@/assets/js/widget.js'
import pageConfigData from '@/assets/js/page-config.js'

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
      basicComponents: allWidget.basicComponents,
      imgComponents: allWidget.imgComponents,
      assistComponents: allWidget.assistComponents,
      advancedComponents: allWidget.advancedComponents
    }
  },
  computed: {
    disFormList() {
      if (this.pageData.list) {
        return this.pageData.list.some(v => {
          return v.type === 'formList';
        });
      }
      return false
    },
    ...mapState({
      pageData: state => state.common.pageData,
      configTab: state => state.common.configTab,
    })
  },
  methods: {
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
      this.$store.commit('setSelectWg', []);
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
