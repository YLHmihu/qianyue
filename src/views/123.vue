<template>
  <div>
    <unicom-input :field="field" :value="getInputValue"></unicom-input>
    <div>{{ getInputValue }}</div>
    <input type="text " :value="getInputValue" />
    <unicom-button @click="showLevel3">显示三级示例</unicom-button>
    <div class="resultMargin">选择结果：{{ result_level3 }}</div>
    <unicom-picker
      ref="unicom_picker_level3"
      :layer="layer3"
      :columns="columns_level3"
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
      getInputValue: "默认",
      field: "input",
      fullname: "",
      busiLic: "",
      layer3: 3,
      result_level3: "",
      columns_level3: [
        {
          value: "110000",
          text: "????",
          children: [
            {
              value: "110100",
              text: "!!",
              children: [
                {
                  value: "110101",
                  text: "东城区",
                },
                {
                  value: "110102",
                  text: "西城区",
                },
                {
                  value: "110103",
                  text: "崇文区",
                },
              ],
            },
          ],
        },
        {
          value: "110000",
          text: "北京市",
          children: [
            {
              value: "110100",
              text: "北京市",
              children: [
                {
                  value: "110101",
                  text: "东城区",
                },
                {
                  value: "110102",
                  text: "西城区",
                },
                {
                  value: "110103",
                  text: "崇文区",
                },
              ],
            },
          ],
        },
      ],
      logopath: "",
      image: "",
    };
  },
  created() {
    this.init();

    // let add = "194";
    // api
    //   .getCity(add)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
  methods: {
    showLevel3() {
      this.$refs.unicom_picker_level3.show((items) => {
        this.result_level3 = items[0].text;
      });
    },
    onCancel_level3() {
      console.log("取消");
    },
    init: async function () {
      let params = this.$store.state.userOrderNo;
      await api
        .queryEntByPhone(params)
        .then((res) => {
          this.getInputValue = res.data.shortName; //企业简称
          this.fullname = res.data.entName;
          this.busiLic = res.data.busiLic;
          this.logopath = res.data.busiLicPicPath;
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(this.logopath);
      console.log(this.$store.state.userOrderNo);
      let pas = {
        flowNo: this.$store.state.userOrderNo,
        list: [
          {
            picPath: this.logopath,
            imageType: "02",
          },
        ],
      };
      await api
        .imagesPreview(pas)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
