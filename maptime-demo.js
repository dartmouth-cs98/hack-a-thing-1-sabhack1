// var ratData = [400, 900, 300, 600];

// //d3.selectAll('rect').data(ratData).attr('height', function (d) {
// //   return d / 10 * 1.5;
// // }).attr('y', function (d) {
// //   return 150 - d / 10 * 1.5;
// // });

// // instead of putting it in the HTML: 
// var svg = d3.select('body').append('svg').attr('width', 500).attr('height', 150)

// svg.selectAll('rect')
//   .data(ratData)
//   .enter()
//   .append('rect')
//   .attr('x', function (d, i) {
//     return i * 25
//   })
//   .attr('width', 15)
//   .attr('fill', '#228B22')
//   .attr('height', function (d) {
//     return d / 10 * 1.5;
//   })
//   .attr('y', function (d) {
//     return 150 - d / 10 * 1.5;
//   })

// // changing numbers 
// var newData = [700, 200, 400, 500];

// svg.selectAll('rect')
//   .data(newData)
//   .attr('height', function (d) {
//     return d / 10 * 1.5;
//   })
//   .attr('y', function (d) {
//     return 150 - d / 10 * 1.5;
//   });

// // using enter, merge --> adding extra bars
// newData = [800, 200, 400, 500, 100];
// var selection = svg.selectAll('rect')
//   .data(newData) // four elements, 5 data points

// selection.enter()
//   .append('rect')
//   .attr('x', function (d, i) {
//     return i * 25;
//   })
//   .attr('width', 15)
//   .attr('fill', '#228B22')
//   .merge(selection) // enter + update selections 
//   .attr('height', function (d) {
//     return d / 10 * 1.5;
//   })
//   .attr('y', function (d) {
//     return 150 - d / 10 * 1.5;
//   });


// // using enter, merge --> less bars 
// var evenNewerData = [600, 300, 100];
// var selection = svg.selectAll('rect')
//   .data(evenNewerData) // 5 elements, 3 data points

// selection.attr('height', function (d) {
//   return d / 10 * 1.5;
// }).attr('y', function (d) {
//   return 150 - d / 10 * 1.5;
// })
// selection.exit()
//   .remove();

var ratData = [400, 900, 300, 600];

var svg = d3.select('body')
  .append('svg')
  .attr('width', 500)
  .attr('height', 150);

function drawChart(dataArray) {
  // create a selection and bind data
  var selection = svg.selectAll('rect')
    .data(dataArray);

  // create new elements wherever needed                   
  selection.enter()
    .append('rect')
    .attr('x', function (d, i) {
      return i * 25;
    })
    .attr('width', 15)
    .attr('fill', '#d1c9b8')
    .merge(selection) // merge new elements with existing ones, so everything below applies to all
    .attr('height', function (d) {
      return d / 10 * 1.5;
    })
    .attr('y', function (d) {
      return 150 - d / 10 * 1.5;
    });

  // remove any unused bars
  selection.exit()
    .remove();
}

drawChart(ratData);