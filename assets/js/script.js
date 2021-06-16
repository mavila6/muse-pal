
var searchHistory = JSON.parse(localStorage.getItem("search")) || [];
var searchForm = $('.searchForm');
var title = $('#title')
var artist = $('.artist')
var img = $('.gif-embed')
var divEl = $('.content');
var searchInputTitle = $('.searchInputTitle').val();
var searchInputArtist = $('.searchInputArtist').val();

gifMe();
searchForm.on('submit', searchLyrics());

function searchLyrics(event) {
    event.preventDefault();
    var searchValue = searchInputTitle + " by: " + searchInputArtist
    searchHistory.unshift(searchValue);
    localStorage.setItem("search", JSON.stringify(searchHistory));
    fetch(`https://api.lyrics.ovh/v1/${searchInputArtist}/${searchInputTitle}`)
    .then(function (response) {
        return response.json();
    }) 
    .then(function (data) {
        console.log(data);
        divEl.append(data.lyrics);
        title.append(searchInputTitle);
        artist.append(searchInputArtist);
    })
    .catch(function(error){
        console.log('error!');
        console.error(error);
    })
};

function gifMe() {
    const apiKey = 'api_key=bl5whSB0fw8HbwziUfOz6cNj3TYl8Wkx';
    fetch('https://api.giphy.com/v1/gifs/random?'+ apiKey +'&rating=PG-13&tag=music')
    .then(function (response) {
        return response.json();
    }) 
    .then(function (data) {
        console.log(data);
        img.setAttribute('src', data.images.url);
    })
    .catch(function (error) {
        console.log('error!');
        console.error(error);
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

