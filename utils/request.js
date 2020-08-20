import qs from "qs";
import config from "../config/config.js";
import storage from "../storage/index.js";


/**
 * 发送http请求
 * @param {String} url 目标rl
 * @param {String} method 方法get,post,put etc.
 * @param {Object} data 对象参数
 * @returns {Promise<unknown>}
 */
const request = function(url, method, data) {
	return new Promise((resolve, reject) => {
		const options = {
			url: config.baseUrl + url,
			method: method,
			data: data,
			success: (res) => {
				res.data.status = res.statusCode;
				resolve(res.data);
			},
			fail: (res) => {
				err.data.status = err.statusCode;
				reject(err.data);
			}
		};
		// 如果有登录状态token的话，则添加到请求头
		if (storage.get("token")) {
			// 在 headers 中设置 Authorization 属性放token，token是存在缓存中的
			options.header = {
				"Authorization": `Bearer ${storage.get("token")}`
			};
		}
		uni.request(options);
	});
};

export default request;
