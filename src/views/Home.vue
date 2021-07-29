<template>
  <div class="home">
    <div class="div1">
      <div class="editDocument" @click="editDocument">新建商户</div>
      <label class="agreement" for="agr" @click="btnradio()">
        <unicom-checked v-model="checked"> </unicom-checked>
        <div id="agr" class="agree">
          同意协议《中国联通饭票平台入驻协议》与《中国联通饭票平台支付结算协议》
        </div>
      </label>
    </div>
    <div class="div2" @click="examine">
      <img class="jindu" src="../assets/img/home_jindu.png" alt="" />
      <div class="progress">审核进度查询</div>
      <img class="right" src="../assets/img/home_right.png" alt="" />
    </div>

    <div class="mask" v-show="maskshow" @click="closeshow(1)">
      <div class="text" @click.stop="textclick()">
        <div class="txt">
          饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协议饭票平台代开协
        </div>
        <div class="btn" @click="closeshow(0)">我已阅读</div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast, Checked } from "unicom-mobile";
import api from "../api/index";
export default {
  components: {
    [Toast.name]: Toast,
    [Checked.name]: Checked,
  },
  data() {
    return {
      checked: false, //单选按钮状态
      maskshow: false, //遮罩层状态
    };
  },
  mounted() {},
  methods: {
    btnradio() {
      this.maskshow = true;
    },
    closeshow(tet) {
      this.maskshow = false;
      if (this.checked == true) {
        this.checked = true;
      } else {
        if (tet == 0) {
          this.checked = true;
        } else {
          this.checked = false;
        }
      }
    },
    textclick() {},
    editDocument() {
      if (this.checked == true) {
        //查询用户录入中店铺信息
        let len = 32;
        let chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
        let maxPos = chars.length;
        let params = "";
        for (let i = 0; i < len; i++) {
          params += chars.charAt(Math.floor(Math.random() * maxPos));
        }
        api.queryEntByPhone(params).then((res) => {
          this.$store.commit("userchange", res.data.orderNo);
        });
        this.$router.push("/aprepare");
      } else {
        Toast.info("请阅读并同意协议", "", 3000, "center", false);
      }
    },
    examine() {
      // this.$router.push("/examine");
      this.$router.push("/123");
    },
  },
};
</script>
<style lang="less" scoped>
.home {
  min-width: 100vw;
  min-height: 100vh;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;

  .div1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: radial-gradient(
      50% 96%,
      rgba(255, 255, 255, 0) 48%,
      rgba(255, 255, 255, 0) 69%,
      #ffffff 97%
    );
    background: #ffffff url("../assets/img/home_buttom.png") no-repeat;
    background-position: 50% 4.414%;
    background-size: 214px;
    width: 266px;
    height: 300px;
    border: 2px solid #ffe1e1;
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.08);
    border-radius: 9px;
    margin-top: 42px;
    position: relative;
    .editDocument {
      width: 171px;
      height: 38px;
      line-height: 38px;
      background: #e60027;
      border-radius: 25px;
      font-family: PingFangSC-Semibold;
      font-size: 17px;
      color: #ffffff;
      text-align: center;
      margin-top: 171px;
    }
    .agreement {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      margin-top: 15px;
      padding: 0 22px;
      .agree {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #3a6dcd;
        margin-left: 10px;
        line-height: 16px;
      }
    }
  }
  .div2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 266px;
    height: 98px;
    background: #ffffff;
    border: 2px solid #ffe1e1;
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.08);
    border-radius: 9px;
    margin-top: 15px;
    .jindu {
      width: 45px;
      height: 45px;
      margin-left: 20px;
    }

    .right {
      width: 15px;
      height: 20px;
      margin-right: 20px;
    }
    .progress {
      font-family: PingFangSC-Semibold;
      font-size: 17px;
      color: #e60027;
    }
  }

  .mask {
    min-width: 100vw;
    min-height: 100vh;
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    z-index: 99;
    .text {
      width: 300px;
      height: 505px;
      position: absolute;
      left: 50%;
      margin-left: -150px;
      top: 50%;
      margin-top: -252px;
      background: #ffffff;
      border-radius: 5px;
      z-index: 100;
      display: flex;
      flex-direction: column;
      align-items: center;
      .txt {
        width: 247px;
        height: 428px;
        background: aquamarine;
        margin-top: 20px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #333333;
        letter-spacing: 0;
        text-align: justify;
        line-height: 23px;
        overflow-x: hidden;
        overflow-y: auto;
      }
      .btn {
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #e60127;
        letter-spacing: 0;
        text-align: center;
        line-height: 16px;
        margin-top: 27px;
      }
    }
  }
}
/deep/.unicom-checked__label {
  display: none;
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
