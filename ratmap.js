import neighborhoods_json from './neighborhoods_json.js';
import rodents_json from './rodents_json.js'

var width = 700;
var height = 580;
var inputValue = null;
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/* updates value of slider */
function update(value) {
  document.getElementById('range').innerHTML = month[value];
  inputValue = month[value];
  d3.selectAll('.incident').attr('fill', dateMatch);
}

/* returns color red for date match (same month), grey otherwise */
function dateMatch(data, value) {
  var d = new Date(data.properties.OPEN_DT);
  var m = month[d.getMonth()];
  if (inputValue == m) {
    this.parentElement.appendChild(this);
    return "red";
  } else {
    return "#999";
  };
}

var svg = d3.select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);
var neighborhoods = svg.append('g');

var albersProjection = d3.geoAlbers()
  .scale(190000)
  .rotate([71.057, 0]) // should change magic numbers
  .center([0, 42.313])
  .translate([width / 2, height / 2]);

// lat lon of boston - rarely will you plug in numbers
// albersProjection([-71.057, 42.313]) 

// basically grabbing lat/lon from geojson
// turns them into screen coords,
// returns svg path string
var geoPath = d3.geoPath().projection(albersProjection);

neighborhoods.selectAll('path')
  .data(neighborhoods_json.features)
  .enter()
  .append('path')
  .attr('fill', '#ccc')
  .attr('d', geoPath)

var rodents = svg.append('g')

rodents.selectAll("path")
  .data(rodents_json.features)
  .enter()
  .append("path")
  .attr("fill", initialDate)
  .attr("stroke", "#999")
  .attr("d", geoPath)
  .attr("class", "incident")
  .on("mouseover", function (d) {
    d3.select("h2").text(d.properties.LOCATION_STREET_NAME);
    d3.select('h3').text(d.properties.OPEN_DT);
    d3.select(this).attr("class", "incident hover");
  })
  .on("mouseout", function (d) {
    d3.select("h2").text("");
    d3.select("h3").text("");
    d3.select(this).attr("class", "incident");
  });

d3.select('#timeslide').on('input', function () {
  update(+this.value);
});

/* initializes state to january */
function initialDate(d, i) {
  var d = new Date(d.properties.OPEN_DT);
  var m = month[d.getMonth()];
  if (m == "January") {
    this.parentElement.appendChild(this);
    return "red";
  } else {
    return "#999";
  };
}