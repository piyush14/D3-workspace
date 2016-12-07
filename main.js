//var d3 = require("d3");

// d3.select("body")
//   .append("div")
//   .text("Text added from d3");

// d3.select("body")
//   .append("svg")
//   .attr("id","mysvg")
//   .attr("width","500")
//   .attr("height","500")
//   .append("circle")
//   .attr("cx","25")
//   .attr("cy","25")
//   .attr("r","25")
//   .style("fill","red");

var bodySelector = d3.select("body");

var divSelector = d3.select("div#mydiv");

var svgdiv = divSelector.append("div")
  .classed("svg-content-responsive", true);

var svgSelector = svgdiv.append("svg")
  // .attr("width","1200")
  // .attr("height","600");
  .attr("preserveAspectRatio", "xMinYMin meet")
  .attr("viewBox", "0 0 1200 600")
  .classed("svg-content-responsive", true);

var rectSelector = svgSelector.append("rect")
  .attr("x","0")
  .attr("y","0")
  .attr("width","400")
  .attr("height","200")
  .style("fill","red");

var rectSelector = svgSelector.append("rect")
  .attr("x","800")
  .attr("y","0")
  .attr("width","400")
  .attr("height","200")
  .style("fill","red");

var rectSelector = svgSelector.append("rect")
  .attr("x","0")
  .attr("y","400")
  .attr("width","400")
  .attr("height","200")
  .style("fill","red");

var rectSelector = svgSelector.append("rect")
  .attr("x","800")
  .attr("y","400")
  .attr("width","400")
  .attr("height","200")
  .style("fill","red");

var rectSelector = svgSelector.append("rect")
  .attr("x","400")
  .attr("y","200")
  .attr("width","400")
  .attr("height","200")
  .style("fill","blue");

var circleSelector = svgSelector.append("circle")
  .attr("cx","600")
  .attr("cy","300")
  .attr("r","100")
  .style("fill","yellow");

var ellipseSelector = svgSelector.append("ellipse")
  .attr("cx","200")
  .attr("cy","100")
  .attr("rx","200")
  .attr("ry","100")
  .style("fill","green");

var lineSelector = svgSelector.append("line")
  .attr("x1","0")
  .attr("y1","300")
  .attr("x2","1200")
  .attr("y2","300")
  .style("stroke","rgb(0,0,0)")
  .style("stroke-width","5")

var polyLineSelector = svgSelector.append("polyline")
  .attr("x1","0")
  .attr("y1","300")
  .attr("x2","1200")
  .attr("y2","300")
  .style("stroke","rgb(0,0,0)")
  .style("stroke-width","5")
