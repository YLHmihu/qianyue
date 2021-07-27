<template>
  <div class="secondStep">
    <process :value="active"></process>
    <interval></interval>
    <div class="legalPerson">
      <div class="title">法人身份证照片</div>
      <div class="txt">请上传JPG、PNG格式图片，大小不超过5MB</div>
      <div class="photo">
        <div class="images">
          <upload-pictures :value="Photo_img1"></upload-pictures>
          <span>拍摄人像页</span>
        </div>
        <div class="images">
          <upload-pictures :value="Photo_img2"></upload-pictures>
          <span>拍摄国徽页</span>
        </div>
      </div>
      <div class="ipt name">
        <div>法人姓名</div>
        <unicom-input :field="field"></unicom-input>
      </div>
      <unicom-divider :hairline="true"></unicom-divider>
      <div class="ipt number">
        <div>法人身份证号</div>
        <unicom-input :field="field"></unicom-input>
      </div>
      <unicom-divider :hairline="true"></unicom-divider>
      <div class="iptradio validityPeriod">
        <div class="left">身份证有效期</div>
        <indate></indate>
        <unicom-radio-group v-model="validitychecked" row>
          <unicom-radio label="0">长期</unicom-radio>
        </unicom-radio-group>
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
          <upload-pictures :value="liantong_img"></upload-pictures>
        </div>
      </div>
      <div class="ipt ltname">
        <div>联通员工姓名</div>
        <unicom-input :field="field"></unicom-input>
      </div>
      <unicom-divider :hairline="true"></unicom-divider>
      <div class="ipt ltnumber">
        <div>联通员工身份证号</div>
        <unicom-input :field="field"></unicom-input>
      </div>
      <unicom-divider :hairline="true"></unicom-divider>
      <div class="ipt buname">
        <div>商家联系人姓名</div>
        <unicom-input :field="field"></unicom-input>
      </div>
      <unicom-divider :hairline="true"></unicom-divider>
      <div class="ipt bunumber">
        <div>商家联系人身份证号</div>
        <unicom-input :field="field"></unicom-input>
      </div>
      <unicom-divider :hairline="true"></unicom-divider>
      <div class="ipt bumailbox">
        <div>商家联系人邮箱</div>
        <unicom-input :field="field"></unicom-input>
      </div>
      <unicom-divider :hairline="true"></unicom-divider>
      <div class="ipt buphone">
        <div>商家联系人电话</div>
        <unicom-input :field="field"></unicom-input>
      </div>
    </div>
    <div class="btn" @click="nextbtn">下一步</div>
  </div>
</template>

<script>
import Process from "../../../components/process.vue";
import Interval from "../../../components/interval.vue";
import UploadPictures from "../../../components/uploadPictures.vue";
import Indate from "../../../components/indate.vue";
import { Button, Input, Divider, Radio, RadioGroup } from "unicom-mobile";
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
  },
  data() {
    return {
      active: [1, 2],
      field: "input",
      validitychecked: false,
      Photo_img1: require("../../../assets/img/upload5.png"),
      Photo_img2: require("../../../assets/img/upload6.png"),
      liantong_img: require("../../../assets/img/upload7.png"),
    };
  },
  methods: {
    nextbtn() {
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
      img {
        width: 235px;
        height: 140px;
        background: #ffffff;
        box-shadow: 0 8px 37px 0 rgba(0, 0, 0, 0.05);
        border-radius: 2px;
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
</style>
