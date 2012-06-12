

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
		
		if (id == "vid1"){
		  $('#LinkVideo').attr("src", "http://www.youtube.com/v/7sf5zG7nHGc?version=3&amp;hl=es_ES");
		}
		if (id == "vid2"){
		  $('#LinkVideo').attr("src", "http://www.youtube.com/v/JV4Mq804Tlg?version=3&amp;hl=es_ES");
		}
		if (id == "vid3"){
		  $('#LinkVideo').attr("src", "http://www.youtube.com/v/63G_QwlD5OQ?version=3&amp;hl=es_ES");
		}
		if (id == "vid4"){
		  $('#LinkVideo').attr("src", "http://www.youtube.com/v/tkTPRMGKVew?version=3&amp;hl=es_ES");
		}
	});
};