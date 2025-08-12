/**
 * @name        jQuery FullScreen Plugin
 * @author      Martin Angelov, Morten Sjøgren
 * @version     1.2
 * @url         http://tutorialzine.com/2012/02/enhance-your-website-fullscreen-api/
 * @license     MIT License
 */

/*jshint browser: true, jquery: true */
(function($){
	"use strict";

	// These helper functions available only to our plugin scope.
	function supportFullScreen(){
		var doc = document.documentElement;

		return ('requestFullscreen' in doc) ||
				('mozRequestFullScreen' in doc && document.mozFullScreenEnabled) ||
				('webkitRequestFullScreen' in doc) ||
				('msRequestFullscreen' in doc);
	}

	function requestFullScreen(elem){
		if (elem.requestFullscreen) {
			elem.requestFullscreen();
		} else if (elem.mozRequestFullScreen) {
			elem.mozRequestFullScreen();
		} else if (elem.webkitRequestFullScreen) {
			elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
		} else if (elem.msRequestFullscreen){
			elem.msRequestFullscreen();
		}
	}

	function fullScreenStatus(){
		return document.fullscreen ||
				document.mozFullScreen ||
				document.webkitIsFullScreen ||
				document.msFullscreenElement ||
				false;
	}

	function cancelFullScreen(){
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		} else if (document.msExitFullscreen){
			document.msExitFullscreen();
		}
	}

	function onFullScreenEvent(callback){
		$(document ).on('keyup',function(e){
			if( e.keyCode==27) callback(fullScreenStatus(),key);
		});
		/*$(document).on("fullscreenchange mozfullscreenchange webkitfullscreenchange", function(e){
			// The full screen status is automatically
			// passed to our callback as an argument.
			/!*var key = false;
			if( e.hasOwnProperty('keyCode') && e.keyCode==27) key = true
			callback(fullScreenStatus(),key);*!/
			console.log(e);
		});*/
	}

	// Adding a new test to the jQuery support object
	$.support.fullscreen = supportFullScreen();

	// Creating the plugin
	$.fn.fullScreen = function(props){
		if(!$.support.fullscreen || this.length !== 1) {
			// The plugin can be called only
			// on one element at a time

			return this;
		}

		if(fullScreenStatus()){
			// if we are already in fullscreen, exit
			cancelFullScreen();
			return this;
		}

		// You can potentially pas two arguments a color
		// for the background and a callback function

		var options = $.extend({
			'background'      : '#111',
			'callback'        : $.noop( ),
			'fullscreenClass' : 'fullScreen'
		}, props),

		elem = this,

		// This temporary div is the element that is
		// actually going to be enlarged in full screen

		fs = $('<div>', {
			'css' : {
				'overflow-y' : 'auto',
				'background' : options.background,
				'width'      : '100%',
				'height'     : '100%'
			}
		})
			.insertBefore(elem)
			.append(elem);

		// You can use the .fullScreen class to
		// apply styling to your element
		elem.addClass( options.fullscreenClass );

		// Inserting our element in the temporary
		// div, after which we zoom it in fullscreen

		requestFullScreen(fs.get(0));
		/*var pressEscape = false
		$(document).on('keyup',function(e){
			console.log(e);
			if( e.keyCode==27) pressEscape = true;
		});*/
		fs.click(function(e){
			if(e.target == this){
				// If the black bar was clicked
				cancelFullScreen();
			}
		} ).addClass('fullscreen-container');

		elem.cancel = function(){
			cancelFullScreen();
			return elem;
		};

		onFullScreenEvent(function(fullScreen){
			if(!fullScreen){
				// We have exited full screen.
			        // Detach event listener
			        $(document).off( 'fullscreenchange mozfullscreenchange webkitfullscreenchange keyup MSFullscreenChange' );
				// Remove the class and destroy
				// the temporary div

				elem.removeClass( options.fullscreenClass ).insertBefore(fs);
				fs.remove();
			}

			// Calling the facultative user supplied callback
			if(options.callback) {
                            options.callback(fullScreen,key);
                        }
		});

		return elem;
	};

	$.fn.cancelFullScreen = function( ) {
			cancelFullScreen();

			return this;
	};
	$.fn.fullScreenStatus = function( ) {
		return fullScreenStatus();
	};
}(jQuery));
