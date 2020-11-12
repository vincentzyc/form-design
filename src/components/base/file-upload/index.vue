<template>
  <div>
    <el-upload
      :auto-upload="false"
      :before-upload="beforeUpload"
      :multiple="false"
      :on-change="changeFile"
      action="https://jsonplaceholder.typicode.com/posts/"
      class="upload-demo"
      drag
      ref="upload"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        将文件拖到此处，或
        <em>点击上传</em>
      </div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <el-slider @change="compressorFile" v-model="quality"></el-slider>
    <img :src="imageUrl" class="avatar" v-if="imageUrl" />
    <el-button @click="submitUpload" size="small" style="margin-left: 10px;" type="success">上传到服务器</el-button>
  </div>
</template>
<script>
import Compressor from 'compressorjs';
export default {
  data() {
    return {
      file: null,
      fileList: [],
      quality: 80,
      imageUrl: ''
    };
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    changeFile(file, fileList) {
      console.log(file, fileList);
      this.file = file
    },
    compressorFile(v) {
      if (!this.file) return
      new Compressor(this.file.raw, {
        quality: v / 100,
        success: res => {
          console.log('压缩后', parseInt(res.size / 1024), res);
          this.imageUrl = URL.createObjectURL(res);
        },
      });
    },
    beforeUpload(file) {
      console.log('压缩前', parseInt(file.size / 1024), file);
      return new Promise((resolve, reject) => {
        new window.Compressor(file, {
          quality: this.quality / 100,
          success: res => {
            console.log('压缩后', parseInt(res.size / 1024), res);
            this.imageUrl = URL.createObjectURL(res);
          },
          error: reject,
        });
        // const reader = new FileReader()
        // const image = new Image()
        // image.onload = (imageEvent) => {
        //   const canvas = document.createElement('canvas');
        //   const context = canvas.getContext('2d');
        //   const width = image.width * _this.imgQuality
        //   const height = image.height * _this.imgQuality
        //   canvas.width = width;
        //   canvas.height = height;
        //   context.clearRect(0, 0, width, height);
        //   context.drawImage(image, 0, 0, width, height);
        //   const dataUrl = canvas.toDataURL(file.type);
        //   const blobData = _this.dataURItoBlob(dataUrl, file.type);
        //   resolve(blobData)
        // }
        // reader.onload = (e => { image.src = e.target.result; });
        // reader.readAsDataURL(file);
      })
    }
  }
}
</script>