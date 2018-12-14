<template>
  <div class="home">
    <Header/>
    <el-container>
      <div class="form-edit-wrapper flex flex-auto">
        <el-aside style="wdith: 300px;">
          <div class="components-list">
            <div class="widget-cate">基础字段</div>
            <draggable element="ul" :list="basicComponents" :options="{group:'widget',sort:false, ghostClass: 'ghost'}">
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
            <widget-form/>
          </el-main>
        </el-container>

        <el-aside class="widget-config-container">
          <el-container>
            <el-header height="45px">
              <div class="config-tab" :class="{active: configTab==='widget'}" @click="handleConfigSelect('widget')">字段属性</div>
              <div class="config-tab" :class="{active: configTab==='page'}" @click="handleConfigSelect('page')">全局属性</div>
            </el-header>
            <el-main class="config-content">
              <widget-config v-show="configTab==='widget'"/>
              <page-config v-show="configTab==='page'"/>
            </el-main>
          </el-container>
        </el-aside>
      </div>
    </el-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Draggable from 'vuedraggable'
import Header from '@/components/header'
import WidgetConfig from '@/components/WidgetConfig'
import PageConfig from '@/components/PageConfig'
import WidgetForm from '@/components/WidgetForm'

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
      configTab: 'widget'
    }
  },
  computed: {
    ...mapState({
      basicComponents: state => state.common.basicComponents
    })
  },
  methods: {
    handleConfigSelect(value) {
      this.configTab = value
    },
    handlePreview() {
      console.log("预览");
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
