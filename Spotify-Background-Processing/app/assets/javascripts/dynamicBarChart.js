function dynamicBarChart(data){
 var w = 900,
     h = 400,
     b = 35;
 
 if (typeof data === 'undefined') { data = {"id":434,"created_at":"2015-09-04T15:22:26.148Z","updated_at":"2015-09-04T15:22:26.148Z","name":"Chris Brown","followers":2570281}}
 
 var x = d3.scale.linear()
     .domain([433,435])
     .range([0, w]);

  var y = d3.scale.linear()
     .domain([0, 3000000])
     .range([0, h]);

var heightScale = d3.scale.linear()
    .domain([0,3000000])
    .range([0,h]);

var colorScale = d3.scale.linear()
    .domain([0,3000000])
    .range(["blue","red"]);

 var chart = d3.select("body")
  .append("svg:svg")
  .attr("class", "chart")
  .attr("width", w)
  .attr("height", h);

 chart.append("svg:line")
    .attr("x1", 100)
    .attr("x2", w )
    .attr("y1", h - 0.5)
    .attr("y2", h - 0.5)
    .attr("stroke", "#000");

setTimeout(function(){
  updateChart();
    }, 1100);

// chart.append("svg:line")
//    .attr("x1", 0)
//    .attr("x2", 600)
//    .attr("y1", h - .5)
//    .attr("y2", h - .5)
//    .attr("stroke", "#000");

};

function redraw(data) {
  
   var chart = d3.select("svg");
   
   var w = 900,
      h = 400,
      b = 35;


  var x = d3.scale.linear()
     .domain([0,d3.max(data).id])
     .range([0, w]);
 
  var y = d3.scale.linear()
     .domain([0, 3000000])
     .range([0, h]);

  var heightScale = d3.scale.linear()
    .domain([0,3000000])
    .range([0,h]);

  var colorScale = d3.scale.linear()
    .domain([0,3000000])
    .range(["blue","red"]);


  var rect = chart.selectAll("rect")
       .data(data, function(d) { return d.created_at; });


   // Enter…
   rect.enter().insert("svg:rect", "line")
       .attr("x", function(d) { return x(d.id)})
       .attr("y", function(d) { return h - y(d.followers)})
       .attr("width", b)
       .attr("height", function(d) { return heightScale(d.followers); })
       .attr("fill", function(d) { return colorScale(d.followers)})
       .append("svg:title")
       .attr("text", function(d){return (d.name)})
       .transition()
       .duration(1000)
       .attr("x", function(d) { return x(d.id)-250});

$('#label').html(data[0].name + " has " + data[0].followers + " followers on Spotify")

   // Update…
   rect.transition()
       .duration(1000)
       .attr("x", function(d) { return x(d.id)-450; });
 
   // Exit…
   rect.exit()
      .transition()
      .duration(1000)
      .attr("x", function(d) { return x(d.id)-800})
      .remove();

    // rect.enter().insert("svg:text", "text")
    // .data(data)
    // .attr("x", 265 )
    // .attr("y", 240 )
    // .style("text-anchor", "middle")
    // .attr("text", function(d){return (d.name)}); 




    setTimeout(function(){
        updateChart();
    }, 1100);
 };