import storage from "../storage/index.js";

/**
 * 登陆token是否无效（无效：1.无token，2.过期）
 * 若无效，则调用后会清除token,token_expire
 * @returns {boolean}
 */
var isTokenInvalid = () => {
  var currentUnixTime = Math.round(new Date().getTime() / 1000);
  const token = storage.get("token");
  const tokenExpire = Number(storage.get("token_expire"));
  if (
    !!token &&
    !!tokenExpire &&
    currentUnixTime < tokenExpire
  ) {
    // token 存在 且 不为空 且 未过期
    return false;
  } else {
	storage.remove("token");
	storage.remove("token_expire");

    return true;
  }
};

export { isTokenInvalid };
