// variables
var searchForm = $(".searchForm");
searchForm.submit (searchLyrics);

function searchLyrics(event) {
    event.preventDefault();
    var searchInputTitle = $(".searchInputTitle").val();
    var searchInputArtist = $(".searchInputArtist").val();
    fetch(`https://api.lyrics.ovh/v1/${searchInputArtist}/${searchInputTitle}`)
    .then(function (response) {
        return response.json();
    }) 
    .then(function (data) {
        // where to display data 
        // don't freak out...playing with bulma styling for display
        $(".lyrics-div").append(`
        <div class="card">
      <div class="content">
      ${data.lyrics} <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
    </div>
  </div>
</div>
        `)
    })
}
    
