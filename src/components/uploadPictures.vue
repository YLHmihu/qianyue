<template>
  <img :src="imgsrc" @click="setAvatar" />
</template>
<script>
export default {
  props: ["value"],
  data() {
    return {
      imgsrc: this.value,
      picPath: {},
    };
  },
  methods: {
    setAvatar() {
      window.ms
        .chooseImage()
        .then((res) => {
          if (res && "gif" == res.imageType) {
            this.imgsrc = "data:image/gif;base64," + res.imageData;
            this.picPath = {
              data: "data:image/gif;base64,",
              picBase64: res.imageData,
              imgsrc: this.imgsrc,
            };
            this.$emit("imgsrc", this.picPath);
          } else if (res && "jpg" == res.imageType) {
            this.imgsrc = "data:image/jpg;base64," + res.imageData;
            this.picPath = {
              data: "data:image/jpg;base64,",
              picBase64: res.imageData,
              imgsrc: this.imgsrc,
            };
            this.$emit("imgsrc", this.picPath);
          }
        })
        .catch((error) => {
          console.log(error);
          if (error.data.status == "10") {
            //程序错误，无法返回图片数据
          } else if (error.data.status == "11") {
            //用户手动取消了
          } else if (error.data.status == "12") {
            //提示用户没有授权摄像头权限，并引导用户授权
            window.ms.openSystemSetting();
          }
        });
    },
  },
};
</script>

<style lang="less" scoped>
img {
  background: #ffffff;
  box-shadow: 0 8px 37px 0 rgba(0, 0, 0, 0.05);
  border-radius: 2px;
}
</style>
