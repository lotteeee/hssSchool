

//sollicitatie is verstuurd
function myFunction2() {
			  alert("Het is gelukt! Je sollicitatie is verzonden! Het bedrijf laat binnen 10 werkdagen iets van zich horen! Vragen? Mail ons gerust");
			}

//contact formulier
function myFunction() {
			  alert("Je e-mail is verstuurt, bedankt!");
			}

//filter
	filterSelection("all")
		function filterSelection(c) {
			var x, i;
			 x = document.getElementsByClassName("filterDiv");
			 if (c == "all") c = "";
			 for (i = 0; i < x.length; i++) {
			   w3RemoveClass(x[i], "show");
			   if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
			  }
			}

		function w3AddClass(element, name) {
			var i, arr1, arr2;
			  arr1 = element.className.split(" ");
			  arr2 = name.split(" ");
			  for (i = 0; i < arr2.length; i++) {
			    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
			  }
			}

			function w3RemoveClass(element, name) {
			  var i, arr1, arr2;
			  arr1 = element.className.split(" ");
			  arr2 = name.split(" ");
			  for (i = 0; i < arr2.length; i++) {
			    while (arr1.indexOf(arr2[i]) > -1) {
			      arr1.splice(arr1.indexOf(arr2[i]), 1);     
			    }
			  }
			  element.className = arr1.join(" ");
			}

			// Add active class to the current button (highlight it)
			var btnContainer = document.getElementsByClassName("grid-container2");
			var btns = document.getElementsByClassName("btn");
			for (var i = 0; i < btns.length; i++) {
			  btns[i].addEventListener("click", function(){
			    var current = document.getElementsByClassName("active");
			    current[0].className = current[0].className.replace(" active", "");
			    this.className += " active";
			  });
			}

