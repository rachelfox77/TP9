// function to asynchronously fetch file contents from path/URL "fromFile" 
// and insert them in the DOM object found with "whereTo" -- note this
// uses document.querySelector, so use CSS notation on "whereTo"

function loadFileInto(recipeName, listName, whereTo) {

	// 1. creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();
  
  fromFile = "recipes.php?recipeName=" + recipeName + "&recipeList=" + listName;
 console.log("from URL: ) " +fromFile);

	// 2. defines the GET/POST method, the source, and the async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// 3. provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {

		if ((this.readyState == 4) && (this.status == 200)) { // if .readyState is 4, the process is done; and if .status is 200, there were no HTTP errors

      console.log("From: " + fromFile + " -- WhereTo: " + whereTo + " -- Ajax Response: " + this.responseText);
			document.querySelector(whereTo).innerHTML = this.responseText; // insert received output directly into the chosen DOM object

		} else if ((this.readyState == 4) && (this.status != 200)) { // if .readyState is 4, the process is done; and if .status is NOT 200, output the error into the console

			console.log("Error: " + this.responseText);

		}

	} // end ajax.onreadystatechange function

	// 4. let's go -- initiate request and process the responses
	ajax.send();

}








//New recipe Object 

function Recipe(recipeName, contributorName, imageURL, ingredientsFilename, equipmentFilename, directionsFilename) {

  this.recipe= recipeName;
  this.contributor= contributorName;
  this.image= imageURL;
 
  
  this.displayRecipe = function(){
    
    document.querySelector("#crepeHeader h1").innerHTML = this.recipe;
    document.querySelector("#contributor").innerHTML = this.contributor;
    
    loadFileInto(this.recipe, "ingredients", "#ingredients ul");
    loadFileInto(this.recipe, "equipment", "#equipment ul");
    loadFileInto(this.recipe, "directions", "#directions ul");
  }
}

FrenchCrepes = new Recipe("French Crepes", "Rachel","https://media.istockphoto.com/photos/arc-de-triomphe-paris-picture-id135034702?b=1&k=20&m=135034702&s=170667a&w=0&h=Y6w6ohcqRzhNQBFyQPCPAUyzzvVbcSLl9Esa2AwUX4o=")

SpamMusubi = new Recipe("Spam Musubi", "Paige","https://media.istockphoto.com/photos/arc-de-triomphe-paris-picture-id135034702?b=1&k=20&m=135034702&s=170667a&w=0&h=Y6w6ohcqRzhNQBFyQPCPAUyzzvVbcSLl9Esa2AwUX4o=", "IngredientsA.html", "equipmentA.html", "DirectionsA.html");
AnotherRecipe = new Recipe();

ChocolateChipCookies = new Recipe("Chocolate Chip Cookies", "Fallyn","https://media.istockphoto.com/photos/arc-de-triomphe-paris-picture-id135034702?b=1&k=20&m=135034702&s=170667a&w=0&h=Y6w6ohcqRzhNQBFyQPCPAUyzzvVbcSLl9Esa2AwUX4o=", "ingredientsB.html", "equipmentB.html", "DirectionsB.html");
AnotherRecipe = new Recipe();









window.onload = function() {
  
  // $('H1').css({'text-color': 'red'}); 
  
  document.querySelector("#crepeHeader").style.color = "red";


  
  document.querySelector("#crepeHeader").classList.add ("tp6");
  
  document.querySelector("#ingredients").onclick = function() {
    document.querySelector("#ingredients ul").classList.toggle("showMe");
  }
  
  document.querySelector("#equipment").onclick = function() {
    document.querySelector("#equipment ul").classList.toggle("showMe");
  }
  
  document.querySelector("#directions").onclick = function() {
    document.querySelector("#directions ul").classList.toggle("showMe");
  }
  
  document.querySelector("#crepeHeader").onclick = function(){
    this.classList.toggle("tp6");
  }
  
  
  
  document.querySelector("#footer").innerHTML += "<p>Serving Size 4 </p>";


  document.querySelector("#r1").onclick = function() {
    
    FrenchCrepes.displayRecipe();
  }
  
   document.querySelector("#r2").onclick = function() {
  
     SpamMusubi.displayRecipe();
  }

   document.querySelector("#r3").onclick = function() {
   
     ChocolateChipCookies.displayRecipe();
  }
  
  
  
} // end of window.onload
 
// document.getElementById("serving size").innerHTML = "Serving Size Approx 12" ;

// document.getElementById("calories").innerHTML = 1200 / 12






