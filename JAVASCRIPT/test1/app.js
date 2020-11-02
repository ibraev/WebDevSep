// capital letters  = toUpperCase(); when mouse over item
// lower letters = toLowerCase(); when mouse out item


function mouseOver() {

  var str = "Paragraph";
  var res = str.toUpperCase();
  document.getElementById("demo").innerHTML = res;
    
  }
  
  function mouseOut() {
    var str = "Paragraph";
    var res = str.toLowerCase();
    document.getElementById("demo").innerHTML = res;
  }
