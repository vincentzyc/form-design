<template>
  <div class="home">
    <Header/>
    <el-container>
      <div class="form-edit-wrapper flex flex-auto">
        <el-aside style="wdith: 300px;">
          <div class="components-list">
            <div class="widget-cate">基础类组件</div>
            <draggable element="ul" :list="basicComponents" :options="{group:{ name:'widget', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}">
              <li class="form-edit-widget-label" v-for="(item, index) in basicComponents" :key="index">
                <a>{{item.name}}</a>
              </li>
            </draggable>
            <div class="widget-cate">图片类组件</div>
            <draggable element="ul" :list="imgComponents" :options="{group:{ name:'widget', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}">
              <li class="form-edit-widget-label" v-for="(item, index) in imgComponents" :key="index">
                <a>{{item.name}}</a>
              </li>
            </draggable>
            <div class="widget-cate">辅助类组件</div>
            <draggable element="ul" :list="assistComponents" :options="{group:{ name:'widget', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}">
              <li class="form-edit-widget-label" v-for="(item, index) in assistComponents" :key="index">
                <a>{{item.name}}</a>
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

        <el-aside class="widget-config-container">
          <el-container>
            <el-header height="45px">
              <div class="config-tab" :class="{active: configTab=='widget'}" @click="handleConfigSelect('widget')">字段属性</div>
              <div class="config-tab" :class="{active: configTab=='page'}" @click="handleConfigSelect('page')">页面属性</div>
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

import allWidget from '@/assets/json/widget.json'
import pageConfigData from '@/assets/json/page-config.json'

export default {
  name: 'fm-making-form',
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
    }
  },
  computed: {
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
      let newWin = window.open(this.$api.previewUrl);
      let timer = setInterval(() => {
        newWin.postMessage(this.pageData, this.$api.previewUrl);
      }, 200);
      window.addEventListener('message', event => {
        if (event.origin !== this.$api.previewUrl) return;
        if (event.data === 'Received') clearInterval(timer)
      }, false);
    },
    handleReset() {
      let initialPageData = {
        formList: [],
        list: [],
        config: { ...pageConfigData }
      };
      this.$store.commit('setSelectWg', []);
      this.$store.commit('setSelectTheme', "");
      this.$store.commit('setPageData', initialPageData);
    },
    handleSave() {
      this.$api.setLStorage('pageData', this.pageData);
      this.$alert('保存成功');
    }
  },
  mounted() {
    this.$nextTick(function () {
      //为了防止火狐浏览器拖拽的时候以新标签打开，此代码真实有效
      document.body.ondrop = function (event) {
        event.preventDefault();
        event.stopPropagation();
      }
    })
  },
  created() {
    let pageData = this.$api.getLStorage('pageData');
    if (pageData) {
      this.$store.commit('setPageData', pageData);
    } else {
      this.pageData.config = { ...pageConfigData };
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/index.scss";
@import "@/assets/css/widget.scss";
@import "@/assets/css/config.scss";
@import "@/assets/css/themes.scss";
.widget-empty {
  background-image: url("../assets/img/form_empty.png");
  background-repeat: no-repeat;
  background-position: 50%;
}
</style>
