<?

$name = $_GET["recipeName"];
$list = $_GET["recipeList"];


if ($name == "French Crepes") {
  
  
    if ($list == "ingredients") {
      
        include "ingredients.html";
    } elseif ($list == "equipment") {
      
      include "equipment.html";
    } elseif ($list == "directions") {
      
        include "directions.html";
    } else {
      echo "1";
    }
} elseif ($name == "Spam Musubi") {
        if ($list == "ingredients") {
      
        include "IngredientsA.html";
    } elseif ($list == "equipment") {
      
      include "equipmentA.html";
    } elseif ($list == "directions") {
      
        include "DirectionsA.html";
      
        }
} elseif ($name == "Chocolate Chip Cookies") {
           if ($list == "ingredients") {
      
        include "ingredientsB.html";
    } elseif ($list == "equipment") {
      
      include "equipmentB.html";
    } elseif ($list == "directions") {
      
        include "DirectionsB.html";
      
           }
  
  
  
  
 
  
} else {
  echo "0";
}
