let map,directionsService,directionsRenderer;async function calculateDistance(){var e=document.getElementById("start_place_input").value,t=document.getElementById("end_place_input").value,n=new google.maps.Geocoder,e=await getCoordinates(n,e),n=await getCoordinates(n,t);e&&n?(t={origin:e,destination:n,travelMode:"DRIVING"},directionsService.route(t,(e,t)=>{var n;"OK"===t?(directionsRenderer.setDirections(e),n=e.routes[0].legs[0].distance.text,e=e.routes[0].legs[0].duration.text,document.getElementById("distanceDisplay").textContent=""+n,document.getElementById("durationDisplay").textContent=""+e):alert("Directions request failed due to "+t)})):alert("請輸入有效的出發地和目的地")}async function getCoordinates(e,t){return new Promise((n,o)=>{e.geocode({address:t},(e,t)=>{"OK"===t?n(e[0].geometry.location):o(null)})})}window.onload=async function(){await google.maps.importLibrary("places","geometry"),map=new google.maps.Map(document.getElementById("map"),{center:{lat:25.05214,lng:121.54325},zoom:15}),directionsService=new google.maps.DirectionsService,(directionsRenderer=new google.maps.DirectionsRenderer).setMap(map),document.getElementById("driverbtn").addEventListener("click",calculateDistance),calculateDistance()};let addCart=document.querySelector(".addCart"),popup=document.querySelector(".ol-contentShop");addCart.addEventListener("click",function(){popup.style.opacity="1",setTimeout(function(){popup.style.opacity="0"},3e3)});