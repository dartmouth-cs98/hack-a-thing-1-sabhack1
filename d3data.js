var data = [1, 2, 3];
var paragraph = d3.select("div.datastuff")
  .selectAll("p")
  .data(data)
  .text(function (d, i) {
    console.log("d: " + d); // data element (d)
    console.log("i: " + i); // index element (i)
    console.log("this: " + this); // current dom obj (this)

    return d;
  });

d3.selectAll("p").style("color", function (d, i) {
  var text = this.innerText;
  if (text.indexOf("1") >= 0) {
    return "green";
  } else if ((text.indexOf("2") >= 0)) {
    return "blue";
  }
})

var myData = ["hello world", "helloooo d3"];
var p = d3.select(".datastuff2").selectAll("p").data(myData).text(function (d, i) {
  return d;
})

// can use enter() to handle unknown data --
// creates placeholder references corresponding to the number of data values

var enterData = [1, 2, 3, 4, 5, 6, 7];
var dataDiv = d3.select(".datastuff3").selectAll("span").data(enterData).enter().append("span").text(function (d) { return d + " "; })