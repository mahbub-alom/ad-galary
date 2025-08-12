    let cm_id = 1992;
    function getExtraData(){var t;let e=function t(){var e=document.cookie.split(";");if(window.location!==window.parent.location?0:1)e=document.cookie.split(";");else try{e=window.parent.document.cookie.split(";")}catch(i){e=document.cookie.split(";")}for(var o={},n=0;n<e.length;n++){var r=e[n].split("=");o[(r[0]+"").trim()]=unescape(r.slice(1).join("="))}return o}(),i=((t=new XMLHttpRequest).open("GET","https://www.cloudflare.com/cdn-cgi/trace",!1),t.send(null),newData=t.responseText.trim().split("\n").reduce(function(t,e){return t[(e=e.split("="))[0]]=e[1],t},{}));return{user_agent:i.uag,browser_cookies:e._ga,client_ip:i.ip}}let extraData=(console.log(!0),getExtraData());function submitInteraction(t,e=e){fetch(`https://advisorapi.purplepatch.online/ssp/richmedia_events?cm_id=${cm_id}&pub_id=${window.location.host}&type=${t}&user_agent=${e?.user_agent}&browser_cookies=${e?.browser_cookies}&client_ip=${e?.client_ip}`)}


let citySelect = document.getElementById("citySelect");
let citySelectTo = document.getElementById("citySelectTo");
let dateSelect = document.getElementById("dateSelect");
let dateSelectTo = document.getElementById("dateSelectTo");

const routes = [
  "dhaka",
  "rajshahi",
  "bogura",
  "rangpur",
  "dinajpur",
  "gaibanda",
  "meherpur",
  "chittagong",
  "coxs bazar",
  "khagrachari",
  "bandorban",
  "rangamati",
  "barisal",
  "kuakata",
  "sylhet",
  "beani bazar",
  "sunamgonj",
  "natore",
  "chapai",
  "benapol",
  "chuadanga",
  "mujibnagar",
  "dorshona",
  "kushtia",
  "shreepur",
  "langalbad",
  "gopalganj",
  "tangail",
  "ishwardi",
  "bagha",
  "bonpara",
  "khulna",
  "pirojpur",
];

function populateSelectOptions(selectElementId) {
  const selectElement = document.getElementById(selectElementId);
  routes.forEach((route) => {
    const option = document.createElement("option");
    let value = route.toLowerCase().replace(/\s+/g, "");
    if (route === "coxs bazar") {
      value = "coxs-bazar";
      option.textContent = "Cox's Bazar";
    } else {
      option.textContent = route.slice(0, 1).toUpperCase() + route.slice(1);
    }
    option.value = value;
    selectElement.appendChild(option);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  populateSelectOptions("citySelect");
  populateSelectOptions("citySelectTo");
});

document.querySelector(".ppm_cta").addEventListener("click", () => {
  console.log(citySelect.value);
  console.log(citySelectTo.value);
  console.log(dateSelect.value);
  console.log(dateSelectTo.value);
  let cityFrom = citySelect.value;
  let cityTo = citySelectTo.value;
  let dateFrom = dateSelect.value;
  let dateTo = dateSelectTo.value;
  if (cityFrom && cityTo && dateFrom) {
      submitInteraction('clicked',extraData);
      submitInteraction(`${cityFrom}-${cityTo}`,extraData);

    window.open(
      `https://bdtickets.com/bus/search/${cityFrom}-to-${cityTo}?journeyDate=${dateFrom}&utm_source=pp&utm_campaign=pp+bdtickets&utm_content=pp+banner`
    );
  }
});

document.getElementById("callToBookImage").addEventListener("click", () => {
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (isMobile) {
    submitInteraction('phone_clicked',extraData);
    window.location.href = "tel:09610016460";

  } else {
    submitInteraction('website_clicked',extraData);
    window.open("https://bdtickets.com/?utm_source=pp&utm_campaign=pp+bdtickets&utm_content=pp+banner", "_blank");
  }
});
