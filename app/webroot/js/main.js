/* --------------------------------------------------------------------------
 * Epicon         : Multipurpose Minimalist Business HTML5 Template
 *  
 * file           : theme-script.js
 * Version        : 1.0
 * Date           : 27/11/2014
 * Author         : Epicon - team
 * Author URI     : http://indonez.com
 *
 * Copyright 2014. All Rights Reserved.
 * -------------------------------------------------------------------------- */

/* --------------------------------------------------------------------------
 * Javascript Plugin configuration
      1. jQuery Responsive Pie Chart
      2. jQuery Parallax
      3. jQuery Progress Bar
      4. jQuery Menu
      5. jQuery COunter
 
 * Javascript Handle Initialization
      1. Menu
      2. Animation
      3. Tab and Accordion
      4. Fancybox
      5. Chart and Progress
      6. Slider Carousel
      	- work testimonial - index.html
      	- blog item - index.html
      	- testimonial carousel - index.html
      	- team carousel - about.html
      	- blog carousel - blog.html
      	- clientsay carousel - index-hosting.html
      	- twitter feed - contact.html
      	- portfolio single - portfolio-single.html
      	- hotel gallery - index-hotel.html
      7. Isotope
      8. Media element
      9. Twitter Feed
      10. Checkbox
      11. scrollUp
      12. alert
      13. datepicker
      14. Parallax
      15. Gap
      16. theme init
 * 
 * -------------------------------------------------------------------------- */
