// variables
var searchForm = $(".searchForm");
var apiKey = "bl5whSB0fw8HbwziUfOz6cNj3TYl8Wkx";
searchForm.submit (searchLyrics);

// add local storage

function searchLyrics(event) {
    event.preventDefault();
    var searchInputTitle = $(".searchInputTitle").val();
    var searchInputArtist = $(".searchInputArtist").val();
    var lyricsDiv = document.querySelector (".lyrics-div");
    // error with loading site 504
    fetch(`https://api.lyrics.ovh/v1/${searchInputArtist}/${searchInputTitle}`)
    .then(function (response) {
        return response.json();
    }) 
    .then(function (data) {
        // where to display data 
        // call giphy function
        
        $(".lyrics-div").append(`
        <div class="card">
      <div class="content">
      ${data.lyrics} <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
    </div>
  </div>
</div>
        `)
    });
  };
// Create a function called `myFunction()`
  // function waitingGif(event) {
  //   event.preventDefault();
  //   var str = document.querySelector ("lyrics.div");
  //   fetch
  // }

  // document.addEventListener("DOMContentLoaded", init);
  // function init () {
  //   // error message here HELP!
  //   // document.getElementById("btnSearch").addEventListener("click", ev => {
  //     $("#searchBtn").on("submit", ev => {
  //       // to stop page reload
  //     ev.preventDefault();
  //     var str = document.getElementById("search").nodeValue.trim();
  //     url = url.concat(str);
  //     console.log(url);
  //     fetch(url)
  //       .then(response => response.json())
  //       .then(content => {
  //         // data, pagination, meta
  //         console.log(content.data);
  //         console.log("META", content.meta);
  //         var fig = document.createElement("figure");
  //         var img = document.createElement("img");
  //         var fc = document.createElement("figcaption");
  //         img.src = content.data[0].images.downsized.url;
  //         img.alt = content.data[0].title;
  //         fc.textContent = content.data[0].title;
  //         fig.appendChild(img);
  //         fig.appendChild(fc);
  //         var out = document.querySelector("out");
  //       });
  //     })
  //   };
// example from class work
function myFunction() {
  // Create a variable called `searchTerm` that will use `document.querySelector()` to target the `id` of the input
  // Use `.value` to capture the value of the input and store it in the variable
  // var searchForm = document.querySelector('#searchTerm').value;

  // Make a `fetch` request concatenating the `searchTerm` to the query URL
  // Remember to add your API key at the end
  fetch(
    'https://api.giphy.com/v1/gifs/search?q=' +
      searchForm +
      '&api_key=bl5whSB0fw8HbwziUfOz6cNj3TYl8Wkx'
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response.data[0]);
      // Create a variable that will select the <div> where the GIF will be displayed
      var responseContainerEl = document.querySelector('#response-container');

      // Empty out the <div> before we append a GIF to it
      responseContainerEl.innerHTML = '';

      var gifImg = document.createElement('img');
      gifImg.setAttribute('src', response.data[0].images.fixed_height.url);

      // Append 'gifImg' to the <div>
      responseContainerEl.appendChild(gifImg);
    });
};   
