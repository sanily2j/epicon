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
(function($) {
/* --------------------------------------------------------------------------
 * jQuery Responsive Pie Chart
 * -------------------------------------------------------------------------- */
   "use strict";

   	// jQuery easypiechart constructor
   	var defaultset = {
   		barColor    : '#95a5a6',
   		trackColor  : '#f1f1f1',
   		scaleColor  : false,
   		lineCap     : 'round',
   		lineWidth   : 20,
   		size        : 100,
   		animation   : 5000,
   		font        : 16,
   		fontColor	: "inherit",
   		bgColor     : false
   	}

   	$.fn.responsivePieChart = function (options) {

   		return this.each(function() {

   			var chartConfig = $.extend({}, defaultset, options),
   			widthElement = getSize(chartConfig.size, $(this), chartConfig.mode); 

   			$(this).css({
   				'height'       : widthElement,
   				'width'        : widthElement,
   				'position'     : 'relative',
   				'display'      : 'inline-block',
   				'margin'       : 'auto 0',
   				'text-align'   : 'center',
   			});

   			$(this).append("<div class='percent' style='position:absolute;top:0;left:0;line-height:"+widthElement+"px;text-align:center;width:"+widthElement+"px;color:"+chartConfig.fontColor+";font-size:"+chartConfig.font+"px;font-weight:300;'></div>");
   			if (chartConfig.bgColor) {
   				widthElement = widthElement - chartConfig.lineWidth;
   				$(this).css({'padding': chartConfig.lineWidth / 2 });
   			};

   			$(this).easyPieChart({
   				barColor    : chartConfig.barColor,
   				trackColor  : chartConfig.trackColor,
   				scaleColor  : chartConfig.scaleColor,
   				lineCap     : chartConfig.lineCap,
   				lineWidth   : chartConfig.lineWidth,
   				size        : widthElement,
   				animation   : chartConfig.animation,
   				onStep: function(from, to, percent) {
   					$(this.el).find('.percent').text(Math.round(percent)+'%');
   				}
   			});
   		});  
	}
   	
   	function getSize(chartSize, self) {
   		var defaultSize = 100,
   		widthElement;
   		if (chartSize == defaultSize) {
   			widthElement = self.parent().width();
   		} else {
   			widthElement = chartSize;
   		}

   		return widthElement;
   	}

})(jQuery), + (function($){

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

})(jQuery), + (function($){
/* --------------------------------------------------------------------------
 * jQuery Progress Bar
 * -------------------------------------------------------------------------- */
   "use strict";

   // jQuery progress bar
   $.fn.meProgressBar = function () {
      return this.each(function() {
         var bar = $(this);
         var percentage = $(this).attr('data-percent');

         progress(percentage, bar);
      });
   }

   function progress(percent, element) {
      var progressBarWidth = percent * element.width() / 100;
      element.find('.progress-content').append("<div class='progress-meter'></div>").animate({ 
         width: progressBarWidth,
         number: percent
      }, {
         duration: 4000,
         step: function(number) { // called on every step
            // Update the element's value:
            element.find('.progress-meter').text(Math.round(number)+'%');
         } 
      });
   }

})(jQuery), + (function($){
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
 * jQuery Counter
 * -------------------------------------------------------------------------- */	
	"use strict";

	if ($.fn.countTo) {
      	if (!Modernizr.touch) {
         	// run with trigger
         	$('.counter-trigger').waypoint(function() { 
            	$('.count-me').each(function() {
		            $(this).data('countToOptions', {
		               formatter: function (value, options) {
		                  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
		               }
		            });

		            // start all the timers
		            $('.timer').each(count);

		            function count(options) {
		               var $this = $(this);
		               options = $.extend({}, options || {}, $this.data('countToOptions') || {});
		               $this.countTo(options);
		            }
		         });
         	}, { offset: '80%', triggerOnce: true });
      	}  

   } else { 
      console.log("jQuery Count plugin not found"); 
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

		// ----------- jQuery chart ----------- 
		theme_chart:function() {

			if ($.fn.easyPieChart) {
				$(".chart-about").responsivePieChart({
					barColor    : '#ffffff',
					trackColor  : 'rgba(0,0,0,0.5)',
					lineCap		: 'square',
					lineWidth	: 5,
					font      	: 28,
					fontColor 	: "#ffffff"
				});

				$(".chart").responsivePieChart({
					barColor    : '#ff8d2c',
					lineCap		: 'square',
					lineWidth	: 5,
					font      	: 28,
				});

				$(".chart-green").responsivePieChart({ 
					lineCap		: 'square',
					lineWidth	: 5,
					font      	: 28,
					barColor 	: '#41c28a',
				});
				
				$(".chart-blue").responsivePieChart({ 
					lineCap		: 'square',
					lineWidth	: 5,
					font      	: 28,
					barColor 	: '#29a7e4',
				});
				
				$(".chart-yellow").responsivePieChart({ 
					lineCap		: 'square',
					lineWidth	: 5,
					font      	: 28,
					barColor 	: '#f1c40f',
				});
				
				$(".chart-red").responsivePieChart({ 
					lineCap		: 'square',
					lineWidth	: 5,
					font      	: 28,
					barColor	: '#f15c44',
				});
				
				$(".chart-grey").responsivePieChart({ 
					lineCap		: 'square',
					lineWidth	: 5,
					font      	: 28,
					barColor 	: '#95a5a6',
				});

			} else {
				console.log("you need jQuery easyPieChart");
			}

			$('.progress-bar').meProgressBar();

		},

		// team slider carousel
		theme_slider:function() {

			// ----------- work testimonial - index.html
			var homeCarousel = $(".home-slider-container");
         
			homeCarousel.owlCarousel({
				autoPlay : 6000,
				navigation : false, 
				slideSpeed : 300,
				paginationSpeed : 400,
				singleItem: true,
				pagination: false
			});

			$(".home-slider-nav .left-nav").click(function(){
				homeCarousel.trigger('owl.next');
			});

			$(".home-slider-nav .right-nav").click(function(){
				homeCarousel.trigger('owl.prev');
			});

			// ----------- blog item - index.html
			var blogHomeCarousel = $(".blog-slider-container");

			$(".blog-slider-nav .left-nav").click(function(){
				blogHomeCarousel.trigger('owl.next');
			});

			$(".blog-slider-nav .right-nav").click(function(){
				blogHomeCarousel.trigger('owl.prev');
			});

			blogHomeCarousel.owlCarousel({
				itemsCustom:[[0,1],[400,2],[700,3],[1000,3],[1200,3],[1600,3]],
				autoPlay : 6000,
				navigation : false, 
				slideSpeed : 300,
				paginationSpeed : 400,
				pagination: false
			});

			// ----------- testimonial carousel - index.html
	        $("#testimonial-slider").owlCarousel({
	           	autoPlay : 6000,
	           	navigation : false, 
	           	slideSpeed : 300,
	           	paginationSpeed : 400,
	           	singleItem: true,
	        	pagination: true
	        });

			// ----------- team carousel - about.html
			var teamCarousel = $(".team-slider-container");
         
			$(".team-slider-nav .left-nav").click(function(){
				teamCarousel.trigger('owl.next');
			});

			$(".team-slider-nav .right-nav").click(function(){
				teamCarousel.trigger('owl.prev');
			});

			teamCarousel.owlCarousel({
				itemsCustom:[[0,1],[400,2],[700,2],[1000,3],[1200,4],[1600,4]],
				autoPlay : 6000,
	            navigation : false, 
	            slideSpeed : 300,
	            paginationSpeed : 400,
	            pagination: false
	        });	

	        // ----------- blog carousel - blog.html
	        var blogCarousel = $(".blog-carousel");
         
			$(".blog-carousel-nav .left-nav").click(function(){
				blogCarousel.trigger('owl.next');
			});

			$(".blog-carousel-nav .right-nav").click(function(){
				blogCarousel.trigger('owl.prev');
			});

			blogCarousel.owlCarousel({
				autoPlay : 6000,
	           	navigation : false, 
	           	slideSpeed : 300,
	           	paginationSpeed : 400,
	           	singleItem: true,
	        	pagination: false
	        });	

	        // ----------- clientsay carousel - index-hosting.html
	        var clientsayCarousel = $("#clientsay-slider");
         
			$(".clientsay-slider-nav .left-nav").click(function(){
				clientsayCarousel.trigger('owl.next');
			});

			$(".clientsay-slider-nav .right-nav").click(function(){
				clientsayCarousel.trigger('owl.prev');
			});

			clientsayCarousel.owlCarousel({
	           	itemsCustom: [[0,1],[400,2],[700,2],[1000,3],[1200,3],[1600,3]],
				autoPlay : 6000,
	           	navigation : false, 
	           	slideSpeed : 300,
	           	paginationSpeed : 400,
	        	pagination: false
	        });

	        // ----------- twitter feed - contact.html
			$("#twitter-contact ul").owlCarousel({
	           	autoPlay : 6000,
	           	navigation : false, 
	           	slideSpeed : 300,
	           	paginationSpeed : 400,
	           	singleItem: true,
	        	pagination: false
	        });

	        // ----------- portfolio single - portfolio-single.html
	        $(".portosingle-carousel").owlCarousel({
	           	autoPlay : 6000,
	           	navigation : false, 
	           	slideSpeed : 300,
	           	paginationSpeed : 400,
	           	singleItem: true,
	        	pagination: false
	        });

	        // ----------- hotel gallery - index-hotel.html
	        var hotelCarousel = $(".hotel-slider");
         
			$(".hotel-slider-nav .left-nav").click(function(){
				hotelCarousel.trigger('owl.next');
			});

			$(".hotel-slider-nav .right-nav").click(function(){
				hotelCarousel.trigger('owl.prev');
			});

			hotelCarousel.owlCarousel({
	           	itemsCustom: [[0,1],[400,2],[700,3],[1000,3],[1200,3],[1600,3]],
				autoPlay : 6000,
	           	navigation : false, 
	           	slideSpeed : 300,
	           	paginationSpeed : 400,
	        	pagination: false
	        });
		},

		// theme isotope
		theme_isotope:function() {
			if ($.fn.isotope) {
				$(window).load(function () {
					var l = $(".portfolio-container");
					l.isotope({
						filter: "*",
						animationOptions: {
							duration: 750,
							easing: "linear",
							queue: false
						}
					});

					$("#portfolio-filter a").click(function () {
						var n = $(this).attr("data-filter");
						l.isotope({
							filter: n,
							animationOptions: {
								duration: 750,
								easing: "linear",
								queue: false
							}
						});
						return false
					});

					var k = $("#portfolio-filter"),
					m = k.find("a");
					m.click(function () {
						var o = $(this);
						if (o.hasClass("selected")) {
							return false
						}
						var n = o.parents("#portfolio-filter");
						n.find(".selected").removeClass("selected");
						o.addClass("selected")
					})
				})

			} else {
				console.log("jQuery isotope plugin not found ");
			}	
		},

		// media element
		theme_player:function() {
			if ($.fn.mediaelementplayer) {
				if (!Modernizr.touch) {		

					// browser check
					// var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
					// if (isChrome) alert("You are using Chrome!");

					var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
					
					if (!isSafari) {
						$('audio, video').mediaelementplayer();

						var videoBgHome;

						if($('#videobg video').length > 0){
							$('#videobg video').attr('autoplay', 'true');
							$('#videobg video').attr('loop', 'true');

							videoBgHome = new MediaElementPlayer('#videobg video', {
								features: [],
								loop: true,
								startVolume: 0.0
							});

							videoBgHome.play();
						}
					}	
				}

			} else {
				console.log("jQuery player plugin not found");
			}	
		},

		// twitter feed
		theme_twitter:function() {
			if ($.fn.tweet) {
				$("#twitter-feed").tweet({
					username: "envato",
					join_text: "auto",
					modpath: 'js/twitter/',
					count: 2,
					loading_text: "Loading tweets...",
					template: "<div class='twitter-text'><p>{text}</p></div>"
				});

				// twitter contact
				$("#twitter-contact").tweet({
					username: "envato",
					join_text: "auto",
					modpath: 'js/twitter/',
					count: 5,
					loading_text: "Loading tweets...",
					template: "<div class='twitter-text'><p>{text}</p></div>"
				});
			} else {
				console.log("twitter jQuery plugin not found");
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

		// jQuery parallax
		theme_parallax:function() {
			if (!Modernizr.touch) {
				if ($.fn.parallax) {
					$(".circle-bar-container").parallax("50%", 0.5);
					$(".hotel-facilities-container").parallax("30%", 0.2);
				} else {
					console.log("jQuery parallax plugin not found");
				}
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
	        themeApp.theme_chart();
	        themeApp.theme_isotope();
	        themeApp.theme_player();
	        themeApp.theme_twitter();
	        themeApp.theme_checkbox();
	        themeApp.theme_scrollUp();
	        themeApp.theme_slider();
	        themeApp.theme_alert();
	        themeApp.theme_datepicker();
	        themeApp.theme_parallax();
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
