<template>
  <div class="submittedSuccessfully">
    <img src="../../assets/img/success.svg" alt="" />

    <div class="describeOne">申请提交成功！</div>
    <div class="describeTwo">
      <span>申请单号：</span>
      <span class="red">100088888</span>
    </div>
    <div class="describeThree">
      开店申请已提交，审核通过将收到短信、邮件通知 您也自行进入首页查看审核进度
    </div>
    <div class="btn" @click="nextbtn">继续录入商户</div>
  </div>
</template>

<script>
export default {
  methods: {
    nextbtn() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="less" scoped>
.submittedSuccessfully {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 17px;

  img {
    width: 55px;
    height: 55px;
    margin-top: 55px;
  }
  .describeOne {
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #2ccda7;
    line-height: 18px;
    margin-top: 15px;
  }
  .describeTwo {
    font-family: PingFangSC-Medium;
    font-size: 22px;
    color: #171e24;
    text-align: center;
    margin-top: 12px;
    .red {
      color: #ff4b33;
    }
  }
  .describeThree {
    font-family: PingFangSC-Regular;
    font-size: 15px;
    color: #999999;
    text-align: center;
    line-height: 22px;
    margin-top: 64px;
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
