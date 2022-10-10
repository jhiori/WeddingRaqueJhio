
window.addEventListener('DOMContentLoaded', () => {
  window.onscroll = function() {myFunction()};

  // Get the header
var header = document.getElementById('myheader');

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}
})




// Initialize and add the map
function initMap() {
    // The location of Uluru
    // const uluru = { lat: -25.344, lng: 131.031 };
    const uluru = {lat: 19.87527409686275, lng: -99.73362455899121}
    const uluru2 = {lat: 19.798165756354283, lng: -99.75242890521771}
   
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: uluru,
    });

    const mapRe = new google.maps.Map(document.getElementById("mapRec"), {
        zoom: 12,
        center: uluru2
    })
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });

    const marker2 = new google.maps.Marker({
        position: uluru2,
        map: mapRe
    })
  }
  
  window.initMap = initMap;

  var countDownDate = new Date("Nov 12, 2022 13:30:00").getTime();
  
  
  var myfunc = setInterval(function() {
// function setInterval(){
    // code goes here
    

    var now = new Date().getTime();
    var timeleft = countDownDate - now;
        
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days // +':'
    document.getElementById("hours").innerHTML = hours // +':'
    document.getElementById("mins").innerHTML = minutes // +':'
    document.getElementById("secs").innerHTML = seconds // +':'

    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "TIME UP!!";
    }
    // console.log('Entra en funcion por segundo' + new Date())
}, 1000);