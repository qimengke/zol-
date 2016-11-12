$(function() {
	
	$("#profile").html("收货地址  ：    "+getCookie("address"));
	$("#consignee").html(getCookie("name"));
	$("#proName").html(getCookie("proName"));
	$("#totalPrice").html(getCookie("totalPrice"));
	
	
		//购物车的数量
		if(!getCookie("proNum")){
			$("#shopNum").html("0");
		}else {
			$("#shopNum").html(getCookie("proNum"));
		}
	
	
	
	
	
	
	
	
	//支付方式
	payTab();
	function payTab(){
		for(var i=0; i<3; i++){
			$(".paycard>li").eq(i).css("left",i*85+"px")
		}
		$(".paycard>li").on("click",function(){
			var $index = $(this).index();
			$(this).addClass("active0").siblings().removeClass('active0');
			$(".paylist1").eq($index).show().siblings(".paylist1").hide();
		});
	};
	
	
	
	function zhifubao() {
		if($("#spe-zhifubao").attr("checked") == "checked"){
			$("#can_pay_tips").html("您将使用支付宝支付");
		}else{
			$("#can_pay_tips").html("您将使用银行卡支付");
		}
	}
})
