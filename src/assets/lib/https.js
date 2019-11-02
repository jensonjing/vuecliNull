import axios from './api.js';

/**
 * 发送请求示例：
 * let params = {aa:2};
 * this.$https.getData(params).then(res=>{
 *  console.log(res)
 * });
*/

const users = {
    loo(params){
        return axios.getAxios('post','/cache/manage/hth',params)
    },
    getData(params){
        return axios.getAxios('get','/cache/manage/business/JobIntroduction/company/job/v1.0/GetNew',params)
    }
}

export default users;