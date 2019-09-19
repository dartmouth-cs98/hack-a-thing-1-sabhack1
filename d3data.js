var data = [1, 2, 3];
var paragraph = d3.select("body")
  .selectAll("p")
  .data(data)
  .text(function (d, i) {
    console.log("d: " + d);
    console.log("i: " + i);
    console.log("this: " + this);

    return d;
  });