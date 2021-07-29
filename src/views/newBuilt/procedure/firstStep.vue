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
          <upload-pictures
            :value="logo_img"
            @imgsrc="logoimgBase64"
            ref="logoimgson"
          ></upload-pictures>
          <div class="logo_mask" v-show="logo_mask" @click="logomask"></div>
          <img
            class="close"
            v-show="logo_close"
            @click="logoclose"
            src="../../../assets/img/close.svg"
            alt=""
          />
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
          <upload-pictures
            :value="placePhoto1_img"
            @imgsrc="placePhoto1Base64"
            ref="placePhoto1son"
          ></upload-pictures>
          <span v-show="placePhoto1_span">门店外照片</span>
          <div
            class="placePhoto_mask"
            v-show="placePhoto1_mask"
            @click="placePhoto1mask"
          ></div>
          <img
            class="close"
            v-show="placePhoto1_close"
            @click="placePhoto1close"
            src="../../../assets/img/close.svg"
            alt=""
          />
        </div>

        <div class="images">
          <upload-pictures
            :value="placePhoto2_img"
            @imgsrc="placePhoto2Base64"
            ref="placePhoto2son"
          ></upload-pictures>
          <span v-show="placePhoto2_span">门店内照片</span>
          <div
            class="placePhoto_mask"
            v-show="placePhoto2_mask"
            @click="placePhoto2mask"
          ></div>
          <img
            class="close"
            v-show="placePhoto2_close"
            @click="placePhoto2close"
            src="../../../assets/img/close.svg"
            alt=""
          />
        </div>

        <div class="images">
          <upload-pictures
            :value="placePhoto3_img"
            @imgsrc="placePhoto3Base64"
            ref="placePhoto3son"
          ></upload-pictures>
          <span v-show="placePhoto3_span">收银台照片</span>
          <div
            class="placePhoto_mask"
            v-show="placePhoto3_mask"
            @click="placePhoto3mask"
          ></div>
          <img
            class="close"
            v-show="placePhoto3_close"
            @click="placePhoto3close"
            src="../../../assets/img/close.svg"
            alt=""
          />
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
          <unicom-radio label="20">个体工商户</unicom-radio>
          <unicom-radio label="14">企业</unicom-radio>
        </unicom-radio-group>
      </div>
      <unicom-divider :hairline="true"></unicom-divider>
      <div class="managemenPhoto">
        <div class="images">
          <upload-pictures
            :value="managemenPhoto_img1"
            @imgsrc="managemenPhoto1Base64"
            ref="managemenPhoto1son"
          ></upload-pictures>
          <span v-show="managemenPhoto1_span">营业执照照片</span>
          <div
            class="managemenPhoto_mask"
            v-show="managemenPhoto1_mask"
            @click="managemenPhoto1mask"
          ></div>
          <img
            class="close"
            v-show="managemenPhoto1_close"
            @click="managemenPhoto1close"
            src="../../../assets/img/close.svg"
            alt=""
          />
        </div>
        <div class="images">
          <upload-pictures
            :value="managemenPhoto_img2"
            @imgsrc="managemenPhoto2Base64"
            ref="managemenPhoto2son"
          ></upload-pictures>
          <span v-show="managemenPhoto2_span">特殊经营许可证照片</span>
          <div
            class="managemenPhoto_mask"
            v-show="managemenPhoto2_mask"
            @click="managemenPhoto2mask"
          ></div>
          <img
            class="close"
            v-show="managemenPhoto2_close"
            @click="managemenPhoto2close"
            src="../../../assets/img/close.svg"
            alt=""
          />
        </div>
      </div>
      <div class="iptradio validitytimer">
        <div class="left">营业执照有效期</div>
        <indate @childtimer1="childtimer1" @childtimer2="childtimer2"></indate>
        <unicom-checked v-model="validitychecked">长期</unicom-checked>
      </div>

      <unicom-divider :hairline="true"></unicom-divider>
      <div class="ipt">
        <div class="ipt_left1">注册号</div>
        <unicom-input
          :field="field"
          placeholder="注册号或统一社会信用代码"
          :value="busiLic"
        ></unicom-input>
      </div>
      <unicom-divider :hairline="true"></unicom-divider>
      <div class="iptradio">
        <div>企业经营地址</div>
        <!-- <div>北京市西城区 ></div> -->
      </div>
      <unicom-divider :hairline="true"></unicom-divider>
      <div class="iptradio">
        <div class="left">详细地址</div>
        <my-textarea class="address_textarea"></my-textarea>
      </div>
      <unicom-divider :hairline="true"></unicom-divider>
      <div class="ipt">
        <div class="ipt_left2">企业名称</div>
        <unicom-input
          :field="field"
          placeholder="与营业执照上一致"
          :value="fullname"
        ></unicom-input>
      </div>
      <unicom-divider :hairline="true"></unicom-divider>
      <div class="ipt">
        <div class="ipt_left2">企业简称</div>
        <unicom-input
          :field="field"
          placeholder="请输入招牌名称，该名称将在地图展示"
          :value="abbreviation"
        ></unicom-input>
      </div>
      <unicom-divider :hairline="true"></unicom-divider>
    </div>
    <div class="btndiv">
      <unicom-button class="btn" @click="nextbtn">下一步</unicom-button>
    </div>
    <!-- 弹出遮罩层预览    联通ui组件库 -->
    <!-- logo -->
    <unicom-popup v-model="logo_popup">
      <div class="popup-demo-center" @click="logo_popup = false">
        <img :src="logo_user_photo" alt="" />
      </div>
    </unicom-popup>
    <!-- 门店外 -->
    <unicom-popup v-model="placePhoto1_popup">
      <div class="popup-demo-center" @click="placePhoto1_popup = false">
        <img :src="placePhoto1_user_photo" alt="" />
      </div>
    </unicom-popup>
    <!-- 门店内 -->
    <unicom-popup v-model="placePhoto2_popup">
      <div class="popup-demo-center" @click="placePhoto2_popup = false">
        <img :src="placePhoto2_user_photo" alt="" />
      </div>
    </unicom-popup>
    <!-- 收银台 -->
    <unicom-popup v-model="placePhoto3_popup">
      <div class="popup-demo-center" @click="placePhoto3_popup = false">
        <img :src="placePhoto3_user_photo" alt="" />
      </div>
    </unicom-popup>
    <!-- 经营执照照片 -->
    <unicom-popup v-model="managemenPhoto1_popup">
      <div class="popup-demo-center" @click="managemenPhoto1_popup = false">
        <img :src="managemenPhoto1_user_photo" alt="" />
      </div>
    </unicom-popup>
    <!-- 特殊经营许可证照片 -->
    <unicom-popup v-model="managemenPhoto2_popup">
      <div class="popup-demo-center" @click="managemenPhoto2_popup = false">
        <img :src="managemenPhoto2_user_photo" alt="" />
      </div>
    </unicom-popup>
  </div>
