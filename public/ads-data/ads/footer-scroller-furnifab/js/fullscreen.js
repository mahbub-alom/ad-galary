/*
* JadeWits Technologies Limited
* 2016-12-19
* */
var jwFullScreen = {
	storage:{
		created:false,
		activeIndex:null,
		data:[]
	},
	originalParams:{
		hook:'.popper',
		pop:'.pop-each>.photo>a',
		classes:{
			main:'pop-main',
			shareTool:'pop-share-tool',
			close:'pop-close',
			slide:'pop-slide',
			thumb:'pop-thumb',
			icons:'pop-icons',
			info:'pop-info',
			each:'swiper-slide',
			wrap:'swiper-wrapper',
			active:'pop-active',
			fullscreen:'pop-fullscreen',
			page:'swiper-pagination'
		},
		cache:'0x592x0'
	},
	main:null,
	swiper:{
		main:null,
		thumb:null
	},
	activeIndex:0,
	activePopper:0,
	scroll:0,
	mResize:function(url,str){
		return url.replace(/contents\/uploads/g, 'contents/cache/images/'+str+'/uploads');
	},
	init:function(params){
		this.originalParams = $.extend(this.originalParams,params||{});
		var $this = this;
		$('.'+this.originalParams.classes.active).live('click',function(){
		    $parent = $(this).closest($this.originalParams.hook);
			//console.log($(this ).data());return;
			$this.scroll = $(document).scrollTop();
			$this.activeIndex = $($this.originalParams.pop,$parent).index($(this));//$(this ).data('index');
			$this.show($(this).data('popper_index'),$(this).data('inner_index'));
		});
		$this.create();
	},
	hide:function(){
		this.main.cancelFullScreen();
		var $this = this;
		$('body' ).removeClass('no-scrollbar');
		$(document).scrollTop($this.scroll);
		this.main.hide();
		//scroll to the active one

	},
	update:function(){
		var $this = this;
		/*var full = $('.'+$this.originalParams.classes.fullscreen);
		var dim = {
			width: ($(full ).length)?$(full ).width():$(window).width(),
			height: ($(full ).length)?$(full ).height():$(window).height(),
		}*/
		var dim = {
			width: $(window).width(),
			height: $(window).height(),
		}
		var slider = {
			width: dim.width,
			height: dim.height*0.87
		}
		var thumb = {
			width: dim.width,
			height: dim.height*0.12
		}
		if(this.main.fullScreenStatus())this.main.addClass('hideFullScreenBtn');
		else this.main.removeClass('hideFullScreenBtn');
		if(!$.support.fullscreen) this.main.addClass('hideFullScreenBtn');
		this.main.css(dim);
		$('.'+this.originalParams.classes.slide).css(slider);
		$('.'+this.originalParams.classes.thumb).css(thumb);
		this.swiper.main.update();
		this.swiper.thumb.update();
		/*if(!this.activeIndex) this.activeIndex = 1;
		if(this.activeIndex)*/
		this.swiper.main.slideTo(this.activeIndex);
		//if(this.activeIndex)this.swiper.thumb.slideTo(this.activeIndex);
		this.main.css('visibility','visible');
	},
	tryFullScreen:function(){
		var $this = this;
		if($.support.fullscreen){
			this.main.fullScreen({
				callback:function(f,k){
					if(!f && k) $this.hide();
					else $this.update();
				},
				fullscreenClass:$this.originalParams.classes.fullscreen
			});
		}else{
			this.update();
		}
	},
	show:function(x,y){
	    //console.log(x,y);
	    this.activePopper = x;
	    this.activeIndex = y;
	    
	    $('.'+this.originalParams.classes.each).hide();
        $('[data-popperindex="'+x+'"]').show();
		$('body' ).addClass('no-scrollbar');
		this.main.show();
		this.main.css('visibility','hidden');
		this.tryFullScreen();
	},
	create:function(){
		var $this = this;
		this.main = $('<div>' ).addClass(this.originalParams.classes.main );//attach events
		/*this.main.bind('resize',function(){
			console.log($(this).width());
		});*/
		this.main.append('<div class="'+this.originalParams.classes.slide+'">' +
			'<div class="'+this.originalParams.classes.wrap+'"></div>' +
			'<div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div>' +
			'<div class="'+this.originalParams.classes.thumb+'">' +
			'<div class="'+this.originalParams.classes.wrap+'"></div>' +
			'<div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div>' +
			'<div class="'+this.originalParams.classes.icons+'">' +
			'<a class="cancel" href="javascript:"></a><a class="fullscreen" href="javascript:"></a>' + //
			'<i class="'+this.originalParams.classes.page+'"></i></div>');/* +
			'<div class="'+this.originalParams.classes.info+' social_shares roundicons"' +
			'data-show="instagram,pinterest,facebook,googlePlus,twitter" data-hide="print,linkedin,viber,whatsapp,email"></div>')*/
		$(this.originalParams.pop,$(this.originalParams.hook)).each(function(i){
			$(this ).data('index',i);
			$__parent = $(this).closest($this.originalParams.hook);
			$(this ).data('inner_index',$($this.originalParams.pop,$__parent).index($(this)));//$(this ).data('index');
			var popperIndex  = $($this.originalParams.hook).index($__parent);
			$(this ).data('popper_index',popperIndex);
			//console.log($(this ).data());
			//$('body' ).css({overflow:'hidden'});
			var loaded = $this.mResize($(this ).data('image'),$this.originalParams.cache);
			var original = $(this ).data('image');
			var url = $(this ).data('url');
			//console.log(url);
			var caption = $(this ).data('caption')?$(this ).data('caption'):'';
			var author = $(this ).data('author')?$(this ).data('author'):'';
			var $each = '<div data-popperindex="'+popperIndex+'" class="'+$this.originalParams.classes.each+'" style="background-image:url(\''+loaded+'\')" >' +
				'<div class="info"><i class="caption">'+caption+'</i><i class="author">'+author+'</i>' +
				'<a class="caption_hide" href="javascript:">&nbsp;</a>' +
				'<b class="social_shares roundicons zoom0_75" data-show=""' +
				'data-hide="pinterest,facebook,twitter,googlePlus,instagram,viber,whatsapp,email"' +
				/*'data-title="'+caption+'"' +*/
				'data-url="'+url+'" ' +
				/*'data-url="'+jw_meta_url+'#'+$(this ).attr('id')+'" ' +*/
				'data-description="'+caption+' "' +
				'data-image="'+original+'"></b>' +
				'</div></div>';
			/*original image preload and assign + Share Icon Placement*/
			var loader = new Image();
			loader.src = original;
			loader.onload = function(){
				//console.log(this.src);
				$('.'+$this.originalParams.classes.each+':nth-child('+(i+1).toString()+')',$('.'+$this.originalParams.classes.slide) ).css({
					backgroundImage:"url('"+this.src+"')"
				});
			}
			var $thumb = '<div data-popperindex="'+popperIndex+'" class="'+$this.originalParams.classes.each+'"  style="background-image:url(\''+loaded+'\')"></div>';
			$this.main.find('.'+$this.originalParams.classes.slide+'>.'+$this.originalParams.classes.wrap ).append($each);
			$this.main.find('.'+$this.originalParams.classes.thumb+'>.'+$this.originalParams.classes.wrap ).append($thumb);
			$this.storage.data.push($(this ).data());
		})
		this.storage.created = true;
		$this.main.find('.caption_hide' ).click(function(){
			if($this.main.hasClass('caption-hidden'))$this.main.removeClass('caption-hidden');
			else $this.main.addClass('caption-hidden');
		});
		$this.main.find('.cancel' ).click(function(){
			$this.hide();
			return false;
		});
		$this.main.find('.fullscreen' ).click(function(){
			$this.tryFullScreen();
			return false;
		});
		$('body').append(this.main)
		$('.social_shares',this.main ).trigger('jadewitsShare' );
		$(this.originalParams.pop,$(this.originalParams.hook) ).addClass(this.originalParams.classes.active);
		this.swiper.main = new Swiper('.'+this.originalParams.classes.slide, {
			navigation: {
				nextEl: '.'+this.originalParams.classes.slide+'>.swiper-button-next',
				prevEl: '.'+this.originalParams.classes.slide+'>.swiper-button-prev',
			},
			 
			spaceBetween: 0,
			effect:'fade',
			grabCursor:false, 
			pagination: {
				el: '.'+this.originalParams.classes.page,
				type:'custom',
				renderCustom:function (swiper, current, total) {
					if(!current)current++;
					return banglaNumber(current) + ' / ' + banglaNumber(total);
				},
			},
			on:{
				slideChange:function(s){
					$this.activeIndex = s.activeIndex;
				}
			}
		});
		this.swiper.thumb = new Swiper('.'+this.originalParams.classes.thumb, {
			spaceBetween: 5,
			centeredSlides: true,
			slidesPerView: 10,
			slideToClickedSlide: true,
			navigation: {
				nextEl: '.'+this.originalParams.classes.thumb+'>.swiper-button-next',
				prevEl: '.'+this.originalParams.classes.thumb+'>.swiper-button-prev',
			},
			autoplay: { delay: 3000, pauseOnMouseEnter:true, disableOnInteraction:false },
			grabCursor:true
		});
		this.swiper.main.controller.control = this.swiper.thumb;
		this.swiper.thumb.controller.control = this.swiper.main;
		this.update();
		$(window ).bind('resize',function(){
			$this.update();
		});
	}
};
/*
$(function(){
 jwFullScreen.init();
});*/