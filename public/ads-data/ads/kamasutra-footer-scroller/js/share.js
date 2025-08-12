/**
 * Created by nafi on 12/28/2016.
 */
var jadeWitsShare = {
	storage:{
		facebook:{
			title:'Facebook',
			_class:'icon icon_facebook'
		},
		twitter:{
			title:'Twitter',
			_class:'icon icon_twitter'
		},
		googlePlus:{
			title:'Google+',
			_class:'icon icon_googleplus'
		},
		print:{
			title:'Print',
			_class:'icon icon_print',
			pop:false
		},
		copy:{
			title:'Copy',
			_class:'icon icon_link',
			cmd:true
		},
		pinterest:{
			title:'Pinterest',
			_class:'icon icon_pinterest'
		},
		linkedin:{
			title:'Linkedin',
			_class:'icon icon_linkedin'
		},
		instagram:{
			title:'Instagram',
			_class:'icon icon_instagram'
		},
		viber:{
			title:'Viber',
			_class:'icon icon_viber',
			computer:false
		},
		whatsapp:{
			title:'Whatsapp',
			_class:'icon icon_whatsapp',
			computer:false
		},
		messenger:{
		    title:'Messenger',
			_class:'icon icon_messenger',
			computer:false
		},
		email:{
			title:'Email',
			_class:'icon icon_email',
			self:true
		},
		share:{
			title:'Share More',
			_class:'icon icon_share',
			upper_class:'jadeshare_more'
		}
	},
	rawUrlEncode:function(str){
		return encodeURIComponent(str)
			.replace(/!/g, '%21')
			.replace(/'/g, '%27')
			.replace(/\(/g, '%28')
			.replace(/\)/g, '%29')
			.replace(/\*/g, '%2A')
	},
	timer: null,
	platformDom:function(platform,data){
	    //console.log('Share:',data);
		var $this = this;
		var $platform = platform;
		//console.log(data);
		var $data = data||{};
		var global_data = {
			title:jw_meta_title,
			description:jw_meta_description,
			image:jw_meta_image,
			url:jw_meta_url,
		}
		for(var i in global_data){
			if(!$data.hasOwnProperty(i)) $data[i] = global_data[i];
		}
		if(!this.storage.hasOwnProperty(platform)) return;
		//if(this.storage[platform].hasOwnProperty(jw_device) && !this.storage[platform][jw_device]) return;
		var extra = '';
		if(this.storage[platform].hasOwnProperty('upper_class')) extra = '_more'; 
		var d = $('<a>' ).addClass('share_platform_' + platform + ' jadeshare'+extra).attr('title',this.storage[platform].title ).attr('href',(this.storage[platform].hasOwnProperty('self')&&this.storage[platform].self)?'mailto:?subject='+$data.title+'&amp;body=' + $this.rawUrlEncode($data.url):'javascript:' ).click(function(){
			if($this.storage[$platform].hasOwnProperty('self') && $this.storage[$platform].self) return;
			
			var url = '';
			switch($platform){
				case 'facebook' :
					url = 'https://www.facebook.com/sharer/sharer.php?u=' + $this.rawUrlEncode($data.url)+
					//'&app_id='+facebook_application_id +
					'&title='+$this.rawUrlEncode($data.title)+'&description='+$this.rawUrlEncode($data.description);//+'&picture='+$this.rawUrlEncode($data.image);
					break;
				case 'twitter':
					url = 'https://twitter.com/intent/tweet?text=' + $this.rawUrlEncode($data.title) + '&url=' + $this.rawUrlEncode($data.url);
					break;
				case 'googlePlus':
					url = 'https://plus.google.com/share?url=' + $this.rawUrlEncode($data.url);
					break;
				case 'pinterest':
					url = 'https://pinterest.com/pin/create/link/?url=' + $this.rawUrlEncode($data.url);
					break;
				case 'email':
					url = 'mailto:amit@jadewits.com?subject='+$this.rawUrlEncode($data.title)+'&amp;body=' + $this.rawUrlEncode($data.url);
					break;
				case 'linkedin':
					url = 'https://www.linkedin.com/sharing/share-offsite/?url=' + $this.rawUrlEncode($data.url);
					break;
				case 'whatsapp':
					url = 'https://api.whatsapp.com/send?text='+$this.rawUrlEncode($data.title)+'%20' + $this.rawUrlEncode($data.url);
					break;
				case 'messenger':
					url = 'fb-messenger://share?link='+$this.rawUrlEncode($data.url);
					break;
				case 'viber':
					url = 'viber://forward?text='+$this.rawUrlEncode($data.title)+'%20' + $this.rawUrlEncode($data.url);
					break;
				case 'print':
					url = $data.url+'?print=1#jadewits_print';
					break;
				case 'copy':
					url = $data.url;
					break;
				default:
					return false;
					break;
			}
			var w = null;
			if($this.storage[$platform].hasOwnProperty('cmd')){
			    if (!window.getSelection) {
                    prompt("Your Browser doesn't support Copy.",url );
                    return;
                }
			    dummy = $('.c',this)[0];
			    const range = document.createRange();
                range.setStartBefore(dummy);
                range.setEndAfter(dummy);
                
                const selection = window.getSelection();
                // First clear, in case the user already selected some other text
                selection.removeAllRanges();
                selection.addRange(range);
                
                document.execCommand('copy');
                if($this.timer!=null) return;
                const msg = (document.documentElement.lang=='bn')?'নিউজের লিঙ্কটি আপনার ক্লিপবোর্ডে কপি করা হয়েছে':'The Link Has Been Coppied to your Clipboard';
                const toast = $('<div>').addClass('toast').html(msg).css({
                    position:'fixed',
                    background:'#000000b8',
                    color:'#fff',
                    width:'auto',
                    bottom:3,
                    left:'50%',
                    transform:'translate(-50%,0)',
                    padding:8,
                    borderRadius:10
                });
                $('body').append(toast);
                $this.timer = setTimeout(function(){
                    $('.toast',$('body')).remove();
                    clearTimeout($this.timer);
                    $this.timer=null;
                },2000)
			    //alert('Link Copied');
			}
			else if($this.storage[$platform].hasOwnProperty('pop') && !$this.storage[$platform].pop)
				w = window.open(url, '_blank');
			else if($this.storage[$platform].hasOwnProperty('mail') && $this.storage[$platform].mail) {
				var iframe = $('<iframe id="mailtoFrame" src="'+url+'" width="1" height="1" border="0" frameborder="0"></iframe>');
				$('body').append(iframe);
				//remove the iframe, we don't need it any more
				/*window.setTimeout(function(){
					iframe.remove();
				}, 500);*/
			}
			else w = window.open(url, '_blank','width=500,height=400');
			/*console.log('url'+url);
			window.location.href = url;*/
			//w.close();
		});
		//Add Click Event & callbacks here
		var s = $('<span>' ).addClass(this.storage[platform]._class);
		var t = $('<span>' ).addClass('t' ).html(this.storage[platform].title);
		
		if($this.storage[$platform].hasOwnProperty('cmd')){
		    var i = $('<span>').addClass('c').text($data.url).css({
		        position:'absolute',
		        opacity:0
		    });
		    d.append(i).css({
		        position:'relative'
		    }).attr('title',$data.url);
		}
		d.append(s ).append(t);
		return d;
	}
}
$('.social_shares').live('jadewitsShare',function(e){
	if($(this ).data('shareActive')) return;
	var show = $(this ).data('show' );
	var hide = $(this ).data('hide' );
	var ok = false;
	$(this ).children().remove();
	if(show) show = show.split(',')
	if(hide) hide = hide.split(',')
	var data = $(this ).data();
	//console.log('Data From Contect:',data);
	if(show){
		ok = true;
		for(var i in show){
			if(hide)hide = hide.filter(function(e){
				return e!=show[i];
			});
			$(this ).append(jadeWitsShare.platformDom(show[i],data));
		}
	}
	if(hide){
		ok = true;
		var hide_wrap = $('<div>' ).addClass('share_group');
		hide_wrap.append(jadeWitsShare.platformDom('share'));
		var group = $('<div>' ).addClass('share_group_inner');
		for(var i in hide){
			group.append(jadeWitsShare.platformDom(hide[i],data));
		}
		hide_wrap.append(group);
		$(this ).append(hide_wrap);
	}
	$(this ).data('shareActive',true);
	if(ok) return;
	$(this ).remove();
});
