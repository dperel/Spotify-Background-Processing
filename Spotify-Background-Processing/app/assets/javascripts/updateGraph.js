//1st JS function call 
$(window).ready(function(){dynamicBarChart()})


function updateChart(){
  
  $.ajax({
          type: "GET",
          url: '/artists/new',
          dataType: "json",
          success: function(data){
            console.log(data.length);
            redraw(data);
          }
      });
  }
