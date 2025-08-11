// --------------------------------- For Interaction ----------------------------------
let extraData = function(){
  console.log(typeof(getExtraData) === 'function')
  if(typeof(getExtraData) === 'function'){
    return getExtraData()
  }else{
    return {};
  }
}();
function submitInteraction(type,extraData=extraData) {
  fetch(`https://advisorapi.purplepatch.online/ssp/richmedia_events?cm_id=${cm_id}&pub_id=${window.location.host}&type=${type}&user_agent=${extraData?.user_agent}&browser_cookies=${extraData?.browser_cookies}&client_ip=${extraData?.client_ip}`);
}
// submitInteraction('slide',extraData)
// ----------------------------------- End Interaction -----------------------------------
let errorDirection = false;
topBannerDrag = Draggable.create('.ppm_slide_1', {
  type: "x", edgeResistance: .99, bounds: {
    top: 0, left: -300, width: 600, height: 250,
  }, onDrag: function () {
    gsap.set('.ppm_map', { x: this.x })
    console.log(this.x)
    if (this.x < -50) {
      submitInteraction('swipe',extraData)
      topBannerDrag[0].disable()
      gsap.timeline({ onComplete: () => { if(!errorDirection){  gsap.to(".getDirectionBtn", { display: 'block', opacity: 1 })} } })
        .to('.ppm_slide_1', { x: -300 })
        .to('.ppm_map', { x: -300 },'<')
    }
  }
})

document.querySelector('.getDirectionBtn').addEventListener('click',()=>{
      submitInteraction('tap_get_direction',extraData)
})


gsap.to('.ppm_hand', { x: -20, repeat: -1, yoyo: true, duration: 1 })
getLocation()
// document.querySelector('.ppm_slide_1').addEventListener('click', () => {
//   gsap.to('.ppm_map', { opacity: 1, display: 'block' })
//   gsap.to('.ppm_slide_1', { opacity: 0, display: 'none' })
//   getLocation()
// })

// ********* Haversine Formula *********************************
// ****************** Calculate Distance ***************************
function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function calculateDistance(point1, point2) {
  var earthRadiusKm = 6371; // Radius of the Earth in kilometers
  var dLat = degreesToRadians(point2.lat - point1.lat);
  var dLon = degreesToRadians(point2.lng - point1.lng);

  var lat1 = degreesToRadians(point1.lat);
  var lat2 = degreesToRadians(point2.lat);

  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  var distance = earthRadiusKm * c;

  // The distance is in kilometers, you can convert it to other units if needed

  return distance;
}
// ****************** End Calculate Distance ***************************



// Permission Error Div
// x = document.querySelector('.result')

// get Local position
function getLocation() {
  a = 'working';
  if (navigator.geolocation) {
    console.log(a)
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    a = "Geolocation is not supported by this browser.";
    console.log(a)
  }
}

function showError(error) {
  errorDirection = true;
  a = '';
  switch (error.code) {
    case error.PERMISSION_DENIED:
      a = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      a = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      a = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      a = "An unknown error occurred."
      break;
  }
  document.querySelector('.ppm_errorMsg').innerText = a;
  gsap.to('#loading', { opacity: 0, display: 'none', duration: .3 })
  gsap.to('.ppm_errorMsg', { opacity: 1, display: 'block', duration: .3 })
  const washingtonLonLat = [90.42585303869785, 23.781420967600535];
  mapViewOSM(washingtonLonLat)
  gsap.to('#loading', { opacity: 0, display: 'none', duration: .3 })
  document.querySelector('.getDirectionBtn').href = `https://www.apex4u.com/`;
  document.getElementsByClassName('getDirectionBtn').style.display = "none";

}


function showPosition(position) {
  console.log(position.coords.latitude)
  gsap.to('#loading', { opacity: 0, display: 'none', duration: .3 })


  var point1 = { lat: position.coords.latitude, lng: position.coords.longitude }; // current Location
  // var point2 = { lat: 34.052235, lng: -118.243683 }; // Los Angeles coordinates

  let nearestLocation = getNearestLocation(point1, locations)
  const washingtonLonLat = [nearestLocation.longitude, nearestLocation.latitude];
  mapViewOSM(washingtonLonLat)

  let googleMapsUrl = getGoogleMapDirectionURL(point1, nearestLocation);
  console.log(googleMapsUrl)
  document.querySelector('.getDirectionBtn').href = googleMapsUrl;
}




function getNearestLocation(currentPoint, arrOfLocations) {
  minDistance = null;
  minLocation = null;
  arrOfLocations.map(location => {
    point2 = { lat: location.latitude, lng: location.longitude }

    var distance = calculateDistance(currentPoint, point2);
    console.log("Distance: " + Math.round(distance * 1000, 2) + " meters");
    if (minDistance == null || minDistance > distance) {
      minDistance = distance;
      minLocation = location;
    }
  })

  console.log('MinDistance:', minDistance)
  console.log('MinDistance:', minLocation)
  console.log('current:', currentPoint)
  return minLocation;
}




