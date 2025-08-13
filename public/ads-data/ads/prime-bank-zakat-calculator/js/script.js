document.querySelector('.ppm_calculateKorunText').addEventListener('click', () => {
  gsap.to('.ppm_slide_1', { display: 'none', opacity: 0 })
  gsap.to('.ppm_slide_2', { display: 'block', opacity: 1 })
})
let zakat = 0;

document.querySelector('.ppm_calculateBtn').addEventListener('click', () => {
  let sthaborVal = document.querySelector('.form_sthabor').value;
  let osthaborVal = document.querySelector('.form_osthabor').value;
  let total = (Number(sthaborVal) + Number(osthaborVal));
  if (total > 46000) {
    zakat = Math.round(total / 40);
  } else {
    zakat = 0;
  }
  gsap.to('.ppm_slide_2', { display: 'none', opacity: 0, duration: .3 })
  gsap.to('.ppm_slide_3', { display: 'block', opacity: 1 })
  document.querySelector('.calculatedZakatAmount').innerHTML = zakat;
})


document.querySelector('.ppm_submitBtn').addEventListener('click', () => {
  if (checkMobileNumber()) {
    var mobileNum = document.querySelector('.mobile_no').value;
    submitForm(mobileNum, zakat);
  }
})

function checkMobileNumber() {
  var mobileNum = document.querySelector('.mobile_no').value;
  var mobilePattern = /^(?:\+88|88)?(01[3-9]\d{8})$/;

  if (mobileNum.match(mobilePattern)) {
    document.getElementById('mobile_no').classList.remove('error');
    document.getElementById('mobile_no').classList.add('success');

    return true;
  } else {
    document.getElementById('mobile_no').classList.add('error');
    document.getElementById('mobile_no').classList.remove('success');
    return false;
  }
}



function submitForm(mobileNum, zakatAmount) {
  var xhttp;
  if (mobileNum == "" || zakatAmount == "") {
    return;
  }
  // const formData = new FormData();
  // formData.append("mobile", mobileNum);
  // formData.append("zakatAmount", zakatAmount);
  // formData.append("link", window.top.location.href);


  // xhttp = new XMLHttpRequest();
  // xhttp.onreadystatechange = function () {
  //   if (this.readyState == 4 && this.status == 200) {
  //     console.log(this.responseText);
  //     if ('success' == this.responseText) {
  //       console.log('successfully inserted');
  //       gsap.to('.ppm_slide_3', { display: 'none', opacity: 0, duration: .3 })
  //       gsap.to('.ppm_slide_4', { display: 'block', opacity: 1 })
  //     }
  //   }
  // };

  // xhttp.open("POST", 'https:./db/data.php', true);
  // xhttp.send(formData);
          console.log('successfully inserted');
        gsap.to('.ppm_slide_3', { display: 'none', opacity: 0, duration: .3 })
        gsap.to('.ppm_slide_4', { display: 'block', opacity: 1 })
}

document.querySelector('.sthabor_hover').addEventListener('mouseover',()=>{
  gsap.to('.sthabor_help',{display:'block'})
})
document.querySelector('.osthabor_hover').addEventListener('mouseover',()=>{
  gsap.to('.osthabor_help',{display:'block'})
})