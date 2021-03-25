import md5 from 'js-md5';
import axios from 'axios';

const appid = "20210324000740603";
const secret = "ynb4ziMbiNsloCiNDED2";

const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? '/baidu_translation' : "http://api.fanyi.baidu.com",
    timeout: 8000,
    withCredentials: false,
    responseType: 'json',
})

const baidu = {
    baiduInstance() {
        return instance;
    },
    sign(q, s) {
        let a = appid + q + s + secret;
        return md5(a);
    },
    baiduTranslate(t, s, type) {
        let sign = this.sign(t, s);
        return "/api/trans/vip/translate?q=" + t
            + "&from=auto&to=" + type
            + "&appid=" + appid + "&salt=" + s + "&sign=" + sign;
    }

}

export default baidu;
