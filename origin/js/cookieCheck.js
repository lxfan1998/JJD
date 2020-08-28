// 检查用户是否登录，未登录跳转到登录页面
function getCookie(key) {
    var cookieStr = document.cookie;
    var arr = cookieStr.split("; ");
    for (var i = 0; i < arr.length; i++) {
        var subArr = arr[i].split("=");
        if (subArr[0] === key) {
            return subArr[1];
        }
    }
}
var isLogin = getCookie("islogin");
if (!isLogin) {
    location.href = "./login.html#" + location.href;
}
function setCookie(key, value) {
    document.cookie = key + "=" + value;
}
function clearCookie(key) {
    document.cookie = key + "=" + "aaa;max-age=-1";
}