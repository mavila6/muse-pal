var searchHistory = JSON.parse(localStorage.getItem("search")) || [];
var apiKey = "api_key=bl5whSB0fw8HbwziUfOz6cNj3TYl8Wkx";
var searchForm = $(".searchForm");
var songTitle = $('.name')
var img = $('.img')
var divEl = $('.content');
gifMe();
searchForm.on('submit', function(event) {
  event.preventDefault();
  var searchInputTitle = $(".searchInputTitle").val();
  var searchInputArtist = $(".searchInputArtist").val();
  var searchValue = searchInputTitle + " by: " + searchInputArtist
  searchHistory.unshift(searchValue);
  localStorage.setItem("search", JSON.stringify(searchHistory));
  // call search Lyrics
  searchLyrics(searchInputTitle, searchInputArtist);
});
//Created an asynchronous function to fetch lyrics API and convert data to text//
async function searchLyrics(title, artist) {
    // Const variables to contain the fetch function, the text conversion of the data, and the data split//
    const response = await fetch('https://api.lyrics.ovh/v1/'+artist+'/'+title);
    const data = await response.json();
    // let variables containing the logic to manipulate DOM to creat new HTML elements//
    //Section appending the newly created elements to the HTML and the fetched data to the elements//
    console.log(data);
    divEl.append(data.lyrics);
    songTitle.append(artist, title);
};

//called lyrics() function and used .catch to log any errors that may occur in the console//
// searchLyrics()
    // .catch(error =>{
    //     console.log('error!');
    //     console.error(error);
    // });


function gifMe() {
    fetch('https://api.giphy.com/v1/gifs/random&api_key='+apiKey+'&rating=PG-13&tag=music')
    .then(function (response) {
        return response.json();
    }) 
    .then(function (data) {

        console.log(data);
        img.attr('src', data.images.fixed_height.url);
    })
    .catch(function (error) {
        console.log(error);
    }) 
  };  
  
function loopArray() {
  // put buttons on page
}
// display storage history
var searchHistoryArtist = searchHistory[0].split(" by: ") [1];
var searchHistoryTitle = searchHistory[0].split(" by: ") [0];

$(".searchInputTitle").val(searchHistoryTitle);
$(".searchInputArtist").val(searchHistoryArtist);