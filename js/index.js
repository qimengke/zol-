$(function(){
	//团购行划过样式
	$(".gb-bottom .gb-img").hover(function(){
		$(this).css("borderRight","1px solid #E0E0E0");
		$(this).css("borderLeft","1px solid #E0E0E0");
		$(this).css("borderBottom","2px solid #FF3333");
	}, function(){
		$(this).css("borderLeft","1px solid transparent");
		$(this).css("borderRight","1px solid transparent");
		$(this).css("borderBottom", "0px");
	});
	
	
	
	//楼层小图划过事件
	$(".normal").hover(function(){
		$(this).find($(".a-image")).stop().animate({"top":"60px"},200);
	}, function(){
		$(this).find($(".a-image")).stop().animate({"top":"65px"},200);
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
	
	//回到顶部设计
	$(".back-top").on("click", function(){
		$("html, body").animate({"scrollTop" : "0px"});
	})
	
	
	//大轮播图的实现
	$("#change-img").opacityFn(2000,2000);
	$("#banner2").opacityFn(2000,2000);	
	$("#banner3").opacityFn(2000,2000);	
	$("#banner4").opacityFn(2000,2000);	
	$("#banner5").opacityFn(2000,2000);
	
	
	//动态生成的搜索框
	$(window).scroll(function() {

//		console.log($('html,body').scrollTop())
		if($('html,body').scrollTop() > 600){
			$("#create-search-box").slideDown("400");
		}else {
			$("#create-search-box").slideUp("400");
		}
	});
	
	
	//登陆后的跳转画面
		var myUserName = "myUserName";
		var myPwd = "myPwd";
		var isLogin = "isLogin";
		//alert(getCookie(isLogin));
		if(getCookie(isLogin) == 1){
			var userName = getCookie(myUserName);
			$("#login-username").html('欢迎您,' + userName + '|<a href="javascript:void(0)" id="cancel">退出</a>');
			$("#free-register").hide();
		}else{
			$("#login-username").html('Hi~欢迎来到ZOL商城，请'+'<a href="login.html">登录</a>');
			$("#free-register").show();
		}
		/*if (checkCookie(myUserName)) {
			var userName = getCookie(myUserName);
			$("#useInfo").html('欢迎您,' + userName + '|<a href="javascript:void(0)">退出</a>');
			$("#userPwd").show();
		} else {
			$("#useInfo").html('<a href="login.html">登录</a>|<a href="register.html">注册</a>');
			$("#{userPwd").hide();
		}*/
		
		$("#cancel").on("click",function(){
			if(getCookie(isLogin) == 1){
				updateCookie(isLogin,"0");
				window.location = "index.html"
			}
		})
		//购物车的数量
		if(!getCookie("proNum")){
			$("#shopNum").html("0");
		}else {
			$("#shopNum").html(getCookie("proNum"));
		}
		
		//买家中心的点击事件
		$("#myCenter").on("click", function() {
			if(getCookie(isLogin) == 0) {
				$(this).attr("href", "javascript:void(0)");
				alert("您还没有登陆哦~")
			}else if(getCookie(isLogin) == 1){
				$(this).attr("href", "myCenter.html");
			}
		})










});
