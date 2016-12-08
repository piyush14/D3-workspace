(function(){
	// chart data
	var chartConfig = {
		data:[{
					"sale": "202",
					"year": "2000"
				}, {
					"sale": "215",
					"year": "2001"
				}, {
					"sale": "179",
					"year": "2002"
				}, {
					"sale": "199",
					"year": "2003"
				}, {
					"sale": "134",
					"year": "2003"
				}, {
					"sale": "176",
					"year": "2010"
				}]
	};

	// enviornment setup
		var svgConfig = {
						id:"mySvg",
						width:600,
						height:300,
						margin : {
							top: 20,
							right: 20,
							bottom: 20,
							left: 70
						  }
						};

	// drawing
		// append svg element
			var bodySelection = d3.select("body");

			var svgSelection  = bodySelection.append("svg")
								.attr("id", svgConfig.id)
								.attr("width",svgConfig.width)
								.attr("height",svgConfig.height);

		// create x scale
			xScale = d3.scale.linear()
				.range([svgConfig.margin.left, svgConfig.width - svgConfig.margin.right]) //(start point,end point)
				.domain([2000,2010]);

		// create y scale
			yScale = d3.scale.linear()
					.range([svgConfig.height - svgConfig.margin.top, svgConfig.margin.bottom])// (bottom point, upper point)
          //.range([140,145,150,160,200,250])
					.domain([134,215]);

		//let's create the axes using the scales
			xAxis = d3.svg.axis()
					.scale(xScale);

			yAxis = d3.svg.axis()
					.orient("left")
					.scale(yScale);

		// add xaxis to chart - it will add it to top of the svg
			svgSelection.append("svg:g")
			.attr("id","xAxis")
			.call(xAxis);
			//return;
		// The X axis is drawn but it has some issues. First, we need to position it vertically downwards using transform property
			d3.select("#xAxis")
			.attr("transform", "translate(0," + (svgConfig.height - svgConfig.margin.bottom) + ")");
			//return;
		// add yaxis to chart, but this will not add it to correct oorientation
			svgSelection.append("svg:g")
			.attr("id","yAxis")
			.call(yAxis);
		//return;
		// apply transform logic to bring it to correct place
			d3.select("#yAxis")
			.attr("transform", "translate(" + (svgConfig.margin.left) + ",0)")
			//return;
		// now lets generate line
			var lineSelection = d3.svg.line()
							.x(function(d){
								return xScale(d.year);
							})
							.y(function(d){
								return yScale(d.sale)
							});

		// append line to svg
			svgSelection.append("svg:path")
				.attr('d', lineSelection(chartConfig.data))
				.attr('stroke', 'green')
				.attr('stroke-width', 2)
				.attr('fill', 'none');
})();
