$(function() {
	$("#header-contents").load("header.html");
	$("#footer-contents").load("footer.html");
	
	$(".first-list").hover(function(){
		$(this).find($(".second-list")).show();
		$(this).css({
			"borderColor": "#C40000"
//			"borderBottom": "0px"
//			"z-index" : 1000
		});
//		$(this).css("height", "26px");
		$(this).find(".original").hide();
		$(this).find(".up").show();
	
		$(".second-list li").hover(function(){
			$(this).css("background", "#F7F7F7");
		}, function(){
			$(this).css("background", "white");
		})
	
	}, function(){
		$(this).find($(".second-list")).hide();
		$(this).css("borderColor", "#ccc");
		$(this).find(".original").show();
		$(this).find(".up").hide();
	});
	
	$("#adress-list").hover(function(){
		$(this).find("#adress").show().css("background","white");
		$(this).css({
			"backgroundColor": "white",
			"height": "38px",
			"z-index" : "99"
			});
	}, function(){
		$(this).find("#adress").hide();
		$(this).css({
			"backgroundColor": "#F7F7F7",
			"height" : "36px"
			});
	});
	
	$("#input-contents").hover(function(){
		$(this).css({
			"backgroundColor":"white",
			"height" : "80px"
		});
		$(this).css("boxShadow", " 0px 4px 5px #C0C0C0");
		$(this).find("#input-btn").show();
	},function(){
		$(this).find("#input-btn").hide();
		$(this).css({
			"backgroundColor":"#F7F7F7",
			"height" : "36px",
			"boxShadow" : "none"
		});
	});
	
	// 对底部page页数的点击事件
	$(".page a").on("click", function() {
		$(".page a").css({
			"background" :"white",
			"color": "#333"
		})
		$(this).css({
			"background": "#CC0000",
			"color": "white"
		})
	})
	
	//右侧导航栏的划过效果
	$("#right-nav ul li").not(".suggest").hover(function(){
		$(this).css("background", "#f33");
		$(this).find($("div")).show().animate({
			"width": "70px",
			"left" : "-70px"
			},400);
	}, function(){
		$(this).css("background", "#2D2D2D");
		$(this).find($("div")).animate({
			"width": "0px",
			"left" : "0px"
		},400).hide("400");
	})
	
	//回到顶部的设计 
	$(".back-top a").on("click", function() {
		$("html, body").animate({
			"scrollTop": "0px"
		}, 1000);
	})
	
});
