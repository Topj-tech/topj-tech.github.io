//////////////--------左右滚动----------//////////////////

/*方法*/
function animat_banner(obj1,obj,num,btnl,btnr,css,timer,jiaz){
	var objL=$(obj).length;
	var objW=$(obj).width()+jiaz;
	if(parseInt($(obj).css("margin-left"))>0){
		objW+=parseInt($(obj).css("margin-left"));
	}
	
	if(parseInt($(obj).css("margin-right"))>0){
		objW+=parseInt($(obj).css("margin-right"))
		
	}
	var objHtml=$(obj1).html();
	var dq_ind=objL;
	var settimesdw;
	$(obj1).html(objHtml+objHtml+objHtml)
	$(obj1).width(objL*objW*3)
	$(obj1).css("left",dq_ind*objW*-1)
	$(num).eq(0).addClass(css)
	settimesdw=setInterval(settimesdw_hs,timer)
	function settimesdw_hs(){
			
			if(dq_ind>objL*2-1){
				dq_ind=objL
				$(obj1).css("left",objL*objW*-1)
			}
			dq_ind++;
			tweener(dq_ind)
		
		}
	function tweener(int){
		$(obj1).stop().animate({left:int*objW*-1},500,'easeInOutExpo')
		$(num).removeClass(css)
		$(num).eq(int%objL).addClass(css)	
		}
	$(btnl).click(function(){
		clearInterval(settimesdw)
		settimesdw=setInterval(settimesdw_hs,timer)
		if(dq_ind<objL){
			dq_ind=objL*2-1
			$(obj1).css("left",dq_ind*objW*-1)
		}
		dq_ind--;
		tweener(dq_ind)
		
		})
	$(btnr).click(function(){
		clearInterval(settimesdw)
		settimesdw=setInterval(settimesdw_hs,timer)
		if(dq_ind>objL*2-1){
				dq_ind=objL
				$(obj1).css("left",objL*objW*-1)
			}
			dq_ind++;
			tweener(dq_ind)
		})
	$(num).click(function(){
		clearInterval(settimesdw)
		settimesdw=setInterval(settimesdw_hs,timer)
		dq_ind=$(num).index(this)
		tweener(dq_ind)		
		})
}

/*调用*/
//////////////--------上下滚动----------//////////////////

/*方法*/
function animat_bannera(obj1,obj,num,btnl,btnr,css,timer){
	var objL=$(obj).length;
	var objW=$(obj).height();
	if(parseInt($(obj).css("margin-top"))>0){
		objW+=parseInt($(obj).css("margin-top"));
	}
	
	if(parseInt($(obj).css("margin-bottom"))>0){
		objW+=parseInt($(obj).css("margin-bottom"));
		
	}
	
	
	var objHtml=$(obj1).html();
	var dq_ind=objL;
	var settimesdw;
	$(obj1).html(objHtml+objHtml+objHtml)
	$(obj1).height(objL*objW*3)
	$(obj1).css("top",dq_ind*objW*-1)
	settimesdw=setInterval(settimesdw_hs,timer)
	function settimesdw_hs(){
			
			if(dq_ind>objL*2-1){
				dq_ind=objL
				$(obj1).css("top",objL*objW*-1)
			}
			dq_ind++;
			tweener(dq_ind)
		
		}
	function tweener(int){
		$(obj1).stop().animate({top:int*objW*-1},1000,'easeInOutExpo')
		$(num).removeClass(css)
		$(num).eq(int%objL).addClass(css)	
		}
	$(btnl).click(function(){
		clearInterval(settimesdw)
		settimesdw=setInterval(settimesdw_hs,timer)
		if(dq_ind<objL){
			dq_ind=objL*2-1
			$(obj1).css("top",dq_ind*objW*-1)
		}
		dq_ind--;
		tweener(dq_ind)
		
		})
	$(btnr).click(function(){
		clearInterval(settimesdw)
		settimesdw=setInterval(settimesdw_hs,timer)
		if(dq_ind>objL*2-1){
				dq_ind=objL
				$(obj1).css("top",objL*objW*-1)
			}
			dq_ind++;
			tweener(dq_ind)
		})
	$(num).click(function(){
		clearInterval(settimesdw)
		settimesdw=setInterval(settimesdw_hs,timer)
		dq_ind=$(num).index(this)
		tweener(dq_ind)		
		})
}

/*调用*/

/*方法*/
function fade_banner(obj,num,btnl,btnr,css,timer){
	var objl=$(obj).length;
	var dq_ind=0;
	var setshijinasdw;
	for(var i=0;i<objl;i++){	
		$(obj).eq(i).css("z-index",50-i)
	}
	$(num).eq(0).addClass(css)
	function fadesetInrt(int){
	 	for(var i=0;i<objl;i++){	
		$(obj).eq(i).css("z-index",$(obj).eq(i).css("z-index")-1)
		}
		$(obj).eq(int).css("z-index",100)
		$(obj).eq(int).hide();
		$(obj).eq(int).fadeIn(300)
		$(num).removeClass(css)
		$(num).eq(int).addClass(css)
		
	 }

	setshijinasdw=setInterval(setshijinasdw_hs,timer)
	
	function setshijinasdw_hs(){
		dq_ind++;
		if(dq_ind>objl-1){
			dq_ind=0;
		}
		fadesetInrt(dq_ind)
	 }
  
	$(btnl).click(function(){
		clearInterval(setshijinasdw)
		setshijinasdw=setInterval(setshijinasdw_hs,timer)
			dq_ind--;
		if(dq_ind<0){
			dq_ind=objl-1;
		}
		fadesetInrt(dq_ind)
	})
	$(btnr).click(function(){
		clearInterval(setshijinasdw)
		setshijinasdw=setInterval(setshijinasdw_hs,timer)
			dq_ind++;
			if(dq_ind>objl-1){
				dq_ind=0;
			}
			fadesetInrt(dq_ind)
	})

	$(num).click(function(){
		clearInterval(setshijinasdw)
		setshijinasdw=setInterval(setshijinasdw_hs,timer)
			dq_ind=$(num).index(this)
			fadesetInrt(dq_ind)
	})
	
	
}



//////3个参数////////////////

/*方法*/

function click_hxk(obj1,obj2,css){
	$(obj1).eq(0).addClass(css)
	$(obj2).hide();
	$(obj2).eq(0).show();
	$(obj1).click(function(){
		$(this).parent().find("."+css).removeClass(css);
		$(this).addClass(css);
		$(obj2).hide();
		$(obj2).eq($(obj1).index(this)).show();
		})
	
}

/*调用*/

