$(document).ready(function (e) {
	
	$("body").attr("id","bodys");
	$(".bottoms_over").addClass("ProcessDivBV");
	
    var curClass = 0;

    var dIvleng = $(".ProcessDivA").length;
    var Timeouts;
    var upisDoen = 0;
    $("body").mousewheel(function (event, delta, deltaX, deltaY) {
        upisDoen = deltaY;
        clearInterval(Timeouts);
        Timeouts = setInterval(Timeouts_hs, 300);


    })

    function Timeouts_hs() {
        clearInterval(Timeouts);
        if (upisDoen > 0) {
            if (curClass > 0) {
                curClass--;
                schgundtong();
            }
        } else {
            if (curClass < dIvleng) {
                curClass++;
                schgundtong();
            }
        }



    }

    $(".PosFixNav p").removeClass("curshucs").eq(0).addClass("curshucs");
    function schgundtong() {
        if (curClass != dIvleng) {
            $(".ProcessDivBV").height(0);
            $(".ProcessDivA").removeClass("ProcessDivCurn").eq(curClass).addClass("ProcessDivCurn");
            $(".PosFixNav p").removeClass("curshucs").eq(curClass).addClass("curshucs");
        } else {
            $(".ProcessDivBV").height(72);
            $(".ProcessDivA").removeClass("ProcessDivCurn").eq(curClass - 1).addClass("ProcessDivCurn");
            $(".PosFixNav p").removeClass("curshucs").eq(curClass - 1).addClass("curshucs");
        }
        $(".ProcessDivA").each(function (index, element) {
            if (index < curClass) {
                $(this).addClass("ProcessDivCurnA");
            } else {
                $(this).removeClass("ProcessDivCurnA");
            }
        });

    }


    $(".PosFixNav p").click(function () {
        curClass = $(".PosFixNav p").index(this);
        schgundtong();

    })



    var hammerA = new Hammer(document.getElementById("bodys"));

    hammerA.onswipe = function (ev) {

        if (ev.direction == "up") {
            eventHandlerU();

        } else if (ev.direction == "down") {
            eventHandlerD();
            // alert("B")
        }

    }

    document.ontouchstart = function (e) {
        if ($(e.target).parents(".PosFixNavR").length < 1 && !$(e.target).hasClass("serveAppBk2_btn") && $(e.target).parents(".headera").length<1) {
            return false;
        }

    }


    // $(window).bind('swipeup swipeleftup swiperightup',eventHandlerU);  

    function eventHandlerU() {
        //alert("右")
        upisDoen = -1;
        clearInterval(Timeouts);
        Timeouts = setInterval(Timeouts_hs, 300);
        return false;
    }

    // $(window).bind('swipedown swipeleftdown swiperightdown',eventHandlerD);  

    function eventHandlerD() {
        //alert("左")
        upisDoen = 1;
        clearInterval(Timeouts);
        Timeouts = setInterval(Timeouts_hs, 300);
        return false;

    }







});