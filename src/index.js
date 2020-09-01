import "./styles.css";
import { GiphyFetch } from "@giphy/js-fetch-api";

const giphyFetch = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh"); //giphy token
const input = document.querySelector("input"); //Searchbar input
const button = document.querySelector("button"); //Search button
const search = document.getElementById("searchBar");
const filter = document.getElementById("filter"); //Filter button
var div = document.getElementById("gifArea"); //Div for gif area

//The next list "favoritesList will contain the checked gifts by the user"
//after the user reloads the browser, the list will be cleared
var favoritesList = [];

//The next function will retrieve the favorites gift inside the favoritesList
async function filterGift() {
  //Check that we hav at least one favorite marked---------------------------
  if (favoritesList.length < 1) {
    //console.log("Not favorites found");
    window.alert("You don't have any favorite!");
    return;
  }

  //Clean the div that contains the gift grid-------------------------------
  document.getElementById("gifArea").innerHTML = "";

  //Iterate the favoritesList to show the user favorites--------------------
  favoritesList.forEach(function (currentGif) {
    //Create the iframe obj which will contain the gif----------------------
    var ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", currentGif);
    ifrm.setAttribute("width", "200");
    ifrm.setAttribute("height", "200");

    //Create check box for the gift (custom), also add event listener-------
    var checkFav = document.createElement("div");
    checkFav.setAttribute("class", "custom-control custom-checkbox");

    var inputFav = document.createElement("input");
    inputFav.setAttribute("type", "checkbox");
    inputFav.setAttribute("checked", "true");
    inputFav.setAttribute("class", "custom-control-input");
    inputFav.setAttribute("id", currentGif);
    inputFav.addEventListener("click", function () {
      if (this.checked) {
        if (favoritesList.indexOf(inputFav.getAttribute("id")) === -1) {
          favoritesList.push(inputFav.getAttribute("id"));
        }
      } else {
        favoritesList = favoritesList.filter(function (item) {
          return item !== inputFav.getAttribute("id");
        });
      }
      //console.log(favoritesList);
    });

    var inputLabel = document.createElement("label");
    inputLabel.setAttribute("class", "custom-control-label");
    inputLabel.setAttribute("for", currentGif);
    //inputLabel.textContent = "Love";

    checkFav.appendChild(ifrm);
    checkFav.appendChild(inputFav);
    checkFav.appendChild(inputLabel);

    //Append the gift obj in to the div-----------------------------------
    div.appendChild(checkFav);
    return div;
  });

  return favoritesList;
}

//This function "getGif" will use the giphyFetch api to retrieve the gifts
async function getGif() {
  //User should tyoe at least 3 characters in order to perform a srarch
  if (!input.value || input.value.length < 3) {
    window.alert("Type at least 3 characters!");
    return;
  }

  //Clean the div that contains the gift grid-----------------------------
  document.getElementById("gifArea").innerHTML = "";

  //Giphy API-----------------------------------------------------------
  let gifData = await giphyFetch.search(input.value, { limit: 18 });

  //Parse the retreived data and build the Gift obj structure ----------
  gifData.data.forEach(function (currentGif) {
    //Create the iframe obj which will contain the gif----------------------
    var ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", currentGif.embed_url);
    ifrm.setAttribute("width", "200");
    ifrm.setAttribute("height", "200");

    //Create check box for the gift (custom), also add event listener-------
    var checkFav = document.createElement("div");
    checkFav.setAttribute("class", "custom-control custom-checkbox");

    var inputFav = document.createElement("input");
    inputFav.setAttribute("type", "checkbox");
    inputFav.setAttribute("class", "custom-control-input");

    inputFav.setAttribute("id", currentGif.embed_url);
    inputFav.addEventListener("click", function () {
      if (this.checked) {
        if (favoritesList.indexOf(inputFav.getAttribute("id")) === -1) {
          favoritesList.push(inputFav.getAttribute("id"));
        }
      } else {
        favoritesList = favoritesList.filter(function (item) {
          return item !== inputFav.getAttribute("id");
        });
      }
      //console.log(favoritesList);
    });

    //<label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
    var inputLabel = document.createElement("label");
    inputLabel.setAttribute("class", "custom-control-label");
    inputLabel.setAttribute("for", currentGif.embed_url);
    //inputLabel.textContent = "Love";

    checkFav.appendChild(ifrm);
    checkFav.appendChild(inputFav);
    checkFav.appendChild(inputLabel);

    //div.appendChild(ifrm);
    div.appendChild(checkFav);
    return div;
  });

  return gifData;
}

button.addEventListener("click", getGif);
filter.addEventListener("click", filterGift);
search.addEventListener("keypress", function (key) {
  if (key.key === "Enter") {
    getGif();
  }
  //console.log(key.key);
});

//
