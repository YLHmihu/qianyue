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
          <img class="toplogoimg" v-show="toplogoimg" :src="logo_img" alt="" />
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
          <img
            class="topplacePhotoimg"
            v-show="topplacePhoto1img"
            :src="placePhoto1_img"
            alt=""
          />
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
          <img
            class="topplacePhotoimg"
            v-show="topplacePhoto2img"
            :src="placePhoto2_img"
            alt=""
          />
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
          <img
            class="topplacePhotoimg"
            v-show="topplacePhoto3img"
            :src="placePhoto3_img"
            alt=""
          />
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
          <img
            class="topmanagemenPhotoimg"
            v-show="topmanagemenPhoto1img"
            :src="managemenPhoto_img1"
            alt=""
          />
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
          <img
            class="topmanagemenPhotoimg"
            v-show="topmanagemenPhoto2img"
            :src="managemenPhoto_img2"
            alt=""
          />
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
        <unicom-checked v-model="isBusiLongTerm">长期</unicom-checked>
      </div>

      <unicom-divider :hairline="true"></unicom-divider>
      <div class="ipt">
        <div class="ipt_left1">注册号</div>
        <unicom-input
          :field="field"
          placeholder="注册号或统一社会信用代码"
          :value="busiLic"
          v-model="busiLic"
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
        <my-textarea
          class="address_textarea"
          :value="busiAddress"
          @textvalue="addressTexe"
        ></my-textarea>
      </div>
      <unicom-divider :hairline="true"></unicom-divider>
      <div class="ipt">
        <div class="ipt_left2">企业名称</div>
        <unicom-input
          :field="field"
          placeholder="与营业执照上一致"
          :value="entName"
          v-model="entName"
        ></unicom-input>
      </div>
      <unicom-divider :hairline="true"></unicom-divider>
      <div class="ipt">
        <div class="ipt_left2">企业简称</div>
        <unicom-input
          :field="field"
          placeholder="请输入招牌名称，该名称将在地图展示"
          :value="shortName"
          v-model="shortName"
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
      active: [1], //头部步骤进度
      field: "input",
      bluraddressTexe: "", //用户输入失去焦点后经营详细地址

      busiAddress: "", //查询后显示的经营详细地址
      busiArea: "110102", //经营地址区编码
      busiCityCode: "110", //经营地址市编码
      busiLic: "", //注册号
      busiLicPicTimeE: "", //营业执照有效期结束时间：yyyyMMdd
      busiLicPicTimeS: "", //营业执照有效期开始时间：yyyyMMdd
      busiLicType: "", //营业执照类型 01 社会统
      busiPvcCode: "11", //经营地址省编码
      entName: "", //企业全称
      radio: "", //企业类型 (14-企业 20-个体工商）
      isBusiLongTerm: false, //营业执照有效期单选框
      shortName: "", //企业简称

      logo_img: require("../../../assets/img/upload1.png"), //企业logo默认展示图
      logo_close: false, //企业logo图片删除
      logo_mask: false, //企业logo遮罩层div
      logo_popup: false, //企业logo预览弹出层
      toplogoimg: false,
      logo_user_photo: "", //企业logo 用户拿取本地相册的照片
      logo_image_path: "", //企业logo 上传需要的地址

      placePhoto1_img: require("../../../assets/img/upload2.png"), //照片默认展示图
      placePhoto1_close: false, //门店外照片 图片删除
      placePhoto1_mask: false, //门店外照片 遮罩层div
      placePhoto1_span: true, //门店外照片  span字样
      placePhoto1_popup: false, //门店外照片 预览弹出层
      topplacePhoto1img: false,
      placePhoto1_user_photo: "", //门店外照片 用户拿取本地相册的照片
      placePhoto1_image_path: "", //门店外照片 上传需要的地址

      placePhoto2_img: require("../../../assets/img/upload2.png"), //照片默认展示图
      placePhoto2_close: false, //门店内照片 图片删除
      placePhoto2_mask: false, //门店内照片  遮罩层div
      placePhoto2_span: true, //门店内照片  span字样
      placePhoto2_popup: false, //门店内照片 预览弹出层
      topplacePhoto2img: false,
      placePhoto2_user_photo: "", //门店内照片 用户拿取本地相册的照片
      placePhoto2_image_path: "", //门店内照片 上传需要的地址

      placePhoto3_img: require("../../../assets/img/upload2.png"), //照片默认展示图
      placePhoto3_close: false, //收银台 图片删除
      placePhoto3_mask: false, //收银台  遮罩层div
      placePhoto3_span: true, //收银台  span字样
      placePhoto3_popup: false, //收银台 预览弹出层
      topplacePhoto3img: false,
      placePhoto3_user_photo: "", //收银台 用户拿取本地相册的照片
      placePhoto3_image_path: "", //收银台 上传需要的地址

      managemenPhoto_img1: require("../../../assets/img/upload3.png"), //照片默认展示图
      managemenPhoto1_close: false, //经营执照照片 图片删除
      managemenPhoto1_mask: false, //经营执照照片  遮罩层div
      managemenPhoto1_span: true, //经营执照照片  span字样
      managemenPhoto1_popup: false, //经营执照照片 预览弹出层
      topmanagemenPhoto1img: false,
      managemenPhoto1_user_photo: "", //经营执照照片 用户拿取本地相册的照片
      managemenPhoto1_image_path: "", //经营执照照片 上传需要的地址

      managemenPhoto_img2: require("../../../assets/img/upload4.png"), //照片默认展示图
      managemenPhoto2_close: false, //特殊经营许可证照片 图片删除
      managemenPhoto2_mask: false, //特殊经营许可证照片  遮罩层div
      managemenPhoto2_span: true, //特殊经营许可证照片  span字样
      managemenPhoto2_popup: false, //特殊经营许可证照片 预览弹出层
      topmanagemenPhoto2img: false,
      managemenPhoto2_user_photo: "", //特殊经营许可证照片 用户拿取本地相册的照片
      managemenPhoto2_image_path: "", //特殊经营许可证照片 上传需要的地址
    };
  },
  created() {
    this.init();
    this.imagepath();
  },
  methods: {
    //查询店铺信息
    init() {
      //先查询录入中的
      let params = this.$store.state.userOrderNo;
      api
        .queryEntByPhone(params)
        .then((res) => {
          this.busiAddress = res.data.busiAddress; //经营详细地址
          // this.busiArea = res.data.busiArea, //经营地址区编码
          // this.busiCityCode=res.data.busiCityCode,//经营地址市编码
          this.busiLic = res.data.busiLic; //注册号
          this.managemenPhoto1_image_path = res.data.busiLicPicPath; //营业执照照片
          this.busiLicPicTimeE = res.data.busiLicPicTimeE; //营业执照有效期结束时间：yyyyMMdd
          this.busiLicPicTimeS = res.data.busiLicPicTimeS; //营业执照有效期开始时间：yyyyMMdd
          this.busiLicType = res.data.busiLicType; //营业执照类型 01 社会统
          // this.busiPvcCode = res.data.busiPvcCode; //经营地址省编码
          this.entName = res.data.entName; //企业全称
          this.radio = res.data.entType; //企业类型 (14-企业 20-个体工商）
          this.logoPicPath = res.data.logoPicPath; //logo图片地址
          this.shortName = res.data.shortName; //企业简称
          this.managemenPhoto2_image_path = res.data.specialPicPath; //特殊经营许可照片
          this.placePhoto1_img = res.data.imgList[0].imgPath; //门店外
          this.placePhoto2_img = res.data.imgList[1].imgPath; //门店内
          this.placePhoto3_img = res.data.imgList[2].imgPath; //收银台
          if (res.data.isBusiLongTerm) {
            if (res.data.isBusiLongTerm == "N") {
              this.isBusiLongTerm = false; //营业执照是否长期有效Y 是，N 否
            } else {
              this.isBusiLongTerm = true;
            }
          }
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
            imageType: "01",
            picPath: this.logoPicPath,
          },
          // {
          //   imageType: "02",
          //   picPath:
          //     "http://oss.ts-pfecs.epay/cc-ecss/oss/public/mas/20210729/90154584-f05d-11eb-b7c2-56da51fad048lhbwk.jpg",
          // },
          // {
          //   imageType: "03",
          //   picPath: this.managemenPhoto2_image_path,
          // },
          // {
          //   imageType: "04",
          //   picPath: this.placePhoto1_image_path,
          // },
          // {
          //   imageType: "05",
          //   picPath: this.placePhoto2_image_path,
          // },
          // {
          //   imageType: "06",
          //   picPath: this.placePhoto3_image_path,
          // },
        ],
      };
      api
        .imagesPreview(logo)
        .then((res) => {
          this.logo_user_photo = res.data[0].data + "," + res.data[0].picBase64;
          this.logo_img = res.data[0].data + "," + res.data[0].picBase64;
          this.logo_close = true;
          this.logo_mask = true;
          this.toplogoimg = true;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    //详细地址修改失焦的值
    addressTexe(data) {
      this.bluraddressTexe = data;
    },

    //企业logo bas64数据
    logoimgBase64(data) {
      let params = {
        data: data.data,
        imageType: "01",
        picBase64: data.picBase64,
      };
      api.imgFilter(params).then((res) => {
        this.logo_image_path = res.data.imgUrl;
      });
      this.logo_user_photo = data.imgsrc;
      this.logo_close = true;
      this.logo_mask = true;
    },
    //企业logo 删除事件
    logoclose() {
      this.logo_close = false;
      this.logo_mask = false;
      this.toplogoimg = false;
      this.$refs.logoimgson.imgsrc = require("../../../assets/img/upload1.png");
    },
    //企业logo 遮罩层点击放大预览
    logomask() {
      this.logo_popup = true;
    },

    //门店外照片 bas64数据
    placePhoto1Base64(data) {
      let params = {
        data: data.data,
        imageType: "04",
        picBase64: data.picBase64,
      };
      api.imageUpload(params).then((res) => {
        this.placePhoto1_image_path = res.data;
      });
      this.placePhoto1_user_photo = data.imgsrc;
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
      let params = {
        data: data.data,
        imageType: "05",
        picBase64: data.picBase64,
      };
      api.imageUpload(params).then((res) => {
        this.placePhoto2_image_path = res.data;
      });
      this.placePhoto2_user_photo = data.imgsrc;
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
      let params = {
        data: data.data,
        imageType: "06",
        picBase64: data.picBase64,
      };
      api.imageUpload(params).then((res) => {
        this.placePhoto3_image_path = res.data;
      });
      this.placePhoto3_user_photo = data.imgsrc;
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
      let params = {
        data: data.data,
        imageType: "02",
        picBase64: data.picBase64,
      };
      api.imageUpload(params).then((res) => {
        this.managemenPhoto1_image_path = res.data;
      });
      this.managemenPhoto1_user_photo = data.imgsrc;
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
      let params = {
        data: data.data,
        imageType: "03",
        picBase64: data.picBase64,
      };
      api.imageUpload(params).then((res) => {
        this.managemenPhoto2_image_path = res.data;
      });
      this.managemenPhoto2_user_photo = data.imgsrc;
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
      this.yingye1 = data;
    },
    //选择末尾时间
    childtimer2(data) {
      this.yingye2 = data;
    },
    //下一步
    nextbtn() {
      console.log(this.busiLic);
      let term;
      if (this.isBusiLongTerm == false) {
        term = "N";
      } else if (this.isBusiLongTerm == true) {
        term = "Y";
      }
      let params = {
        busiAddress: this.bluraddressTexe, //经营详细地址
        busiArea: "110102", //经营地址区编码
        busiCityCode: "110", //经营地址市编码
        busiLic: this.busiLic, //注册号
        busiLicPicPath: this.managemenPhoto1_image_path, //营业执照照片
        busiLicPicTimeE: this.yingye1, //营业执照有效期结束时间：yyyyMMdd
        busiLicPicTimeS: this.yingye2, //营业执照有效期开始时间：yyyyMMdd
        busiLicType: "01", //营业执照类型 01 社会统一信用码（合一证）
        busiPvcCode: "11", //经营地址省编码
        busiScope: "dasdasdasd", //经营范围
        entName: this.entName, //企业名称
        entType: this.entType, //企业类型 (14-企业 20-个体工商）
        imgList: [
          {
            imgPath: this.placePhoto1_image_path,
            imgType: "04",
          },
          {
            imgPath: this.placePhoto2_image_path,
            imgType: "05",
          },
          {
            imgPath: this.placePhoto3_image_path,
            imgType: "06",
          },
        ],
        isBusiLongTerm: term, //营业执照是否长期有效Y 是，N 否
        logoPicPath: this.logo_image_path, //logo图片地址
        orderNo: this.$store.state.userOrderNo, //订单号
        shortName: this.shortName, //企业简称
        specialPicPath: this.managemenPhoto2_image_path, //特殊经营许可照片
      };
      api.saveOrUpdateEnt(params);
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
        .toplogoimg {
          position: absolute;
          z-index: 10;
        }
        .logo_mask {
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: 11;
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
        .topplacePhotoimg {
          position: absolute;
          z-index: 10;
        }
        .placePhoto_mask {
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
        .topmanagemenPhotoimg {
          position: absolute;
          z-index: 10;
        }
        .managemenPhoto_mask {
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
