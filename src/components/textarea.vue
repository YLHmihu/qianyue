<template>
  <div class="my-textarea">
    <textarea
      ref="textarea"
      :style="{ height: height }"
      v-model="value"
      class="textarea"
      @blur="transmit"
    ></textarea>
  </div>
</template>

<script>
import calcTextareaHeight from "../assets/js/calcTextareaHeight";

export default {
  props: ["value"],
  data() {
    return {
      // 动态高度
      height: "20px",
    };
  },
  watch: {
    value() {
      this.getHeight();
    },
  },
  methods: {
    getHeight() {
      this.height = calcTextareaHeight(this.$refs.textarea, 1, null).height;
    },
    transmit() {
      this.$emit("textvalue", this.value);
    },
  },
};
</script>

<style scoped>
.my-textarea .textarea {
  display: inline-block;
  width: 100%;
  font-family: PingFangSC-Regular;
  font-size: 15px;
  color: #333333;
  line-height: 20px;
  resize: none;
}
</style>
