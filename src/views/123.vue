<template>
  <div>
    <unicom-button @click="showLevel3">显示三级示例</unicom-button>
    <div class="resultMargin">选择结果：{{ result_level3 }}</div>
    <unicom-picker
      ref="unicom_picker_level3"
      :layer="layer3"
      :columns="columns_level3"
      :value="city"
      @cancel="onCancel_level3"
    ></unicom-picker>
  </div>
</template>
<script>
import { Input, Picker, Button } from "unicom-mobile";
import api from "../api/index";

export default {
  components: {
    [Input.name]: Input,
    [Picker.name]: Picker,
    [Button.name]: Button,
  },
  data() {
    return {
      layer3: 3,
      result_level3: "",
      city: { type: 3, level1: "110000", level2: "110100", level3: "110103" },
      columns_level3: [
        {
          value: "110000",
          text: "北京市",
          children: [
            {
              value: "110100",
              text: "北京市",
              children: [
                { value: "110101", text: "东城区" },
                { value: "110102", text: "西城区" },
                { value: "110103", text: "崇文区" },
              ],
            },
          ],
        },
      ],
    };
  },
  created() {},
  methods: {
    showLevel3() {
      this.$refs.unicom_picker_level3.show((items) => {
        this.result_level3 = items[0].text + items[1].text + items[2].text;
      });
    },
    onCancel_level3() {
      console.log("取消");
    },
    //获取城市列表
    getcity() {
      api.getCity().then((res) => {
        this.columns = res.data;
      });
    },
  },
};
</script>
