//j_hover
function sHover(f,e){var h=this;var d=h.getByClass(document,f);for(var c=0;c<d.length;c++){var b=d[c];var g=h.getByClass(b,e)[0];b.size={width:h.getStyle(b,"width"),height:h.getStyle(b,"height")};b.style.position="relative";b.style.overflow="hidden";g.style.position="absolute";g.style.width=b.size.width+"px";g.style.height=b.size.height+"px";g.style.top=b.size.height+"px";g.style.left="0px";g.style.zIndex="99";g.style.opacity="1";this.slideSpeed=5;this.opacityChange=false;this.opacity=100;function a(j,k){h.myAddEvent(j,"mouseover",function(l){h.hoverIn(l,j,k)});h.myAddEvent(d[c],"mouseout",function(l){h.hoverOut(l,j,k)})}a(b,g)}}sHover.prototype.set=function(a){for(i in a){this[i]=a[i]}};sHover.prototype.trigger=function(d,a,c){try{if(d.contains(c.relatedTarget)){return false}else{if(!c.relatedTarget){throw new error()}}}catch(b){if(a=="in"){if(d.contains(c.fromElement)){return false}}else{if(a=="out"){if(d.contains(c.toElement)){return false}}}}return true};sHover.prototype.hoverIn=function(c,b,d){var f=c||event;if(this.trigger(b,"in",f)){var a=this.getDir(f,b);if(a==0||a==2){if(a==0){d.style.top=-b.size.height+"px"}else{d.style.top=b.size.height+"px"}d.style.left="0px";this.startMove(d,{"top":0,"left":0,"opacity":this.opacity})}else{if(a==1){d.style.left=b.size.width+"px"}else{d.style.left=-b.size.width+"px"}d.style.top="0px";this.startMove(d,{"left":0,"opacity":this.opacity})}}};sHover.prototype.hoverOut=function(d,c,f){var g=d||event;var b=100;if(this.trigger(c,"out",g)){var a=this.getDir(g,c);if(this.opacityChange){b=0}switch(a){case 0:this.startMove(f,{"top":-c.size.height,"left":0,"opacity":b});break;case 2:this.startMove(f,{"top":c.size.height,"left":0,"opacity":b});break;case 1:this.startMove(f,{"left":c.size.width,"top":0,"opacity":b});break;case 3:this.startMove(f,{"left":-c.size.width,"top":0,"opacity":b});break}}};sHover.prototype.startMove=function(f,c,d){var h;var e;var a=(11-this.slideSpeed)>0?(11-this.slideSpeed):1;var b=30;var g=this;clearInterval(f.moveTimer);f.moveTimer=setInterval(function(){var k=true;for(var j in c){var m=g.getStyle(f,j);var l=c[j];if(j=="opacity"){h=parseInt(parseFloat(m)*100,10)}else{h=parseInt(m,10)}if(h!=l){k=false}if(k){clearInterval(f.moveTimer);d&&d()}else{e=(l-h)/a;e=l>h?Math.ceil(e):Math.floor(e);if(j=="opacity"){f.style[j]=(h+e)/100;f.style.filter="alpha(opacity="+(h+e)+")"}else{f.style[j]=(h+e)+"px"}}}},b)};sHover.prototype.myAddEvent=function(c,a,b){if(c.attachEvent){c.attachEvent("on"+a,function(){b.call(this)})}else{c.addEventListener(a,b,false)}};sHover.prototype.getByClass=function(e,d){var f=[];var a=e.getElementsByTagName("*");var c=new RegExp("\\b"+d+"\\b",b);for(var b=0;b<a.length;b++){if(c.test(a[b].className)){f.push(a[b])}}return f};sHover.prototype.getStyle=function(c,a){var b;if(c.currentStyle){b=c.currentStyle[a]}else{b=getComputedStyle(c,false)[a]}if(a!="opacity"){b=parseInt(b,10)}if(isNaN(b)){b=c["offset"+a.charAt(0).toUpperCase()+a.substring(1)]}return b};sHover.prototype.getScroll=function(){var a={top:document.body.scrollTop||document.documentElement.scrollTop,left:document.body.scrollLeft||document.documentElement.scrollLeft};return a};sHover.prototype.getPos=function(a){var b={left:0,top:0};while(a){b.left+=a.offsetLeft;b.top+=a.offsetTop;a=a.offsetParent}return b};sHover.prototype.getDir=function(j,f){var j=j||event;var b=this.getStyle(f,"width"),d=this.getStyle(f,"height"),a=(j.clientX-this.getPos(f).left+this.getScroll().left-(b/2))*(b>d?(d/b):1),k=(j.clientY-this.getPos(f).top+this.getScroll().top-(d/2))*(d>b?(b/d):1),g=Math.round((((Math.atan2(k,a)*(180/Math.PI))+180)/90)+3)%4,c=j.type;return g};





$(function(){
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
})





//数字加载 
	$('#number_add').mousewheel(function(){$.fn.countTo=function(options){options=options||{};return $(this).each(function(){var settings=$.extend({},$.fn.countTo.defaults,{from:$(this).data('from'),to:$(this).data('to'),speed:$(this).data('speed'),refreshInterval:$(this).data('refresh-interval'),decimals:$(this).data('decimals')},options);var loops=Math.ceil(settings.speed/settings.refreshInterval),increment=(settings.to-settings.from)/loops;var self=this,$self=$(this),loopCount=0,value=settings.from,data=$self.data('countTo')||{};$self.data('countTo',data);if(data.interval){clearInterval(data.interval)}data.interval=setInterval(updateTimer,settings.refreshInterval);render(value);function updateTimer(){value+=increment;loopCount++;render(value);if(typeof(settings.onUpdate)=='function'){settings.onUpdate.call(self,value)}if(loopCount>=loops){$self.removeData('countTo');clearInterval(data.interval);value=settings.to;if(typeof(settings.onComplete)=='function'){settings.onComplete.call(self,value)}}}function render(value){var formattedValue=settings.formatter.call(self,value,settings);$self.html(formattedValue)}})};$.fn.countTo.defaults={from:0,to:0,speed:3000,refreshInterval:20,decimals:0,formatter:formatter,onUpdate:null,onComplete:null};function formatter(value,settings){return value.toFixed(settings.decimals)}$('#count-number1,#count-number2,#count-number3,#count-number4').data('countToOptions',{formatter:function(value,options){return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g,',')}});$('.timer').each(count);function count(options){var $this=$(this);options=$.extend({},options||{},$this.data('countToOptions')||{});$this.countTo(options)}})
