<template>
  <div class="firstStep">
    <process :value="active"></process>
    <interval></interval>
    <div class="enterprise">
      <div class="enterpriseLOGO">
        <div class="left">
          <div class="logo_tit">企业LOGO</div>
          <div class="logo_text">请上传JPG、PNG格式图片，大小不超过5MB</div>
        </div>
        <div class="right">
          <upload-pictures :value="logo_img"></upload-pictures>
        </div>
      </div>
      <unicom-divider :hairline="true"></unicom-divider>
      <div class="iptradio">
        <div class="left">营业类型</div>
        <div class="right">餐饮食品</div>
      </div>
    </div>
    <interval></interval>
    <div class="placePhoto">
      <div class="title">经营场所照片</div>
      <div class="photo">
        <div class="images">
          <upload-pictures :value="placePhoto_img"></upload-pictures>
          <span>门店外照片</span>
        </div>
        <div class="images">
          <upload-pictures :value="placePhoto_img"></upload-pictures>
          <span>门店内照片</span>
        </div>
        <div class="images">
          <upload-pictures :value="placePhoto_img"></upload-pictures>
          <span>收银台照片</span>
        </div>
      </div>
      <div class="txt">请上传JPG、PNG格式图片，大小不超过5MB</div>
    </div>
    <interval></interval>
    <div class="credentialsPhoto">
      <div class="title">资质证照</div>
      <div class="iptradio enterpriseType">
        <div class="left">企业类型</div>
        <unicom-radio-group v-model="radio" row>
          <unicom-radio label="1">个体工商户</unicom-radio>
          <unicom-radio label="0">企业</unicom-radio>
        </unicom-radio-group>
      </div>
      <unicom-divider :hairline="true"></unicom-divider>
      <div class="managemenPhoto">
        <div class="images">
          <upload-pictures :value="managemenPhoto_img1"></upload-pictures>
          <span>营业执照照片</span>
        </div>
        <div class="images">
          <upload-pictures :value="managemenPhoto_img2"></upload-pictures>
          <span>特殊经营许可证照片</span>
        </div>
      </div>
      <div class="iptradio validitytimer">
        <div class="left">营业执照有效期</div>
        <indate @childtimer1="childtimer1" @childtimer2="childtimer2"></indate>
        <unicom-radio-group v-model="validitychecked" row>
          <unicom-radio label="0">长期</unicom-radio>
        </unicom-radio-group>
      </div>

      <unicom-divider :hairline="true"></unicom-divider>
      <div class="ipt">
        <div class="ipt_left1">注册号</div>
        <unicom-input
          :field="field"
          placeholder="注册号或统一社会信用代码"
        ></unicom-input>
      </div>
      <unicom-divider :hairline="true"></unicom-divider>
      <div class="iptradio" @click="bottom = true">
        <div>企业经营地址</div>
        <div>北京市西城区 ></div>
      </div>
      <unicom-divider :hairline="true"></unicom-divider>
      <div class="iptradio">
        <div class="left">详细地址</div>
        <div class="right">
          二龙路甲33号二龙路甲33号二龙路甲33号二龙路甲33号
        </div>
      </div>
      <unicom-divider :hairline="true"></unicom-divider>
      <div class="ipt">
        <div class="ipt_left2">企业名称</div>
        <unicom-input
          :field="field"
          placeholder="与营业执照上一致"
        ></unicom-input>
      </div>
      <unicom-divider :hairline="true"></unicom-divider>
      <div class="ipt">
        <div class="ipt_left2">企业简称</div>
        <unicom-input
          :field="field"
          placeholder="请输入招牌名称，该名称将在地图展示"
        ></unicom-input>
      </div>
      <unicom-divider :hairline="true"></unicom-divider>
    </div>
    <div class="btndiv">
      <unicom-button class="btn" @click="nextbtn">下一步</unicom-button>
    </div>
  </div>
</template>

<script>
import Process from "../../../components/process.vue";
import UploadPictures from "../../../components/uploadPictures.vue";
import Interval from "../../../components/interval.vue";
import Indate from "../../../components/indate.vue";
import {
  Button,
  Input,
  Divider,
  Radio,
  RadioGroup,
  Picker,
  Popup,
} from "unicom-mobile";
export default {
  components: {
    Process,
    UploadPictures,
    Interval,
    Indate,
    [Button.name]: Button,
    [Input.name]: Input,
    [Divider.name]: Divider,
    [Radio.name]: Radio,
    [RadioGroup.name]: RadioGroup,
    [Picker.name]: Picker,
    [Popup.name]: Popup,
  },
  data() {
    return {
      active: [1],
      field: "input",
      radio: "1",
      validitychecked: "",
      logo_img: require("../../../assets/img/upload1.png"),
      placePhoto_img: require("../../../assets/img/upload2.png"),
      managemenPhoto_img1: require("../../../assets/img/upload3.png"),
      managemenPhoto_img2: require("../../../assets/img/upload4.png"),
    };
  },

  methods: {
    childtimer1(data) {
      console.log(data);
    },
    childtimer2(data) {
      console.log(data);
    },
    nextbtn() {
      this.$router.push("secondStep");
    },
  },
};
</script>

<style lang="less" scoped>
.firstStep {
  margin: 0 auto;
  .enterprise {
    padding: 0 17px;
    .enterpriseLOGO {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 8px 0 12px 0;
      .right {
        display: flex;
        align-items: center;
        img {
          width: 65px;
          height: 65px;
        }
      }
      .logo_tit {
        font-family: PingFangSC-Regular;
        font-size: 15px;
        color: #333333;
        line-height: 21px;
      }
      .logo_text {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #999999;
        line-height: 21px;
      }
    }
  }
  .placePhoto {
    padding: 0 17px 20px 17px;
    .photo {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 20px 0 8px 0;
      .images {
        width: 106px;
        height: 106px;
        position: relative;
        display: flex;
        justify-content: center;
        span {
          position: absolute;
          bottom: 18px;
          font-family: PingFangSC-Regular;
          font-size: 11px;
          color: #666666;
          line-height: 11px;
        }
        img {
          position: absolute;
          width: 106px;
          height: 106px;
          background: #ffffff;
          box-shadow: 0 8px 37px 0 rgba(0, 0, 0, 0.05);
          border-radius: 2px;
        }
      }
    }
  }
  .credentialsPhoto {
    padding: 0 17px;
    .enterpriseType {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      height: 55px;
    }

    .managemenPhoto {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 15px 0;
      .images {
        width: 165px;
        height: 105px;
        position: relative;
        display: flex;
        justify-content: center;
        span {
          font-family: PingFangSC-Regular;
          font-size: 11px;
          color: #666666;
          line-height: 11px;
          position: absolute;
          bottom: 16px;
        }
        img {
          width: 165px;
          height: 105px;
          background: #ffffff;
          box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.07);
          border-radius: 2px;
          position: absolute;
        }
      }
    }
    .validitytimer {
      /deep/.unicom-radio__label {
        padding-right: 0;
      }
    }
  }
  .btndiv {
    padding: 20px 0 30px 0;
    .btn {
      margin: 0 auto;
      width: 341px;
      height: 48px;
      border-radius: 25px;
    }
  }
}
/deep/.unicom-input .unicom-table-view-cell {
  margin-top: 0;
}
.ipt_left1 {
  margin-right: 20px;
}
.ipt_left2 {
  margin-right: 5px;
}
</style>
