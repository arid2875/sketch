function makeDivs(){
	$('#container').empty();
	var vertSquares = $('#form').val();
	if(vertSquares ===''){
		vertSquares = 10;
	}
		
	var squares = vertSquares*vertSquares;
	var margin = 100/vertSquares;
	var borderWidth = 2;
	if(vertSquares>=50){
		borderWidth = 1;
	}
	var containerWidth = $('#container').width();
	var squareSize = containerWidth/vertSquares - (borderWidth*2) - margin;
	for(var i=0; i<squares; i++){
		var d = $('<div class="grid"></div>');
		$("#container").append(d);	
	}
	if(vertSquares>=50){
		$('.grid').css('border-width', '1px');
	}
		$('.grid').css('margin-right', margin);	
		$('.grid').css('margin-bottom', margin);	
		$('.grid').css('width', squareSize);
		$('.grid').css('height', squareSize);

	
	$('.grid').mouseenter(function(){
		if($('input[name=color]:checked','#colors').val()==='random'){
			var random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
			$(this).css('background-color', random);			
		}
		else
		$(this).css('background-color', $('input[name=color]:checked','#colors').val());
	});

	/*$('.grid').mouseleave(function(){
		var color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
		$(this).css('background-color', color);
	});*/

	$('#clearButton').click(function(){
		$('.grid').css('background-color', 'blue');
	});
}
	
$(document).ready(function(){		
	
	;
		
	if($('#form').val()===''){
		makeDivs(10);
	}	
	else{
		makeDivs($('#form').val());
	}
	   
	$('.grid').mouseenter(function(){
		if($('input[name=color]:checked','#colors').val()==='random'){
			var random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
			$(this).css('background-color', random);			
		}
		else
		$(this).css('background-color', $('input[name=color]:checked','#colors').val());
	});	

	$('#clearButton').click(function(){
		$('.grid').css('background-color', 'blue');
	});	

});