</template>

<script>
import Process from "../../../components/process.vue";
import UploadPictures from "../../../components/uploadPictures.vue";
import Interval from "../../../components/interval.vue";
import Indate from "../../../components/indate.vue";
import MyTextarea from "../../../components/textarea.vue";
import api from "../../../api/index";
import {
  Button,
  Input,
  Divider,
  Radio,
  RadioGroup,
  Picker,
  Popup,
  Checked,
} from "unicom-mobile";
export default {
  components: {
    Process,
    UploadPictures,
    Interval,
    Indate,
    MyTextarea,
    [Button.name]: Button,
    [Input.name]: Input,
    [Divider.name]: Divider,
    [Radio.name]: Radio,
    [RadioGroup.name]: RadioGroup,
    [Picker.name]: Picker,
    [Popup.name]: Popup,
    [Checked.name]: Checked,
  },
  data() {
    return {
      active: [1],
      field: "input",
      radio: "20",
      fullname: "", //企业全称
      abbreviation: "", //企业简称
      busiLic: "", //注册号
      validitychecked: false, //营业执照有效期单选框

      logo_img: require("../../../assets/img/upload1.png"), //企业logo默认展示图
      logo_close: false, //企业logo图片删除
      logo_mask: false, //企业logo遮罩层div
      logo_popup: false, //企业logo预览弹出层
      logo_user_photo: "", //企业logo 用户拿取本地相册的照片

      placePhoto1_img: require("../../../assets/img/upload2.png"), //照片默认展示图
      placePhoto1_close: false, //门店外照片 图片删除
      placePhoto1_mask: false, //门店外照片 遮罩层div
      placePhoto1_span: true, //门店外照片  span字样
      placePhoto1_popup: false, //门店外照片 预览弹出层
      placePhoto1_user_photo: "", //门店外照片 用户拿取本地相册的照片

      placePhoto2_img: require("../../../assets/img/upload2.png"), //照片默认展示图
      placePhoto2_close: false, //门店内照片 图片删除
      placePhoto2_mask: false, //门店内照片  遮罩层div
      placePhoto2_span: true, //门店内照片  span字样
      placePhoto2_popup: false, //门店内照片 预览弹出层
      placePhoto2_user_photo: "", //门店内照片 用户拿取本地相册的照片

      placePhoto3_img: require("../../../assets/img/upload2.png"), //照片默认展示图
      placePhoto3_close: false, //收银台 图片删除
      placePhoto3_mask: false, //收银台  遮罩层div
      placePhoto3_span: true, //收银台  span字样
      placePhoto3_popup: false, //收银台 预览弹出层
      placePhoto3_user_photo: "", //收银台 用户拿取本地相册的照片

      managemenPhoto_img1: require("../../../assets/img/upload3.png"), //照片默认展示图
      managemenPhoto1_close: false, //经营执照照片 图片删除
      managemenPhoto1_mask: false, //经营执照照片  遮罩层div
      managemenPhoto1_span: true, //经营执照照片  span字样
      managemenPhoto1_popup: false, //经营执照照片 预览弹出层
      managemenPhoto1_user_photo: "", //经营执照照片 用户拿取本地相册的照片

      managemenPhoto_img2: require("../../../assets/img/upload4.png"), //照片默认展示图
      managemenPhoto2_close: false, //特殊经营许可证照片 图片删除
      managemenPhoto2_mask: false, //特殊经营许可证照片  遮罩层div
      managemenPhoto2_span: true, //特殊经营许可证照片  span字样
      managemenPhoto2_popup: false, //特殊经营许可证照片 预览弹出层
      managemenPhoto2_user_photo: "", //特殊经营许可证照片 用户拿取本地相册的照片
    };
  },
  created() {
    this.init();
  },
  methods: {
    //查询店铺信息
    init() {
      let params = this.$store.state.userOrderNo;
      api
        .queryEntByPhone(params)
        .then((res) => {
          this.radio = res.data.entType; //企业类型 (14-企业 20-个体工商）
          this.abbreviation = res.data.shortName; //企业简称
          this.fullname = res.data.entName;
          this.busiLic = res.data.busiLic;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //企业logo bas64数据
    logoimgBase64(data) {
      console.log(data);
      this.logo_user_photo = data;
      this.logo_close = true;
      this.logo_mask = true;
    },
    //企业logo 删除事件
    logoclose() {
      this.logo_close = false;
      this.logo_mask = false;
      this.$refs.logoimgson.imgsrc = require("../../../assets/img/upload1.png");
    },
    //企业logo 遮罩层点击放大预览
    logomask() {
      this.logo_popup = true;
    },

    //门店外照片 bas64数据
    placePhoto1Base64(data) {
      console.log(data);
      this.placePhoto1_user_photo = data;
      this.placePhoto1_close = true;
      this.placePhoto1_mask = true;
      this.placePhoto1_span = false;
    },
    //门店外照片 删除事件
    placePhoto1close() {
      this.placePhoto1_close = false;
      this.placePhoto1_mask = false;
      this.placePhoto1_span = true;
      this.$refs.placePhoto1son.imgsrc = require("../../../assets/img/upload2.png");
    },
    //门店外照片 遮罩层点击放大预览
    placePhoto1mask() {
      this.placePhoto1_popup = true;
    },

    //门店内照片 bas64数据
    placePhoto2Base64(data) {
      console.log(data);
      this.placePhoto2_user_photo = data;
      this.placePhoto2_close = true;
      this.placePhoto2_mask = true;
      this.placePhoto2_span = false;
    },
    //门店内照片 删除事件
    placePhoto2close() {
      this.placePhoto2_close = false;
      this.placePhoto2_mask = false;
      this.placePhoto2_span = true;
      this.$refs.placePhoto2son.imgsrc = require("../../../assets/img/upload2.png");
    },
    //门店内照片 遮罩层点击放大预览
    placePhoto2mask() {
      this.placePhoto2_popup = true;
    },

    //收银台 bas64数据
    placePhoto3Base64(data) {
      console.log(data);
      this.placePhoto3_user_photo = data;
      this.placePhoto3_close = true;
      this.placePhoto3_mask = true;
      this.placePhoto3_span = false;
    },
    //收银台 删除事件
    placePhoto3close() {
      this.placePhoto3_close = false;
      this.placePhoto3_mask = false;
      this.placePhoto3_span = true;
      this.$refs.placePhoto3son.imgsrc = require("../../../assets/img/upload2.png");
    },
    //收银台 遮罩层点击放大预览
    placePhoto3mask() {
      this.placePhoto3_popup = true;
    },

    //经营许可证照片 bas64数据
    managemenPhoto1Base64(data) {
      console.log(data);
      this.managemenPhoto1_user_photo = data;
      this.managemenPhoto1_close = true;
      this.managemenPhoto1_mask = true;
      this.managemenPhoto1_span = false;
    },
    //经营许可证照片 删除事件
    managemenPhoto1close() {
      this.managemenPhoto1_close = false;
      this.managemenPhoto1_mask = false;
      this.managemenPhoto1_span = true;
      this.$refs.managemenPhoto1son.imgsrc = require("../../../assets/img/upload3.png");
    },
    //经营许可证照片 遮罩层点击放大预览
    managemenPhoto1mask() {
      this.managemenPhoto1_popup = true;
    },

    //特殊经营许可证照片 bas64数据
    managemenPhoto2Base64(data) {
      console.log(data);
      this.managemenPhoto2_user_photo = data;
      this.managemenPhoto2_close = true;
      this.managemenPhoto2_mask = true;
      this.managemenPhoto2_span = false;
    },
    //特殊经营许可证照片 删除事件
    managemenPhoto2close() {
      this.managemenPhoto2_close = false;
      this.managemenPhoto2_mask = false;
      this.managemenPhoto2_span = true;
      this.$refs.managemenPhoto2son.imgsrc = require("../../../assets/img/upload4.png");
    },
    //特殊经营许可证照片 遮罩层点击放大预览
    managemenPhoto2mask() {
      this.managemenPhoto2_popup = true;
    },

    //选择起始时间
    childtimer1(data) {
      console.log(data);
    },
    //选择末尾时间
    childtimer2(data) {
      console.log(data);
    },
    //下一步
    nextbtn() {
      this.$router.push("/secondStep");
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
        position: relative;
        img {
          width: 65px;
          height: 65px;
        }
        .logo_mask {
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: 10;
        }
        .close {
          width: 16px;
          height: 16px;
          background: #ffffff;
          border-radius: 20px;
          position: absolute;
          top: -10px;
          right: -10px;
          z-index: 15;
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
        .placePhoto_mask {
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: 10;
        }
        .close {
          width: 20px;
          height: 20px;
          background: #ffffff;
          border-radius: 20px;
          position: absolute;
          top: -10px;
          right: -10px;
          z-index: 15;
        }
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
        .managemenPhoto_mask {
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: 10;
        }
        .close {
          width: 20px;
          height: 20px;
          background: #ffffff;
          border-radius: 20px;
          position: absolute;
          top: -10px;
          right: -10px;
          z-index: 15;
        }
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
    .address_textarea {
      width: 263px;
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

//所有弹出层用户点击预览的尺寸样式
.popup-demo-center {
  img {
    width: 329px;
    height: 329px;
  }
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
