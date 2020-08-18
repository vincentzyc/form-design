<template>
  <div class="wg-col-config">
    <el-form-item label="显示类型">
      <el-radio-group v-model="selectWg.styleType">
        <el-radio-button v-for="item in selectWg.styleTypes" :label="item.value" :key="item.value">{{item.label}}</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="图片列表">
      <Draggable tag="ul" :list="selectWg.imglist" :group="{ name:'options'}" ghostClass="ghost" handle=".move-icon">
        <li v-for="(item, index) in selectWg.imglist" :key="index">
          <div class="col-itemlist">
            <i class="el-icon-menu move-icon"></i>
            <i class="el-icon-delete delect-icon" @click="handleRemove(index)"></i>

            <div class="flex pd5">
              <span class="width70 flex-none">上传图片：</span>
              <FileUpload class="mg-t10" :value.sync="selectWg.imglist[index].img" />
            </div>
            <el-form-item label="跳转地址(空或格式错误都不会跳转)">
              <el-input v-model="selectWg.imglist[index].link" @change="v=>$util.checkLink(v)"></el-input>
            </el-form-item>
          </div>
        </li>
      </Draggable>
      <div style="margin-left: 22px;">
        <el-button type="text" @click="handleAdd()">添加选项</el-button>
      </div>
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
    handleRemove(index) {
      this.selectWg.imglist.splice(index, 1)
    },
    handleAdd() {
      let newItem =
        this.selectWg.imglist.length > 0
          ? this.$util.deepClone(this.selectWg.imglist[this.selectWg.imglist.length - 1])
          : {
            link: "",
            img: ""
          }
      this.selectWg.imglist.push(newItem)
    }
  }
}
</script>