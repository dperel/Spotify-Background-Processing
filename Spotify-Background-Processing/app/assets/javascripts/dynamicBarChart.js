var startTime = Date.parse(new Date());


function dynamicBarChart(data){
var w = 800,
     h = 300,
     b = 25;

var dataTime = Date.parse(new Date());

var x = d3.scale.linear()
  .domain([0,10])
  .range([0,100])

var y = d3.scale.linear()
     .domain([0, 5000000])
     .range([0, h]);

var heightScale = d3.scale.linear()
    .domain([0,5000000])
    .range([0,h]);

var colorScale = d3.scale.linear()
    .domain([0,5000000])
    .range(["yellow","red"]);

var chart = d3.select("body")
  .append("svg:svg")
  .attr("class", "chart")
  .attr("width", w)
  .attr("height", h);


//add grid lines 

chart.append("svg:line")
    .attr("x1", 0)
    .attr("x2", w )
    .attr("y1", h)
    .attr("y2", h)
    .attr("stroke", "gray")
    .attr("stroke-width", 1);

 
chart.append("svg:line")
    .attr("x1", 0)
    .attr("x2", w )
    .attr("y1", h/5)
    .attr("y2", h/5)
    .attr("stroke", "gray")
    .attr("stroke-width", 1);


chart.append("svg:line")
    .attr("x1", 0)
    .attr("x2", w )
    .attr("y1", 2*(h/5) )
    .attr("y2", 2*(h/5) ) 
    .attr("stroke", "gray")
    .attr("stroke-width", 1);


chart.append("svg:line")
    .attr("x1", 0)
    .attr("x2", w )
    .attr("y1", 3*(h/5) )
    .attr("y2", 3*(h/5) ) 
    .attr("stroke", "gray")
    .attr("stroke-width", 1);


chart.append("svg:line")
    .attr("x1", 0 )
    .attr("x2", w )
    .attr("y1", 4*(h/5) )
    .attr("y2", 4*(h/5) ) 
    .attr("stroke", "gray")
    .attr("stroke-width", 1);

//add axis labels 

chart.append("svg:text")
  .attr("x", w/4)
  .attr("y", h-7)
  .text("Time from load of page to retrieval of data item");

chart.append("svg:text")
  .attr("x", -275)
  .attr("y", h-283)
  .text("Followers from zero to 5,000,000")
  .attr("transform", function(d) {
                return "rotate(-90)" 
                });

//refresh chart 

  updateChart();
 
};

function redraw(data) {
  
var dataTime = Date.parse(new Date());

var chart = d3.select("svg");
   
var w = 800,
      h = 300,
      b = 25;

var x = d3.scale.linear()
    .domain([0,10])
    .range([0,100])

var y = d3.scale.linear()
     .domain([0, 5000000])
     .range([0, h]);

var heightScale = d3.scale.linear()
    .domain([0,5000000])
    .range([0,h]);

var colorScale = d3.scale.linear()
    .domain([0,5000000])
    .range(["yellow","red"]);

var rect = chart.selectAll("rect")
       .data(data, function(d){return ((d.created_at))});

   // Enter…
rect.enter().insert("svg:rect", "line")
       .attr("x", (dataTime-startTime)/100)
       .attr("y", function(d) { return h - y(d.followers)})
       .attr("width", b)
       .attr("height", function(d) { return heightScale(d.followers); })
       .attr("fill", function(d) { return colorScale(d.followers)});

$('#label').html(data[0].name + " has " + data[0].followers + " followers on Spotify")
 
 //refresh chart every 1.1s 

setTimeout(function(){
  updateChart();
    }, 1100);
 };