<template>
  <div class="determine">
    <div class="head">信息确认</div>
    <interval></interval>
    <div class="content">
      <div class="firstStep">
        <div class="title">店铺信息</div>
        <div class="information">
          <div class="element">
            <div>2</div>
            <div><img src="../../assets/img/upload1.png" alt="" /></div>
          </div>
          <div class="element" v-for="(item, index) in 5" :key="index">
            <div>1</div>
            <div>2</div>
          </div>
          <div class="modify" @click="firstStep">返回修改</div>
        </div>
      </div>
      <div class="secondStep">
        <div class="title">身份信息</div>
        <div class="information">
          <div class="element" v-for="(item, index) in 5" :key="index">
            <div>1</div>
            <div>2</div>
          </div>
          <div class="modify" @click="secondStep">返回修改</div>
        </div>
      </div>
      <div class="thirdStep">
        <div class="title">结算信息</div>
        <div class="information">
          <div class="element" v-for="(item, index) in 5" :key="index">
            <div>1</div>
            <div>2</div>
          </div>
          <div class="modify" @click="thirdStep">返回修改</div>
        </div>
      </div>
    </div>
    <div class="btn" @click="nextbtn">提交审核</div>
  </div>
</template>

<script>
import Interval from "../../components/interval.vue";
import api from "../../api/index";

export default {
  components: {
    Interval,
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      let params = {};
      api.queryStoreInfoByNo(params);
    },
    firstStep() {
      this.$router.push("/firstStep");
    },
    secondStep() {
      this.$router.push("/secondStep");
    },
    thirdStep() {
      this.$router.push("/thirdStep");
    },
    nextbtn() {
      let params = {};
      api.merApply(params);
      this.$router.push("/submittedSuccessfully");
    },
  },
};
</script>

<style lang="less" scoped>
.determine {
  padding-bottom: 37px;
  .head {
    padding: 22px 17px 18px 17px;
    font-family: PingFangSC-Medium;
    font-size: 28px;
    color: #333333;
  }
  .content {
    padding: 0 17px;
    .information {
      background: #ffffff;
      box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.07);
      border-radius: 4px;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #666666;
      line-height: 14px;
      margin-top: 20px;
      padding: 12px 0 22px 0;
      .element {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 6px 20px;
        img {
          width: 50px;
          height: 50px;
        }
      }
      .modify {
        width: 252px;
        height: 43px;
        background: #ffffff;
        border: 1px solid #e60027;
        border-radius: 25px;
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: #e60027;
        text-align: center;
        line-height: 43px;
        margin: 22px auto 0 auto;
      }
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
</style>