(function($){

/* --------------------------------------------------------------------------
 * Plugin: jQuery Parallax
 * Version 1.1.3
 * Author: Ian Lunn
 * Twitter: @IanLunn
 * Author URL: http://www.ianlunn.co.uk/
 * Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/
 * 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * -------------------------------------------------------------------------- */

   "use strict";

   	var $window = $(window);
	var windowHeight = $window.height();

	$window.resize(function () {
		windowHeight = $window.height();
	});

	$.fn.parallax = function(xpos, speedFactor, outerHeight) {
		var $this = $(this);
		var getHeight;
		var firstTop;
		var paddingTop = 0;
		
		//get the starting position of each element to have parallax applied to it		
		$this.each(function(){
		    firstTop = $this.offset().top;
		});

		if (outerHeight) {
			getHeight = function(jqo) {
				return jqo.outerHeight(true);
			};
		} else {
			getHeight = function(jqo) {
				return jqo.height();
			};
		}
			
		// setup defaults if arguments aren't specified
		if (arguments.length < 1 || xpos === null) xpos = "50%";
		if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
		if (arguments.length < 3 || outerHeight === null) outerHeight = true;
		
		// function to be called whenever the window is scrolled or resized
		function update(){
			var pos = $window.scrollTop();				

			$this.each(function(){
				var $element = $(this);
				var top = $element.offset().top;
				var height = getHeight($element);

				// Check if totally above or totally below viewport
				if (top + height < pos || top > pos + windowHeight) {
					return;
				}

				$this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
			});
		}		

		$window.bind('scroll', update).resize(update);
		update();
	};

})(jQuery),  + (function($){
/* --------------------------------------------------------------------------
 * Menu Configuration
 * -------------------------------------------------------------------------- */
   "use strict";
   
   if ($.fn.smartmenus) {
         $.fn.epiconmenu = function (options) {
            return this.each(function() {
               var self = $(this);

               self.smartmenus({
                  mainMenuSubOffsetX: -4,
                  mainMenuSubOffsetY: 0,    
                  subMenusSubOffsetX: 0,
                  subMenusSubOffsetY: -48,
                  subIndicatorsText : '',
               }).find('li.active').children('a').addClass('active');
            });
         };
   } else {
      console.log("menu requires jQuery smartmenus plugin");
   }

})(jQuery), + (function($){
/* --------------------------------------------------------------------------
 * jQuery Handle Initialization
 * -------------------------------------------------------------------------- */
	"use strict";

	/* ----------- SETTING ----------- */
	var themeApp = {

		// ----------- jQuery menu ----------- 
		theme_menu:function() {
			var getMenuActive,
				screenWidth = $(window).width();

			// run epiconmenu
			$('#menu').epiconmenu();

			// responsive menu
			if (screenWidth < 767) {
				
				$(".menu-trigger").click(function(e){
					e.preventDefault();

					if($(this).hasClass("active")) {
						$(this).removeClass("active");
						$(".menu-container").hide();
					} else {
						$(this).addClass("active");
						$(".menu-container").show();
					}
				});

			} else {
				
				// check cookie exist
				if($.cookie() != 'null') { 
					getMenuActive = $.cookie('setMenu');

					// -- color theme cookie exist
					if(getMenuActive != 'null') {
						$(".menu-trigger").addClass("active");
						$(".social-header").hide();
						$(".menu-container").show();
					}
				}

				$(".menu-trigger").click(function(e){
					e.preventDefault();

					console.log("click");
					
					// if menu hasClass active
					if($(this).hasClass("active")) {
						$(this).removeClass("active");

						// reset cookie
						$.cookie('setMenu', null);
					} else {
						$(this).addClass("active");

						// add cookie
						$.cookie('setMenu', "menuActive");
					}

					if ($(".menu-container").is(":visible")){
						$(".menu-container").slideUp("slow", function() {
							$(".social-header").slideDown("slow");
						});
					} else {
						$(".social-header").slideUp("slow", function() {
							$(".menu-container").slideDown("slow");
						});
					}
				});
			}
		},

		// ----------- jQuery animation ----------- 
		theme_animation:function() {
			
			if (!Modernizr.touch) {
				if ($(".epic-animate")[0]) {
					$('.epic-animate').css('opacity', '0');
				}

				$('.epic-animate').waypoint(function() {
					var animate = $(this).attr('data-animate');
					var delayanimate = $(this).attr('data-delay');

					if( delayanimate > 0 ) {
						var delayTime = (delayanimate / 1000) + 's';

						$(this).css({
							'visibility'              : 'visible',
							'-webkit-animation-delay' : delayTime,
							'-moz-animation-delay'    : delayTime,   
							'-o-animation-delay'      : delayTime,     
							'animation-delay'         : delayTime,
						});
					}

					$(this).css('opacity', '');
					$(this).addClass("animated " + animate);
				}, {
					offset: '80%',
					triggerOnce: true
				});
			}

		},

		// ----------- jQuery tab ----------- 
		theme_tab:function() {
			
			if ($.fn.easyResponsiveTabs) { 				
				$('.top-tab').easyResponsiveTabs({ type : 'tab-top' });
				$('.bottom-tab').easyResponsiveTabs({ type : 'tab-bottom' });
				$('.left-tab').easyResponsiveTabs({ type : 'tab-left' });
				$('.right-tab').easyResponsiveTabs({ type : 'tab-right' });
				$('.accordion').easyResponsiveTabs({ type : 'accordion' });
			} else {
				console.log("you need jQuery easyResponsiveTabs");
			}

		},

		// ----------- jQuery Fancybox -----------
		theme_fancybox:function() {
			if ($.fn.fancybox) {
				$(".fancybox").fancybox({
					padding:0,
					openEffect:'elastic',
					openSpeed:250,
					closeEffect:'elastic',
					closeSpeed:250,
					closeClick:false,
					helpers:{
						title: { type:'outside'},
						media:{}
					}
				});

				$('.fancybox-media').attr('rel', 'media-gallery').fancybox({
					openEffect : 'none',
					closeEffect : 'none',
					prevEffect : 'none',
					nextEffect : 'none',
					padding : 0,

					arrows : false,
					helpers : {
						media : {},
						buttons : {}
					}
				});

				$("#loginpopup").fancybox({
					padding: 0,
					openEffect:'elastic',
					openSpeed:250,
					closeEffect:'elastic',
					closeSpeed:250,
					closeClick:false,
					helpers:{
						title: { type:'outside'},
						media:{}
					}
				});
			} else {
				console.log("jQuery fancybox plugin not found");
			}
		},

		
		// jQuery Checkbox
		theme_checkbox:function() {
			if ($.fn.iCheck) {
				$('input').iCheck({
					checkboxClass: 'checkbox_flat',
					radioClass: 'radio_flat'
				});
			} else {
				console.log("jQuery iCheck plugin not found");
			}	
		},

		// jQuery scrollUp
		theme_scrollUp:function() {
			$.scrollUp({
				scrollText: '<i class="icon-chevron-up"></i>',
				scrollSpeed: 1250,
				zIndex: 99
			})	
		},
		
		// jQuery alert
		theme_alert:function() {
			$('a[data-component="alert"]').each(function() {
				$(this).click(function(e){
					e.preventDefault();
					$(this).parent().remove();
				});	
			});
		},

		// jQuery datepicker
		theme_datepicker:function() {
			if ($.fn.datepicker) {
				var nowTemp = new Date();
				var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

				var checkin = $('#checkIn').datepicker({
					onRender: function(date) {
						return date.valueOf() < now.valueOf() ? 'disabled' : '';
					}
				}).on('changeDate', function(ev) {
					if (ev.date.valueOf() > checkout.date.valueOf()) {
						var newDate = new Date(ev.date)
						newDate.setDate(newDate.getDate() + 1);
						checkout.setValue(newDate);
					}
					checkin.hide();
					$('#checkOut')[0].focus();
				}).data('datepicker');
				var checkout = $('#checkOut').datepicker({
					onRender: function(date) {
						return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
					}
				}).on('changeDate', function(ev) {
					checkout.hide();
				}).data('datepicker');
			} else {
				console.log("jQuery datepicker plugin not found");
			}

		},


		// jQuery Gap
		theme_gap:function() {
			$('.gap').each(function () {
				var self = $(this),
				dataGap = self.data();

				$.each(dataGap, function(direction, val) {
					if (direction == "gapTop")    { self.css("margin-top", val+'px'); }
					if (direction == "gapBottom") { self.css("margin-bottom", val+'px'); }
					if (direction == "gapLeft")   { self.css("margin-left", val+'px'); }
					if (direction == "gapRight")  { self.css("margin-right", val+'px'); }
				});
			});	
		},

		// theme init
		theme_init:function(){
	        themeApp.theme_menu();
	        themeApp.theme_animation();
	        themeApp.theme_tab();
	        themeApp.theme_fancybox();
	        themeApp.theme_checkbox();
	        themeApp.theme_scrollUp();
	        themeApp.theme_alert();
	        themeApp.theme_gap();
	    }
	}

	// intialization
	jQuery(document).ready(function($){
		themeApp.theme_init();

		// you can add custom javascript here

		// your code -----
		
	});

}(jQuery));
