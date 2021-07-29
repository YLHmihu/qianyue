<template>
  <div>
    <unicom-input :field="field" :value="add"></unicom-input>
    <div>{{ add }}</div>
    <input type="text " :value="add" />
  </div>
</template>

<script>
import { Input } from "unicom-mobile";
import api from "../api/index";
export default {
  components: {
    [Input.name]: Input,
  },
  data() {
    return {
      add: "默认",
      field: "input",
      fullname: "",
      busiLic: "",
    };
  },
  created() {
    let params = this.$store.state.userOrderNo;
    api
      .queryEntByPhone(params)
      .then((res) => {
        this.add = res.data.shortName; //企业简称
        this.fullname = res.data.entName;
        this.busiLic = res.data.busiLic;
        console.log(this.busiLic);
        console.log(this.fullname);
        console.log(this.add);
      })
      .catch((err) => {
        console.log(err);
      });
    let add = "all";
    api
      .getCity(add)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style></style>
