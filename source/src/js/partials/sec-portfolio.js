var portfolioHeader = $("#portfolio .portfolio-header"),
	portfolioBody = $("#portfolio .portfolio"),
	portfolioOpenBtn = $("#portfolio .open-portfolio-btn");

portfolioOpenBtn.on('click', function(event){
	event.preventDefault();
	event.stopImmediatePropagation();
	
	portfolioBody.load("portfolio.html");
	
	$(".portfolio-header *").addClass("animateBounceOutUp");
	$(".portfolio-header *").removeClass("animateBounceInDown");
	
	setTimeout(function(){
		portfolioHeader.addClass("opened");
		portfolioBody.addClass("opened");
	}, 1000);
});

portfolioHeader.click(function() {
	if( portfolioHeader.hasClass("opened") ) {
		
		portfolioHeader.removeClass("opened");
		portfolioBody.removeClass("opened");
		
		$(".portfolio-header *").removeClass("animateBounceOutUp");
		$(".portfolio-header *").addClass("animateBounceInDown");
	}
});