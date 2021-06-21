//variables representing elements on the page to append datato html
var searchForm = $('.searchForm');
var title = $('#title');
var artist = $('.artist');
var img = $('#gif-embed');
var divEl = $('.content');
//variables containing the input values for the search based on what the user submits
var searchInputTitle = $('.searchInputTitle').val();
var searchInputArtist = $('.searchInputArtist').val();
//calling gifme function to load giphy upon openeing the application
gifMe();
//added event listener to run a function that saves the search inputs for the user on submit
searchForm.on('submit', function(event) {
    event.preventDefault();
    //Variables used as local storage values for search persistence
    var searchHistory = JSON.parse(localStorage.getItem("search")) || [];
    var searchValue = searchInputTitle + " by: " + searchInputArtist;
    searchHistory.unshift(searchValue);
    localStorage.setItem("search", JSON.stringify(searchHistory));
    //calling the searchlyrics function with the users search parameters
    searchLyrics(searchInputTitle, searchInputArtist);
});
//function that performs a fetch call to receive the lyrics user searches for
function searchLyrics(title, artist) {
    fetch(`https://api.lyrics.ovh/v1/${searchInputArtist}/${searchInputTitle}`)
    //returns data as JSON
    .then(function (response) {
        return response.json();
    }) 
    //appends the data(lyrics) to the html 
    .then(function (data) {
        console.log(data);
        divEl.append(data.lyrics);
        title.append(searchInputTitle);
        artist.append(searchInputArtist);
    })
    //catches errors and diplays on the console
    .catch(function(error){
        console.log('error!');
        console.error(error);
    })
};
//function that performs a fetch call to receive a random giphy and add it to html
function gifMe() {
    const apiKey = 'api_key=bl5whSB0fw8HbwziUfOz6cNj3TYl8Wkx';
    //added api key as well as query parameters to fetch api and receive data related to music
    fetch('https://api.giphy.com/v1/gifs/random?'+ apiKey +'&rating=PG-13&tag=music')
    //returns data as JSON
    .then(function (response) {
        return response.json();
    }) 
    //appends the gif to the image element on the html
    .then(function (data) {
        console.log(data);
        img.attr('src', data.data.images.fixed_height.url);
    })
    //catches errors and diplays on the console
    .catch(function (error) {
        console.log('error!');
        console.error(error);
    }) 
};  

// display storage history
var searchHistoryArtist = searchHistory[0].split(" by: ") [1];
var searchHistoryTitle = searchHistory[0].split(" by: ") [0];

$(".searchInputTitle").val(searchHistoryTitle);
$(".searchInputArtist").val(searchHistoryArtist);
