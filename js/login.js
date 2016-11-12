$(function() {
	//普通登录文本框的获取焦点事件
	changeBorder(".login-username");
	changeBorder(".login-pwd");
	
	//普通登录与手机动态登陆的切换
	$(".mobilLogin-bar").on("click", function(){
		$(this).css ("display", "none");
		$(".normal-bar").css("display", "block");
		$("#normal-username").css ("display", "none");
		$("#mobile-username").css ("display", "block");
		$(".login-pwd").css ("display", "none");
		$("#picturecode").css ("display", "block");
		$("#sendcode").css ("display", "block");	
	})
	//第二次切换
	$(".normal-bar").on("click", function(){
		$(this).css ("display", "none");
		$(".mobilLogin-bar").css("display", "block");
		$(".normal-bar").css("display", "none");
		$("#normal-username").css ("display", "block");
		$("#mobile-username").css ("display", "none");
		$(".login-pwd").css ("display", "block");
		$("#picturecode").css ("display", "none");
		$("#sendcode").css ("display", "none");	
	})
	
	//登陆页面的cookie的实现与判断
	var myUserName = "myUserName";
	var myPwd = "myPwd";
	var isLogin = "isLogin";
	
	
	
	$("#btn").on("click",function(){
		var userName = $("#normal-username").val();
		var pwd = $(".login-pwd").val();
		if(userName == ""){
			$(".hint").show();
			$(".hint").html("用户名不能为空");
		}else{
			if(pwd == ""){
			$(".hint").show();
			$(".hint").html("密码不能为空");
			}else{
				login(userName,pwd);
			}
		}
	});
	
		function login(userName,pwd){
		var myUserName = "myUserName";
		var myPwd = "myPwd";
		if(getCookie(myUserName) != userName){
			$(".hint").show();
		}else{
			if(getCookie(myPwd) != pwd){
			$(".hint").show();
			}else{
				updateCookie(isLogin,"1");
				window.location = "index.html";
			}
		}
	}
});

//普通登录文本框的获取焦点事件
function changeBorder (classname){
	$(classname).on("focus", function() {
		$(this).css("border" , "1px solid #DE2F2F") ;
	});
	$(classname).on("blur", function() {
		$(this).css("border" , "1px solid #ccc") ;
	});
}