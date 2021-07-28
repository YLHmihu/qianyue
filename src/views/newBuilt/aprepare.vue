<template>
  <div class="prepare">
    <div class="head">
      <div class="head_tit">准备材料</div>
      <div class="head_txt">申请前请提前准备以下材料</div>
    </div>
    <interval></interval>
    <div class="content">
      <div class="item">
        <div class="numprocedure">
          <div class="num">1</div>
          <div class="tit">营业执照</div>
        </div>
        <div class="txt">需要检章齐全，到期时间必须大于申请之时6个月</div>
        <div class="example">
          <div class="lable">例</div>
          <img src="@/assets/img/prepare_li1.png" alt="" />
        </div>
      </div>
      <div class="item">
        <div class="numprocedure">
          <div class="num">2</div>
          <div class="tit">特殊经营许可证</div>
        </div>
        <div class="txt">需提供食品经营许可证或者卫生许可证</div>
        <div class="example">
          <div class="lable">例</div>
          <img src="@/assets/img/prepare_li1.png" alt="" />
        </div>
      </div>
      <div class="item">
        <div class="numprocedure">
          <div class="num">3</div>
          <div class="tit">手持身份证</div>
        </div>
        <div class="txt">
          到期时间必须大于申请之时6个月；联通员工代开，需提供联通员工手持身份证照片
        </div>
        <div class="example">
          <div class="lable">例</div>
          <img src="@/assets/img/prepare_li1.png" alt="" />
        </div>
      </div>
      <div class="item">
        <div class="numprocedure">
          <div class="num">4</div>
          <div class="tit">经营场所照片</div>
        </div>
        <div class="txt">需提供含门头牌匾及室内用餐环境照片共三张</div>
        <div class="examplemany">
          <div class="lable">例</div>
          <div class="image">
            <img src="@/assets/img/prepare_li1.png" alt="" />
          </div>
          <div class="image">
            <img src="@/assets/img/prepare_li1.png" alt="" />
          </div>
          <div class="image">
            <img src="@/assets/img/prepare_li1.png" alt="" />
          </div>
        </div>
      </div>
      <div class="item">
        <div class="numprocedure">
          <div class="num">5</div>
          <div class="tit">企业logo</div>
        </div>
        <div class="txt">请上传企业logo</div>
        <div class="example">
          <div class="lable">例</div>
          <img src="@/assets/img/prepare_li1.png" alt="" />
        </div>
      </div>
      <div class="oknext" @click="oknext">准备好了</div>
    </div>
  </div>
</template>

<script>
import Interval from "../../components/interval.vue";

export default {
  components: {
    Interval,
  },
  created() {},
  methods: {
    oknext() {
      this.$router.push("/firstStep");
    },
  },
};
</script>

<style lang="less" scoped>
.prepare {
  padding-bottom: 40px;
  .head {
    padding: 12px 17px 18px 17px;
    background: #ffffff;
    .head_tit {
      font-family: PingFangSC-Medium;
      font-size: 25px;
      color: #333333;
    }
    .head_txt {
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #666666;
      line-height: 12px;
      margin-top: 4px;
    }
  }
  .content {
    padding: 0 17px;
    background: #ffffff;
    .item {
      padding-top: 17px;
      .numprocedure {
        display: flex;
        flex-direction: row;
        .num {
          width: 22px;
          height: 22px;
          border-radius: 20px;
          background: #e60027;
          font-family: WoNumbers-Regular;
          font-size: 15px;
          color: #ffffff;
          text-align: center;
          line-height: 22px;
        }
        .tit {
          font-family: PingFangSC-Medium;
          font-size: 18px;
          color: #333333;
          line-height: 22px;
          margin-left: 10px;
        }
      }
      .txt {
        width: 278px;
        font-family: PingFangSC-Regular;
        font-size: 13px;
        color: #666666;
        line-height: 13px;
        margin: 0 auto;
        margin-top: 10px;
      }
      .example {
        width: 278px;
        height: 158px;
        border: 1px solid #e2e2e2;
        margin: 0 auto;
        margin-top: 17px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 187px;
          height: 115px;
        }
        .lable {
          width: 20px;
          height: 20px;
          padding: 4px 4px 0 0;
          background: #e60027;
          border-radius: 0 0 0 25px;
          font-family: PingFangSC-Regular;
          font-size: 11px;
          color: #ffffff;
          text-align: right;
          position: absolute;
          top: 0;
          right: 0;
        }
      }
      .examplemany {
        width: 278px;
        border: 1px solid #e2e2e2;
        margin: 0 auto;
        margin-top: 17px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .lable {
          width: 20px;
          height: 20px;
          padding: 4px 4px 0 0;
          background: #e60027;
          border-radius: 0 0 0 25px;
          font-family: PingFangSC-Regular;
          font-size: 11px;
          color: #ffffff;
          text-align: right;
          position: absolute;
          top: 0;
          right: 0;
        }
        .image:last-child {
          margin-bottom: 23px;
        }
        .image {
          width: 235px;
          height: 140px;
          background: #ffffff;
          box-shadow: 0 8px 37px 0 rgba(0, 0, 0, 0.05);
          border-radius: 4px;
          margin-top: 20px;
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            width: 132px;
            height: 84px;
          }
        }
      }
    }
    .oknext {
      width: 341px;
      height: 48px;
      background: #e60027;
      border-radius: 25px;
      margin: 0 auto;
      font-family: PingFangSC-Semibold;
      font-size: 17px;
      color: #ffffff;
      text-align: center;
      line-height: 48px;
      margin-top: 20px;
    }
  }
}
</style>
