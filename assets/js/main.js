/*
	Strata by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		settings = {

			// Parallax background effect?
				parallax: true,

			// Parallax factor (lower = more intense, higher = less intense).
				parallaxFactor: 20

		};



	// Function for typing text.
		function typeText(targetElement, text, speed) {
			var index = 0;
		
			function type() {
				if (index < text.length) {
					targetElement.html(text.substring(0, index + 1));
					index++;
					setTimeout(type, speed);
				}
			}
		
			type();
		}

		
	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1800px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ],
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
				// Add typing effect to title and text.
           	    typeText($('#one p'), "Hello there, my name is Abdellah Ait Ahmed Ouaal, I am a dedicated enthusiast with a deep passion for Data Science. <br><br> As a final year University Master's student in Computer Engineering and Data Science, and equipped with a comprehensive understanding of Applied Mathematics, I have sharpened my analytical capabilities. Dedicated to continuous learning, I invested time in self-study, acquiring multiple certificates, and successfully completing various projects. <br><br>Now, as I step into the professional world, my main concentration centers on Data Analytics and Business Intelligence, mastering their tools and environments. As a student, my focus extends to immersing myself in Machine and Deep Learning concepts, with a growing interest in their integration within Big Data. <br><br>My experience as a Mathematics teacher has sharpened my effective communication and interpersonal skills, fueling my passion to contribute data-driven insights with proficiency.<br><br>I'm currently seeking a graduation internship where I can immerse myself in the realms of Business Intelligence, Data Analytics, Data Engineering, or Data Science. In a dynamic setting, I aspire to apply my skills, drive innovation, and navigate the evolving landscape of Data Science.", 8);
				// Scroll to the top of the #one section.
				$('html, body').animate({
					scrollTop: $('#one').offset().top
					}, 500);
	
			}, 100);
		});

	// Touch?
		if (browser.mobile) {

			// Turn on touch mode.
				$body.addClass('is-touch');

			// Height fix (mostly for iOS).
				window.setTimeout(function() {
					$window.scrollTop($window.scrollTop() + 1);
				}, 0);

		}

	// Footer.
		breakpoints.on('<=medium', function() {
			$footer.insertAfter($main);
		});

		breakpoints.on('>medium', function() {
			$footer.appendTo($header);
		});

	// Header.

		// Parallax background.

			// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
				if (browser.name == 'ie'
				||	browser.mobile)
					settings.parallax = false;

			if (settings.parallax) {

				breakpoints.on('<=medium', function() {

					$window.off('scroll.strata_parallax');
					$header.css('background-position', '');

				});

				breakpoints.on('>medium', function() {

					$header.css('background-position', 'left 0px');

					$window.on('scroll.strata_parallax', function() {
						$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
					});

				});

				$window.on('load', function() {
					$window.triggerHandler('scroll');
				});

			}

	// Main Sections: Two, Three and Four.

		// Lightbox gallery.
			$window.on('load', function() {

				$('.lightbox-section').poptrox({
					caption: function($a) { return $a.next('h3').text(); },
					overlayColor: '#2c2c2c',
					overlayOpacity: 0.85,
					popupCloserText: '',
					popupLoaderText: '',
					selector: '.work-item a.image',
					usePopupCaption: true,
					usePopupDefaultStyling: false,
					usePopupEasyClose: false,
					usePopupNav: true,
					windowMargin: (breakpoints.active('<=small') ? 0 : 50)
				});

			});

		// Wait for the DOM to be ready
		$(document).ready(function() {
			// Initially, hide the full portfolio items
			$('.full-portfolio-item').hide();
		
			var portfolioButton = $('#toggle-portfolio');	

			// Toggle between sample and full portfolio
			portfolioButton.on('click', function(e) {
				e.preventDefault();
				$('.full-portfolio-item').toggle();

			// Change the button text based on visibility
			var buttonText = $('.full-portfolio-item:visible').length ? 'Show less' : 'All projects';
			portfolioButton.text(buttonText); 
			
			// Store the initial position of the "two" section
			var two_position = $('#two').offset().top;
			
			// Scroll to the initial position when clicking "Show less"
			if (buttonText === 'All projects') {
				$('html, body').animate({ scrollTop: two_position }, 'smooth');
				}
			});
		});

		// Fallback for older browsers
		(function() {
			var script = document.createElement('script');
			script.src = 'https://polyfill.io/v3/polyfill.min.js?features=default';
			document.head.appendChild(script);
		})();
})(jQuery);