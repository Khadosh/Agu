

$(document).ready(function(){
	activarLink();
	cambiarVideo();
});

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
	$('#MedioCentro li').click(function(){
		var id = $(this).attr('id');
		var link;
		if (id == "vid1"){
			link = "http://www.youtube.com/v/7sf5zG7nHGc?version=3&amp;hl=es_ES";
		}
		if (id == "vid2"){
		  link= "http://www.youtube.com/v/JV4Mq804Tlg?version=3&amp;hl=es_ES";
		}
		if (id == "vid3"){
		  link = "http://www.youtube.com/v/63G_QwlD5OQ?version=3&amp;hl=es_ES";
		}
		if (id == "vid4"){
		  link= "http://www.youtube.com/v/tkTPRMGKVew?version=3&amp;hl=es_ES";
		}
		
		$('#Reproductor').html(""
				+ "<param id=\"movie\" name=\"movie\" value="+ link +"></param>"
				+ "<param name=\"allowFullScreen\" value=\"true\"></param>"
				+ "<param name=\"allowscriptaccess\" value=\"always\"></param>"
				+ "<embed src=" +link+" type=\"application/x-shockwave-flash\" width=\"400\" height=\"280\" allowscriptaccess=\"always\" allowfullscreen=\"true\"></embed>"
		);
	});
};