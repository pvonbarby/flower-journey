$(document).ready(function() {
	//throw some globals at the top

	var sig = 'cb723072f6870d58'
	var key = '74838237bffa820e9242c061634ec0dd'


	    // $('#svg-main').load('img/trade-map.svg', null, function() { 

	    // 	console.log("loaded");

	   $( document ).ready(function() {
	    console.log( "ready!" );
	});

	    $('#svg-main').load('img/map-02.svg', null, function() { 

	      console.log("loaded");

	      		$("#tulipSpread").click(function(){

			$("#Tulip_originalSpread_2_").toggle();		

	    });


/*	    $("#Tulip_cities circle").click(function(){

			console.log("city clicked");

			$("#Tulip_cities_text").toggle();		

	    });*/

	  //    $("#Tulip_cities circle").mouseover(function(){

			// console.log("city clicked");

			// $("#Tulip_cities_text").toggle();		

	  //   });

	      $("#Tulip_cities").on('hover', 'circle', function(){

			console.log("hovered");

	    });

	      $("#Tulip_cities circle").mouseenter(function(e) {

	    	var currentCity = $(e.target).attr('id');

	    	currentCity = currentCity.replace("_1_", "");


	    	var currentLabelSelector = "#" + currentCity + "_x5F_label";

	    	console.log(currentLabelSelector);

	    	$(currentLabelSelector).show(); 

				
	    });

        $("#Tulip_cities circle").mouseleave(function(e) {

	    	var currentCity = $(e.target).attr('id');

	    	currentCity = currentCity.replace("_1_", "");

	    	var currentLabelSelector = "#" + currentCity + "_x5F_label";

	    	console.log(currentLabelSelector);

	    	$(currentLabelSelector).hide(); 


	    });

	         $("#Tulip_cities circle").click(function(e) {

	    	var currentCity = $(e.target).attr('id');

	    	currentCity = currentCity.replace("_1_", "");


	    	var currentTextSelector = "#" + currentCity + "_x5F_text";

	    	console.log(currentTextSelector);

	    	$(currentTextSelector).toggle(); 

				
	    });
	
		$("#originalSpread_x5F_button").click(function(){

			$("#Tulip_originalSpread_2_").toggle();

		});

		// Show "About this Map" modal when clicking on button
		$('#narrative').on('click', function() {


			$('.modal').fadeToggle();  // toggles visibility of background screen when clicked (shows if hidden, hides if visible)	                        
	
		});

		// Close "About this Map" modal when close button in modal is clicked
		$('.modal .close-button').on('click', function() {

			$('.modal').fadeToggle();  // toggles visibility of background screen when clicked (shows if hidden, hides if visible)	                        
	
		});

		$('#native_habitat').on('click', function() {


			$("#Tulip_originalSpread_2_").fadeToggle();  // toggles visibility of background screen when clicked (shows if hidden, hides if visible)	                        
	
});


	  	});


	var piechart = d3.select("#exports").selectAll("#pie-chart");
	    var pcWidth = +piechart.attr("width");
	    var pcHeight = +piechart.attr("height");
	    var radius = Math.min(pcWidth, pcHeight) / 2;
	    var piechartG = piechart.append("g").attr("transform", "translate(" + pcWidth / 2 + "," + pcHeight / 2 + ")");

	 var color = d3.scaleOrdinal(["#e80c7a", "#ff0000", "#ff530d", "#e82c0c","#ff0dff"]);

	 var pie = d3.pie()
	     .sort(null)
	     .value(function(d) { return d.export; });

	 var path = d3.arc()
	     .outerRadius(radius - 10)
	     .innerRadius(0);

	 var label = d3.arc()
	     .outerRadius(radius - 40)
	     .innerRadius(radius + 50);

	 d3.csv("piechart.csv", function(d) {
	   d.export = +d.export;
	   return d;
	 }, function(error, data) {
	   if (error) throw error;

	   var arc = piechartG.selectAll(".arc")
	     .data(pie(data))
	     .enter().append("g")
	       .attr("class", "arc");

	   arc.append("path")
	       .attr("d", path)
	       .attr("fill", function(d) { return color(d.data.country); });

	   arc.append("text")
	       .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
	       .attr("dy", "1em")
	       .attr("fill","white")
	       .text(function(d) { return d.data.country; });
	 });



	    // var piechart = d3.select("#imports").selectAll("#pie-chart2");
	    // var pcWidth = +piechart.attr("width");
	    // var pcHeight = +piechart.attr("height");
	    // var radius = Math.min(pcWidth, pcHeight) / 2;
	    // var piechartG = piechart.append("g").attr("transform", "translate(" + pcWidth / 2 + "," + pcHeight / 2 + ")");

	    // var color = d3.scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

	    // var pie = d3.pie()
	    //     .sort(null)
	    //     .value(function(d) { return d.import; });

	    // var path = d3.arc()

	    //     .outerRadius(radius - 10)
	    //     .innerRadius(0);

	    // var label = d3.arc()
	    //     .outerRadius(radius - 40)
	    //     .innerRadius(radius - 40);

	    // d3.csv("piechart2.csv", function(d) {
	    //   d.import = +d.import;
	    //   return d;
	    // }, function(error, data) {
	    //   if (error) throw error;

	    //   var arc = piechartG.selectAll(".arc")
	    //     .data(pie(data))
	    //     .enter().append("g")
	    //       .attr("class", "arc");

	    //   arc.append("path")
	    //       .attr("d", path)
	    //       .attr("fill", function(d) { return color(d.data.country); });

	    //   arc.append("text")
	    //       .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
	    //       .attr("dy", "0.35em")
	    //       .text(function(d) { return d.data.country; });
	    // });
});