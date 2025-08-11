const displayTitle = document.querySelector('.patch_title img');
const displayCounter = document.querySelector('.patch_countdown');
const displayIftarText = document.querySelector('.patch_note img');

// https://hamariweb.com/islam/dhaka_ramadan-timing13750.aspx
var sehriSet = [
    "4:29", "4:28", "4:27", "4:26", "4:24",
    "4:24", "4:23", "4:22", "4:21", "4:20",
    "4:20", "4:51", "4:50", "4:49", "4:48",
    "4:47", "4:46", "4:45", "4:44", "4:43",
    "4:42", "4:41", "4:40", "4:39", "4:38",
    "4:36", "4:35", "4:34", "4:33", "4:31", "4:30", "4:30"
];



var iftarSet = [
    "18:03",
    "18:03", "18:03", "18:04", "18:04", "18:05",
    "18:05", "18:05", "18:06", "18:06", "18:07",
    "18:07", "18:08", "18:08", "18:08", "18:09",
    "18:09", "18:10", "18:10", "18:10", "18:11",
    "18:11", "18:12", "18:12", "18:12", "18:13",
    "18:13", "18:14", "18:14", "18:14", "18:15",
    "18:15"
];
var detailsTime = {};
fetch('https://adserver.purplepatch.online/current_location_ifter')
    .then(res => res.json())
    .then(data => {
        detailsTime = data;
        submitInteraction(detailsTime?.location,extraData);
        gsap.fromTo('.patch_countdown', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 1, ease: 'power2.inOut' })
        gsap.fromTo('.ppm_title', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 1, ease: 'power2.inOut' })
    })

function timeUpdate() {
    if (!detailsTime?.location) return;
    if(detailsTime.bn_location){
    document.querySelector('.ppm_title').innerHTML = `প্রিয় ${detailsTime.bn_location} বাসী`;
    }else{
     document.querySelector('.ppm_title').innerHTML = `প্রিয় রোজাদার`;
    }
    var today = new Date();
    var curDate = today.getDate();
    var curTime = today.getHours() * 60 * 60 + today.getMinutes() * 60 + today.getSeconds();

    var checkIftar = detailsTime.today_time.split(":");
    var timeIftar = checkIftar[0] * 60 * 60 + checkIftar[1] * 60;
    console.log(curDate, checkIftar, timeIftar, curTime)

    if (timeIftar <= curTime) {
        var nextIftar = detailsTime.next_day_time.split(":");
        var nextIftarTime = nextIftar[0] * 60 * 60 + nextIftar[1] * 60;
        var diffTime = (nextIftarTime + 24 * 60 * 60) - curTime;
        displayCounter.innerHTML = printTimer(diffTime);
    } else {
        var diffTime = timeIftar - curTime;
        displayCounter.innerHTML = printTimer(diffTime);
    }
}
timeUpdate();
setInterval(timeUpdate, 1e3);


function printTimer(sec) {
    hr = Math.floor(sec / 3600) % 24;
    mm = Math.floor(sec / 60) % 60;
    ss = sec % 60;

    var x = hr < 10 ? "0" + hr : hr;
    var y = mm < 10 ? "0" + mm : mm;
    var z = ss < 10 ? "0" + ss : ss;
    if(isNaN(x)) return '';
    return `<span class="hour absolute">${translteNum(x)}</span> <span class="minute absolute">${translteNum(y)}</span> <span class="second absolute">${translteNum(z)}</span>`;
}

function translteNum(num_str) {
    var bengali = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    var changed_nun = '';
    num_str.toString().split('').forEach(l => {
        if (isNaN(l)) { changed_nun += l; } else { changed_nun += bengali[l]; }
    });
    return changed_nun;
}


gsap.timeline({ repeat: -1 })
    .fromTo('.ppm_product', {
        display: 'none',
        opacity: 0,
        x: -150,
    },
        {
            display: 'block',
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power2.inOut'
        })
    .to('.ppm_product', {
        opacity: 0,
        display: 'none',
        duration: .3,
        ease: 'power2.inOut'
    }, '>2.5');

gsap.to('.ppm_cta', {
    scale: 1.05,
    repeat: -1,
    yoyo: true,
    duration: 1,
    ease: 'power2.out'
});

