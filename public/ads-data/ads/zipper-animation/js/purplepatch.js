
const left = document.querySelector('#left_panel')
const right = document.querySelector('#right_panel')
const tab = document.querySelector('#zip_tab')
var perc = 2;

tab.addEventListener('touchmove', function (event) {
  event.preventDefault();
  var touch = event.touches[0].clientY;
  if (touch < 0) {
    touch = 0
  }

  if (perc > 1) {
    $("#zip_tab").removeClass('updown');
    // $("#zip_tab").addClass('overflow');

  } else {
    $("#zip_tab").addClass('updown');
  }

  var touch_perc = (touch / window.innerHeight) * 100
  if (touch_perc > 22) {
    touch_perc = 22

    // $("#zip_tab").addClass('overflow');

    setTimeout(() => {
      $("#left_panel").addClass('hidden');
      $("#right_panel").addClass('hidden');
      $("#zip_tab").remove();
      $(".slider1").remove();
      setTimeout(() => {
        $(".slider2").removeClass('hidden');
        $(".slider2").removeClass('hidden').addClass('zoomIn');
      }, 0);
    }, 100);

  }


  document.documentElement.style.setProperty('--open', (touch_perc * 3.2) + '%')
  tab.style.top = touch_perc + '%'
}, false);





dragElement(tab);
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
    tab.classList.toggle('grabbing')
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    pos2 = pos4 - e.clientY;
    pos4 = e.clientY;
    // set the element's new position:
    var newY = elmnt.offsetTop - pos2
    var perc = ((elmnt.offsetTop - pos2) / window.innerHeight) * 100
    console.log(perc)
    if (perc < 0) {
      perc = 0
    }


    if (perc > 1) {
      $("#zip_tab").removeClass('updown');

    } else {
      $("#zip_tab").addClass('updown');
    }

    console.log(perc)
    if (perc > 14) {
      perc = 14
      // $("#zip_tab").addClass('overflow');

      setTimeout(() => {
        $("#left_panel").addClass('hidden');
        $("#right_panel").addClass('hidden');
        $("#zip_tab").remove();
        $(".slider1").remove();
        setTimeout(() => {
          $(".slider2").removeClass('hidden').addClass('zoomIn');
        }, 0);
      }, 500);

    }
    // $(".slider2").removeClass('.hidden');
    // $(".slider2").addClass('.fadeInZoom');






    elmnt.style.top = (perc) + '%'
    document.documentElement.style.setProperty('--open', (perc * 4.2) + '%')
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
    tab.classList.toggle('grabbing')
  }
}
tab.style.top = (perc) + '%'