function getAlbumData(){
      var offset = 1
      var artistURL = "https://api.spotify.com/v1/search?q=year%3A2001&type=artist&market=US&limit=1&offset=" + offset;

     $.ajax({
        url: artistURL,
      })
      .done(function( artistData ) {
        $('#results').html(artistData.artists.items[0].name + " has this many followers: " + artistData.artists.items[0].followers.total);
        return artistData.artists.items[0]
        })
      }
    ;

