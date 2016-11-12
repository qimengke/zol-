$(function(){
	
		//购物车的数量
		if(!getCookie("proNum")){
			$("#shopNum").html("0");
		}else {
			$("#shopNum").html(getCookie("proNum"));
		}
	
	//取出cookie的数据
	$(".pic img").attr("src", getCookie("proPic"));
	$(".tit a").html(getCookie("proName"));
	$("#pro-color").html("颜色：&nbsp;" + getCookie("proColor"));
	$("#pro-suit").html("套装：&nbsp;" + getCookie("proSuit"));
	$("#cartNumber_2308941").val(getCookie("proNum"));
	$("#one-price").html(getCookie("proPrice"));
	$("#goods-total-price").html("￥" + getCookie("totalPrice"))	;
	$("#total-price").html(getCookie("totalPrice"));
	$("#cartGoodsPcie_2308941").html(getCookie("totalPrice"));
	
	$("#deliverBotton").on("click", function(){
		if(checkPeople() && checkAdd() && checkNum()){
			if(getCookie("isLogin") == 1){
				var name = $("#deliverName").val();
				var address = $("#msg").html();
				var phoneNumber = $("#deliverMobile").val();
				addCookie("name", name, 5);
				addCookie("address", address, 5);
				addCookie("phoneNumber", phoneNumber, 5);
				
				$(".add-edits").hide();
				$(".after-add").show();
				$(".after-add lable input").attr("checked", true);
				$(".after-add #name").html(getCookie("name"));
				$(".after-add #address").html(getCookie("address"));
				$(".after-add #phoneNumber").html(getCookie("phoneNumber"));
				$(".not-true").show();
			}else {
				window.location = "login.html";
			}
		}

	})
	
	//编辑地址
	$("#edit").on("click", function(){
		$(this).parent().parent().hide();
		$(".not-true").hide();
		$(".add-edits").show();
	})
	
	//删除地址删除cookie
	$("#del").on("click", function(){
		$(".motai").show();
		$(".confirm-inf").show();
		
		$("#shanchu").on("click", function(){
			deleteCookie("name");
			deleteCookie("address");
			deleteCookie("phoneNumber");
			$(".add-edits").find("input").attr("value", "");
			$(".motai").hide();
			$(".confirm-inf").hide();
		})
		$("#quxiao").on("click", function() {
			$(".motai").hide();
			$(".confirm-inf").hide();
		})
		
	})
	
	$("#confirm-pay").on("click", function() {
		if(!getCookie("name") || !getCookie("address") || !getCookie("phoneNumber")) {
			$(this).attr("href", "javascript:void(0)");
			alert("请填写完整信息后再确认支付！")
		}else {
			$(this).attr("href", "confirmPay.html");
		}
	})
	
})

//收货人的验证
function checkPeople() {
	if(!$("#deliverName").val()) {
		$("#deliverName").next("span").show();
		return false;
	}else {
		$("#deliverName").siblings("span").hide();
		return true;
	}
}

//详细地址的验证
function checkAdd() {
	$("#deliverAddress").val($("#msg").html());
	if(!$("#deliverAddress").val()) {	
		$("#deliverAddress").siblings("#deliverAddressTips").show();
		return false;
	}else if($("#deliverAddress").val().length < 5){
		$("#deliverAddress").siblings("#deliverAddressTips").show();
		return false;
	}else {	
		$("#deliverAddress").siblings("#deliverAddressTips").hide();
		$("#deliverAddress").siblings("#deliverNameTips").hide();
		return true;
	}
}

//电话号码的验证
function checkNum() {
	if(!$("#deliverMobile").val()) {
		console.log("aaaa")
		$("#deliverMobilePhoneTips").css("color", "#DA2C2C");
		return false;
	}else if(!/1[3-8]+\d{9}/.test($("#deliverMobile").val())) {
		$("#deliverMobilePhoneTips").css("color", "#DA2C2C");
		$("#deliverMobilePhoneTips").html("请输入有效的手机号码");
		return false;
	}else {
		$("#deliverMobilePhoneTips").hide();
		return true;
	}
}




