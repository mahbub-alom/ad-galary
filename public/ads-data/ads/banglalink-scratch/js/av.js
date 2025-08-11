function PAMSIMP(campaign, code, banner, type = 'imp') {
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
    data['domain'] = getDomain();
    let cookie_data = getCookies();
    let return_data = {...data, ...cookie_data};
    let query_string = param(return_data);

    let url = 'https://advisorapi.purplepatch.online/live/imp?'

    if (type == 'visibility') {
        url = 'https://advisorapi.purplepatch.online/live/viewability?'
    }
    if (type == 'click') {
        url = 'https://advisorapi.purplepatch.online/live/click?'
    }

    let link = url + query_string;
    const image = document.createElement('img')
    image.src = link;
    image.style = 'display:none';
    document.body.appendChild(image);
    return return_data;
}

function getDomain() {
    console.log('window.location', window.location)
    var domain = ''
    try {
        // console.log('window.top.location', window.top.location)
        // console.log('window.top.location', window.location.ancestorOrigins[1])
        var isInIframe = (parent !== window),
            domain = null;
        if (isInIframe) {
            try {
                domain = document.top.location.host;
            } catch (e) {
                domain = window.location.host;
            }

            if (!domain || domain.search('.safeframe.') != -1) {
                try {
                    if (window.parent.search('.safeframe.') != -1) {
                        try {
                            domain = url_domain(window.parent.location.ancestorOrigins[1])
                        } catch (e) {
                            domain = url_domain(window.location.ancestorOrigins[1])
                        }
                    } else {
                        domain = url_domain(window.location.ancestorOrigins[1])
                    }
                } catch (e) {
                    domain = window.location.host;
                }
            }
        } else {
            domain = window.location.host;
        }
    } catch (e) {
        domain = window.location.host;
    }
    if (domain.search('.safeframe.') != -1) {
        try {
            domain = url_domain(window.location.ancestorOrigins[1])
        } catch (e) {
            domain = '';
        }
    }

    console.log(window.location.ancestorOrigins,window.location.ancestorOrigins[0])

    try {
        domain = url_domain(window.location.ancestorOrigins[1])
    } catch (e) {
        domain = domain;
    }

    return domain;
}

function url_domain(data) {
    var a = document.createElement('a');
    a.href = data;
    return a.hostname;
}

var AVWindow = window


function param(data) {
    url = Object.keys(data).map(function (k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&');
    return url;
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
        cookies[(pair[0] + '').trim()] = unescape(pair.slice(1).join('='));
    }
    return cookies;
}


const targer_element = document.getElementsByClassName('advisor-visible')

const advisorTG = document.getElementsByClassName("advisor")[0];
const av_campaign_id = advisorTG.getAttribute('data-cm-id');
const av_tag_id = advisorTG.getAttribute('data-tg-id');
const av_banner_id = advisorTG.getAttribute('data-bn-id');
const av_click_tracker_url = advisorTG.getAttribute('data-click-tracker-url');
const clickTagClass = advisorTG.getAttribute('data-click-tag-class');

const click_tracker_element = document.getElementsByClassName(clickTagClass);

PAMSIMP(av_campaign_id, av_tag_id, av_banner_id);

init();

Array.from(click_tracker_element).forEach(function (clickElement) {
    clickElement.addEventListener('click', function () {
        PAMSIMP(av_campaign_id, av_tag_id, av_banner_id, 'click')
    });
});

var aLink = document.getElementsByTagName('a'); // then, grab every link on the page
Array.from(aLink).forEach(function (sLink) {
    // console.log(sLink,sLink.host,sLink.href,av_click_tracker_url)
    if (av_click_tracker_url.search(sLink.host)) {
        sLink.addEventListener('click', function () {
            PAMSIMP(av_campaign_id, av_tag_id, av_banner_id, 'click')
        });
    }
})

function isiFrame() {
    if (AVWindow.location !== AVWindow.parent.location) {
        return true
    } else {
        return false
    }
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (parentWindow.innerHeight) &&
        rect.right <= (parentWindow.innerWidth)
    );
}


// Calling iniFrame function


const checkIsVisible = (element, AVW) => {

    const currentScroll = AVW.parent.scrollY;
    const screenHeight = AVW.parent.innerHeight;
    const frameRect = AVW.frameElement.getBoundingClientRect();
    console.log(currentScroll, screenHeight, frameRect.top);


    // var visibleArea = currentScroll + screenHeight;
    var visibleArea = screenHeight;
    var elementPosition = frameRect.top;

    console.log(visibleArea, elementPosition);


    if (elementPosition < visibleArea) {
        console.log("I see you!");
        element.remove()
        PAMSIMP(av_campaign_id, av_tag_id, av_banner_id, 'visibility')
    }
    return (elementPosition < visibleArea);
};

try {
    window.top.document.addEventListener('scroll', () => {
        console.log(window.frameElement.getBoundingClientRect().top)
        Array.from(targer_element).forEach(function (SE) {
            // isElementVisible(SE);
            let isVisible = checkIsVisible(SE, AVWindow);

        })
    })
} catch (error) {
    // console.error(error);
    console.log('Unable to get viewability')
    // console.log(window.frameElement.getBoundingClientRect().top)
    // Expected output: ReferenceError: nonExistentFunction is not defined
    // (Note: the exact output may be browser-dependent)
}

function init() {
    try {
        var isInIframe = AVWindow.parent.frameElement && AVWindow.parent.frameElement.nodeName == "IFRAME";
        if (isInIframe) {
            AVWindow = AVWindow.parent
            init();
        }
    } catch (e) {
        console.log('Unable to init element parent')
    }

}


document.addEventListener('DOMContentLoaded', function () {
    console.log('document is ready. I can sleep now');
    init();

    console.log('loaded');


    try {
        let ddd = window.top.document
        Array.from(targer_element).forEach(function (SE) {
            checkIsVisible(SE, AVWindow);
        })
    } catch (error) {
        console.log('Unable to get visibility')
    }

});
