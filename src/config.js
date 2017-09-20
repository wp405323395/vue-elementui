
var host = "192.168.1.196:8080"
//var host = 'www.maywidehb.com';
var isHttps = false;
var isDebug = true;
var schema = isHttps ? 'https':'http';
var config = {
    // 下面的地址配合云端 Server 工作
    host,
    isDebug,
    srcUrl: `${schema}://${host}/`,
    // 登录地址，用于建立会话
    loginUrl: `${schema}://${host}/wappweb/vot/vot-manager!doLogin`,

};


module.exports = config