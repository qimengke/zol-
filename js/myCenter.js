$(function() {
	$(".searchtext").focus(function() {
		$(this).val("");
	})


	document.getElementById("side").style.height=document.getElementById("mainbody").style.height;
	//左导航栏的切换
	$("#buyer-center").on("click", function() {
		$(".buyer-home").show().siblings().hide();
	});
	$("#have-bought").on("click", function() {
		
		$(".complaints-apply").show().siblings().hide();
	});
	$("#cheap").on("click", function() {
		$(".coupons-box").show().siblings().hide();
	})
	$("#manage").on("click", function() {
		$(".appraise-manage").show().siblings().hide();
	})
	$("#complaints").on("click", function() {
		$(".complaints-list").show().siblings().hide();
	})
	$("#seller").on("click", function() {
		$(".attention").show().siblings().hide();
	});
	$("#shopName").on("click", function() {
		$(".complaints-apply").show().siblings().hide();
	});
	$("#new-add").on("click", function() {
		$("#add-box").show().siblings().hide();
	});
	
	
	
	//取出cookie的数据
	$(".pic img").attr("src", getCookie("proPic"));
	$(".tit a").html(getCookie("proName"));
	$("#pro-color").html("颜色：&nbsp;" + getCookie("proColor"));
	$("#pro-suit").html("套装：&nbsp;" + getCookie("proSuit"));
	$("#cartNumber_2308941").html(getCookie("proNum"));
	$("#one-price").html(getCookie("proPrice"));
	$("#goods-total-price").html("￥" + getCookie("totalPrice"))	;
	$("#total-price").html(getCookie("totalPrice"));
	$("#cartGoodsPcie_2308941").html(getCookie("totalPrice"));
	$(".buyer-header").html(getCookie("myUserName") + ",您好！");
	
	$(".screening-bar li").on("click", function() {
		$(".screening-bar li").removeClass("current");
		$(this).addClass("current");
	})
	
	
	$("#saveAddress").on("click", function() {
		checkPhone();
		checkName();
		checkAddress();
		checkZip();
		
		if(checkPhone() && checkName() && checkAddress() &&checkZip()){
			addCookie("name",$("#name").val() , 5);
			addCookie("address",$("#msg").html() + $("#addr").val(), 5);
			addCookie("phoneNumber", $("#phone").val(), 5);
			addCookie("ZIPcode", $("#zipcode").val(), 5);
			
			$(".consignee").html(getCookie("name"));
			$(".area").html($("#msg").html());
			$(".street-address").html($("#addr").val());
			$(".zip-code").html(getCookie("ZIPcode"));
			$(".phone p").html(getCookie("phoneNumber"));
			$(".address").show();
		}else {
			alert("信息填写不够完整，请继续完善~")
		}
		
	})
	
	$(".delete").on("click", function() {
		deleteCookie("name");
		deleteCookie("address");
		deleteCookie("phoneNumber");
		deleteCookie("ZIPcode");
		
		$("table.address").hide();
	})
	
	
	
	function checkPhone() {
		if(!$("#phone").val()){
			$("#phone").siblings($(".error")).show();
			return false;
		}else if(!/1[3-8]+\d{9}/.test($("#phone").val())){
			$("#phone").siblings(".error").show();
			return false;
		}else {
			$("#phone").siblings(".error").hide();
			return true;
		}
	}
	
	function checkName () {
		if(!$("#name").val()) {
			
			$("#name").siblings($(".error")).show();
			return false;
		}else if(!/[^\u0000-\u00FF]/.test($("#name").val())) {
			$("#name").siblings($(".error")).show();
			return false;
		}else{
			$("#name").siblings($(".error")).hide();
			return true;
		}
	}
		
	function checkAddress () {
		if(!$("#addr").val()){
			$("#addr").siblings($(".error")).show();
			return false;
		}else {
			$("#addr").siblings($(".error")).hide();
			return true;
		}
	}
	
	function checkZip() {
		if(!$("#zipcode").val()){
			$("#zipcode").siblings(".error").show();
			return false;
		}else if(!/^[1-9]\d{5}$/.test($("#zipcode").val())){
			$("#zipcode").siblings(".error").show();
			return false;
		}else {
			$("#zipcode").siblings(".error").hide();
			return true;
		}
	}
	
})