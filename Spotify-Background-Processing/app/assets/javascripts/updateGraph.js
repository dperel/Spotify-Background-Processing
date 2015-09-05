function updateGraph(){
  
  $.ajax({
          type: "GET",
          url: '/artists/new',
          dataType: "json",
          success: function(data){
            makeGraph(data)
          }
      });
  }
