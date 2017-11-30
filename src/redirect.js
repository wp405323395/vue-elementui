if (process.env.NODE_ENV === 'production') {
  let loadcount = sessionStorage.getItem('loadNum');
  if (loadcount == undefined || loadcount == null || loadcount == '') {
    sessionStorage.setItem('loadNum', 1);
  }

  let href = window.location.href;
  if (href.indexOf('welcome') >= 0) {} else if (href.indexOf('sharByWx') >= 0) {
    let routepath = getQueryString("routepath");
    let json = getQueryString('json');
    let redirectUrl =
      "https://www.maywidehb.com/webapp/dist/#/welcome?routepath=" + routepath +
      "&json=" + json;
    let url =
      'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5d63c4a1990efe79&redirect_uri=' +
      decodeURIComponent(redirectUrl) +
      '&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect';
    alert('到微信的--' + url);
    window.location.href = url;

  } else {
    let startRefreshCount = sessionStorage.getItem('loadNum');
    if (startRefreshCount < 2) {
      sessionStorage.setItem('loadNum', 3);
      let weixinUrl =
        'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5d63c4a1990efe79&redirect_uri=' +
        'https%3a%2f%2fwww.maywidehb.com%2fwebapp%2fdist%2f%23%2fwelcome%3froutepath%3dgame%26json%3d%257b%2522tvId%2522%253a2%257d' +
        '&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect';
      window.location = weixinUrl;
    }

  }
}

function getQueryString(par) {
  var local_url = document.location.href;
  var get = local_url.indexOf(par + "=");
  if (get == -1) {
    return false;
  }
  var get_par = local_url.slice(par.length + get + 1);
  var nextPar = get_par.indexOf("&");
  if (nextPar != -1) {
    get_par = get_par.slice(0, nextPar);
  }
  return get_par;
}
