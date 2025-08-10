// --------------------------------- For Interaction ----------------------------------
// let extraData = function(){
//   console.log(typeof(getExtraData) === 'function')
//   if(typeof(getExtraData) === 'function'){
//     return getExtraData()
//   }else{
//     return {};
//   }
// }();
// function submitInteraction(type,extraData=extraData) {
//   fetch(`https://advisorapi.purplepatch.online/ssp/richmedia_events?cm_id=${cm_id}&pub_id=${window.location.host}&type=${type}&user_agent=${extraData?.user_agent}&browser_cookies=${extraData?.browser_cookies}&client_ip=${extraData?.client_ip}`);
// }
// submitInteraction('slide',extraData)
// ----------------------------------- End Interaction -----------------------------------


// gsap.to('.ppm_callBtn',{scaleX:1.1,scaleY:1.1,repeat:-1,yoyo:true})
// document.querySelector('.ppm_slide_1').addEventListener('click',()=>{
//   submitInteraction('tap_call',extraData)
//   window.open(`tel:+8801872607360`);
// });
let activePeople = 0;
let activeProduct = [[1], [0], [2]];
let peopleUrl = ['women','men','kids']
let productUrl = [['saree', 'kurta', 'tops'], ['panjabi', 'coaty', 'jackets'], ['kids-new-arrivals', 'boys-ages-8-15', 'girls-aged-8-15']]
let lowRange = 2875;
let highRange = 8625;

function peopleClick(peopleId) {
  activePeople = peopleId
  updateClick()
}
function productClick(productId) {
  activeProduct[activePeople][0]=productId;
  updateClick()
}

function updateClick() {
  for (i = 0; i <= 2; i++) {
    if (activePeople == i) {
      gsap.set(`.productType${i}`, { display: 'flex' })
      document.querySelector(`.people${i}`).classList.add('active')
    } else {
      gsap.set(`.productType${i}`, { display: 'none' })
      document.querySelector(`.people${i}`).classList.remove('active')
    }
  }
  for (i = 0; i <= 2; i++) {
    for (j = 0; j <= 2; j++) {
      if (activeProduct[i][0] === j) {
        document.querySelector(`.productType${i}>.btn${j}`).classList.add('active')
      } else {
        document.querySelector(`.productType${i}>.btn${j}`).classList.remove('active')
      }
    }
  }
}
updateClick()


var inputLeft = document.getElementById("input-left");
var inputRight = document.getElementById("input-right");

var thumbLeft = document.querySelector(".slider > .thumb.left");
var thumbRight = document.querySelector(".slider > .thumb.right");
var range = document.querySelector(".slider > .range");

function setLeftValue() {
	var _this = inputLeft,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbLeft.style.left = percent + "%";
	range.style.left = percent + "%";
  document.querySelector('.minPrice').innerText = parseInt(percent * 115)
  lowRange = parseInt(percent * 550);
}
setLeftValue();

function setRightValue() {
	var _this = inputRight,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbRight.style.right = (100 - percent) + "%";
	range.style.right = (100 - percent) + "%";
  document.querySelector('.maxPrice').innerText = parseInt(percent * 115)
  highRange = parseInt(percent * 550)
}
setRightValue();

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

inputLeft.addEventListener("mouseover", function() {
	thumbLeft.classList.add("hover");
});
inputLeft.addEventListener("mouseout", function() {
	thumbLeft.classList.remove("hover");
});
inputLeft.addEventListener("mousedown", function() {
	thumbLeft.classList.add("active");
});
inputLeft.addEventListener("mouseup", function() {
	thumbLeft.classList.remove("active");
});

inputRight.addEventListener("mouseover", function() {
	thumbRight.classList.add("hover");
});
inputRight.addEventListener("mouseout", function() {
	thumbRight.classList.remove("hover");
});
inputRight.addEventListener("mousedown", function() {
	thumbRight.classList.add("active");
});
inputRight.addEventListener("mouseup", function() {
	thumbRight.classList.remove("active");
});

document.querySelector('.submitBtn').addEventListener('click',()=>{
  window.open(`https://www.aarong.com/${peopleUrl[activePeople]}/${productUrl[activePeople][activeProduct[activePeople]]}?price=${lowRange}-${highRange}`)
})