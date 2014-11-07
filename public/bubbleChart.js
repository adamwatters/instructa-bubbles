var makeChart = function(root, lookFor, back) {

	var diameter = 700;
		color = d3.scale.category20c();

	var bubble = d3.layout.pack()
    .sort(null)
    .size([diameter, diameter])
    .padding(1.5)
    .children(function(d) {
      return d[lookFor];
    })
    .value(function(d){
      return d.views;
    })

  if(d3.select("svg")){
    d3.select("svg").remove();
  }

  var svg = d3.select("body").append("svg")
                              .attr("background-color", "blue")
                              .attr("width", diameter)
                              .attr("height", diameter)
                              .attr("class", "bubble")
                              .style("display", "block")
                              .style("margin", "auto")
                              .append("g")
                                .call(d3.behavior.zoom().scaleExtent([1, 8]).on("zoom", zoom));

  svg.append("rect")
  .on("click", function(){
    makeChart({cats: back}, "cats", back);
  })
  .attr("class", "background")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", diameter)
  .attr("height", diameter)

 	var node = svg.selectAll(".node")
                .data(bubble.nodes(root).filter(function(d) { 
                                                    return !d.children; 
                }))
                .enter().append("g")
                .on("click", function(d){
                  while(d3.select(this)[0][0].nextSibling !== null){
                    d3.select(this)[0][0].nextSibling.remove();
                  }
                  while(d3.select(this)[0][0].previousSibling.previousSibling !== null){
                    d3.select(this)[0][0].previousSibling.remove();
                  }
                  //d3.select(this)[0][0].nextSibling.nextSibling.nextSibling.remove();        
                  d3.select(this)
                  .attr("class", "target")
                  .transition()
                  .attr("transform", function (d){
                    return "translate(" + diameter/2 +"," + diameter/2 + ")scale(" + (diameter/2) / d.r + ")";
                  })
                  window.setTimeout(function(){makeChart(d, d.nextLevel, back)}, 500);
                })
                .attr("class", "node")
                .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

  node.append("circle")
      .attr("r", function(d) { return d.r; })
      .attr("fill", function(d){return color(d.r)});

  var textCheck;

  node.append("text")
      .attr("dy", ".3em")
      .attr("font-weight", "bold")
      .attr("font-family", "helvetica")
      .attr("font-size", function(d) {
        textCheck = d.name? d.name : d.title;
        return d.r * 3 / textCheck.length;
      })
      .attr("fill", "white")
      .style("text-anchor", "middle")
      .text(function(d) { return d.name? d.name : d.title});

  if (!lookFor) {

    node.attr("onclick", function(d){
      console.log(d);
      return "location.href='http://www.instructables.com" + d.url + "'";
    });

    d3.select("text").transition()
                    .attr("dy", "-100")
    node.append("image")
        .attr('x', function(d){
          return 0 - d.r / 2;
        })
        .attr('y', function(d){
          return 0 - 100;
        })
        .attr('width', function(d){
          return d.r;
        })
        .attr('height', function(d){
          return 0;
        })
        .attr("xlink:href",function(d){
          return d.rectangle1Url;
        })
        .transition()
        .attr('width', function(d){
          return d.r;
        })
        .attr('height', function(d){
          return d.r;
        })
  }


function zoom() {
  svg.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
};

};
