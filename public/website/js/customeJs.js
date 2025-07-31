	  function playSound() {
		
		var $video = $('.video');
		var $window = $(window);
	  
		$window.scroll(function() {
	  alert('hi');
		  var $topOfVideo = $video.offset().top;
		  var $bottomOfVideo = $video.offset().top + $video.outerHeight();
	  
		  var $topOfScreen = $window.scrollTop();
		  var $bottomOfScreen = $window.scrollTop() + $window.innerHeight();
		  
		  if(($bottomOfScreen > $bottomOfVideo) && ($topOfScreen < $topOfVideo)){
			$video[0].play();
		  } else {
			$video[0].pause();
		  }
		  
		});
		
	  }