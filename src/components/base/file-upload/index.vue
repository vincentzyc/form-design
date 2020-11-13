<template>
  <el-drawer :visible.sync="model" :with-header="false" direction="ltr" size="36%">
    <div class="drawer-content">
      <el-upload
        :auto-upload="false"
        :before-upload="beforeUpload"
        :multiple="false"
        :on-change="changeFile"
        :show-file-list="false"
        action="https://jsonplaceholder.typicode.com/posts/"
        drag
        ref="upload"
        style="width:360px;margin:auto"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将图片拖到此处，或
          <em>点击上传</em>
        </div>
      </el-upload>
      <div style="width:100%;height:80px">
        <div class="flex">
          <span>压缩率：{{quality}}%</span>
          <div class="flex-auto mg-l20">
            <el-slider @change="compressorFile" v-model="quality"></el-slider>
          </div>
        </div>
        <div class="flex" v-if="file">
          <span class="flex-auto">
            源文件大小：
            <span class="cred">{{fileSize.before}}</span>
          </span>
          <span class="flex-auto">
            压缩后大小：
            <span class="cgreen">{{fileSize.after}}</span>
          </span>
        </div>
      </div>
      <div class="preview-body">
        <div v-if="file">
          <p>
            压缩后
            <i class="el-icon-bottom"></i>
          </p>
          <el-image :preview-src-list="srcList" :src="imageUrl" style="width: 100%;" v-if="imageUrl"></el-image>
          <p>
            源文件
            <i class="el-icon-bottom"></i>
          </p>
          <el-image :preview-src-list="srcList" :src="sourceUrl" style="width: 100%;" v-if="sourceUrl"></el-image>
        </div>
      </div>
      <div class="drawer-footer flex">
        <el-button @click="model=false" class="flex-auto">取 消</el-button>
        <el-button @click="submitUpload" class="flex-auto" type="primary">上 传</el-button>
      </div>
    </div>
  </el-drawer>
</template>
<script>
import Compressor from 'compressorjs';
export default {
  props: {
    value: Boolean
  },
  data() {
    return {
      file: null,
      fileList: [],
      quality: 80,
      srcList: [],
      imageUrl: '',
      sourceUrl: '',
      fileSize: {
        before: 0,
        after: 0
      }
    };
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    }
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    changeFile(file, fileList) {
      console.log(file, fileList);
      this.file = file
      this.compressorFile(this.quality)
    },
    compressorFile(v) {
      if (!this.file) return
      this.srcList = []
      this.fileSize.before = Math.round(this.file.size / 1024 * 10) / 10 + 'KB';
      this.sourceUrl = URL.createObjectURL(this.file.raw);
      new Compressor(this.file.raw, {
        quality: v / 100,
        success: res => {
          this.fileSize.after = Math.round(res.size / 1024 * 10) / 10 + 'KB';
          this.imageUrl = URL.createObjectURL(res);
          this.srcList = [this.imageUrl, this.sourceUrl]
        },
      });
    },
    beforeUpload(file) {
      console.log('压缩前', parseInt(file.size / 1024), file);
      return new Promise((resolve, reject) => {
        new Compressor(file, {
          quality: this.quality / 100,
          success: res => {
            console.log('压缩后', parseInt(res.size / 1024), res);
            this.imageUrl = URL.createObjectURL(res);
            resolve(res)
          },
          error: reject,
        });
      })
    }
  }
}
</script>

<style scoped>
.drawer-content {
  padding: 20px;
  height: 100%;
}
.drawer-content >>> .el-icon-circle-close {
  color: #fff;
}
.preview-body {
  overflow-y: scroll;
  padding: 10px 0;
  height: calc(100% - 335px);
}
.drawer-footer {
  width: 100%;
  padding: 20px;
}
.cred {
  color: #ff0000;
}
.cgreen {
  color: #38b03f;
}
</style>