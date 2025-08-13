/*
 * Distribution Prohibited
 *
 *
 * Version: 1.0.0
 */
(console.info || console.log).call(console,
	'Powered ARI 🍁 – Version 1.2.1',
	self.location.href);
(function ( $ ) {
	var selectors = [];

	var check_binded = false;
	var check_lock = false;
	var defaults = {
		interval     : 0,
		force_process: false
	};
	var $window = $( window );

	var $prior_appeared = [];

	function appeared( selector ) {
		return $( selector ).filter( function () {
			return $( this ).is( ':appeared' );
		} );
	}

	function process() {
		check_lock = false;
		for ( var index = 0, selectorsLength = selectors.length; index < selectorsLength; index ++ ) {
			var $appeared = appeared( selectors[index] );

			$appeared.trigger( 'appear', [$appeared] );
			if ( $prior_appeared[index] ) {
				var $disappeared = $prior_appeared[index].not( $appeared );
				$disappeared.trigger( 'disappear', [$disappeared] );
			}
			$prior_appeared[index] = $appeared;
		}
	}

	function add_selector( selector ) {
		selectors.push( selector );
		$prior_appeared.push();
	}

	// "appeared" custom filter
	$.expr[':'].appeared = function ( element ) {
		var $element = $( element );
		if ( ! $element.is( ':visible' ) ) {
			return false;
		}

		var window_left = $window.scrollLeft();
		var window_top = $window.scrollTop();
		var offset = $element.offset();
		var left = offset.left;
		var top = offset.top;

		if ( top + $element.height() >= window_top &&
			top - ($element.data( 'appear-top-offset' ) || 0) <= window_top + $window.height() &&
			left + $element.width() >= window_left &&
			left - ($element.data( 'appear-left-offset' ) || 0) <= window_left + $window.width() ) {
			return true;
		} else {
			return false;
		}
	};

	$.fn.extend( {
		// watching for element's appearance in browser viewport
		appear: function ( options ) {
			var opts = $.extend( {}, defaults, options || {} );
			var selector = this.selector || this;
			if ( ! check_binded ) {
				var on_check = function () {
					if ( check_lock ) {
						return;
					}
					check_lock = true;

					setTimeout( process, opts.interval );
				};

				$( window ).scroll( on_check ).resize( on_check );
				check_binded = true;
			}
			process();
			if ( opts.force_process ) {
				setTimeout( process, opts.interval );
			}
			add_selector( selector );
			return $( selector );
		}
	} );

	$.extend( {
		// force elements's appearance check
		force_appear: function () {
			if ( check_binded ) {
				process();
				return true;
			}
			return false;
		}
	} );
})( function () {
	if ( typeof module !== 'undefined' ) {
		// Node
		return require( 'jquery' );
	} else {
		return jQuery;
	}
}() );

