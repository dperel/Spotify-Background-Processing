
function dynamicBarChart(){
 var w = 400,
     h = 800,
     b = 25;
 
 var data = [{"id":434,"created_at":"2015-09-04T15:22:26.148Z","updated_at":"2015-09-04T15:22:26.148Z","name":"Chris Brown","followers":2570281},{"id":435,"created_at":"2015-09-04T15:22:27.800Z","updated_at":"2015-09-04T15:22:27.800Z","name":"Chris Brown","followers":2570281},{"id":436,"created_at":"2015-09-04T15:22:28.327Z","updated_at":"2015-09-04T15:22:28.327Z","name":"Wiz Khalifa","followers":2512515},{"id":437,"created_at":"2015-09-04T15:22:28.823Z","updated_at":"2015-09-04T15:22:28.823Z","name":"Eminem","followers":4332256},{"id":438,"created_at":"2015-09-04T15:22:29.440Z","updated_at":"2015-09-04T15:22:29.440Z","name":"2 Chainz","followers":610710},{"id":439,"created_at":"2015-09-04T15:22:30.258Z","updated_at":"2015-09-04T15:22:30.258Z","name":"Maroon 5","followers":5911079}];
 
 var x = d3.scale.linear()
     .domain([430,440])
     .range([0, w]);
 
  var y = d3.scale.linear()
     .domain([0, 3000000])
     .range([0, h]);

var heightScale = d3.scale.linear()
    .domain([0,3000000])
    .range([0,h]);

 var chart = d3.select("body")
  .append("svg:svg")
  .attr("class", "chart")
  .attr("width", w * data.length - 1)
  .attr("height", h);

chart.selectAll("rect")
  .data(data)
  .enter().append("svg:rect")
  .attr("x", function(d) { return x(d.id); })
  .attr("y", function(d) { return h - y(d.followers)})
  .attr("width", b)
  .attr("height", function(d) { return heightScale(d.followers); });

};
