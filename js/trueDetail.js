$(function() {
	$("#header-contents").load("header.html");
	$("#footer-contents").load("footer.html");

	//小图与normal图还有大图的点击切换
	$(".small-pic-con li").on("click", function() {
		$(".small-pic-con li").removeClass("active");
		$(this).addClass("active");
		if ($(this).index() == 0) {
			$("#normalPic").attr("src", "img/zhengmian.jpg");
			$("#bigPic").attr("src", "img/zhengmianda.jpg");
		} else if ($(this).index() == 1) {
			$("#normalPic").attr("src", "img/houbian.jpg");
			$("#bigPic").attr("src", "img/houbianda.jpg");
		} else if ($(this).index() == 2) {
			$("#normalPic").attr("src", "img/cebian.jpg");
			$("#bigPic").attr("src", "img/cebianda.jpg");
		}
	});


	$(".share>li").hover(function() {
		$(this).find(".zhegai").hide();
	}, function() {
		$(this).find(".zhegai").show();
	});
	$("#share2").hover(function() {
		$(this).find(".img-list").show();
	}, function() {
		$(this).find(".img-list").hide();
	});


	//放大镜效果
	var $scale = $("#bigPic").width() / $("#normalPic").width();
	//放大镜的显示与因隐藏
	$("#normalPicContainer").hover(function() {
		$("#bigPicContainer").show();
		$("#smallCursor").show();
	}, function() {
		$("#bigPicContainer").hide();
		$("#smallCursor").hide();
	});

	$("#smallCursor").on("mousemove", function(event) {
		//		alert("aaa")
		var eX = event.pageX;
		var eY = event.pageY;

		var _width = $("#normalPicContainer").offset().left;
		var _height = $("#normalPicContainer").offset().top;
		//		console.log(eX);
		//		console.log(eY);

		if (eX >= 275 && eX <= 425 && eY >= 365 && eY <= 515) {
			$("#smallCursor").css({
				"left": (eX - _width - 125) + "px",
				"top": (eY - _height - 125) + "px"
			});
			$("#bigPic").css({
				"left": -(eX - _width - 125) * $scale + "px",
				"top": -(eY - _height - 125) * $scale + "px"
			});
		}
	});

	//地址栏的关闭
	$(".close").on("click", function() {
		$(this).parent().hide();
	});

	//颜色分类的选择
	$(".yanse li").on("click", function() {
		$(".yanse li").removeClass("can-buy");
		$(this).addClass("can-buy");
	});

	//商品数量的加减的实现
	$(".zs-decrease").on("click", function() {
		$_num = parseInt($("#pay-num").val()) - 1;
		if ($_num < 10) {
			$(".zs-increase").removeClass("zs-no-increase");
		}
		if ($_num > 1) {
			$("#pay-num").val($_num);
			$(this).removeClass("zs-no-decrease");
		} else if ($_num <= 1) {
			$("#pay-num").val(1);
			$(this).addClass("zs-no-decrease");
		}
	})

	$(".zs-increase").on("click", function() {
		var $num = parseInt($("#pay-num").val()) + 1;
		if ($num > 1) {
			$(".zs-decrease").removeClass("zs-no-decrease");
		}
		if ($num < 10) {
			$("#pay-num").val($num);
			$(this).removeClass("zs-no-increase");
		} else if ($num == 10) {
			$("#pay-num").val(10);
			$(this).addClass("zs-no-increase");
		}
	});

	//左侧菜单栏
	$(".zp-goods-category").each(function() {
		var time = 1;
		$(this).on("click", function() {
			time++;
			if (time % 2 == 0) {
				$(this).removeClass("fold");
				$(this).addClass("unfold");
			} else {
				$(this).removeClass("unfold");
				$(this).addClass("fold");
			}

			$(this).find("ul").slideToggle();

		})
	})

	//左侧终级菜单切换
	$("#fn1").on("mouseenter", function(){
		$(".side-tab li").removeClass("current");
		$(this).addClass("current");
		$("#sell-goods").show();
		$("#top-goods").hide();
	});
	$("#fn2").on("mouseenter", function(){
		$(".side-tab li").removeClass("current");
		$(this).addClass("current");
		$("#sell-goods").hide();
		$("#top-goods").show();
	});

	//商品评价与商品详情的切换
	$(".pro-xiangqing").on("click", function(){
		$(".pro-detail li").removeClass("on");
		$(this).addClass("on");
		$(".xiangqing").show();
		$(".pingjia").hide();
	})
	$(".pro-pingjia").on("click", function(){
		$(".pro-detail li").removeClass("on");
		$(this).addClass("on");
		$(".xiangqing").hide();
		$(".pingjia").show();
	})

	$(".checks label").on("click", function() {
		$(".checks label").removeClass("cur");
		$(this).addClass("cur");
	})

	//吸顶效果的实现
	$(window).scroll(function() {
//		console.log($('html,body').scrollTop());
		if($('html,body').scrollTop() > 1200){
			$(".xiding").fadeIn("400");
		}else {
			$(".xiding").fadeOut("400");
		}
	});

	//jump的窗口关闭
	$(".close-this").on("click", function(){
		$(this).parent().hide();
	});

	$(".add-shopcar").on("click", function(){	
		$(".jump").show();
	})


	
	//cookie的实现，对加入购物车按钮的实现
	$(".add-shopcar").on("click", function(){		
		if(getCookie("isLogin") == 1){
			var proName = $(".head-title").html();
			var proColor = $(".yanse .can-buy").html();
			var proSuit = $(".suit-content .can-buy").html();
			var proNum = $("#pay-num").val();
			var proPrice = $(".zs-price-panel .zs-price em").html();
			var proPic = "img/zhengmianxiao.jpg";
//			alert(proPic);
			addCookie("proName", proName, 5);
			addCookie("proColor", proColor, 5);
			addCookie("proSuit", proSuit, 5);
			addCookie("proNum", proNum, 5);
			addCookie("proPrice", proPrice, 5);
			addCookie("proPic", proPic, 5);
		}else {
			window.location = "login.html";
		}
	})
	
	
	





















});