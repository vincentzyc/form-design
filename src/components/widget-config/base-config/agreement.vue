<template>
  <div class="wg-col-config">
    <p class="lh24 c999 fs12">请预览查看具体效果</p>
    <el-form-item label="默认选中">
      <el-switch v-model="selectWg.value"></el-switch>
    </el-form-item>
    <el-form-item label="文字描述">
      <el-input v-model="selectWg.tipText" placeholder="请输入文字描述"></el-input>
    </el-form-item>

    <el-form-item label="协议列表">
      <Draggable tag="ul" :list="selectWg.titleTexts" :group="{ name:'options'}" ghostClass="ghost" handle=".move-icon">
        <li v-for="(item, index) in selectWg.titleTexts" :key="index">
          <div class="col-itemlist">
            <i class="el-icon-menu move-icon"></i>
            <i class="el-icon-delete delect-icon" @click="handleRemove(index)"></i>

            <el-form-item label="协议名称">
              <el-input v-model="item.title" placeholder="请输入协议名称"></el-input>
            </el-form-item>
            <el-form-item label="协议内容（支持链接页面）">
              <el-input
                type="textarea"
                placeholder="请输入协议内容"
                :autosize="{ minRows: 2, maxRows: 16}"
                v-model="item.text"
              ></el-input>
            </el-form-item>
          </div>
        </li>
      </Draggable>
      <div style="margin-left: 22px;">
        <el-button type="text" @click="handleAdd()">添加选项</el-button>
      </div>
    </el-form-item>

    <el-form-item label="协议文字颜色">
      <el-color-picker :predefine="predefineColors" show-alpha v-model="selectWg.agreementColor" />
    </el-form-item>
  </div>
</template>

<script>
import { mapState } from 'vuex';
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
  computed: {
    ...mapState({
      predefineColors: state => state.common.predefineColors
    })
  },
  methods: {
    handleRemove(index) {
      this.selectWg.titleTexts.splice(index, 1)
    },
    handleAdd() {
      let newItem =
        this.selectWg.titleTexts.length > 0
          ? this.$util.deepClone(this.selectWg.titleTexts[this.selectWg.titleTexts.length - 1])
          : {
            title: "《协议名称》",
            text: ""
          }
      this.selectWg.titleTexts.push(newItem)
    }
  }
}
</script>