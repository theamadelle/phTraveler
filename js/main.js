$(document).ready(function() {

  $('li').hover(function() {
    $(this).find('span').css('color','#aadae8');
  }, function() {
    $(this).find('span').css('color', '#f4f4f4');
  });

  $('#jumbotron').fadeIn('slow');


// MAP STUFF
// ----------------------
	
	var map = new Datamap({
  	element: document.getElementById('container'),
  	projection: 'mercator',
  	borderColor: '#000',
  	responsive: true,
  	fills: {
      defaultFill: '#bee1eb',
      notRequired: '#dfa787',
      onArrival: '#65a8cc',
      notEnoughInfo: '#ccc',
      otherCountries: '#f3e3c0'
    },
    geographyConfig: {
      highlightOnHover: true,
      highlightFillColor: '#fff',
      highlightBorderColor: '#f4f4f4',
      popupTemplate: function(geo, data) { //this function should just return a string
        console.log(geo);
        console.log(data);
      }
    },
    dataUrl: '../datamaps/countrydata.json',
    dataType: 'json',
    data: {}
  });

	$(window).on('resize', function() {
		//map.resize();
  });



});