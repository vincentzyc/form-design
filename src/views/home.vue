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
              :options="{group:{ name:'people', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}"
              @end="handleMoveEnd"
              @start="handleMoveStart"
            >
              <li class="form-edit-widget-label" v-for="(item, index) in basicComponents" :key="index">
                <a>
                  <span>{{item.name}}</span>
                </a>
              </li>
            </draggable>

            <div class="widget-cate">布局字段</div>
            <draggable
              element="ul"
              :list="layoutComponents"
              :options="{group:{ name:'people', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}"
              @end="handleMoveEnd"
              @start="handleMoveStart"
            >
              <li class="form-edit-widget-label data-grid" v-for="(item, index) in layoutComponents" :key="index">
                <a>
                  <span>{{item.name}}</span>
                </a>
              </li>
            </draggable>
          </div>
        </el-aside>
        <el-container class="center-container" direction="vertical">
          <el-header class="btn-bar" style="height: 45px;">
            <el-button type="text" size="medium" icon="el-icon-view" @click="handlePreview()">预览</el-button>
          </el-header>
          <el-main>
            <widget-form ref="widgetForm" :data="widgetForm" :select.sync="widgetFormSelect"></widget-form>
          </el-main>
        </el-container>

        <el-aside class="widget-config-container">
          <el-container>
            <el-header height="45px">
              <div class="config-tab" :class="{active: configTab=='widget'}" @click="handleConfigSelect('widget')">字段属性</div>
              <div class="config-tab" :class="{active: configTab=='form'}" @click="handleConfigSelect('form')">表单属性</div>
            </el-header>
            <el-main class="config-content">
              <widget-config v-show="configTab=='widget'" :data="widgetFormSelect"></widget-config>
              <form-config v-show="configTab=='form'" :data="widgetForm.config"></form-config>
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
import WidgetConfig from '@/components/WidgetConfig'
import FormConfig from '@/components/FormConfig'
import WidgetForm from '@/components/WidgetForm'
import allWidget from '@/assets/json/all-widget.json'

export default {
  name: 'fm-making-form',
  components: {
    Draggable,
    Header,
    WidgetConfig,
    FormConfig,
    WidgetForm
  },
  data() {
    return {
      basicComponents: allWidget.basicComponents,
      layoutComponents: allWidget.layoutComponents,
      widgetForm: {
        list: [],
        config: {
          labelWidth: 100,
          labelPosition: 'top'
        },
      },
      configTab: 'widget',
      widgetFormSelect: null
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
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/cover.scss";
@import "@/assets/css/index.scss";
.widget-empty {
  background: url("../assets/img/form_empty.png") no-repeat;
  background-position: 50%;
}
</style>
