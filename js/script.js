$(function(){
	var i = 2;
	var cambiar = setInterval( function(){
		//$('#cambiante').css( 'background-image', 'url("2.jpg")' );
		$('#cambiante').animate({
			opacity: 0
		}, 'slow', function(){
			$(this).css( {'background-image': 'url("images/relax' + i + '.jpg")'} )
			.animate({opacity: 1},800);
			i++;
			if ( i == 10 ) { i = 1  };
		});
	}, 5000);
});