function getExtraData() {
  function isiFrame() {
    if (window.location !== window.parent.location) {
      return true;
    } else {
      return false;
    }
  }
  function getCookies() {
    var pairs = document.cookie.split(";");
    if (isiFrame()) {
      try {
        pairs = window.parent.document.cookie.split(";");
      } catch (e) {
        pairs = document.cookie.split(";");
      }
    } else {
      pairs = document.cookie.split(";");
    }
    var cookies = {};
    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i].split("=");
      cookies[(pair[0] + "").trim()] = unescape(pair.slice(1).join("="));
    }
    return cookies;
  }

  function getIp() {
    let theUrl = "https://www.cloudflare.com/cdn-cgi/trace";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    let data = xmlHttp.responseText;

    newData = data
      .trim()
      .split("\n")
      .reduce(function (obj, pair) {
        pair = pair.split("=");
        return (obj[pair[0]] = pair[1]), obj;
      }, {});
    // console.log(newData);

    return newData;
  }

  let cookiesData = getCookies();
  let ipData = getIp();
  // console.log(cookiesData, ipData);
  return {
    user_agent: ipData.uag,
    browser_cookies: cookiesData._ga,
    client_ip: ipData.ip,
  };
}
