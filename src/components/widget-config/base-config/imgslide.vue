<template>
  <div>
    <el-form-item label="轮播图片设置">
      <Draggable tag="ul" :list="selectWg.value" :group="{ name:'slideList'}" ghostClass="ghost" handle=".move-icon">
        <li v-for="(item, index) in selectWg.value" :key="index" style="border:1px dashed #999">
          <div class="pd10">
            <div class="relative flex flex-center">
              <FileUpload :value.sync="item.image" />
              <div class="absolute-top-right">
                <i class="el-icon-menu move-icon"></i>
                <i class="el-icon-delete delect-icon" @click="handleSlideRemove(index)"></i>
              </div>
            </div>
            <div class="flex">
              <span class="flex-none">图片地址：</span>
              <el-input size="mini" placeholder="请输入图片地址" v-model="item.image"></el-input>
            </div>
            <div class="flex">
              <span class="flex-none">跳转地址：</span>
              <el-input size="mini" placeholder="请输入跳转地址" v-model="item.url"></el-input>
            </div>
          </div>
        </li>
      </Draggable>
      <div class="text-center">
        <el-button type="text" @click="handleAddSlide()">添加图片</el-button>
      </div>
    </el-form-item>
    <el-form-item label="图片高度(px)">
      <el-input-number v-model="selectWg.style.height" :min="100" :max="300" size="small" />
    </el-form-item>
    <el-form-item>
      <span slot="label">
        <span>播放间隔(ms)</span>
        <el-tooltip effect="dark" content="本页面无法看到实时效果，请点击预览查看" placement="top">
          <i class="el-icon-info fs12 mg-l10"></i>
        </el-tooltip>
      </span>
      <el-input-number v-model="selectWg.interval" :min="1000" :max="10000" size="small" />
    </el-form-item>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'
export default {
  components: {
    Draggable
  },
  props: {
    selectWg: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleSlideRemove(index) {
      this.selectWg.value.splice(index, 1)
    },
    handleAddSlide() {
      this.selectWg.value.push({
        url: "https://www.baidu.com/",
        image: "https://www.baidu.com/img/bd_logo1.png"
      })
    }
  }
}
</script>