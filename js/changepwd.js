$(function(){
	
	
	
	$("#currentPwd").blur(currentPwd);
	
	function currentPwd(){
		var currentPwd = getCookie("myPwd");
		
		if($("#currentPwd").val() != currentPwd){
			$(".wrongPwd").show();
			return 0;
		}else{
			$(".wrongPwd").hide();
			return 1;
		}
		
	}
	
	$("#newPwd").blur(newPwd);
	
	function newPwd(){
		
		if(!$("#newPwd").val()){
			$(".wrongNPwd").show();
			return 0;
		}else{
			$(".wrongNPwd").hide();
			return 1;
		}
		
	}
	
	
	
	$("#newAgainPwd").keyup(newAgainPwd);
	
	function newAgainPwd(){
		var $confirmPwd = $("#newAgainPwd").val();
		if(!$confirmPwd){
			$(".wrongAPwd").show();
			return 0;
		}else if($confirmPwd != $("#newPwd").val()){
			$(".wrongAPwd").show();	
			return 0;
		}else{
			$(".wrongAPwd").hide();		
			return 1;
		}
	}
	
	
	$(".oneline a").on("click",function(){
		if(currentPwd()&&newPwd()&&newAgainPwd()){
			updateCookie("myPwd",$("#newPwd").val());
			alert("您的密码已经修改成功");
			window.location = "myCenter.html";
		}
		
	})
	
	
	
});
