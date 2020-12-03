<template>
  <el-drawer :visible.sync="model" :with-header="false" direction="ltr" size="36%">
    <div class="drawer-content">
      <el-upload
        :auto-upload="false"
        :before-upload="beforeUpload"
        :multiple="false"
        :on-change="changeFile"
        :on-error="uploadError"
        :on-progress="handleProgress"
        :on-success="handleSuccess"
        :show-file-list="false"
        action="https://jsonplaceholder.typicode.com/posts/"
        drag
        ref="upload"
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
          <el-image :preview-src-list="srcList" :src="compressUrl" style="width: 100%;" v-if="compressUrl"></el-image>
          <hr />
          <p>
            源文件
            <i class="el-icon-bottom"></i>
          </p>
          <el-image :preview-src-list="srcList" :src="sourceUrl" style="width: 100%;" v-if="sourceUrl"></el-image>
        </div>
      </div>
      <div class="drawer-footer flex">
        <el-button @click="model=false" class="flex-auto">取 消</el-button>
        <el-button :disabled="!this.file" @click="submitUpload(true)" class="flex-auto" type="danger">上传源文件</el-button>
        <el-button
          :disabled="!this.compressFile"
          @click="submitUpload(false)"
          class="flex-auto"
          type="primary"
        >上传压缩文件</el-button>
      </div>
    </div>
    <transition name="el-fade-in-linear" v-if="uploading">
      <div class="flex flex-column flex-center uploader-progress">
        <el-progress :percentage="uploadPercentage" :width="100" class="progress" type="circle"></el-progress>
        <el-button @click.stop="cancelUpload()" class="mg-t10" type="text">取消上传</el-button>
      </div>
    </transition>
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
      imgTypeList: ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'],
      file: null,
      compressFile: null,
      compressUrl: '',
      sourceUrl: '',
      quality: 80,
      uploading: false,
      isUploadSource: false,
      srcList: [],
      fileSize: {
        before: 0,
        after: 0
      },
      uploadPercentage: 0,
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
    resetUpload() {
      this.$refs.upload.clearFiles();
      setTimeout(() => {
        Object.assign(this.$data, this.$options.data())
      }, 300);
    },
    startUpload() {
      this.uploading = true;
    },
    submitUpload(isUploadSource) {
      if (!this.file) return
      if (!this.compressFile) return
      this.isUploadSource = isUploadSource
      const realFile = this.isUploadSource ? this.file.raw : this.compressFile
      const isImg = this.imgTypeList.includes(realFile.type)
      const isLimit = realFile.size / 1024 <= 50;
      if (!isImg) {
        this.$message.error('请上传图片');
        return false
      }
      if (isLimit) {
        this.$refs.upload.submit();
      } else {
        this.$message.error('上传图片大小不能超过 50 K !');
        return false
      }
    },
    changeFile(file) {
      this.file = file
      this.compressorFile(this.quality)
    },
    uploadError() {
      // console.log(err);
      this.resetUpload()
      this.$alert('网络繁忙，请稍后重试');
    },
    handleProgress(event, file) {
      this.uploadPercentage = parseInt(file.percentage, 10);
    },
    handleSuccess() {
      this.$emit('success', this.compressUrl)
      if (this.uploadPercentage !== 100) this.uploadPercentage = 100;
      this.resetUpload()
      this.model = false
    },
    cancelUpload() {
      if (!this.uploading) return;
      this.$refs.upload.abort();
      this.$message({
        message: '已取消上传',
        type: 'warning'
      });
      return this.resetUpload();
    },
    compressorFile(v) {
      if (!this.file) return
      this.srcList = []
      this.fileSize.before = Math.round(this.file.size / 1024 * 10) / 10 + 'KB';
      this.sourceUrl = URL.createObjectURL(this.file.raw);
      new Compressor(this.file.raw, {
        quality: v / 100,
        convertSize: 51200,  // png图片超过50KB时启用压缩，压缩后会转成jpg图片，失去透明度
        success: res => {
          this.compressFile = res
          this.compressUrl = URL.createObjectURL(res);
          this.fileSize.after = Math.round(res.size / 1024 * 10) / 10 + 'KB';
          this.srcList = [this.compressUrl, this.sourceUrl]
        },
        error: err => {
          this.compressUrl = ''
          this.compressFile = null
          this.fileSize.after = 0
          this.$emit('fail', err)
          console.log(err.message);
        },
      });
    },
    beforeUpload() {
      if (!this.file) return
      if (!this.compressFile) return
      const realFile = this.isUploadSource ? this.file.raw : this.compressFile
      this.startUpload()
      return new Promise(resolve => {
        resolve(realFile)
      })
    }
  }
}
</script>

<style scoped>
.drawer-content {
  padding: 20px;
  height: 100vh;
}
.drawer-content >>> .el-upload.el-upload--text,
.drawer-content >>> .el-upload-dragger {
  width: 100%;
  height: 120px;
}

.drawer-content >>> .el-upload-dragger .el-icon-upload {
  margin: 0;
  line-height: 1;
}
.drawer-content >>> .el-icon-circle-close {
  color: #fff;
}
.preview-body {
  overflow-y: scroll;
  height: calc(100% - 275px);
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