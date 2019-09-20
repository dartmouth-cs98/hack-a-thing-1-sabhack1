// http://learnjsdata.com/read_data.html

d3.csv('data.csv', function (d) {
  return {
    city: d.city,
    state: d.state,
    population: +d.population,
    land_area: +d['land area']
  };
}).then(function (data) {
  console.log(data[0]);
});

d3.json('data.json').then(function (data) {
  console.log(data.filter(d => d.age === 21));
})