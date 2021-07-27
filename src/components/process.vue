<template>
  <div class="titleprocess">
    <div class="process" :class="value.indexOf(1) == -1 ? '' : 'process_f'">
      <div class="num">1</div>
      <div class="tit">店铺信息</div>
    </div>
    <div
      class="rectangle"
      :class="value.indexOf(2) == -1 ? '' : 'rectangle_f'"
    ></div>
    <div class="process" :class="value.indexOf(2) == -1 ? '' : 'process_f'">
      <div class="num">2</div>
      <div class="tit">身份信息</div>
    </div>
    <div
      class="rectangle"
      :class="value.indexOf(3) == -1 ? '' : 'rectangle_f'"
    ></div>
    <div class="process" :class="value.indexOf(3) == -1 ? '' : 'process_f'">
      <div class="num">3</div>
      <div class="tit">结算信息</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {};
  },
  created() {},
};
</script>

<style lang="less" scoped>
.titleprocess {
  display: flex;
  flex-direction: row;
  background: #fff;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 10px;
  .process {
    width: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .num {
      width: 20px;
      height: 20px;
      background: #666666;
      border-radius: 20px;
      font-family: PingFangSC-Semibold;
      font-size: 13px;
      color: #ffffff;
      text-align: center;
      line-height: 20px;
    }
    .tit {
      font-family: PingFangSC-Semibold;
      font-size: 12px;
      color: #666666;
      line-height: 12px;
      margin-top: 10px;
    }
  }
  .rectangle {
    width: 65px;
    height: 4px;
    background: #e1e1e1;
    border-radius: 2px;
    margin-top: 8px;
  }
  .process_f {
    .num {
      background: #e60027;
    }
    .tit {
      color: #333333;
    }
  }
  .rectangle_f {
    background: #e60027;
  }
}
</style>
