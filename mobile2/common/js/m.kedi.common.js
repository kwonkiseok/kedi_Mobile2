/*!
 * @Page	: KEDI Mobile - Common JS
 * @Author	: dkkim
 * @Date	: 2017-05-10
 */

$(function(){
	if($("#topNavi").length > 0){
		sideMenu();
	}
	uiFaq();
});

var sideMenu = function(){
	var h = $(window).height(),
		$body = $("body"),
		$minWrap = $("#wrap"),
		$dim = $("#dim"),
		$navToggle = $minWrap.find(".btnNavi"),
		$sideMenu = $("#topNavi"),
		$sideMenuClose = $sideMenu.find(".btnClose"),
		speed = 300;

	$sideMenu.attr("data-hidden", "false");

	$(".btnNavi").on("click", function(){
		$body.addClass("navi-open");
		var windowHeight = $(window).height();
		$minWrap.css({"height" : windowHeight - 1});
		setTimeout(function(){
			$sideMenu.attr("data-hidden", "true");
			$sideMenu.find("a").eq(0).focus();
		}, 300);
	});

	$sideMenuClose.on("click", function(){
		$minWrap.css({"height" : "100%"});
		if($sideMenu.attr("data-hidden") == "true"){
			$body.removeClass("navi-open");
			$sideMenu.attr("data-hidden", "false");
		}
		gnbReset();
		$navToggle.focus();
	});

	$dim.on("click", function(){
		$minWrap.css({"height" : "100%"});
		if($sideMenu.attr("data-hidden") == "true"){
			$body.removeClass("navi-open");
			$sideMenu.attr("data-hidden", "false");
		}
		gnbReset();
	});

	var gnbReset = function(){
		if($sideMenu.find("li li").is(".active")){
			setTimeout(function(){
			}, 300);
		}
	}

	$("#dim").on("touchmove", function(){
		$("#topNavi").on("touchmove", function(){
			return true;
		});
		return false;
	});
},

uiFaq = function(){
	var speed = 300,
		$wrap = $(".uiFaq"),
		$qst = $wrap.find(".tit a"),
		$answer = $wrap.find(".ans"),
		$offset = $qst.offset();
	
	$qst.on("click", function(e) {
		$(this).parents("li").is(".active") 
			? ($answer.stop(!0, !0).slideUp(speed), $answer.parent("li").removeClass("active"))
			: ($(this).parent().next($answer).stop(!0, !0).slideDown(speed).parent("li").siblings().find($answer).stop(!0, !0).slideUp(speed), $(this).parents("li").addClass("active").siblings().removeClass("active")), e.preventDefault()
	});
}
