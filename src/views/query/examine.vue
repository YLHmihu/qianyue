<template>
  <div class="examine">
    <div class="item" v-for="(item, index) in signList" :key="index">
      <div class="firstFloor">
        <div class="company">
          XXX餐饮有限公司<img
            src="../../assets/img/Fail.svg"
            alt=""
            @click="Tips"
          />
        </div>
        <!-- <div class="progress1">审核中</div> -->
        <div class="progress2">审核拒绝</div>
        <!-- <div class="progress3">审核已通过</div> -->
        <!-- <div class="progress4">待系统处理合同</div> -->
      </div>
      <div class="secondFloor">
        <div class="oddnumbers">审核单号：203354183</div>
        <div class="modify">点击修改</div>
      </div>
    </div>
    <unicom-dialog
      content="未通过原因未通过原因未通过原因未通过原因未通过原因未通过原因未通过原因未通过原因未通过原因未通过原因"
      cancelText=""
      confirmText="确定"
      v-model="toast"
    >
    </unicom-dialog>
  </div>
</template>

<script>
import { Dialog } from "unicom-mobile";
import api from "../../api/index";
export default {
  components: {
    [Dialog.name]: Dialog,
  },
  data() {
    return {
      toast: false,
      signList: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      let params = {};
      api.querySignResult(params).then((res) => {
        this.signList = res.data.signList;
      });
    },
    Tips() {
      this.toast = true;
    },
  },
};
</script>

<style lang="less" scoped>
.examine {
  padding: 0 17px;
  .item {
    height: 80px;
    background: #ffffff;
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.07);
    border-radius: 5px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .firstFloor {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .company {
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #171e24;
        line-height: 21px;
        padding-left: 15px;
        display: flex;
        flex-direction: row;
        align-items: center;
        img {
          width: 16px;
          height: 16px;
          margin-left: 6px;
        }
      }
      .progress1 {
        height: 22px;
        font-family: SourceHanSansCN-Normal;
        font-size: 13px;
        color: #ffffff;
        text-align: center;
        line-height: 22px;
        background-image: linear-gradient(45deg, #09acf1 0%, #4c73ff 100%);
        border-radius: 50px 0 0 50px;
        padding: 0 10px;
      }
      .progress2 {
        height: 22px;
        font-family: SourceHanSansCN-Normal;
        font-size: 13px;
        color: #ffffff;
        text-align: center;
        line-height: 22px;
        background-image: linear-gradient(90deg, #ff637f 1%, #fe3d37 100%);
        border-radius: 100px 0 0 100px;
        padding: 0 10px;
      }
      .progress3 {
        height: 22px;
        font-family: SourceHanSansCN-Normal;
        font-size: 13px;
        color: #ffffff;
        text-align: center;
        line-height: 22px;
        background: #cdcdcd;
        border-radius: 100px 0 0 100px;
        padding: 0 10px;
      }
      .progress4 {
        height: 22px;
        font-family: SourceHanSansCN-Normal;
        font-size: 13px;
        color: #ffffff;
        text-align: center;
        line-height: 22px;
        background-image: linear-gradient(90deg, #ff8248 0%, #fe5f37 100%);
        border-radius: 100px 0 0 100px;
        padding: 0 10px;
      }
    }

    .secondFloor {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 3px;
      .oddnumbers {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #879099;
        line-height: 21px;
        padding-left: 15px;
      }
      .modify {
        font-family: SourceHanSansCN-Normal;
        font-size: 13px;
        color: #e60127;
        text-align: center;
        margin-top: 10px;
        padding-right: 15px;
      }
    }
  }
}
</style>
