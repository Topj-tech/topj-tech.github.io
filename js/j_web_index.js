// JavaScript Document
$(function(){
		$("#bnt_tel").click(function(){
			 
			$("#content_tel").slideToggle();
			});
		
		});
	$(function(){
		$("#index_banner").slide({mainCell:".bd ul",autoPage:true,autoPlay:true,effect:"leftLoop"});
		$("#s_case").slide({titCell:".hd a",mainCell:".bd",effect:"fold",trigger:"click"});
		$("#bnt_link").click(function(){
		$("#footer_up_box").toggleClass("link_on");
		});
		$(".team_tab").slide({titCell:".hd li",mainCell:".bd ul",autoPlay:true,effect:"left"});
		 
		//客服
		setInterval(function(){
		if($(".animated-circles").hasClass("animated")){
			$(".animated-circles").removeClass("animated");
		}else{
			$(".animated-circles").addClass('animated');
		}
	},3000);
	var wait = setInterval(function(){
		$(".livechat-hint").removeClass("show_hint").addClass("hide_hint");
		clearInterval(wait);
	},4500);
	$(".livechat-girl").hover(function(){
		clearInterval(wait);
		$(".livechat-hint").removeClass("hide_hint").addClass("show_hint");
	},function(){
		$(".livechat-hint").removeClass("show_hint").addClass("hide_hint");
	}).click(function(){
		if(isMobile){
			 window.location.href = 'http://www.baidu.com';
		}else{
			var oWidth = 606,
				oHeight = 630,
				top = ($(window).height()/2)-(oHeight/2),
				left = ($(window).width()/2)-(oWidth/2);
			window.open('http://www.baidu.com','','width='+oWidth+',height='+oHeight+',scrollbars=yes,top='+top+',left='+left+',resizable=yes');
		}
	});	
});
$(function(){
	
	 window.onscroll=function(){
		 if($(window).scrollTop()>83){
			 
		 $("#header").addClass("header_on");
		 }
		  else if($(window).scrollTop()<83){
		 $("#header").removeClass("header_on");
		 }
		 }
	});

$(function() {
    if (window.PIE) {
        $('.rounded').each(function() {
            PIE.attach(this);
        });
    }
});

function browserRedirect() {
	var sUserAgent = navigator.userAgent.toLowerCase();
	var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
	var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
	var bIsMidp = sUserAgent.match(/midp/i) == "midp";
	var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
	var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
	var bIsAndroid = sUserAgent.match(/android/i) == "android";
	var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
	var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

	if (bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
		window.location.href="wap/index.html";
	}

}

browserRedirect();
