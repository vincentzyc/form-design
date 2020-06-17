<template>
  <div class="wg-col-config">
    <el-form-item label="显示类型">
      <el-radio-group v-model="selectWg.styleType">
        <el-radio-button v-for="item in selectWg.styleTypes" :label="item.value" :key="item.value">{{item.label}}</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="使用图片按钮">
      <el-switch v-model="selectWg.isImgBtn"></el-switch>
    </el-form-item>
    <el-form-item label="提示弹框配置" v-if="selectWg.dialog">
      <el-button type="primary" size="mini" @click="dialogVisible=true">配置弹框</el-button>
    </el-form-item>
    <el-form-item label="按钮间距" v-if="selectWg.style.hasOwnProperty('pxBtnPadding')">
      <el-input-number
        v-model="selectWg.style.pxBtnPadding"
        :min="0"
        :max="30"
        :step="1"
        step-strictly
        size="small"
        @change="v=>selectWg.style.btnPadding=v+'px'"
      />
    </el-form-item>
    <el-form-item label="按钮列表">
      <draggable tag="ul" :list="selectWg.smslist" :group="{ name:'options'}" ghostClass="ghost" handle=".move-icon">
        <li v-for="(item, index) in selectWg.smslist" :key="index">
          <div class="col-itemlist">
            <i class="el-icon-menu move-icon"></i>
            <i class="el-icon-delete delect-icon" @click="handleRemove(index)"></i>
            <div class="flex pd5">
              <span class="width70 flex-none">收件人：</span>
              <el-input size="mini" placeholder="请输入收件人" v-model.trim.number="selectWg.smslist[index].addressee"></el-input>
            </div>
            <div class="flex pd5">
              <span class="width70 flex-none">短信内容：</span>
              <el-input
                type="textarea"
                size="mini"
                placeholder="请输入短信内容"
                v-model.trim="selectWg.smslist[index].content"
              ></el-input>
            </div>

            <div class="flex pd5" v-if="selectWg.isImgBtn">
              <span class="width70 flex-none">上传图片：</span>
              <FileUpload class="mg-t10" :value.sync="selectWg.smslist[index].img" />
            </div>
            <div class="flex pd5" v-else>
              <span class="width70 flex-none">按钮文字：</span>
              <el-input size="mini" placeholder="请输入按钮文字" v-model.trim="selectWg.smslist[index].btnText"></el-input>
            </div>
          </div>
        </li>
      </draggable>
      <div style="margin-left: 22px;">
        <el-button type="text" @click="handleAdd()">添加选项</el-button>
      </div>
    </el-form-item>

    <el-dialog :visible.sync="dialogVisible" width="700px" :close-on-click-modal="false">
      <div style="margin-top:-30px">
        <div class="wgbutton-dialog">
          <div class="dialog-header" v-show="selectWg.dialog.title">{{selectWg.dialog.title}}</div>
          <div class="dialog-message" :style="{textAlign:selectWg.dialog.messageAlign}">
            <p class="lh24">{{selectWg.dialog.message}}</p>
            <p class="lh24 fs12" style="color:#ac242e">温馨提示：若不能自动调起短信页面，请手动发送内容"xxx"到"xxx"</p>
          </div>
          <div
            class="footer-buttons flex flex-center"
            v-if="selectWg.dialog.showCancelButton||selectWg.dialog.showConfirmButton"
          >
            <div
              class="flex-auto"
              v-if="selectWg.dialog.showCancelButton"
              style="border-right:1px solid #eee"
              :style="{color:selectWg.dialog.cancelButtonColor}"
            >{{selectWg.dialog.cancelButtonText}}</div>
            <div
              class="flex-auto"
              v-if="selectWg.dialog.showConfirmButton"
              :style="{color:selectWg.dialog.confirmButtonColor}"
            >{{selectWg.dialog.confirmButtonText}}</div>
          </div>
        </div>
        <el-row :gutter="20">
          <el-col :span="24" class="mg-b15">
            <p class="mg-b5">弹框内容</p>
            <el-input
              type="textarea"
              v-model.trim="selectWg.dialog.message"
              placeholder="请输入弹框内容"
              :autosize="{ minRows: 2, maxRows:5}"
            ></el-input>
          </el-col>
          <el-col :span="12" class="mg-b15" style="height:75px">
            <p class="mg-b5">标题</p>
            <el-input v-model.trim="selectWg.dialog.title" placeholder="请输入标题"></el-input>
          </el-col>
          <el-col :span="12" class="mg-b15" style="height:75px">
            <p class="mg-b5">弹框内容对齐方式</p>
            <el-radio-group v-model="selectWg.dialog.messageAlign">
              <el-radio-button label="left">左对齐</el-radio-button>
              <el-radio-button label="center">居中对齐</el-radio-button>
              <el-radio-button label="right">右对齐</el-radio-button>
            </el-radio-group>
          </el-col>
          <el-col :span="12" class="mg-b15" style="height:60px">
            <p class="mg-b5">显示确认按钮</p>
            <el-switch v-model="selectWg.dialog.showConfirmButton"></el-switch>
          </el-col>
          <el-col :span="12" class="mg-b15" style="height:60px">
            <p class="mg-b5">显示取消按钮</p>
            <el-switch v-model="selectWg.dialog.showCancelButton"></el-switch>
          </el-col>

          <div v-show="selectWg.dialog.showConfirmButton">
            <el-col :span="12" class="mg-b15" style="height:75px">
              <p class="mg-b5">确认按钮文字</p>
              <el-input v-model.trim="selectWg.dialog.confirmButtonText" placeholder="请输入确认按钮文字"></el-input>
            </el-col>
            <el-col :span="12" class="mg-b15" style="height:75px">
              <p class="mg-b5">确认按钮文字颜色</p>
              <el-color-picker :predefine="predefineColors" show-alpha v-model="selectWg.dialog.confirmButtonColor" />
            </el-col>
          </div>
          <div v-show="selectWg.dialog.showCancelButton">
            <el-col :span="12" class="mg-b15" style="height:75px">
              <p class="mg-b5">取消按钮文字</p>
              <el-input v-model.trim="selectWg.dialog.cancelButtonText" placeholder="请输入取消按钮文字"></el-input>
            </el-col>
            <el-col :span="12" class="mg-b15" style="height:75px">
              <p class="mg-b5">取消按钮文字颜色</p>
              <el-color-picker :predefine="predefineColors" show-alpha v-model="selectWg.dialog.cancelButtonColor" />
            </el-col>
          </div>
        </el-row>
      </div>
      <div class="text-center mg-t20">
        <el-button type="primary" @click="dialogVisible=false">确定</el-button>
      </div>
    </el-dialog>
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
  data() {
    return {
      dialogVisible: false
    }
  },
  computed: {
    ...mapState({
      predefineColors: state => state.common.predefineColors
    })
  },
  methods: {
    handleRemove(index) {
      this.selectWg.smslist.splice(index, 1)
    },
    handleAdd() {
      let newItem =
        this.selectWg.smslist.length > 0
          ? this.$util.deepClone(this.selectWg.smslist[this.selectWg.smslist.length - 1])
          : {
            addressee: "收件人1",
            content: "短信内容1",
            btnText: "发送短信1",
            img: ""
          }
      this.selectWg.smslist.push(newItem)
    }
  }
}
</script>

<style lang="stylus" scoped>
.wgbutton-dialog {
  width: 300px;
  margin: 0 auto 20px auto;
  text-align: center;
  border: 1px solid #eee;
  border-radius: 5px;
  overflow: hidden;

  .dialog-header {
    padding-top: 15px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
  }

  .dialog-message {
    padding: 15px;
    overflow-y: auto;
    font-size: 14px;
    line-height: 20px;
    white-space: pre-wrap;
    text-align: center;
    word-wrap: break-word;
  }

  .footer-buttons {
    border-top: 1px solid #eee;
    width: 100%;
    line-height: 40px;
  }
}
</style>