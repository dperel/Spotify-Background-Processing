function updateChart(){
  
  $.ajax({
          type: "GET",
          url: '/artists/new',
          dataType: "json",
          success: function(data){
            redraw(data);
          }
      });
  }
