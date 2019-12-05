<script type="text/javascript">
$(function(){
	$('.listNumSty3 li a').each(function(){
		$(this).bind('click', function(){
			var winWidth = $(window).width();
			if (winWidth > 900) {
				var widCheck = 400;
			} else if (winWidth < 901 && winWidth > 540){ var widCheck = 250;
			} else {var widCheck = 180;}

			var depId = $(this).attr('href');

			$('html, body').animate({ scrollTop: $(depId).offset().top - widCheck}, 800, 'easeInOutExpo' );
			console.log(depId);
		});
	});
});
</script>
