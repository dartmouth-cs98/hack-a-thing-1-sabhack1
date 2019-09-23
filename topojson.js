var width = 720,
  height = 500;

var projection = d3.geoAlbers()
  .scale(1000)
  .translate([width / 2, height / 2]);

var path = d3.geoPath()
  .projection(projection);

var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height);

var color = d3.scaleThreshold()
  .domain([0.02, 0.04, 0.06, 0.08, 0.10])
  .range(["#f2f0f7", "#dadaeb", "#bcbddc", "#9e9ac8", "#756bb1", "#54278f"]);

d3.queue() // using d3 maps to group data
  .defer(d3.json, "us.json") // Load US Counties
  .defer(d3.tsv, "unemployment.tsv")
  .await(ready); // Run 'ready' when JSONs are loaded

/* runs when data loads */
function ready(error, us, unemployment) {
  if (error) throw error;

  var rateById = {}; // Create empty object for holding dataset
  unemployment.forEach(function (d) {
    rateById[d.id] = +d.rate; // Create property for each ID, give it value from rate
  });

  svg.append("g")
    .attr("class", "counties")
    .selectAll("path")
    .data(topojson.feature(us, us.objects.counties).features) // Bind TopoJSON data elements
    .enter().append("path")
    .attr("d", path)
    .style("fill", function (d) {
      return color(rateById[d.id]);
    })
  //.style("stroke", "black");// <-- no individual county outlines

  // only show state outlines
  svg.append("path")
    .datum(topojson.mesh(us, us.objects.states, function () { return false }))
    .attr("class", "states")
    .attr("d", path);
}