
	//Screen width correction on DOM
	sWidth = screen.width;
 	document.getElementById('body').style.maxWidth = sWidth;




$(document).ready(function(){
	//JQuery Start
	var $this = $('this');


/*
	var $containerForm = $('#center-container-form');
	$containerForm.hide();

	var $buttomForm = $('#open-add');
	$buttomForm.click(function(){
		$containerForm.toggle();
	});

*/
	//hidden and toogle pop-up form
	var $popUpForm = $('#pop-up-form-grandfather');
	$popUpForm.hide();

	var $overlayPopUp = $('.overlay-form');
	$overlayPopUp.hide();

	var $buttomForm = $('#open-add');
	var $botonAgregar = $('#botonAgregar');

	$buttomForm.click(function(){
		$overlayPopUp.toggle();
		$popUpForm.toggle();
	});

	($overlayPopUp || $botonAgregar).click(function(){
		$popUpForm.toggle();
		$overlayPopUp.toggle();
	});





	//End of JQuery
});