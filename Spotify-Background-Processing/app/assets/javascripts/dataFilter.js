//this is a helper function that takes data from 
//storage in the DOM and filters the arrays/hashes
//to the artist name and followers elements 

function dataFilter(){
    var data = $("#dataline").data("artists");
    for (i = 0; i < data.length; i++) {
     $('#results').html(data[i].name)
      $('#results').html(data[i].followers);
     }
   };

//I don't know if I can rely on storing data in the HTML page... 
// because I have to reload the page in order to get new data
// unless I make an ajax-ified element that updates the data every few seconds 
