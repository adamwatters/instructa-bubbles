var makeChart = function(root, lookFor, back) {

    var diameter = 600;
    var color = d3.scale.category10();

    var bubble = d3.layout.pack()
    .sort(null)
    .size([diameter, diameter])
    .padding(5)
    .children(function(d) {
      return d[lookFor];
    })
    .value(function(d){
      return d.views;
    })

  if(d3.select("svg")){
    d3.select("svg").remove();
  }

  var svg = d3.select(".bubble-wrapper").append("svg")
                              .attr("class", "bubble")
                              .on("dblclick", function(){
                                makeChart({categories: back}, "categories", back);
                              })
                              .attr("class", "bubble")
                              .style("display", "block")
                              .style("margin", "auto")
                              .append("g")
                                .call(d3.behavior.zoom().translate([200,50]).scaleExtent([.8, 20]).scale(.8).on("zoom", zoom))
                              .append("g")
                              .attr("transform", "translate(200,50) scale(.8)")

    var node = svg.selectAll(".node")
                .data(bubble.nodes(root).filter(function(d) { 
                                                    return !d.children; 
                }))
                .enter().append("g")
                .on("dblclick", function(d){
                  d3.event.stopPropagation();
                  while(d3.select(this)[0][0].nextSibling !== null){
                    d3.select(this)[0][0].nextSibling.remove();
                  }
                  while(d3.select(this)[0][0].previousSibling !== null){
                    d3.select(this)[0][0].previousSibling.remove();
                  }        
                  d3.select(this)
                  .transition()
                  .attr("transform", function (d){
                    return "translate(" + diameter/2 +"," + diameter/2 + ")scale(" + (diameter/2) / d.r + ")";
                  })
                  window.setTimeout(function(){makeChart(d, d.nextLevel, back)}, 500);
                })
                .attr("class", "node")
                .attr("transform", function(d) { return "translate(" + d.x  + "," + d.y  + ")"; });

  node.append("circle")
      .attr("r", function(d) { return d.r; })
      .attr("fill", function(d){
        return color(d.r);
      })
      .attr("stroke", function(d){
        return color(d.r);
      });

  var textCheck;

  node.append("text")
      .attr("class", "noselect")
      .attr("cursor","pointer")
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

    node.on("dblclick", function(d){
      var url = "http://www.instructables.com" + d.url
      window.open(url);
    });

    d3.select("text").transition()
                    .attr("dy", "-100");

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

makeChart({categories: instructablesData}, "categories", instructablesData);
