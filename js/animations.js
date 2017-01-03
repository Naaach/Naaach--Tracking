
$(document).ready(function(){
	//JQuery Start

	/*New table element fade in (beta) 
	Only for first-chilfren element*/
	var $newTableElement = $("#masterTableItems").children("tr");
 	
	//cambiar la opcacidad a 0 a la creacion del elemento (item)
	$newTableElement.click(function(){
		alert("clikc en tr");
	});

	//Enda of JQuery
});