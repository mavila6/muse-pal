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
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">John Smith</p>
        <p class="subtitle is-6">@johnsmith</p>
      </div>
    </div>

    <div class="content">
      ${data.lyrics} <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
        `)
    })
}
    
