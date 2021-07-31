<template>
  <div class="indate">
    <div class="left" @click="showLevel1">
      {{ result_level1 }}
    </div>
    <div class="zhi">至</div>
    <div class="right" @click="showLevel2">
      {{ result_level2 }}
    </div>
    <!-- 三级联动 -->
    <unicom-picker
      ref="unicom_picker_level3"
      :layer="layer3"
      :columns="columns_level3"
      @cancel="onCancel_level3"
    ></unicom-picker>
  </div>
</template>

<script>
import { Picker } from "unicom-mobile";
export default {
  props: {
    value: {
      type: Object,
    },
  },
  components: {
    [Picker.name]: Picker,
  },
  data() {
    return {
      layer3: 3,
      columns_level3: [],
      result_level1: "",
      result_level2: "",
      newyear: new Date().getFullYear(),
    };
  },
  created() {
    this.result_level1 =
      this.value.busiLicPicTimeS.substring(0, 4) +
      "/" +
      this.value.busiLicPicTimeS.substring(4, 6) +
      "/" +
      this.value.busiLicPicTimeS.substring(6, 8);
    this.result_level2 =
      this.value.busiLicPicTimeE.substring(0, 4) +
      "/" +
      this.value.busiLicPicTimeE.substring(4, 6) +
      "/" +
      this.value.busiLicPicTimeE.substring(6, 8);
    this.init();
  },

  methods: {
    init() {
      for (let i = 1999; i < this.newyear; i++) {
        this.columns_level3.push({ children: [], text: i });
      }
      this.columns_level3.forEach((Element) => {
        for (let j = 1; j < 13; j++) {
          if (j < 10) {
            j = "0" + j;
          }
          Element.children.push({ children: [], text: j });
          Element.children.forEach((item) => {
            for (let k = 1; k < 32; k++) {
              if (k < 10) {
                k = "0" + k;
              }
              item.children.push({ text: k });
            }
          });
        }
      });
    },
    showLevel1() {
      this.$refs.unicom_picker_level3.show((items) => {
        this.result_level1 =
          items[0].text + "/" + items[1].text + "/" + items[2].text;
        this.$emit(
          "childtimer1",
          items[0].text + items[1].text + items[2].text
        );
      });
    },
    showLevel2() {
      this.$refs.unicom_picker_level3.show((items) => {
        this.result_level2 =
          items[0].text + "/" + items[1].text + "/" + items[2].text;
        this.$emit(
          "childtimer2",
          items[0].text + items[1].text + items[2].text
        );
      });
    },
    onCancel_level3() {
      console.log("取消");
    },
  },
};
</script>

<style lang="less" scoped>
.indate {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #333333;
  line-height: 55px;
  .left {
    width: 76px;
    height: 55px;
  }
  .right {
    width: 76px;
    height: 55px;
  }
  .zhi {
    padding: 0 3px;
  }
}
</style>
