var activarLink = function(){
	$('#MedioCentro li').hover(function(){
			$(this).addClass('hover');
		}, function(){
			$(this).removeClass('hover');
		});

	$('#MedioCentro li').click(function(){

			$("#MedioCentro li").each(function(){
				$(this).removeClass('active');
			});

			$(this).addClass('active');
			 
	});
};

var cambiarVideo = function(){
	$('#MedioCentro a').click(function(e){
		e.preventDefault();
		var link = $(this).attr('href');
		$('#video').flash({
			swf: link, width: 400, height: 280, 
			allowfullscreen: true, allowScriptAccess: 'always'
		});
	});
	$('#MedioCentro a#vid1').trigger('click');
}

$(document).ready(function(){
	activarLink();
	cambiarVideo();
});
