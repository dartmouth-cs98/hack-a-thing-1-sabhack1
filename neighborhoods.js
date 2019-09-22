import neighborhoods_json from './neighborhoods_json.js';
import rodents_json from './rodents_json.js'

var width = 700;
var height = 580;

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

rodents.selectAll('path')
  .data(rodents_json.features)
  .enter()
  .append('path')
  .attr('fill', '#900')
  .attr('stroke', '#999')
  .attr('d', geoPath)
