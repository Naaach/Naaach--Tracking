
	//Screen width correction on DOM
	sWidth = screen.width;
 	document.getElementById('body').style.maxWidth = sWidth;




$(document).ready(function(){
	//JQuery Start
	var $this = $(this);



	//hidden and toogle pop-up form
	var $popUpForm = $('#pop-up-form-grandfather');
	$popUpForm.hide();

	var $overlayPopUp = $('.overlay-form');
	$overlayPopUp.hide();
	
	var $closePopUp = $('#close-pop-up > i');
	var $buttomForm = $('#open-add');

	var $tb1 = $('#tool-button-1');
	var $tb2 = $('#tool-button-2');
	var $tb3 = $('#tool-button-3');

	//Open
	$buttomForm.click(function(){

		$overlayPopUp.fadeTo(250, 1, function(){
			$(this).show();
		});
		$popUpForm.delay(250).fadeTo(500, 1, function(){
			$(this).show();
		});

	});

	//close
	$dissapear = function(){
		$popUpForm.fadeTo(250, 0, function(){
			$(this).hide();
		});
		$overlayPopUp.delay(250).fadeTo(500, 0, function(){
			$(this).hide();
		});

	};

	$overlayPopUp.click($dissapear);
	$closePopUp.click($dissapear);


	//#open-add animations
	var $openAdd = $('#open-add');

	$openAdd.hover(
		//Mouseenter
		function(){
			$(this).animate({padding: "+=5.2px"}, 150);
			$(this).children('i').animate({'font-size': "+=1px"}, 200);
			
			$tb1.delay(400).fadeTo(500, 1, function(){
				$(this).show();
			});
			$tb2.delay(600).fadeTo(500, 1, function(){
				$(this).show();
			});
			$tb3.delay(800).fadeTo(500, 1, function(){
				$(this).show();
			});

		},
		//Mouseleave
		function(){

			$tb1.delay(800).fadeTo(500, 0, function(){
				$(this).hide();
			});
			$tb2.delay(600).fadeTo(500, 0, function(){
				$(this).hide();
			});
			$tb3.delay(400).fadeTo(500, 0, function(){
				$(this).hide();
			});

			$(this).animate({padding: "-=5.2px"}, 150);
			$(this).children('i').animate({'font-size': "-=1px"}, 200);
		}
	);

	//End of JQuery
});