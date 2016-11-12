$(function() {
	//快速登录的划过效果
	$(".fast-login-list a").hover(function(){
		$(this).find("div").show();
	}, function(){
		$(this).find("div").hide();
	})
	
	//电话号码的检测
	checkPhoneNumber();
	
//	验证码的检测
	checkNumber();
	
	//密码验证
	checkRegisterPwd();
	
	//确认密码
	confirmPwd();
	
	//cookie的实现，对注册按钮的实现
	var myUserName = "myUserName";
		var myPwd = "myPwd";
		var isLogin = "isLogin";
		//0表示未登录,1表示登录
	
	$("#register-btn").on("click",function(){
		var userName = $("#phone-number").val();
		var pwd = $("#register-pwd").val();
		
		if(userName == ""){
			$(".wrong-tips1").show();
			$(".wrong-tips1").html("用户名不能为空");
		}else{
			if(pwd == ""){
			$(".wrong-tips4").show();
			$(".wrong-tips4").html("密码不能");
			}else{
				register(userName,pwd);
			}
		}
	});
	function register(userName,pwd){
	
		if(getCookie(myUserName) == userName){
			$(".right-tips1").hide();
			$(".wrong-tips1").show();
			$(".wrong-tips1").html("该手机号已被注册，请重新注册！");
		}else{
			addCookie(myUserName,userName,5);
			addCookie(myPwd,pwd,5);
			addCookie(isLogin,"0",5);
		}
	}
	
	$("#register-btn").on("click", function(){
		window.location = "login.html";
	})
	
});






//电话号码的检测
function checkPhoneNumber () {
	$("#phone-number").on("focus", function() {
		$(this).css("border" ,"1px solid #DE2F2F");
	});
	$("#phone-number").on("blur", function() {
		$(this).css("border", "1px solid #e6e6e6");
		
		var $num = $(this).val();
		if($num == ""){
			$(".wrong-tips1").css("display", "block");
			$(".right-tips1").css("display", "none");
			$(".wrong-tips1").html("请填写手机号码");
			return false;
		}else if(!/1[3-8]+\d{9}/.test($num)) {
			$(".wrong-tips1").css("display", "block");
			$(".right-tips1").css("display", "none");
			$(".wrong-tips1").html("请填写有效的11位手机号码");		
			return false;
		}else{
			$(".right-tips1").css("display", "block");
			$(".wrong-tips1").css("display", "none");
		}
	});
}
//	验证码的检测
function checkNumber() {
	$("#check-number").on("focus", function() {
		$(this).css("border" ,"1px solid #DE2F2F");
	});
	$("#check-number").on("blur", function() {
		$(this).css("border" ,"1px solid #e6e6e6");
		var $content = $(this).val();
		if($content == ""){
			$(".wrong-tips2").css("display", "block");
			$(".right-tips2").css("display", "none");
			$(".wrong-tips2").html("请填写验证码");		
		}else{
			$(".wrong-tips2").css("display", "none");
			$(".right-tips2").css("display", "block");			
		}
	});
}

//密码的验证
function checkRegisterPwd() {
	$("#register-pwd").on("focus", function() {
		$(this).css("border" ,"1px solid #DE2F2F");
	});
	$("#register-pwd").on("blur", function() {
		$(this).css("border" ,"1px solid #e6e6e6");
		var $pwd = $(this).val();
		if($pwd == ""){
			$(".wrong-tips4").css("display", "block");
			$(".wrong-tips4").html("请填写密码");
		}else if(($pwd.length) < 6 || ($pwd.length) > 16){
//			alert($pwd.length);
			$(".wrong-tips4").css("display", "block");
			$(".wrong-tips4").html("6-16位字符，可使用字母、数字或符号的组合");
		}else if(/^[0-9,]*$/.test($pwd)){
			$(".wrong-tips4").css("display", "block");
			$(".wrong-tips4").html("密码不能全是数字");			
		}else {
			$(".wrong-tips4").css("display", "none");
			$(".right-tips4").css("display", "block");
		}
		
	});
	
};

function confirmPwd () {
	$("#confirm-pwd").on("focus", function() {
		$(this).css("border" ,"1px solid #DE2F2F");
	});
	$("#confirm-pwd").on("blur", function() {
		$(this).css("border" ,"1px solid #e6e6e6");
		
		var $again = $("#confirm-pwd").val();
		if($again == "") {
			$(".wrong-tips5").css("display", "block");
			$(".wrong-tips5").html("请填写确认密码");
		}else if($again != $("#register-pwd").val()){
			$(".wrong-tips5").css("display", "block");
			$(".wrong-tips5").html("两次输入密码不一致");			
		}else {
			$(".wrong-tips5").css("display", "none");
			$(".right-tips5").css("display", "block");			
		}
	});
	
}





