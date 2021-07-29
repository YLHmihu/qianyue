import axios from "@/utils/request";
export default {
  //查询用户录入中店铺信息接口
  queryEntByPhone (params) {
    return axios.get(
      `/ci-mv-mas-front.ci-mv.sit.epay/v1/ent/queryEntByPhone?flowNo=${params}`
    );
  },
  //查询商户身份信息接口
  queryMerchantInfoByNo (params) {
    return axios.post(
      `/ci-mv-mas-front.ci-mv.sit.epay/v1/merchant/queryMerchantInfoByNo`,
      params
    );
  },
  //根据订单号查询结算信息
  querySetleInfoByNo (params) {
    return axios.post(
      `/ci-mv-mas-front.ci-mv.sit.epay/v1/setle/querySetleInfoByNo`,
      params
    );
  },

  //新增店铺信息接口
  saveOrUpdateEnt (params) {
    return axios.post(
      `/ci-mv-mas-front.ci-mv.sit.epay/v1/ent/saveOrUpdateEnt`,
      params
    );
  },
  //新增商户信息
  addMerchantInfo (params) {
    return axios.post(
      `/ci-mv-mas-front.ci-mv.sit.epay/v1/merchant/addMerchantInfo`,
      params
    );
  },
  //新增结算信息
  addSetleInfo (params) {
    return axios.post(
      `/ci-mv-mas-front.ci-mv.sit.epay/v1/setle/addSetleInfo`,
      params
    );
  },

  //上传logo图的接口
  imgFilter (params) {
    return axios.post(
      `/ci-mv-mas-front.ci-mv.sit.epay/v1/bdrco/imgFilter`,
      params
    );
  },
  //除logo图外的图片上传接口
  imageUpload (params) {
    return axios.post(
      `/ci-mv-mas-front.ci-mv.sit.epay/v1/image/imageUpload`,
      params
    );
  },
  //拿接口返回的图片地址换取显示使用的图片src
  imagesPreview (params) {
    return axios.post(
      `/ci-mv-mas-front.ci-mv.sit.epay/v1/image/imagesPreview`,
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
