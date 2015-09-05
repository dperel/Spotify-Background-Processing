//makes the D3 chart 

function makeGraph(optionalArg){
  if (typeof optionalArg === 'undefined') { optionalArg = [{"id":434,"created_at":"2015-09-04T15:22:26.148Z","updated_at":"2015-09-04T15:22:26.148Z","name":"Chris Brown","followers":2570281},{"id":435,"created_at":"2015-09-04T15:22:27.800Z","updated_at":"2015-09-04T15:22:27.800Z","name":"Chris Brown","followers":2570281},{"id":436,"created_at":"2015-09-04T15:22:28.327Z","updated_at":"2015-09-04T15:22:28.327Z","name":"Wiz Khalifa","followers":2512515},{"id":437,"created_at":"2015-09-04T15:22:28.823Z","updated_at":"2015-09-04T15:22:28.823Z","name":"Eminem","followers":4332256},{"id":438,"created_at":"2015-09-04T15:22:29.440Z","updated_at":"2015-09-04T15:22:29.440Z","name":"2 Chainz","followers":610710},{"id":439,"created_at":"2015-09-04T15:22:30.258Z","updated_at":"2015-09-04T15:22:30.258Z","name":"Maroon 5","followers":5911079}];  };
 
  console.log(optionalArg.length)
  
  var width = 800;
  var barHeight = 20;
  var data = optionalArg

  var x = d3.scale.linear()
    .domain([0, 3000000])
    .range([10, 280]);

  var chart = d3.select(".chart")
      .attr("width", width)
      .attr("height", barHeight * data.length);

  var bar = chart.selectAll("g")
      .data(data, function(d){return d.name});

  var barEnter = bar.enter()
      .append("g")
      .attr("transform", function(d, i) { return "translate(0," + (i-.9) * barHeight + ")"; });
    

    barEnter.append("rect")
      .attr("width", function(d,i) { return x(d.followers); })
      .attr("height", barHeight - 1)
      // .transition()
      // .duration(1000)
      // .attr("x", function(d, i) { return x(i) - .5; })
    //   .transition()
    //   .duration(1000)
    //   .attr("x", function(d, i) { return x(i) - .5; });
      
  barEnter.append("text")
    .attr("x", function(d) { return (d.folllowers + 100)})
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text(function(d) { return d.name});

    bar.exit().remove();
      // .transition()
      // .duration(1000)
      // .attr("x", function(d, i) { return x(i - 1) - .5; })
      //.remove();

}
