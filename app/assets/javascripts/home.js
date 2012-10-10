$(function (){
	var videos = ["50779531","40490466","25833273"];
	var curVideo = 1;
	$('#navigation a').click(function(e) {
		e.preventDefault();
		var selection = Number(this.id.replace("thumb_", ""));
		var vimeo_iframe = '<iframe src="http://player.vimeo.com/video/' + videos[selection-1] + '?title=0&amp;byline=0&amp;portrait=0&amp;color=d5d33c" width="800" height="450" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
		if (selection != curVideo) {
			$("#video").html(vimeo_iframe);
			$("#descriptions li").hide();
			$("#description_" + selection).show();
			curVideo = selection;
		}
	});
});