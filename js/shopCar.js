$(function(){

	
	//全选的点击事件
	$(".all-check").on("click", function(){
		if(($(this)).prop("checked") == true){
			$("input").prop("checked", true);
			$(".total-cart-price").html($cost * $("#cartNumber_2308941").val());
			$("#cartGoodsPcie_2308941").html($cost * $("#cartNumber_2308941").val());
		}else if(($(this)).prop("checked") == false){
			$('input').prop("checked", false);
			$(".total-cart-price").html(0);
			$("#cartGoodsPcie_2308941").html(0);
		}
	});
	
	//购物车页面的检查cookie实现
	console.log(getCookie("proName"));
	if(getCookie("proName")) {
		console.log("aaaa")
		$("#empty-shopCar").hide();
		$("#man-shopCar").show();
		var newPro = '<tr rel="goods-order" id="cart_2308941"><td colspan="2" class="s-infor"><input name="cartId[]" type="checkbox" value="2308941" item="item" rel="foritem" merchantid="188528" checked=""><a href="trueDetail.html" class="pic" target="_blank"><img width="80" height="60" src="" alt="【双卡双4G 顺丰包邮】三星 Galaxy A7 (SM-A7000)  移动联通4G手机 双卡双待 真八核 纤薄机身 一体式设计 钻石切割斜边"></a><div class="inforbox"><h3 class="tit"><a href="trueDetail.html" title="【双卡双4G 顺丰包邮】三星 Galaxy A7 (SM-A7000)  移动联通4G手机 双卡双待 真八核 纤薄机身 一体式设计 钻石切割斜边" target="_blank"></a></h3><p id="pro-color"></p><div class="info-con"><span id="pro-suit"></span></div></div></td><td class="s-price "><em id="one-price"></em></td><td class="s-amount "><div class="buy-num"><a class="minus" href="javascript:void(0)" title="减一" >-</a><input type="text" autocomplete="off" class="text-amount" value="" id="cartNumber_2308941" readonly="true"><a class="plus" href="javascript:void(0)" title="加一">+</a><div class="tips-2" id="tips_2308941" style="display:none;">最多只能购买10件</div></div></td><td class="s-agio"><div>−−</div></td><td class="s-total"><em id="cartGoodsPcie_2308941"></em></td><td class="s-del"><div class="s-delbox"><a href="javascript:void(0)" title="移入收藏夹">移入收藏夹</a><a class="deletPro" href="javascript:void(0)">删除</a><div class="deletebox" style="display:none;" id="zp-cart-2308941"><p>确认要删除该商品吗？</p><a href="javascript:void(0)" >是的</a><a href="javascript:void(0)">取消</a> <i></i></div></div></td></tr>'
		$("tbody").append(newPro);
		$(".pic img").attr("src", getCookie("proPic"));
		$(".tit a").html(getCookie("proName"));
		$("#pro-color").html("颜色：&nbsp;" + getCookie("proColor"));
		$("#pro-suit").html("套装：&nbsp;" + getCookie("proSuit"));
		$("#cartNumber_2308941").val(getCookie("proNum"));
		$("#one-price").html(getCookie("proPrice"));
		$(".total-cart-price").html(getCookie("proNum") * getCookie("proPrice"));
		$("#cartGoodsPcie_2308941").html(getCookie("proNum") * getCookie("proPrice"));
		
		var $cost = parseInt($("#one-price").html());
		//alert($cost);
		//购物车内商品数量的变化以及总价的变化
		$(".plus").on("click", function() {
			var $num = parseInt($("#cartNumber_2308941").val()) + 1;
			$("#tips_2308941").hide();
			if ($num < 10) {
				$("#cartNumber_2308941").val($num);
				
			} else if ($num >= 10) {
				$("#cartNumber_2308941").val(10);
				$("#tips_2308941").show();
			}
			$(".total-cart-price").html($cost * $("#cartNumber_2308941").val());
			$("#cartGoodsPcie_2308941").html($cost * $("#cartNumber_2308941").val());
		});
		
		$(".minus").on("click", function() {
			$_num = parseInt($("#cartNumber_2308941").val()) - 1;
			$("#tips_2308941").hide();
			if ($_num > 1) {
				$("#cartNumber_2308941").val($_num);
			} else if ($_num <= 1) {
				$("#cartNumber_2308941").val(1);
			}
			$(".total-cart-price").html($cost * $("#cartNumber_2308941").val());
			$("#cartGoodsPcie_2308941").html($cost * $("#cartNumber_2308941").val());				
		});
		//删除cookie事件
		$(".deletPro").on("click", function(){
			$("#man-shopCar").hide();
			$("#empty-shopCar").show();
				deleteCookie("proName");
				deleteCookie("proColor");
				deleteCookie("proSuit");
				deleteCookie("proNum");
				deleteCookie("proPrice");
				deleteCookie("proPic");
				
			});
	}else {
		$("#empty-shopCar").show();
		$("#man-shopCar").hide();		
	}
	
	//点击去结算之后的记住cookie的事件
	$(".accounting-btn").on("click", function() {
		var proNum = $("#cartNumber_2308941").val();
		var totalPrice = $(".total-cart-price").html();
		addCookie("proNum", proNum, 5);
		addCookie("totalPrice", totalPrice, 5);
	})
})
