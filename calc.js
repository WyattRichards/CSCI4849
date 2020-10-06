var kilo = document.getElementById("km");
var mile = document.getElementById("mi");
var mileslider = document.getElementById("mirange");
var kiloslider = document.getElementById("kilorange");
      function calc() {
         var km = mile.value * 1.60934;
         kilo.innerHTML = km;
      }
      function updatetext(){
          mile.value = mileslider.value
          kilo.value = kiloslider.value
      }
      function updateslide(){
          mileslider.value = mile.value
          kiloslider.value = kilo.value
      }