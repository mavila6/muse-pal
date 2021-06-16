// variables
var searchForm = $(".searchForm");
var apiKey = "bl5whSB0fw8HbwziUfOz6cNj3TYl8Wkx";
searchForm.submit (searchLyrics);

// add local storage
searchLyrics();
getenterArtist();
getenterTitle();

// lyrics ovh api
function searchLyrics(event) {
    event.preventDefault();
    var searchInputTitle = $(".searchInputTitle").val() = localStorage.getItem();
    var searchInputArtist = $(".searchInputArtist").val();
    var lyricsDiv = document.querySelector (".lyrics-div");
    // error with loading site 504
    gifMe();
    fetch(`https://api.lyrics.ovh/v1/${searchInputArtist}/${searchInputTitle}`)
    .then(function (response) {
        return response.json();
    }) 
    .then(function (data) {
        // where to display data 
        // remove gif display
        $(".lyrics-div").append(`
        <div class="card">
      <div class="content">
      ${data.lyrics} <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
    </div>
  </div>
</div>
        `)
        // local storage
        function getenterArtist() {
          var teList = JSON.parse(localStorage.getItem(enterArtistName));

          if (teList) {
            enterArtist = teList
          }
        }
        function getenterTitle() {
          var teList = JSON.parse(localStorage.getItem(enterTitleName));

          if (teList) {
            enterTitle = teList
          }
        }
    });
  };
// Create a function called `searchLyrics()`
// var searchForm = $(".searchForm");
var apiKey = "bl5whSB0fw8HbwziUfOz6cNj3TYl8Wkx";

function gifMe(event) {
    // event.preventDefault();
    fetch('https://api.giphy.com/v1/gifs/random?api_key=bl5whSB0fw8HbwziUfOz6cNj3TYl8Wkx&rating=PG-13&tag=music')
    .then(function (response) {
        return response.json();
    }) 
    .then(function (data) {
        // where to display data 
      console.log(data);  
    })
    .catch(function (error) {
        console.log(error);
    }) 

    // store in local Storage
    localStorage.setItem(enterArtistName, enterTitleName, JSON.stringify(enterArtist, enterTitle));
  };   
