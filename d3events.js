var transition = d3.transition().duration(500)

d3.selectAll("h1")
  .on("mouseover", function () {
    d3.select(this)
      .transition(transition)
      .style("background-color", "orange");

    // current event info
    console.log(d3.event);

    // x & y coordinates
    console.log(d3.mouse(this));
  })
  .on("mouseout", function () {
    d3.select(this)
      .style("background-color", "pink")
  });

var svg = d3.select(".animationBars")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500);

var bar1 = svg.append("rect")
  .attr("fill", "blue")
  .attr("x", 100)
  .attr("y", 20)
  .attr("height", 20)
  .attr("width", 10)

var bar2 = svg.append("rect")
  .attr("fill", "blue")
  .attr("x", 120)
  .attr("y", 20)
  .attr("height", 20)
  .attr("width", 10)

update();

function update() {
  bar1.transition()
    .ease(d3.easeLinear)
    .duration(2000)
    .attr("height", 100)

  bar2.transition()
    .ease(d3.easeLinear)
    .duration(2000)
    .delay(2000)
    .attr("height", 100)
}