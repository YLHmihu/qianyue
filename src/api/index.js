import axios from "@/utils/request";
export default {
  //查询用户录入中店铺信息接口
  queryEntByPhone (params) {
    return axios.get(
      `/ci-mv-mas-front.ci-mv.sit.epay/v1/ent/queryEntByPhone?flowNo=${params}`
    );
  },
  //新增商户信息
  addMerchantInfo (params) {
    return axios.post(
      `/ci-mv-mas-front.ci-mv.sit.epay/v1/merchant/addMerchantInfo`,
      params
    );
  },
  //根据订单号查询商户信息表
  queryMerchantInfoByNo (params) {
    return axios.post(
      `/ci-mv-mas-front.ci-mv.sit.epay/v1/merchant/queryMerchantInfoByNo`,
      params
    );
  },
  //获取省份地市信息接口
  getCity (params) {
    return axios.get(
      `/ci-mv-mas-front.ci-mv.sit.epay/v1/area/getCity?code=${params}`
    );
  },
};
