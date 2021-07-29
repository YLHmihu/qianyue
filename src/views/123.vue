<template>
  <div>
    <unicom-input
      :field="field"
      :clearable="true"
      v-model="textvalue"
      @blur="inputclick"
    ></unicom-input>
    <br />
    <br />
    <br />
    <input type="text" v-model="inptvalue" @blur="inpt" />
    <div>{{ inptvalue }}</div>
  </div>
</template>
<script>
import { Input } from "unicom-mobile";

export default {
  components: {
    [Input.name]: Input,
  },
  data() {
    return {
      field: "input",
      textvalue: "默认一",
      inptvalue: "默认二",
    };
  },
  methods: {
    inputclick() {
      console.log(this.textvalue);
    },
    inpt() {
      console.log(this.inptvalue);
    },
  },
};
</script>
