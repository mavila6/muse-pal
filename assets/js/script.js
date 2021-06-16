
var searchInputTitle = $(".searchInputTitle").val();
var searchInputArtist = $(".searchInputArtist").val();
var apiKey = "api_key=bl5whSB0fw8HbwziUfOz6cNj3TYl8Wkx";
var searchForm = $(".searchForm");
var title = $('.name')
var img = $('.img')
var divEl = $('.content');
gifMe();
searchForm.on('submit', searchLyrics);
//Created an asynchronous function to fetch lyrics API and convert data to text//
async function searchLyrics(event) {
    event.preventDefault();
    // Const variables to contain the fetch function, the text conversion of the data, and the data split//
    const response = await fetch('https://api.lyrics.ovh/v1/'+searchInputArtist+'/'+searchInputTitle);
    const data = await response.json();
    // let variables containing the logic to manipulate DOM to creat new HTML elements//
    //Section appending the newly created elements to the HTML and the fetched data to the elements//
    console.log(data);
    divEl.append(data.lyrics);
    title.append(searchInputArtist, searchInputTitle);
};

//called lyrics() function and used .catch to log any errors that may occur in the console//
searchLyrics()
    .catch(error =>{
        console.log('error!');
        console.error(error);
    });


function gifMe() {
    fetch('https://api.giphy.com/v1/gifs/random?'+apiKey+'&rating=PG-13&tag=music')
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

