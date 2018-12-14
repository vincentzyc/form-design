<template>
  <div v-if="show">
    <el-form label-position="top">
      <el-form-item label="提示内容" v-if="Object.keys(data.config).indexOf('placeholder')>=0">
        <el-input v-model="data.config.placeholder"></el-input>
      </el-form-item>
      <el-form-item label="选项" v-if="Object.keys(data.config).indexOf('options')>=0">
        <el-radio-group v-model="data.config.remote" size="mini" style="margin-bottom:10px;">
          <el-radio-button :label="false">静态数据</el-radio-button>
          <el-radio-button :label="true">远端数据</el-radio-button>
        </el-radio-group>
        <template v-if="data.config.remote">
          <div>
            <el-input size="mini" style v-model="data.config.remoteFunc">
              <template slot="prepend">远端方法</template>
            </el-input>
            <el-input size="mini" style v-model="data.config.props.value">
              <template slot="prepend">值</template>
            </el-input>
            <el-input size="mini" style v-model="data.config.props.label">
              <template slot="prepend">标签</template>
            </el-input>
          </div>
        </template>
        <template v-else>
          <template v-if="data.type=='radio' || (data.type=='select'&&!data.config.multiple)">
            <el-radio-group v-model="data.config.defaultValue">
              <draggable element="ul" :list="data.config.options" :options="{group:{ name:'options'}, ghostClass: 'ghost',handle: '.drag-item'}">
                <li v-for="(item, index) in data.config.options" :key="index">
                  <el-radio :label="item.value" style="margin-right: 5px;">
                    <el-input :style="{'width': data.config.showLabel? '90px': '190px' }" size="mini" v-model="item.value"></el-input>
                    <el-input style="width:100px;" size="mini" v-if="data.config.showLabel" v-model="item.label"></el-input>
                  </el-radio>
                  <i class="drag-item" style="font-size: 16px;margin: 0 5px;cursor: move;"></i>
                  <el-button
                    @click="handleOptionsRemove(index)"
                    circle
                    plain
                    type="danger"
                    size="mini"
                    icon="el-icon-minus"
                    style="padding: 4px;margin-left: 5px;"
                  ></el-button>
                </li>
              </draggable>
            </el-radio-group>
          </template>

          <template v-if="data.type=='checkbox' || (data.type=='select' && data.config.multiple)">
            <el-checkbox-group v-model="data.config.defaultValue">
              <draggable element="ul" :list="data.config.options" :options="{group:{ name:'options'}, ghostClass: 'ghost',handle: '.drag-item'}">
                <li v-for="(item, index) in data.config.options" :key="index">
                  <el-checkbox :label="item.value" style="margin-right: 5px;">
                    <el-input :style="{'width': data.config.showLabel? '90px': '190px' }" size="mini" v-model="item.value"></el-input>
                    <el-input style="width:100px;" size="mini" v-if="data.config.showLabel" v-model="item.label"></el-input>
                  </el-checkbox>
                  <i class="drag-item" style="font-size: 16px;margin: 0 5px;cursor: move;"></i>
                  <el-button
                    @click="handleOptionsRemove(index)"
                    circle
                    plain
                    type="danger"
                    size="mini"
                    icon="el-icon-minus"
                    style="padding: 4px;margin-left: 5px;"
                  ></el-button>
                </li>
              </draggable>
            </el-checkbox-group>
          </template>
          <div style="margin-left: 22px;">
            <el-button type="text" @click="handleAddOption">添加选项</el-button>
          </div>
        </template>
      </el-form-item>

      <el-form-item
        label="默认值"
        v-if="Object.keys(data.config).indexOf('defaultValue')>=0 && (data.type == 'textarea' || data.type == 'input' || data.type=='rate' || data.type=='color' || data.type=='switch')"
      >
        <el-input v-if="data.type=='textarea'" type="textarea" :rows="5" v-model="data.config.defaultValue"></el-input>
        <el-input v-if="data.type=='input'" v-model="data.config.defaultValue"></el-input>
        <el-rate
          v-if="data.type == 'rate'"
          style="display:inline-block;vertical-align: middle;"
          :max="data.config.max"
          :allow-half="data.config.allowHalf"
          v-model="data.config.defaultValue"
        ></el-rate>
        <el-button
          type="text"
          v-if="data.type == 'rate'"
          style="display:inline-block;vertical-align: middle;margin-left: 10px;"
          @click="data.config.defaultValue=0"
        >清空</el-button>
        <el-color-picker v-if="data.type == 'color'" v-model="data.config.defaultValue" :show-alpha="data.config.showAlpha"></el-color-picker>
        <el-switch v-if="data.type=='switch'" v-model="data.config.defaultValue"></el-switch>
      </el-form-item>

      <template v-if="data.type == 'time' || data.type == 'date'">
        <el-form-item label="显示类型" v-if="data.type == 'date'">
          <el-select v-model="data.config.type">
            <el-option value="year"></el-option>
            <el-option value="month"></el-option>
            <el-option value="date"></el-option>
            <el-option value="dates"></el-option>
            <el-option value="datetime"></el-option>
            <el-option value="datetimerange"></el-option>
            <el-option value="daterange"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否为范围选择" v-if="data.type == 'time'">
          <el-switch v-model="data.config.isRange"></el-switch>
        </el-form-item>
        <el-form-item label="是否获取时间戳" v-if="data.type == 'date'">
          <el-switch v-model="data.config.timestamp"></el-switch>
        </el-form-item>
        <el-form-item
          label="占位内容"
          v-if="(!data.config.isRange && data.type == 'time') || (data.type != 'time' && data.config.type != 'datetimerange' && data.config.type != 'daterange')"
        >
          <el-input v-model="data.config.placeholder"></el-input>
        </el-form-item>
        <el-form-item label="开始时间占位内容" v-if="(data.config.isRange) || data.config.type=='datetimerange' || data.config.type=='daterange'">
          <el-input v-model="data.config.startPlaceholder"></el-input>
        </el-form-item>
        <el-form-item label="结束时间占位内容" v-if="data.config.isRange || data.config.type=='datetimerange' || data.config.type=='daterange'">
          <el-input v-model="data.config.endPlaceholder"></el-input>
        </el-form-item>
        <el-form-item label="格式">
          <el-input v-model="data.config.format"></el-input>
        </el-form-item>
        <el-form-item label="默认值" v-if="data.type=='time' && Object.keys(data.config).indexOf('isRange')>=0">
          <el-time-picker
            key="1"
            style="width: 100%;"
            v-if="!data.config.isRange"
            v-model="data.config.defaultValue"
            :arrowControl="data.config.arrowControl"
            :value-format="data.config.format"
          ></el-time-picker>
          <el-time-picker
            key="2"
            v-if="data.config.isRange"
            style="width: 100%;"
            v-model="data.config.defaultValue"
            is-range
            :arrowControl="data.config.arrowControl"
            :value-format="data.config.format"
          ></el-time-picker>
        </el-form-item>
      </template>

      <template v-if="data.type=='imgupload'">
        <el-form-item label="最大上传数">
          <el-input type="number" v-model.number="data.config.length"></el-input>
        </el-form-item>
        <el-form-item label="Domain" :required="true">
          <el-input v-model="data.config.domain"></el-input>
        </el-form-item>
        <el-form-item label="获取七牛Token方法" :required="true">
          <el-input v-model="data.config.tokenFunc"></el-input>
        </el-form-item>
      </template>

      <template v-if="data.type=='blank'">
        <el-form-item label="绑定数据类型">
          <el-select v-model="data.config.defaultType">
            <el-option value="String" label="字符"></el-option>
            <el-option value="Object" label="对象"></el-option>
            <el-option value="Array" label="数组"></el-option>
          </el-select>
        </el-form-item>
      </template>

      <template v-if="data.type != 'grid'">
        <el-form-item label="数据绑定Key">
          <el-input v-model="data.model"></el-input>
        </el-form-item>
        <el-form-item label="操作属性">
          <el-checkbox v-model="data.config.readonly" v-if="Object.keys(data.config).indexOf('readonly')>=0">完全只读</el-checkbox>
          <el-checkbox v-model="data.config.disabled" v-if="Object.keys(data.config).indexOf('disabled')>=0">禁用</el-checkbox>
          <el-checkbox v-model="data.config.editable" v-if="Object.keys(data.config).indexOf('editable')>=0">文本框可输入</el-checkbox>
          <el-checkbox v-model="data.config.clearable" v-if="Object.keys(data.config).indexOf('clearable')>=0">显示清除按钮</el-checkbox>
          <el-checkbox v-model="data.config.arrowControl" v-if="Object.keys(data.config).indexOf('arrowControl')>=0">使用箭头进行时间选择</el-checkbox>
        </el-form-item>
        <el-form-item label="校验">
          <div>
            <el-checkbox v-model="data.config.required">必填</el-checkbox>
          </div>
          <el-select v-if="Object.keys(data.config).indexOf('dataType')>=0" v-model="data.config.dataType" size="mini">
            <el-option value="string" label="字符串"></el-option>
            <el-option value="number" label="数字"></el-option>
            <el-option value="boolean" label="布尔值"></el-option>
            <el-option value="integer" label="整数"></el-option>
            <el-option value="float" label="浮点数"></el-option>
            <el-option value="url" label="URL地址"></el-option>
            <el-option value="email" label="邮箱地址"></el-option>
            <el-option value="hex" label="十六进制"></el-option>
          </el-select>

          <div v-if="Object.keys(data.config).indexOf('pattern')>=0">
            <el-input size="mini" v-model.lazy="data.config.pattern" style=" width: 240px;" placeholder="填写正则表达式"></el-input>
          </div>
        </el-form-item>
      </template>

      <template v-if="data.type === 'imgshow'">
        <el-form-item label="图片上传">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="data.config.defaultValue" :src="data.config.defaultValue" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'

