function PAMS(campaign, code,banner) {
    let theUrl = 'https://www.cloudflare.com/cdn-cgi/trace';
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    let data = xmlHttp.responseText;
    data = data.trim().split('\n').reduce(function (obj, pair) {
        pair = pair.split('=');
        return obj[pair[0]] = pair[1], obj;
    }, {});
    data['url'] = window.location.href;
    data['tag_code'] = code;
    data['campaign_id'] = campaign;
    data['banner_id'] = banner;
    data['nid'] = '60b4a817bbf01';
    data['site_cookie'] = document.cookie;
    let cookie_data = getCookies();
    let return_data = {...data, ...cookie_data};
    let query_string = param(return_data);

    let link = 'https://ads.purplepatch.online/timp?' + query_string;
    const image = document.createElement('img')
    image.src = link;
    image.style = 'display:none';
    document.body.appendChild(image);
    return return_data;
}

function PAMSA(code, type) {
    let theUrl = 'https://www.cloudflare.com/cdn-cgi/trace';
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    let data = xmlHttp.responseText;
    data = data.trim().split('\n').reduce(function (obj, pair) {
        pair = pair.split('=');
        return obj[pair[0]] = pair[1], obj;
    }, {});
    data['url'] = document.referrer;
    data['code'] = code;
    data['type'] = type;
    data['nid'] = '60b4a817bbf01';
    data['site_cookie'] = document.cookie;
    let cookie_data = getCookies();
    let return_data = {...data, ...cookie_data};
    let query_string = param(return_data);

    let link = 'https://ads.purplepatch.online/timp?' + query_string;
    const image = document.createElement('img')
    image.src = link;
    image.style = 'display:none';
    document.body.appendChild(image);
    return return_data;
}


function param(data) {
    url = Object.keys(data).map(function (k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&');
    return url;
}


function getCookies() {
    var pairs = document.cookie.split(";");
    var cookies = {};
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split("=");
        cookies[(pair[0] + '').trim()] = unescape(pair.slice(1).join('='));
    }
    return cookies;
}

function ButtonTrack() {
    var code = this.getAttribute("pams-pid");
    var type = this.getAttribute("pams-itype");
    PAMS(code, type)
}




const targer_element = document.getElementsByClassName('pams-em')

function iniFrame() {
    if ( window.location !== window.parent.location )
    {

        // The page is in an iFrames
        console.log("The page is in an iFrame",window.parent.location);
    }
    else {

        // The page is not in an iFrame
        console.log("The page is not in an iFrame");
    }
}

// Calling iniFrame function



const checkIsVisible = (element) => {
    console.log(element)
    // window.parent('iframe').contentWindow.postMessage({ title: "Hi", message: "Seems to work" }, targetOrigin);
    // const rect = element.getBoundingClientRect();
    // // console.log(window,rect.bottom,window.innerHeight,window.parent)
    // if (rect.bottom-150 <= window.innerHeight) {
    //     element.remove()
    //     console.log("I see you!");
    // }

    // console.log('loaded');
    // console.log(window.top.location,window.location.host);
    // console.log(window.parent);
    const currentScroll = window.parent.scrollY;
    const screenHeight = window.parent.innerHeight;
    // console.log(window.parent.window.innerHeight,element.getBoundingClientRect());
    const frameRect = window.frameElement.getBoundingClientRect();
    // console.log(frameRect);
    // console.log(window.parent.innerHeight);
    var visibleArea = currentScroll + screenHeight;

    var elementPosition = frameRect.top;
    // var currentScroll = window.parent.$("iframe").contents().scrollTop();
    // var screenHeight = window.parent.$("iframe").height();
    // var visibleArea = currentScroll + screenHeight;
    // console.log(elementPosition , visibleArea)
    if (elementPosition < visibleArea){
        console.log("I see you!");
    }
    return (elementPosition < visibleArea);
};

function isElementVisible(element)
{
    var elementPosition = element.offset().top;
    var currentScroll = window.parent.$("iframe").contents().scrollTop();
    var screenHeight = window.parent.$("iframe").height();
    var visibleArea = currentScroll + screenHeight;
    console.log(elementPosition , visibleArea)
    return (elementPosition < visibleArea);
}

window.top.document.addEventListener('scroll', () => {
    Array.from(targer_element).forEach(function (SE) {
        // isElementVisible(SE);
        checkIsVisible(SE);
    })
})


document.addEventListener('DOMContentLoaded', function () {
    console.log('document is ready. I can sleep now');
    iniFrame();
    var atdbuttonelement = document.getElementsByClassName("pams-btn-t");

    Array.from(atdbuttonelement).forEach(function (button) {
        button.addEventListener('click', ButtonTrack);
    });

    console.log('loaded');
    Array.from(targer_element).forEach(function (SE) {
        checkIsVisible(SE);
        // if(!SE.getAttribute('data-count')){
        //     console.log(SE.getAttribute('data-id'))
        //     SE.setAttribute('data-count',1)
        // }

    })
});
