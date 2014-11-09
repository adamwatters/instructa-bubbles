(function getInstructables() {

	var instructables;

	$.ajax({
	  	dataType: "text",
	  	url: "/instructables",
	  	success: function(data){
	  		instructables = JSON.parse(data);
	  	},
	  	error: function(error, errorTwo){
	  		alert(error, errorTwo);
	  	},
	  	complete: function(){
	  		makeChart({categories: instructables}, "categories", instructables);
	  	}
	});
})();