import axios from "@/utils/request";
export default {
  addMerchantInfo (params) {
    return axios.post(
      `/ci-mv-mas-front.ci-mv.sit.epay/v1/merchant/addMerchantInfo`,
      params
    );
  },
};
