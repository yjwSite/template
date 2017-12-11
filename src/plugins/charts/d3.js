/**
 * 作者 ：食草狂魔
 *
 * 日期 ：2017-11-10
 *
 * 描述 ：d3.js驱动类
 */
"use strict" // 定义为严格模式编码要求

import d3 from 'd3'

function _drawingRender(svg, option) {
  if(option.series){
    option.series.forEach((el, i) => {
      svg.append(el.type).attr(el.attr).style(el.style);
    })
  }
  else{
    throw new Error('the series is undefined !')
  }
}

function _scatterRender(svg, option) {
  // x轴缩放
  var xScale = d3.scale.linear()
    .domain([0, d3.max(option.data, function(d) { return d[0]; })])
    .range([option.padding, option.svgInfo.svgWidth - option.padding*2]);

  // y轴缩放
  var yScale = d3.scale.linear()
    .domain([0, d3.max(option.data, function(d) { return d[1]; })])
    .range([option.svgInfo.svgHeight - option.padding, option.padding]);

  // 半径缩放
  var rScale = d3.scale.linear()
    .domain([0, d3.max(option.data, function(d) { return d[1]; })])
    .range([2, 5]);

  var formatAsPercentage = d3.format(".1%");//设置刻度的格式

  svg.selectAll("circle")
    .data(option.data)
    .enter()
    .append("circle")
    .attr("cx", function(d) {
      return xScale(d[0])+30;//设置原点坐标，以及横轴位移量
    })
    .attr("cy", function(d) {
      return yScale(d[1]);
    })
    .attr("r", function(d) {
      return rScale(d[1]);
    });

  svg.selectAll("text")
    .data(option.data)
    .enter()
    .append("text")
    .text(function(d) {
      return d[0] + "," + d[1];
    })
    .attr("x", function(d) {
      return xScale(d[0])+30;
    })
    .attr("y", function(d) {
      return yScale(d[1]);
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "red");

  var _declareAxis = function (scale, oriType, format) {
    // 声明坐标轴
    var axis = d3.svg.axis()
      .scale(scale)
      .ticks(5)//最多刻度数，连上原点
      .orient(oriType)
      .tickFormat(format);//添加刻度格式

    return axis
  }

  var _createAxis = function (axisObj, translate) {
    // 创建坐标轴
    svg.append("g")
      .attr("class", "axis")
      .attr("transform", translate)//设置轴据左边界的距离
      .call(axisObj);
  }

  // 定义X轴
  var xAxis = _declareAxis(xScale, "bottom", formatAsPercentage);

  // 定义Y轴
  var yAxis = _declareAxis(yScale, "left", formatAsPercentage);

  _createAxis(xAxis, "translate(0," + (option.svgInfo.svgHeight - option.padding) + ")");
  _createAxis(yAxis, "translate(" + option.padding + ",0)");
}

function _barRender(svg, option) {
  //(3) 定义比例尺
  var xScale=d3.scale.ordinal()// x是序数比例尺
    .domain(d3.range(option.data.length))
    .rangeRoundBands([0,option.svgInfo.svgWidth],0.05);
  var yScale=d3.scale.linear()// y仍然是线性比例尺
    .domain([0,d3.max(option.data)])
    .range([0,option.svgInfo.svgHeight]);

  svg.selectAll("rect")
    .data(option.data)
    .enter()
    .append("rect")
    .attr("x", function(d, i) {
      return xScale(i);
    })
    .attr("y", function(d) {
      return option.svgInfo.svgHeight - yScale(d);
    })
    .attr("width", xScale.rangeBand())// 这里xScale比例尺已经设置间距了所以直接用
    .attr("height", function(d) {
      return yScale(d);
    })
    .attr("fill", function(d) {
      return "rgb(0, 0, " + (d * 10) + ")";
    });

  svg.selectAll("text")
    .data(option.data)
    .enter()
    .append("text")
    .text(function(d) {
      return d;
    })
    .attr("text-anchor", "middle")
    .attr("x", function(d, i) {
      return xScale(i)+xScale.rangeBand()/2;
    })
    .attr("y", function(d) {
      return option.svgInfo.svgHeight - yScale(d) + 14;
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", function(d) {
      return xScale.rangeBand()/2;
    })
    .attr("fill", "white");
}

function _gridRender(svg, option) {
  // 内边距
  let p = option.gridPadding;
  //(2) 定义x和y比例尺
  let x = d3.scale.linear().domain([0, 1]).range([p, option.svgInfo.svgWidth - p]);
  let y = d3.scale.linear().domain([0, 1]).range([option.svgInfo.svgHeight - p, p]);
  //(4) 给SVG添加分组，并设置样式类，样式见<style>标签中的设置
  let grid = svg.selectAll(".grid")
    .data(x.ticks(10))
    .enter().append("g")
    .attr("class", "grid");
  //(5) 添加线条，设置起始坐标(x1,y1)和结束坐标(x2,y2)的值即可
  //竖线
  grid.append("line")
    .attr("x1", x)
    .attr("x2", x)
    .attr("y1", p)
    .attr("y2", option.svgInfo.svgHeight - p - 1)
    .style("stroke", "#ddd");
  //横线
  grid.append("line")
    .attr("y1", y)
    .attr("y2", y)
    .attr("x1", p)
    .attr("x2", option.svgInfo.svgWidth - p + 1)
    .style("stroke", "#ddd");
}

export default (id, option) => {
  let svg = d3.select(`#${id}`).append("svg")
    .attr("width", option.svgInfo.svgWidth)
    .attr("height", option.svgInfo.svgHeight);

  switch (option.type){
    case 'grid': {
      _gridRender(svg, option);
      break;
    }
    case 'bar': {
      _barRender(svg, option);
      break;
    }
    case 'scatter': {
      _scatterRender(svg, option);
      break;
    }
    case 'drawing': {
      _drawingRender(svg, option);
      break;
    }
  }

  return svg
}
