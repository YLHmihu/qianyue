<template>
  <div class="secondStep">
    <process :value="active"></process>
    <interval></interval>
    <div class="legalPerson">
      <div class="title">法人身份证照片</div>
      <div class="txt">请上传JPG、PNG格式图片，大小不超过5MB</div>
      <div class="photo">
        <div class="images">
          <upload-pictures
            :value="Photo1_img"
            @imgsrc="Photo1Base64"
            ref="Photo1son"
          ></upload-pictures>
          <span v-show="Photo1_span">拍摄人像页</span>
          <img
            class="topPhotoimg"
            v-show="topPhoto1img"
            :src="Photo1_img"
            alt=""
          />
          <div
            class="Photo_mask"
            v-show="Photo1_mask"
            @click="Photo1mask"
          ></div>
          <img
            class="close"
            v-show="Photo1_close"
            @click="Photo1close"
            src="../../../assets/img/close.svg"
            alt=""
          />
        </div>
        <div class="images">
          <upload-pictures
            :value="Photo2_img"
            @imgsrc="Photo2Base64"
            ref="Photo2son"
          ></upload-pictures>
          <span v-show="Photo2_span">拍摄国徽页</span>
          <img
            class="topPhotoimg"
            v-show="topPhoto2img"
            :src="Photo2_img"
            alt=""
          />
          <div
            class="Photo_mask"
            v-show="Photo2_mask"
            @click="Photo2mask"
          ></div>
          <img
            class="close"
            v-show="Photo2_close"
            @click="Photo2close"
            src="../../../assets/img/close.svg"
            alt=""
          />
        </div>
      </div>
      <div class="ipt name">
        <div>法人姓名</div>
        <unicom-input
          :field="field"
          :value="legalName"
          v-model="legalName"
        ></unicom-input>
      </div>
      <unicom-divider :hairline="true"></unicom-divider>
      <div class="ipt number">
        <div>法人身份证号</div>
        <unicom-input
          :field="field"
          :value="legalIdc"
          v-model="legalIdc"
        ></unicom-input>
      </div>
      <unicom-divider :hairline="true"></unicom-divider>
      <div class="iptradio validityPeriod">
        <div class="left">身份证有效期</div>
        <indate
          v-if="flag"
          @childtimer1="childtimer1"
          @childtimer2="childtimer2"
          :value="validity"
        ></indate>
        <unicom-checked v-model="isLongFlag">长期</unicom-checked>
      </div>
    </div>
    <interval></interval>
    <div class="liantong">
      <div class="title">联通员工手持身份证照片</div>
      <div class="txt">
        请上传背景为商家牌匾的联通员工手持身份证的JPG、PNG格式图片，大小不超过5MB
      </div>
      <div class="photo">
        <div class="images">
          <upload-pictures
            :value="liantong_img"
            @imgsrc="liantongBase64"
            ref="liantongson"
          ></upload-pictures>
          <img
            class="topliantongimg"
            v-show="topliantongimg"
            :src="liantong_img"
            alt=""
          />
          <div
            class="liantong_mask"
            v-show="liantong_mask"
            @click="liantongmask"
          ></div>
          <img
            class="close"
            v-show="liantong_close"
            @click="liantongclose"
            src="../../../assets/img/close.svg"
            alt=""
          />
        </div>
      </div>
      <div class="ipt ltname">
        <div>联通员工姓名</div>
        <unicom-input
          :field="field"
          :value="employeesName"
          v-model="employeesName"
        ></unicom-input>
      </div>
      <unicom-divider :hairline="true"></unicom-divider>
      <div class="ipt ltnumber">
        <div>联通员工身份证号</div>
        <unicom-input
          :field="field"
          :value="employeesIdc"
          v-model="employeesIdc"
        ></unicom-input>
      </div>
      <unicom-divider :hairline="true"></unicom-divider>
      <div class="ipt buname">
        <div>商家联系人姓名</div>
        <unicom-input
          :field="field"
          :value="openerName"
          v-model="openerName"
        ></unicom-input>
      </div>
      <unicom-divider :hairline="true"></unicom-divider>
      <div class="ipt bunumber">
        <div>商家联系人身份证号</div>
        <unicom-input
          :field="field"
          :value="openerIdc"
          v-model="openerIdc"
        ></unicom-input>
      </div>
      <unicom-divider :hairline="true"></unicom-divider>
      <div class="ipt bumailbox">
        <div>商家联系人邮箱</div>
        <unicom-input
          :field="field"
          :value="merchantEmail"
          v-model="merchantEmail"
        ></unicom-input>
      </div>
      <unicom-divider :hairline="true"></unicom-divider>
      <div class="ipt buphone">
        <div>商家联系人电话</div>
        <unicom-input
          :field="field"
          :value="merchantPhone"
          v-model="merchantPhone"
        ></unicom-input>
      </div>
    </div>
    <div class="btn" @click="nextbtn">下一步</div>
    <!-- 拍摄人像页 -->
    <unicom-popup v-model="Photo1_popup">
      <div class="popup-demo-center" @click="Photo1_popup = false">
        <img :src="Photo1_user_photo" alt="" />
      </div>
    </unicom-popup>
    <!-- 拍摄国徽页 -->
    <unicom-popup v-model="Photo2_popup">
      <div class="popup-demo-center" @click="Photo2_popup = false">
        <img :src="Photo2_user_photo" alt="" />
      </div>
    </unicom-popup>
    <!-- 联通人员手持 -->
    <unicom-popup v-model="liantong_popup">
      <div class="popup-demo-center" @click="liantong_popup = false">
        <img :src="liantong_user_photo" alt="" />
      </div>
    </unicom-popup>
  </div>
