function closebx() {
  document.getElementById("top-pop-area").style.display = "none";
  clearInterval(myInterval);
}

$("document").ready(function () {
  myInterval = setInterval(offerbox, 2000);
});

function offerbox() {
  document.getElementById("top-pop-area").style.display = "block";
}

function searchvalues() {
  //alert('shilpu');
  var carvalues = document.getElementById("cars");
  var values = carvalues.value;
  alert(values);
  document.getElementById("searchinput").style.display = "none";
  var htmlString =
    '<div id="searchinput"><input type="search" name="search" id="" placeholder="search" value=' +
    values +
    "></div>";
  document.getElementById("searchinputjavascript").innerHTML = htmlString;
}

function aboutcol() {
  var aboutcar = document.getElementById("demo");
  var values = aboutcar.value;
  alert(values);
  document.getElementById("search").style.display = "none";
  var htmlString =
    '<input type="search" placeholder="search" value=' + values + ">";
  document.getElementById("searchinput").innerHTML = htmlString;
}


function showStuff() {
  //alert('shilpu');
  var x = document.getElementById("mobile-menu-bar");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function hidestuff() {
  //alert('shilpu');
  var x = document.getElementById("mobile-menu-bar");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}



//js for contact page form filling........

function contactform() {
  let x = document.forms["my_form"]["name"].value;
  if (x == "") {
    alert("alert must be fiiled out");
    return false;
  }

  let y = document.forms["my_form"]["lname"].value;
  if (y == "") {
    alert("alert must be fiiled out");
    return false;
  }

  let emails = document.forms["my_form"]["email"].value;
  if (emails == "") {
    alert("alert must be fiiled out");
    return false;
  }

  let msg = document.forms["my_form"]["msg"].value;
  if (msg == "") {
    alert("alert must be fiiled out");
    return false;
  }
}