/*ARI CORE*/
var jwARI = {
	layouts: {
		'200' : 320,
		'320' : 640,
		'400' : 640,
		'640' : 720,
		'800' : 900,
		'1000': 1100,
		'1200': 1300
	},
	threshold: 0,
	galid:0,
	caption: function ( title, caption ) {
		return ( title || caption ? ('<span class="jw_media_caption">' + ( title ? '<span class="tt">' + title + '</span>' : '') + (caption ? '<span class="cc">' + caption + '<span>' : '' ) + '</span>') : '')
	},
	calculate: function ( $ari, $img, $path ) {
		//calculate parent width and define source
		$( $img ).attr( 'src', $ari[$path] );
	},
	getImagePath: function ( $ob, $w, $h ,$f) {
		var $data = $($ob).data('ari');
		//console.log($data);
		if ( ! $data.hasOwnProperty( 'layouts' ) ) $data['layouts'] = this.layouts;
		//console.log($data['layouts']);
		var w = 0,h;
		if($data.hasOwnProperty('fx_width') && $f!='ignore'){
			$w = $data.fx_width;
			h = $h?$h:$data['max_height']|500;
		}
		else{
			for ( var i in $data['layouts'] ) {
				if ( $data['layouts'][i] + this.threshold > $w ) {
					w = $data['layouts'][i];
					//console.log(w);
					break;
				}
				w = $data['layouts'][i];
			}
			if($h>0)
			    h = this.ratio( $h, $w, w );
			else h=0;
		}
		if($w<$h && !$data.hasOwnProperty('ratio')) {
			w = 0;
			$($ob ).width('auto' ).css({display:'inline-block'});
		}
		
		//console.log($data,$data.width,'x',$data.height,' ',w,'x',h);
		return this.mResize( $data['path'], w.toString() + 'x' + h.toString() + 'x1' );
	},
	ariFullscreen: function ( a, $ob ) {
		var $ari = $ob.data('ari');
		a.addClass( 'pop-media-holder' );
		a.data( 'image', this.getImagePath( $ob, 1024, 0, 'ignore' ) ); //need to work on the full screen reso
		a.data( 'url', $ari.url ); //need to work on the full screen reso
		a.data( 'caption',  $ari.caption?$ari.caption:$ari.title); //need to work on the full screen reso
	},
	otherFeatures: function ( $ob ) {
		var $ari = $ob.data( 'ari' );
		var a = $( '<a>' ).addClass( 'jw_media_holder media_image' ).addClass( $ari['pushClass'] ).addClass($ob.data('align')?$ob.data('align'):'alignfull');//.width($ob.width())
		a.attr( 'href', 'javascript:' );
		if ( $ari.hasOwnProperty( 'wrapCaption' ) ) {
			if ( $ari.link ) {
				a.attr( 'target', $ari['target'] );
				if ( $ari.link.search( /http/g ) < 0 ) $ari.link = jw_base_url + $ari.link;
				a.attr( 'href', $ari.link );
			}
			else {
				this.ariFullscreen( a, $ob );
			}
		}
		else if ( $ari.hasOwnProperty( 'fullscreen' ) ) {
			this.ariFullscreen( a, $ob );
		}
		else return;
		$( $ob ).wrap( a );
		$( $ob ).parent().append( $ari.wrapCaption );//.css({width:prop.width?prop.width:'100%',height:prop.height?prop.height:'auto'});
		
		//$( $ob ).parent().parent().removeClass('jwImgWrap');
		
		if($ob.data('align')=='aligncenter') $( $ob ).parent().width('auto');
		else $( $ob ).parent().width($ari.width)
		$( $ob ).addClass( 'ari-fix' ).data('parent_width',$($ob ).parent().width());
		if($ari.hasOwnProperty('viewPort')) $($ob ).data('viewport_width',$($ari['viewPort'] ).width());
		if($ari.hasOwnProperty('id')) $ob.attr('id','image-'+$ari.id);
	},
	fix: function () {
		$('.content-gal-wrap' ).each(function(){
			//content-gal-wrap
			var $a = $(this ).data('ari');
			if($(this ).data('viewport_width')==$($a.viewPort ).width()){
				return;
			}
			var zum = ($($a.viewPort ).width()/$(this ).data('viewport_width'));
			$(this ).css({zoom:zum});
		});
		$( '.ari-fix' ).each( function () {
			var $ari = $(this ).data('ari');

			if($ari['align']=='alignfull'){
				if($(this ).data('parent_width')==$(this ).parent().width()) return;
				var width = $(this ).width();
				$(this ).width(jwARI.ratio($(this ).width(),$(this ).data('parent_width'),$(this ).parent().width()));
				$(this ).height(jwARI.ratio($(this ).height(),width,$(this ).width())); //chanage 2020
				$(this ).data('parent_width',$(this ).parent().width());
			}else{
				if($(this ).data('viewport_width')==$($ari['viewPort'] ).width()){
					return;
				}
				if($($ari['viewPort'] ).width()*0.62>$(this ).width()){
					$(this ).parent().removeClass('alignfull').addClass($ari['align']);
				}else{
					$(this ).parent().removeClass($ari['align'] ).addClass('alignfull');
					var width = $(this ).width();
					if(width>$($ari['viewPort'] ).width()) {
						$( this ).width( jwARI.ratio( $( this ).width(), $( this ).data( 'parent_width' ), $( this ).parent().width() ) );
						$( this ).height( jwARI.ratio( $( this ).height(), width, $( this ).width() ) ); //chnage 2020
						$( this ).data( 'parent_width', $( this ).parent().width() );
					}
				}
				$(this ).data('viewport_width',$($ari['viewPort'] ).width());
			}
		} );
	},
	main_image: function ( $ob ) {
		var $this = this;
		$ob.parent().appear().on( 'appear', function () {
			if ( $( this ).data( 'ari-processed' ) ) return;
			$( this ).data( 'ari-processed', 1 );
			var img = $( '.jw-ari img', this );//.hide();
			var $data = $( '.jw-ari',$(this) ).data( 'ari' );
			var $w = $data.width;//Math.floor( $( this ).width() );
			var $h = $( '.jw-ari',$(this) ).data('defaultHeight');
			img.attr('alt',$data['alt']);

			//if($data['ratio'][1]>$data['ratio'][0])
				//console.log($w,$h,$data);

			//Desigred Width Height for image
			$data['path'] = $this.getImagePath( $( '.jw-ari',$(this) ), $w, $h );
			//console.log($data['path']);
			$this.calculate( $data, img, 'path' );
			img.on( 'load', function () {
				var $ari = $( this ).parent().data( 'ari' );
				$('.jw-ari-image',$(this).parent().parent()).remove();
				//$(this).width($ari.width);
				$( this ).parent().off( 'appear' ).replaceWith(this);
			} ).on( 'error', function () {
				//var bg = $( this ).parent().css( 'background-image' ).replace( 'url(', '' ).replace( ')', '' ).replace( /\"/gi, "" );
				//$( this ).attr( 'src', bg );
				$('.jw-ari-image',$(this).parent().parent()).remove();
				$( this ).addClass('default-image');
				if(jw_cdn_url){
				    $(this).attr('src',jw_cdn_url+'contents/themes/public/style/images/default_thumbnail_800x450.png').unbind('load').unbind('error');
				}
				$( this ).parent().off( 'appear' ).replaceWith(this);
            	//console.log('ARI Error Triggered');
			} );
		} );
	},
	mResize: function ( path, opt ) {
		if (path.match(/^(https?:)?\/\//m)) {
			return path;
		}
		return jw_cdn_url + 'contents/cache/images/' + opt + '/uploads/' + path;
	},
	ratio: function ( want, by, value ) {
		return Math.floor( (want / by) * value );
	},
	gallery:function($ob,$ari){
		var id = 'gal'+$ari.id.toString()+(this.galid++).toString();
		var width = $ari.width?($ari.width>$ob.parent().width()*0.70?$ob.parent().width():$ari.width):$ob.parent().width();
		var height = this.ratio(9,16,width);
		var $wrap = $('<span>' ).attr('id',id ).addClass('swiper-container content-gal' ).addClass($ari.align).css({width:width,height:height}).css('overflow','hidden');
		$ob.replaceWith($wrap);
		var $main = $('<span>' ).addClass('swiper-wrapper' ).css('overflow','visible');
		for(var i in $ari.gallery){
			var each = $('<span>' ).addClass('swiper-slide pop-each' );
			var photo = $('<span>' ).addClass('photo' );
			var span = $('<span>' ).addClass('ari-gal').data('ari',$.extend($ari.gallery[i],{width:width,height:height}));
			each.append(photo ).append(this.caption($ari.gallery[i].name,$ari.gallery[i].caption));photo.append(span);
			$main.append(each);
		}
    	$wrap.append($main);
		$wrap.append('<span class="swiper-button-next"></span><span class="swiper-button-prev"></span>');
		var swiper = new Swiper('#'+id, {
			width:width,height:height,
			on:{
				slideChange:function(swiper){
					$.force_appear();
				},
				init:function(s){
					//var container = s.container;
					$('#'+id).find('.ari-gal' ).each(function(){
						jwARI.fetch($(this));
					});
				},
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
		});
		var $link = $('<span>' ).data('ari',$ari ).css({overflow:'visible',textAlign:'right',background:'#fff'} ).addClass('content-gal-wrap' ).data('viewport_width',$($ari.viewPort ).width());;
		$wrap.wrap($link);
		if($ari.detail_url)$('<a href="'+$ari.detail_url+'">&nbsp;</a>' ).insertAfter($wrap);
	},
	fetch: function ( $ob ) {
		var $this = this;
		var $ari = $ob.data('ari');
		if ($ob.parent().prop('tagName') == 'STRONG') {
			$ob.parent().width($ob.parent().parent().width());
		}
		if($ari.hasOwnProperty('type') && $ari.type=='gallery'){
			this.gallery($ob,$ari);
			return;
		}
		
		

		if ( ! $ari.hasOwnProperty( 'width' ) || ! $ari.width )  $ari['width'] = $ob.parent().width();
		else if($ari.width>$ob.parent().width()){
			if($ari.hasOwnProperty('height')) {
				$ari.height = this.ratio($ari.height,$ari.width,$ob.parent().width());
			}
			$ari.width = $ob.parent().width();
		}
		if ( $ari.hasOwnProperty( 'ratio' ) ) {
			$ari['height'] = $this.ratio( $ari['ratio'][1], $ari['ratio'][0], $ari['width'] );
		}
		//if height is not set
		if(!$ari['height'])
		    $ari['height'] = 0;
		
		var $tmp = $( '<img>' ).attr('alt','.' ); //need modifiation for tall images
		
		this.otherFeatures( $ob );
		$('img',$ob).insertBefore($ob).addClass('jw-ari-image');
		
		$ob.addClass('jw-ari').css('background-image','none').hide();//.wrap($wrap);
		$ob.append( $tmp );
		$( '[data-id="' + $ob.attr( 'id' ) + '"]' ).remove();
		
		if ( false && (! $ari.hasOwnProperty( 'height' ) || ! $ari.height) ) { // this needs to be fixed 2020 
			$ari['before'] = $this.mResize( $ari['path'], '24x0x0xcx15' )
			$tmp.hide();
			$tmp.on( 'load', function () {
				var $w = $( this ).width();
				var $h = $( this ).height();
				$( this ).parent().height( $this.ratio( $h, $w, $( this ).parent().width() ) );
				$this.fix($ob);
				$this.main_image( $ob );
				$tmp.off( 'load' );
			} );
			$this.calculate( $ari, $tmp, 'before' );
		}
		//End of the Fake image load
		else {
			if ( $ari.hasOwnProperty( 'padding' ) ) {
				$ob.css( 'padding-bottom', $ari['padding'] + '%' );
				$ari['height'] = $wrap.outerWidth();
			} else {
				$ob.data('defaultHeight',$ari['height']);//.height( $ari['height'] );
			}
			$this.main_image( $ob );
		}
	}
}
$( window ).resize( jwARI.fix );
$(function(){
	$.force_appear();
});