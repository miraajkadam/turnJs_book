$(document).ready(function() {
	$.getJSON('images.json', function(data) {
		var arrItems = [];
		$.each(data, function(index, value) {
			arrItems.push(value);
		});
	});

	$('#flipbook').turn({
		width: 700,
		height: 500,
		page: 1,
		autoCenter: true,
		duration: 2000
	});
});

// fetch('images.json')
//         .then(function (response){
//             return response.json()
//         })

//         .then(function (data){
//             appendData(data)
//         })

//         .catch(function (error){
//             console.log(error)
//         })
