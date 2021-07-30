<template>
  <div>
    <img :src="logo_user_photo" alt="" />
    <div>{{ logo_user_photo }}</div>
  </div>
</template>
<script>
import { Input } from "unicom-mobile";
import api from "../api/index";

export default {
  components: {
    [Input.name]: Input,
  },
  data() {
    return {
      logo_user_photo: "",
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      //拿录入中的图片path换取图片显示
      let logo = {
        flowNo: this.$store.state.userOrderNo,
        list: [
          {
            imageType: "01",
            picPath:
              "http://oss.ts-pfecs.epay/ci-mv/oss/public/mas/20210729/86b58590-f05d-11eb-b7c2-56da51fad048ftacu.jpg",
          },
        ],
      };
      api.imagesPreview(logo).then((res) => {
        this.logo_user_photo = res.data[0].data + "," + res.data[0].picBase64;
        console.log(this.logo_user_photologo_user_photo);
      });
    },
  },
};
</script>