const locations = [
  {
    "latitude": 23.781420967600535,
    "longitude": 90.42585303869785
  },
  {
    "latitude": 23.784632667247283,
    "longitude": 90.41667778130632
  },
  {
    "latitude": 23.789796437276426,
    "longitude": 90.42542744974801
  },
  {
    "latitude": 22.70356570067714,
    "longitude": 90.37355642907318
  },
  {
    "latitude": 23.177616984032127,
    "longitude": 90.203893542329
  },
  {
    "latitude": 24.847976,
    "longitude": 89.372048
  },
  {
    "latitude": 24.4552727,
    "longitude": 89.7052614
  },
  {
    "latitude": 22.366021312211377,
    "longitude": 91.82558051165516
  },
  {
    "latitude": 22.36205849307534,
    "longitude": 91.82179728220741
  },
  {
    "latitude": 22.35723775441481,
    "longitude": 91.83999600712285
  },
  {
    "latitude": 22.330612,
    "longitude": 91.788912
  },
  {
    "latitude": 22.327634,
    "longitude": 91.811331
  },
  {
    "latitude": 23.461500362790495,
    "longitude": 91.18298229385464
  },
  {
    "latitude": 23.01081740368179,
    "longitude": 91.39828881791493
  },
  {
    "latitude": 23.751225399498463,
    "longitude": 90.3906967388704
  },
  {
    "latitude": 23.813698125389564,
    "longitude": 90.42428221097666
  },
  {
    "latitude": 23.82771288219379,
    "longitude": 90.36443733262968
  },
  {
    "latitude": 23.806733454210857,
    "longitude": 90.37153690990957
  },
  {
    "latitude": 23.800032694929616,
    "longitude": 90.35403293201429
  },
  {
    "latitude": 23.78462448685726,
    "longitude": 90.41667890423308
  },
  {
    "latitude": 23.77660136877433,
    "longitude": 90.41610341053554
  },
  {
    "latitude": 23.874178984661704,
    "longitude": 90.38906132188696
  },
  {
    "latitude": 23.867144012720594,
    "longitude": 90.40038765764704
  },
  {
    "latitude": 23.746262550498763,
    "longitude": 90.41251869818436
  },
  {
    "latitude": 23.750209875157925,
    "longitude": 90.4255781576723
  },
  {
    "latitude": 23.759644115530826,
    "longitude": 90.44422999999999
  },
  {
    "latitude": 23.73935741567102,
    "longitude": 90.38920205767202
  },
  {
    "latitude": 23.738928010838652,
    "longitude": 90.37561625767205
  },
  {
    "latitude": 23.753622752076932,
    "longitude": 90.37028856923882
  },
  {
    "latitude": 23.76287537562036,
    "longitude": 90.35923124603227
  },
  {
    "latitude": 23.909666,
    "longitude": 89.124873
  },
  {
    "latitude": 23.602043,
    "longitude": 89.833576
  },
  {
    "latitude": 23.996451685745335,
    "longitude": 90.41573754690816
  },
  {
    "latitude": 23.888407550261917,
    "longitude": 90.40143579132602
  },
  {
    "latitude": 23.7910118,
    "longitude": 90.4022704
  },
  {
    "latitude": 23776599,
    "longitude": 90.416198
  },
  {
    "latitude": 22.816348,
    "longitude": 89.562467
  },
  {
    "latitude": 22.824774,
    "longitude": 89.549707
  },
  {
    "latitude": 24.249562197151228,
    "longitude": 89.91383918650516
  },
  {
    "latitude": 24.755930236241653,
    "longitude": 90.40959268035286
  },
  {
    "latitude": 23.717726294629514,
    "longitude": 90.4163874220884
  },
  {
    "latitude": 23.618306717869338,
    "longitude": 90.50113038650606
  },
  {
    "latitude": 23.54909243093526,
    "longitude": 90.53561391544844
  },
  {
    "latitude": 24.369174688991933,
    "longitude": 88.60206479471293
  },
  {
    "latitude": 24.371252096006838,
    "longitude": 88.6032688153441
  },
  {
    "latitude": 25.74936291977804,
    "longitude": 89.25494553904544
  },
  {
    "latitude": 25.937338851092413,
    "longitude": 88.85093003807857
  },
  {
    "latitude": 24.01073680724046,
    "longitude": 90.32235661534223
  },
  {
    "latitude": 23.85382140355083,
    "longitude": 90.25928727116442
  },
  {
    "latitude": 24.9059404342494,
    "longitude": 91.86626717293203
  },
  {
    "latitude": 24.894839494519168,
    "longitude": 91.86886221428017
  },
  {
    "latitude": 24.891535221716396,
    "longitude": 91.87210257250895
  },
  {
    "latitude": 24.896976560770774,
    "longitude": 91.87331242033989
  }
]

function mapViewOSM(washingtonLonLat) {

  var map = new ol.Map({
    target: 'openLayerMaps', // The ID of the map container element
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM() // OpenStreetMap as the base layer
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat(washingtonLonLat), // The coordinates of the marker
      zoom: 15 // The initial zoom level
    })
  });


  // Create a new marker
  var marker = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat(washingtonLonLat)) // The coordinates of the marker
  });

  // Style the marker
  marker.setStyle(new ol.style.Style({
    image: new ol.style.Icon({
      src: 'marker.png', // Path to your custom marker image
      scale: 0.07 // Adjust the scale if needed
    }),
    text: new ol.style.Text({
      text: 'Apex Store', // The label text
      font: '18px Arial', // The font style for the label
      fontWeight: 'bolder',
      fill: new ol.style.Fill({ color: '#000' }), // The color of the label text
      offsetY: -25, // Adjust the vertical position of the label

    })
  }));

  // Create a vector layer and add the marker to it
  var vectorLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
      features: [marker]
    })
  });

  // Add the vector layer to the map
  map.addLayer(vectorLayer);
}




// ************** Google Map Direction URL ****************
function getGoogleMapDirectionURL(currentPosition, destinationPosition) {
  return (`https://www.google.com/maps/dir/${currentPosition.lat},${currentPosition.lng}/${destinationPosition.latitude},${destinationPosition.longitude}`)
}