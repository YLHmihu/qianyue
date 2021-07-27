<template>
  <div class="thirdStep">
    <process :value="active"></process>
    <interval></interval>
    <div class="bank">
      <div class="iptradio settlementType">
        <div class="left">结算银行类型</div>
        <unicom-radio-group v-model="radio" row>
          <unicom-radio label="1">对公</unicom-radio>
          <unicom-radio label="0">对私</unicom-radio>
        </unicom-radio-group>
      </div>
      <div v-show="radio == 0">
        <div class="ipt cardnum">
          <div>银行卡号</div>
          <unicom-input :field="field"></unicom-input>
        </div>
        <div class="ipt cardname">
          <div>持卡人姓名</div>
          <unicom-input :field="field"></unicom-input>
        </div>
      </div>
      <div v-show="radio == 1">
        <div class="ipt banknum1">
          <div>银行账户号</div>
          <unicom-input :field="field"></unicom-input>
        </div>
        <div class="ipt banknum2">
          <div>开户联行号</div>
          <unicom-input :field="field"></unicom-input>
        </div>
        <div class="ipt bankaddress">
          <div>开户支行</div>
          <unicom-input :field="field"></unicom-input>
        </div>
      </div>
    </div>
    <interval></interval>
    <div class="settlement">
      <div class="ipt price">
        <div class="price_left">风险保证金</div>
        <div>0</div>
      </div>
      <div class="iptradio type1">
        <div class="left">制券类型</div>
        <unicom-radio-group v-model="zhiquantype" row>
          <unicom-radio label="1">平台制券</unicom-radio>
          <unicom-radio label="0">商家制券</unicom-radio>
        </unicom-radio-group>
      </div>
      <div class="iptradio type2">
        <div class="left">结算方式</div>
        <unicom-radio-group v-model="jiesuantype" row>
          <unicom-radio label="1">售出结算</unicom-radio>
          <unicom-radio label="0">销券结算</unicom-radio>
        </unicom-radio-group>
      </div>
      <div class="iptradio type3">
        <div class="left">连锁方式</div>
        <unicom-radio-group v-model="liansuotype" row>
          <unicom-radio label="1">连锁</unicom-radio>
          <unicom-radio label="0">非连锁</unicom-radio>
        </unicom-radio-group>
      </div>
      <div class="iptradio information">
        <div>拓展人信息</div>
        <input class="information_input" type="text" placeholder="非必填" />
      </div>
    </div>
    <div class="btn" @click="nextbtn">确认提交</div>
  </div>
</template>

<script>
import Process from "../../../components/process.vue";
import Interval from "../../../components/interval.vue";
import { Button, Input, Radio, RadioGroup } from "unicom-mobile";
export default {
  components: {
    Process,
    Interval,
    [Button.name]: Button,
    [Input.name]: Input,
    [Radio.name]: Radio,
    [RadioGroup.name]: RadioGroup,
  },
  data() {
    return {
      active: [1, 2, 3],
      field: "input",
      radio: "1",
      zhiquantype: "1",
      jiesuantype: "1",
      liansuotype: "1",
    };
  },
  created() {},
  methods: {
    nextbtn() {
      this.$router.push("/determine");
    },
  },
};
</script>

<style lang="less" scoped>
.thirdStep {
  padding-bottom: 37px;
  .bank {
    padding: 0 17px;
    .label2 {
      margin-left: 50px;
    }
  }
  .settlement {
    padding: 0 17px;

    .price_left {
      padding-right: 32px;
    }
    .information_input {
      width: 207px;
      height: 30px;
      background: #ffffff;
      border: 1px solid #e2e8ee;
      border-radius: 2px;
      font-family: PingFangSC-Regular;
      font-size: 12px;
      padding-left: 15px;
    }
  }
  .btn {
    width: 341px;
    height: 48px;
    line-height: 48px;
    background: #e60027;
    border-radius: 25px;
    font-family: PingFangSC-Semibold;
    font-size: 17px;
    color: #ffffff;
    text-align: center;
    margin: 0 auto;
    margin-top: 20px;
  }
}
/deep/.unicom-input .unicom-table-view-cell {
  margin-top: 0;
}
</style>
