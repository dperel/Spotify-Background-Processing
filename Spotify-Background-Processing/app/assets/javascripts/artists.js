

function dataFilter() {
    data = $("#dataline").data("artists");
    for (i = 0; i < data.length; i++) {
     $('#results').html(data[i].name)
     $('#results').html(data[i].followers);
     }
   };


$(window).load(dataFilter);

