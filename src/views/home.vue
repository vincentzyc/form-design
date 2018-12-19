<template>
  <div class="home">
    <Header/>
    <el-container>
      <div class="form-edit-wrapper flex flex-auto">
        <el-aside style="wdith: 300px;">
          <div class="components-list">
            <div class="widget-cate">基础字段</div>
            <draggable
              element="ul"
              :list="basicComponents"
              :options="{group:{ name:'widget', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}"
              @end="handleMoveEnd"
              @start="handleMoveStart"
            >
              <li class="form-edit-widget-label" v-for="(item, index) in basicComponents" :key="index">
                <a>{{item.name}}</a>
              </li>
            </draggable>
          </div>
        </el-aside>
        <el-container class="center-container" direction="vertical">
          <el-header class="btn-bar" style="height: 45px;">
            <el-button type="text" size="medium" icon="el-icon-view" @click="handlePreview()">预览</el-button>
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
import Draggable from 'vuedraggable'
import Header from '@/components/header'
import WidgetConfig from '@/components/widget-config'
import PageConfig from '@/components/page-config'
import WidgetForm from '@/components/widget-form'
import allWidget from '@/assets/json/all-widget.json'

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
      configTab: 'widget',
    }
  },
  methods: {
    handleConfigSelect(value) {
      this.configTab = value
    },
    handleMoveEnd(evt) {
      console.log('home-end', evt)
    },
    handleMoveStart({ oldIndex }) {
      console.log('home-start', oldIndex, this.basicComponents)
    },
    handlePreview() {
      console.log("预览");
      let pageData = this.$store.state.common.pageData;
      let newWin = window.open("http://192.168.218.113:3000");
      let timer = setInterval(() => {
        newWin.postMessage(pageData, 'http://192.168.218.113:3000');
      }, 200);
      window.addEventListener('message', function (event) {
        if (event.origin !== 'http://192.168.218.113:3000') return;
        if (event.data === 'Received') clearInterval(timer)
      }, false);
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/cover.scss";
@import "@/assets/css/index.scss";
@import "@/assets/css/widget.scss";
@import "@/assets/css/config.scss";
.widget-empty {
  background: url("../assets/img/form_empty.png") no-repeat;
  background-position: 50%;
}
</style>
