//Input

var clickNumber = document.getElementsByClassName("number");

for(var i=0; i<clickNumber.length; i++) {
clickNumber[i].addEventListener("click",function(e) {
  console.log(this.value);
});
}

// var radios = document.getElementsByClassName("radio_event")

//       for( var i=0; i<radios.length; i++ ) {
//         radios[i].addEventListener("change", function(e) {
          
//           for( var a=0; a<radios.length; a++ ) {
//             radios[a].checked=false;
//             console.log(radios[a]);
//           }


/// input number

//input val