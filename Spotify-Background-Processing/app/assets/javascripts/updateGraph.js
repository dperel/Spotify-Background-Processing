//1st JS function call 
$(window).load(function(){makeFirstChart()})


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


function makeFirstChart(){
  
  $.ajax({
          type: "GET",
          url: '/artists/new',
          dataType: "json",
          success: function(data){
            dynamicBarChart(data);
          }
      });
  }
