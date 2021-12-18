//= ../../node_modules/jquery/dist/jquery.min.js

jQuery(document).ready(function($) {
	
	//on page load set the checkbox to stored value or default to true
	$('input#switch').prop('checked' , ( typeof sessionStorage.switch !== 'undefined' ) ? (sessionStorage.switch=='true') : false ); 
	//when checkbox is updated, update stored value
	$('input#switch').change( function() {
		sessionStorage.switch = $(this).prop('checked');
	});
	toggleTheme();
	function toggleTheme() {
		if ($('input#switch').prop('checked')) {
			$('html').attr('id', 'dark-theme');
		} else {
			$('html').removeAttr('id')
		}
	}
	function soundClick() {
		var sound = document.getElementById("soundclick");
		sound.play();
	}
	$('input#switch').on('click', toggleTheme);
	$('input#switch').on('click', soundClick);
	
	var	scrolling = false;
	var contentSections = $('.section'),
		verticalNavigation = $('.vertical-nav'),
		navigationItems = verticalNavigation.find('a'),
		navTrigger = $('.nav-trigger'),
		scrollArrowDown = $('.scroll-down');
		scrollArrowTop = $('.scroll-top');
		scrollToContact = $('.scroll-to-contact');

	function smoothScroll(target) {
		$('body,html').animate(
			{'scrollTop':target.offset().top},
			300
		);
	}

	//smooth scroll to the selected section
	verticalNavigation.on('click', 'a', function(event){
		event.preventDefault();
		smoothScroll($(this.hash));
		verticalNavigation.removeClass('open');
	});

	//smooth scroll to the second section
	scrollArrowDown.on('click', function(event){
		event.preventDefault();
		smoothScroll($(this.hash));
	});
	
	//smooth scroll to the top
	scrollArrowTop.on('click', function(event){
		event.preventDefault();
		smoothScroll($(this.hash));
	});
	
	//smooth scroll to the contact page
	scrollToContact.on('click', function(event){
		event.preventDefault();
		smoothScroll($(this.hash));
	});

	// open navigation if user clicks the .nav-trigger - small devices only
	navTrigger.on('click', function(event){
		event.preventDefault();
		verticalNavigation.toggleClass('open');
	});

	function checkScroll() {
		if( !scrolling ) {
			scrolling = true;
			(!window.requestAnimationFrame) ? setTimeout(updateSections, 300) : window.requestAnimationFrame(updateSections);
		}
	}
	function updateSections() {
		var halfWindowHeight = $(window).height()/2,
			scrollTop = $(window).scrollTop();
		contentSections.each(function(){
			var section = $(this),
				sectionId = section.attr('id'),
				navigationItem = navigationItems.filter('[href^="#'+ sectionId +'"]');
			( (section.offset().top - halfWindowHeight < scrollTop ) && ( section.offset().top + section.height() - halfWindowHeight > scrollTop) )
				? navigationItem.addClass('active')
				: navigationItem.removeClass('active');
		});
		scrolling = false;
	}
	$(window).on('scroll', checkScroll);
	
	//= partials/sec-portfolio.js
	//= partials/mail-form-handler.js
	
});