export default {
  components: {
    Draggable
  },
  props: ['data'],
  data() {
    return {
      validator: {
        type: null,
        required: null,
        pattern: null,
        range: null,
        length: null
      }
    }
  },
  computed: {
    show() {
      if (this.data && Object.keys(this.data).length > 0) {
        return true
      }
      return false
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.data.config.defaultValue = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isLt2M;
    },
    handleOptionsRemove(index) {
      if (this.data.type === 'grid') {
        this.data.columns.splice(index, 1)
      } else {
        this.data.config.options.splice(index, 1)
      }

    },
    handleAddOption() {
      if (this.data.config.showLabel) {
        this.data.config.options.push({
          value: '新选项',
          label: '新选项'
        })
      } else {
        this.data.config.options.push({
          value: '新选项'
        })
      }

    },
    handleAddColumn() {
      this.data.columns.push({
        span: '',
        list: []
      })
    },
    generateRule() {
      this.data.rules = []
      Object.keys(this.validator).forEach(key => {
        if (this.validator[key]) {
          this.data.rules.push(this.validator[key])
        }
      })
    },
    handleSelectMuliple(value) {
      if (value) {
        if (this.data.config.defaultValue) {
          this.data.config.defaultValue = [this.data.config.defaultValue]
        } else {
          this.data.config.defaultValue = []
        }

      } else {
        if (this.data.config.defaultValue.length > 0) {
          this.data.config.defaultValue = this.data.config.defaultValue[0]
        } else {
          this.data.config.defaultValue = ''
        }

      }
    }
  },
  watch: {
    'data.config.isRange': function (val) {
      if (typeof val !== 'undefined') {
        if (val) {
          this.data.config.defaultValue = null
        } else {
          if (Object.keys(this.data.config).indexOf('defaultValue') >= 0)
            this.data.config.defaultValue = ''
        }
      }
    },
    'data.config.required': function (val) {
      if (val) {
        this.validator.required = { required: true, message: `${this.data.name}必须填写` }
      } else {
        this.validator.required = null
      }

      this.$nextTick(() => {
        this.generateRule()
      })
    },
    'data.config.dataType': function (val) {
      if (!this.show) {
        return false
      }

      if (val) {
        this.validator.type = { type: val, message: this.data.name + '格式不正确' }
      } else {
        this.validator.type = null
      }

      this.generateRule()
    },
    'data.config.pattern': function (val) {
      if (!this.show) {
        return false
      }

      if (val) {
        this.validator.pattern = { pattern: eval(val), message: this.data.name + '格式不匹配' }
      } else {
        this.validator.pattern = null
      }

      this.generateRule()
    }
  }
}
</script>
