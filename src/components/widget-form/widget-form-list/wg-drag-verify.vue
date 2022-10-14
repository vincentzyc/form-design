<template>
  <div>
    这是滑块校验
    <DragVerify
      ref="dragVerify"
      :isPassing.sync="item.value"
      text="请按住滑块拖动"
      successText="验证通过"
      handlerIcon="el-icon-d-arrow-right"
      successIcon="el-icon-circle-check"
    />
  </div>
</template>

<script>
import DragVerify from "@/components/base/DragVerify.vue";
export default {
  components: {
    DragVerify,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
