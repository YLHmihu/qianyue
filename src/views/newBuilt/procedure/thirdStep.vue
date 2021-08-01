<template>
  <div class="thirdStep">
    <process :value="active"></process>
    <interval></interval>
    <div class="bank">
      <div class="iptradio settlementType">
        <div class="left">结算银行类型</div>
        <unicom-radio-group v-model="setleType" row>
          <unicom-radio label="0">对公</unicom-radio>
          <unicom-radio label="1">对私</unicom-radio>
        </unicom-radio-group>
      </div>
      <div v-show="setleType == 1">
        <div class="ipt cardnum">
          <div>银行卡号</div>
          <unicom-input
            :field="field"
            :value="openBankNumber"
            v-model="openBankNumber"
          ></unicom-input>
        </div>
        <div class="ipt cardname">
          <div>持卡人姓名</div>
          <unicom-input
            :field="field"
            :value="cardholderName"
            v-model="cardholderName"
          ></unicom-input>
        </div>
      </div>
      <div v-show="setleType == 0">
        <div class="ipt banknum1">
          <div>银行账户号</div>
          <unicom-input
            :field="field"
            :value="bankAccount"
            v-model="bankAccount"
          ></unicom-input>
        </div>
        <div class="ipt banknum2">
          <div>开户联行号</div>
          <unicom-input
            :field="field"
            :value="bankUnino"
            v-model="bankUnino"
          ></unicom-input>
        </div>
        <div class="ipt bankaddress">
          <div>开户支行</div>
          <unicom-input
            :field="field"
            :value="branchOrgnm"
            v-model="branchOrgnm"
          ></unicom-input>
        </div>
      </div>
    </div>
    <interval></interval>
    <div class="settlement">
      <div class="ipt price">
        <div class="price_left">风险保证金</div>
        <unicom-input
          :field="field"
          :value="riskMargin"
          v-model="riskMargin"
        ></unicom-input>
      </div>
      <div class="iptradio type1">
        <div class="left">制券类型</div>
        <unicom-radio-group v-model="fpMakeType" row>
          <unicom-radio label="platform">平台制券</unicom-radio>
          <unicom-radio label="business">商家制券</unicom-radio>
        </unicom-radio-group>
      </div>
      <div class="iptradio type2">
        <div class="left">结算方式</div>
        <unicom-radio-group v-model="tranMode" row>
          <unicom-radio label="0001">售出结算</unicom-radio>
          <unicom-radio label="0002">销券结算</unicom-radio>
        </unicom-radio-group>
      </div>
      <div class="iptradio type3">
        <div class="left">连锁方式</div>
        <unicom-radio-group v-model="chainType" row>
          <unicom-radio label="3">连锁</unicom-radio>
          <unicom-radio label="0">非连锁</unicom-radio>
        </unicom-radio-group>
      </div>
      <div class="iptradio information">
        <div>拓展人信息</div>
        <input
          class="information_input"
          type="input"
          placeholder="非必填"
          v-model="developmentPerson"
        />
      </div>
    </div>
    <div class="btn" @click="nextbtn">确认提交</div>
  </div>
</template>

<script>
import Process from "../../../components/process.vue";
import Interval from "../../../components/interval.vue";
import { Button, Input, Radio, RadioGroup } from "unicom-mobile";
import api from "../../../api/index";
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

      setleType: "0", //结算类型 0 对公，1 对私
      bankAccount: "", //银行账号
      bankUnino: "", //开户联行号
      branchOrgnm: "", //开户支行
      openBankNumber: "", //银行卡号
      cardholderName: "", //持卡人姓名
      riskMargin: "", //风险保证金金额，单位（分）默认0
      fpMakeType: "platform", //制券类型 business:商户制券，platform:平台制券
      tranMode: "0001", //结算方式:0001:卖出后结算(立即支付)，0002:销券后结算(确认交易)
      chainType: "3", //连锁方式 0 非连锁, 3 连锁
      developmentPerson: "", //拓展人信息
    };
  },
  created() {
    // this.init();
  },
  methods: {
    init() {
      let params = {
        orderNo: this.$store.state.userOrderNo,
      };
      api
        .querySetleInfoByNo(params)
        .then((res) => {
          this.setleType = res.data.setleType; //结算类型 0 对公，1 对私
          this.bankAccount = res.data.bankAccount; //银行账号
          this.bankUnino = res.data.bankUnino; //开户联行号
          this.branchOrgnm = res.data.branchOrgnm; //开户支行
          this.openBankNumber = res.data.openBankNumber; //银行卡号
          this.cardholderName = res.data.cardholderName; //持卡人姓名
          this.riskMargin = res.data.riskMargin; //风险保证金金额，单位（分）默认0
          this.fpMakeType = res.data.fpMakeType; //制券类型 business:商户制券，platform:平台制券
          this.tranMode = res.data.tranMode; //结算方式:0001:卖出后结算(立即支付)，0002:销券后结算(确认交易)
          this.chainType = res.data.chainType; //连锁方式 0 非连锁, 3 连锁
          this.developmentPerson = res.data.developmentPerson; //拓展人信息
        })
        .catch((err) => {
          console.log(err);
        });
    },
    nextbtn() {
      let params = {
        orderNo: this.$store.state.userOrderNo, //订单号
        setleType: this.setleType, //结算类型 0 对公，1 对私
        bankAccount: this.bankAccount, //银行账号
        bankUnino: this.bankUnino, //开户联行号
        branchOrgnm: this.branchOrgnm, //开户支行
        openBankNumber: this.openBankNumber, //银行卡号
        cardholderName: this.cardholderName, //持卡人姓名
        riskMargin: this.riskMargin, //风险保证金金额，单位（分）默认0
        fpMakeType: this.fpMakeType, //制券类型 business:商户制券，platform:平台制券
        tranMode: this.tranMode, //结算方式:0001:卖出后结算(立即支付)，0002:销券后结算(确认交易)
        chainType: this.chainType, //连锁方式 0 非连锁, 3 连锁
        developmentPerson: this.developmentPerson, //拓展人信息
      };
      api.addSetleInfo(params);
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

//单选，复选按钮的样式
/deep/.unicom-radio__input {
  width: 18px;
  height: 18px;
  border-radius: 100px;
}
/deep/.unicom-checked__input {
  width: 18px;
  height: 18px;
  border-radius: 100px;
}
</style>
