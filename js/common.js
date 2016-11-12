$(function(){
	//对header下部的li的单独划过效果开始
	$(".nav-right .nav-right-list").eq(1).hover(function(){
		$(this).addClass('active');
		$("#second-list1").show();
		$(".glyphicon-chevron-down").eq(0).hide();
		$(".glyphicon-chevron-up").eq(0).show();
	},function(){
		$(this).removeClass('active');
		$("#second-list1").hide();
		$(".glyphicon-chevron-down").eq(0).show();
		$(".glyphicon-chevron-up").eq(0).hide();
	});
	
		$(".nav-right .nav-right-list").eq(5).hover(function(){
		$(this).addClass('active');
		$("#second-list2").show();
		$(".glyphicon-chevron-down").eq(1).hide();
		$(".glyphicon-chevron-up").eq(1).show();
	},function(){
		$(this).removeClass('active');
		$("#second-list2").hide();
		$(".glyphicon-chevron-down").eq(1).show();
		$(".glyphicon-chevron-up").eq(1).hide();
	});
	
		$(".nav-right .nav-right-list").eq(8).hover(function(){
		$(this).addClass('active');
		$("#second-list3").show();
		$(".glyphicon-chevron-down").eq(2).hide();
		$(".glyphicon-chevron-up").eq(2).show();
	},function(){
		$(this).removeClass('active');
		$("#second-list3").hide();
		$(".glyphicon-chevron-down").eq(2).show();
		$(".glyphicon-chevron-up").eq(2).hide();
	});
	//对header下部的li的单独划过效果结束
	
	//对一级菜单的划过效果设置
		$("#nav-box").hover(function(){
			$("#nav-second-box").show();
		},function(){
			$("#nav-second-box").hide();
		})
	
	//对二级菜单划过的效果
	$("#main-nav #nav-second-box .nav-second>li").hover(function(){
		$(this).addClass("active");
		$(this).find(".nav-third").show();
	}, function(){
		$(this).removeClass("active");
		$(this).find(".nav-third").hide();
	});
	
	
	//登陆后的跳转画面
		var myUserName = "myUserName";
		var myPwd = "myPwd";
		var isLogin = "isLogin";
		//alert(getCookie(isLogin));
		if(getCookie(isLogin) == 1){
//			console.log($("#free-register").size())
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
	
})