</template>

<script>
import Process from "../../../components/process.vue";
import Interval from "../../../components/interval.vue";
import UploadPictures from "../../../components/uploadPictures.vue";
import Indate from "../../../components/indate.vue";
import api from "../../../api/index";
import {
  Button,
  Input,
  Divider,
  Radio,
  RadioGroup,
  Checked,
  Popup,
} from "unicom-mobile";
export default {
  components: {
    Process,
    Interval,
    UploadPictures,
    Indate,
    [Button.name]: Button,
    [Input.name]: Input,
    [Divider.name]: Divider,
    [Radio.name]: Radio,
    [RadioGroup.name]: RadioGroup,
    [Checked.name]: Checked,
    [Popup.name]: Popup,
  },
  data() {
    return {
      active: [1, 2],
      field: "input",
      flag: false,

      employeesIdc: "", //联通员工身份证
      employeesName: "", //联通员工姓名
      // employeesPicPath: "", //联通员工手持身份证照片
      validity: {
        busiLicPicTimeE: "", //身份证有效期止：yyyyMMdd
        busiLicPicTimeS: "", //身份证有效期起：yyyyMMdd
      },
      isLongFlag: false, //身份证是否长期有效 Y 是，N 否
      legalIdc: "", //法人身份证号
      // legalIdcBackPath: "", //身份证反面
      // legalIdcPath: "", //身份证正面
      legalName: "", //法人姓名
      merchantEmail: "", //商家联系人邮箱
      merchantPhone: "", //商家联系人电话
      openerIdc: "", //商家联系人身份证号
      openerName: "", //商家联系人姓名

      Photo1_img: require("../../../assets/img/upload5.png"), //拍摄人像页 照片默认展示图
      Photo1_close: false, //拍摄人像页 图片删除
      Photo1_mask: false, //拍摄人像页  遮罩层div
      Photo1_span: true, //拍摄人像页  span字样
      Photo1_popup: false, //拍摄人像页 预览弹出层
      topPhoto1img: false,
      Photo1_user_photo: "", //拍摄人像页 用户拿取本地相册的照片
      Photo1_image_path: "", //拍摄人像页 上传需要的地址

      Photo2_img: require("../../../assets/img/upload6.png"), //拍摄国徽页 照片默认展示图
      Photo2_close: false, //拍摄国徽页 图片删除
      Photo2_mask: false, //拍摄国徽页  遮罩层div
      Photo2_span: true, //拍摄国徽页  span字样
      Photo2_popup: false, //拍摄国徽页 预览弹出层
      topPhoto2img: false,
      Photo2_user_photo: "", //拍摄国徽页 用户拿取本地相册的照片
      Photo2_image_path: "", //拍摄国徽页 上传需要的地址

      liantong_img: require("../../../assets/img/upload7.png"), //联通人员手持 照片默认展示图
      liantong_close: false, //联通人员手持 图片删除
      liantong_mask: false, //联通人员手持  遮罩层div
      liantong_popup: false, //联通人员手持 预览弹出层
      topliantongimg: false,
      liantong_user_photo: "", //联通人员手持 用户拿取本地相册的照片
      liantong_image_path: "", //联通人员手持 上传需要的地址
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      let params = {
        orderNo: this.$store.state.userOrderNo,
      };
      api
        .queryMerchantInfoByNo(params)
        .then((res) => {
          this.flag = true;
          this.employeesIdc = res.data.employeesIdc; //联通员工身份证
          this.employeesName = res.data.employeesName; //联通员工姓名
          this.liantong_image_path = res.data.employeesPicPath; //联通员工手持身份证照片
          this.validity.busiLicPicTimeE = res.data.idcEndDate; //身份证有效期止
          this.validity.busiLicPicTimeS = res.data.idcStartDate; //身份证有效期起
          // this.isLongFlag = res.data.isLongFlag; //身份证是否长期有效 Y 是，N 否
          this.legalIdc = res.data.legalIdc; //法人身份证号
          this.Photo2_image_path = res.data.legalIdcBackPath; //身份证反面
          this.Photo1_image_path = res.data.legalIdcPath; //身份证正面
          this.legalName = res.data.legalName; //法人姓名
          this.merchantEmail = res.data.merchantEmail; //商家联系人邮箱
          this.merchantPhone = res.data.merchantPhone; //商家联系人电话
          this.openerIdc = res.data.openerIdc; //商家联系人身份证号
          this.openerName = res.data.openerName; //商家联系人姓名
          if (res.data.isLongFlag) {
            if (res.data.isLongFlag == "N") {
              this.isLongFlag = false; //身份证是否长期有效 Y 是，N 否
            } else {
              this.isLongFlag = true;
            }
          }
          this.imagepath();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    imagepath() {
      //拿录入中的图片path换取图片显示
      let logo = {
        flowNo: this.$store.state.userOrderNo,
        list: [
          {
            imageType: "07",
            picPath: this.Photo1_image_path,
          },
          {
            imageType: "08",
            picPath: this.Photo2_image_path,
          },
          {
            imageType: "09",
            picPath: this.liantong_image_path,
          },
        ],
      };
      api.imagesPreview(logo).then((res) => {
        //身份证正面
        this.Photo1_user_photo = res.data[0].data + "," + res.data[0].picBase64;
        this.Photo1_img = res.data[0].data + "," + res.data[0].picBase64;
        this.Photo1_close = true;
        this.Photo1_mask = true;
        this.topPhoto1img = true;
        //身份证反面
        this.Photo2_user_photo = res.data[1].data + "," + res.data[1].picBase64;
        this.Photo2_img = res.data[1].data + "," + res.data[1].picBase64;
        this.Photo2_close = true;
        this.Photo2_mask = true;
        this.topPhoto2img = true;
        //联通员工手持身份证
        this.liantong_user_photo =
          res.data[2].data + "," + res.data[2].picBase64;
        this.liantong_img = res.data[2].data + "," + res.data[2].picBase64;
        this.liantong_close = true;
        this.liantong_mask = true;
        this.topliantongimg = true;
      });
    },

    //拍摄人像页 bas64数据
    Photo1Base64(data) {
      let params = {
        data: data.data,
        imageType: "07",
        picBase64: data.picBase64,
      };
      api.imageUpload(params).then((res) => {
        this.Photo1_image_path = res.data;
      });
      this.Photo1_user_photo = data.imgsrc;
      this.Photo1_close = true;
      this.Photo1_mask = true;
      this.Photo1_span = false;
    },
    //拍摄人像页 删除事件
    Photo1close() {
      this.Photo1_close = false;
      this.Photo1_mask = false;
      this.Photo1_span = true;
      this.topPhoto1img = false;
      this.$refs.Photo1son.imgsrc = require("../../../assets/img/upload5.png");
    },
    //拍摄人像页 遮罩层点击放大预览
    Photo1mask() {
      this.Photo1_popup = true;
    },

    //拍摄国徽页 bas64数据
    Photo2Base64(data) {
      let params = {
        data: data.data,
        imageType: "08",
        picBase64: data.picBase64,
      };
      api.imageUpload(params).then((res) => {
        this.Photo2_image_path = res.data;
      });
      this.Photo2_user_photo = data.imgsrc;
      this.Photo2_close = true;
      this.Photo2_mask = true;
      this.Photo2_span = false;
    },
    //拍摄国徽页 删除事件
    Photo2close() {
      this.Photo2_close = false;
      this.Photo2_mask = false;
      this.Photo2_span = true;
      this.topPhoto2img = false;
      this.$refs.Photo2son.imgsrc = require("../../../assets/img/upload6.png");
    },
    //拍摄国徽页 遮罩层点击放大预览
    Photo2mask() {
      this.Photo2_popup = true;
    },

    //联通人员 bas64数据
    liantongBase64(data) {
      let params = {
        data: data.data,
        imageType: "09",
        picBase64: data.picBase64,
      };
      api.imageUpload(params).then((res) => {
        this.liantong_image_path = res.data;
      });
      this.liantong_user_photo = data.imgsrc;
      this.liantong_close = true;
      this.liantong_mask = true;
    },
    //联通人员 删除事件
    liantongclose() {
      this.liantong_close = false;
      this.liantong_mask = false;
      this.topliantongimg = false;
      this.$refs.liantongson.imgsrc = require("../../../assets/img/upload7.png");
    },
    //联通人员 遮罩层点击放大预览
    liantongmask() {
      this.liantong_popup = true;
    },
    //身份证有效期起
    childtimer1(data) {
      this.userStartDate = data;
    },
    // 身份证有效期止
    childtimer2(data) {
      this.userEndDate = data;
    },

    nextbtn() {
      let term;
      if (this.isLongFlag == false) {
        term = "N";
      } else if (this.isLongFlag == true) {
        term = "Y";
      }
      if (!this.userEndDate) {
        this.userEndDate = this.validity.busiLicPicTimeE;
      }
      if (!this.userStartDate) {
        this.userStartDate = this.validity.busiLicPicTimeS;
      }
      let params = {
        orderNo: this.$store.state.userOrderNo, //订单号
        legalName: this.legalName, //法人姓名
        legalIdc: this.legalIdc, //法人身份证
        employeesName: this.employeesName, //联通员工姓名
        employeesIdc: this.employeesIdc, //	联通员工身份证
        openerName: this.openerName, //商家联系人姓名
        openerIdc: this.openerIdc, //商家联系人身份证号
        merchantEmail: this.merchantEmail, //商家联系人邮箱
        merchantPhone: this.merchantPhone, //商家联系人电话
        idcEndDate: this.userEndDate, //身份证有效期止
        idcStartDate: this.userStartDate, //身份证有效期起
        legalIdcPath: this.Photo1_image_path, //身份证正面
        legalIdcBackPath: this.Photo2_image_path, //身份证反面
        employeesPicPath: this.liantong_image_path, //联通员工手持身份证照片
        isLongFlag: term, //身份证是否长期有效 Y 是，N 否
      };
      api.addMerchantInfo(params);
      this.$router.push("/thirdStep");
    },
  },
};
</script>

<style lang="less" scoped>
.secondStep {
  padding-bottom: 37px;
  .legalPerson {
    padding: 0 17px;
    .photo {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 15px 0;
      .images {
        width: 165px;
        height: 100px;
        position: relative;
        display: flex;
        justify-content: center;
        .topPhotoimg {
          position: absolute;
          z-index: 10;
        }
        .Photo_mask {
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: 11;
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
        img {
          width: 165px;
          height: 100px;
          background: #ffffff;
          box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.07);
          border-radius: 5px;
          position: absolute;
        }
        span {
          font-family: PingFangSC-Regular;
          font-size: 11px;
          color: #666666;
          line-height: 11px;
          position: absolute;
          bottom: 16px;
        }
      }
    }
  }
  .liantong {
    padding: 0 17px;
    .photo {
      margin: 15px 0;
      display: flex;
      justify-content: center;
      .images {
        position: relative;
        display: flex;
        align-items: center;
        .topliantongimg {
          position: absolute;
          z-index: 10;
        }
        .liantong_mask {
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: 11;
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
        img {
          width: 235px;
          height: 140px;
          background: #ffffff;
          box-shadow: 0 8px 37px 0 rgba(0, 0, 0, 0.05);
          border-radius: 2px;
        }
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
/deep/.unicom-input .unicom-table-view-cell {
  margin-top: 0;
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
