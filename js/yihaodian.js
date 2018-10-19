//大闸蟹
$(function(){
//	顶部广告的隐藏和显示

	var pic1 = 0;
	var pic2 = 0;
	$(".top_ad_Hairy").hover(function(){
		clearTimeout(pic2);
		
		pic1 = setTimeout(function(){
			$(".top_ad_Hairy").animate({height: "250px"},1000)
			$("#Hairy1").slideUp(100);
			$("#Hairy2").slideDown(900);
		}, 1000)
			
	},function(){
		clearTimeout(pic1);
		
		pic2 = setTimeout(function(){
			$(".top_ad_Hairy").animate({height: "80px"}, 1000)
			$("#Hairy1").slideDown(1000);
			$("#Hairy2").slideUp(1000);
		}, 500)
			
	})
	
//	点击关闭顶部广告
	$(".top_ad_close").click(function(){
		$(".top_ad_Hairy").slideUp(1000);
	})
	
	//APP下载
	$(".phone").mouseover(function(){
		$(".phone img").show();
		$(".phone").css("background", "url(img/login_search/phone-red.png)" + "no-repeat 0px 7px")
		$(".phone > a").css("color", "#FF4040")

	}).mouseout(function(){
		$(".phone img").hide();
		$(".phone").css("background", "url(img/login_search/phone-white.png)" + "no-repeat 0px 7px")
		$(".phone > a").css("color", "#666666")
	})
	
	//客户服务
	$(".client_server").mouseover(function(){
		$(".client_server_muen").show();
		$(".client_server").css({"background":"#FFFFFF", "width": "87px", "border-right": "solid 1px #E5E5E5", "border-left": "solid 1px #E5E5E5"})
		$(".arrow").css("transform","rotate(180deg)")
	}).mouseout(function(){
		$(".client_server_muen").hide();
		$(".client_server").css({"background":"#F4F4F4", "width": "89px", "border": "none"})
		$(".arrow").css("transform","rotate(0deg)")
	})
	
	//我的订单
	$(".my_order").mouseover(function(){
		$(".my_order").css("background", "url(img/login_search/order_red.png)" + "no-repeat 0px 7px")
		$(".my_order > a").css("color", "#FF4040")
	}).mouseout(function(){
		$(".my_order").css("background", "url(img/login_search/order_white.png)" + "no-repeat 0px 7px")
		$(".my_order > a").css("color", "#666666")
	})
	
	//左导航栏
	$(".nav_big_left ul li").mouseover(function(){		
		var index = $(this).index() + 1;
		$(this).css("background", "url(img/nav_big/nav1_white" + index + ".png)" + "no-repeat 30px 5px")
		$(this).css({"background-color": "#FFFFFF", "color": "#666666"});
		$(this).find('h4 a').css("color", "#666666");
		$(this).find("div").show();
	}).mouseout(function(){
		var index = $(this).index() + 1;
		$(this).css("background", "url(img/nav_big/nav1_black" + index + ".png)" + "no-repeat 30px 5px")
		$(this).css({"background-color": "#434343", "color": "white"});
		$(this).find('h4 a').css("color", "white");
		$(this).find("div").hide();
	})
	
	//轮播图
	var timer;
	var startindex = 0;
	slide1();

	
	function slide1(index){
		var lis  = $(".slide_img li");
		var point = $(".slide_point li");

		clearTimeout(timer);
		
		if(index != undefined){
			startindex = index;
		}
		
		for(var i=0; i<lis.length; i++){
//			lis[i].id = "hide";
			lis.eq(i).css("z-index", 0)
			lis.eq(i).fadeOut(500);
			point[i].id = "";
			if(i == startindex ){
//				lis[i].id = "";
				lis.eq(i).css("z-index", 1)
				lis.eq(i).fadeIn(500);
				point[i].id = "hot";
			}
		}
		
		startindex++;
		if(startindex == 8) startindex = 0;
		timer = setTimeout(slide1, 3000);
	}
	
	$(".slide_point li").mouseover(function(){
		var num = $(this).index();
		var lis  = $(".slide_img li");
		
		startindex = num;
		slide1();
	})
	
	//移动到图上，箭头出现
	$(".slide").mouseover(function(){
		clearTimeout(timer);
		$(".arrow_left").show();
		$(".arrow_right").show();
	}).mouseout(function(){
		$(".arrow_left").hide();
		$(".arrow_right").hide();
		timer = setTimeout(slide1, 3000);
	})
	
	//移动到箭头上，透明度变化,点击切换图片
	$(".arrow_left").mouseover(function(){
		$(this).css("opacity", 1);
	}).mouseout(function(){
		$(this).css("opacity", 0.5);
	}).click(function(){
		clearTimeout(timer);
		if(startindex == 1){
			startindex = 7;
			slide1();
		}else if(startindex == 0){
			startindex = 6;
			slide1();
		}else{
			startindex -= 2;
			slide1();
		}	
	})
	
	$(".arrow_right").mouseover(function(){
		$(this).css("opacity", 1);
	}).mouseout(function(){
		$(this).css("opacity", 0.5);
	}).click(function(){
		clearTimeout(timer);
		slide1();
	})
	
	
	
	//个人中心，登录注册
	$(".personal_middle > a").mouseover(function(){
		$(this).css({"background": "#FF4040", "color": "white"});
	}).mouseout(function(){
		$(this).css({"background": "white", "color": "#FF4040"});
	})
	
	//1号抢购箭头出现消失
	$(".limited_price_right").mouseenter(function(){
		$(".limited_price_left_arrow").animate({"left": "10px"}, 200)
		$(".limited_price_right_arrow").animate({"right": "10px"}, 200)
	}).mouseleave(function(){
		$(".limited_price_left_arrow").animate({"left": "-20px"}, 200)
		$(".limited_price_right_arrow").animate({"right": "-20px"}, 200)
	})
	
	//1号抢购左右移动
	$(".limited_price_left_arrow").mouseover(function(){
		$(this).css("opacity", 1);
	}).mouseout(function(){
		$(this).css("opacity", 0.5);
	}).click(function(){
		clearTimeout(timer2);
		$(".limited_price_right > ul").animate({"left": "0px"}, 200);
		timer2 = setTimeout(slide2, 5000);
	})
	
	$(".limited_price_right_arrow").mouseover(function(){
		$(this).css("opacity", 1);
	}).mouseout(function(){
		$(this).css("opacity", 0.5);
	}).click(function(){
		clearTimeout(timer2);
		$(".limited_price_right > ul").animate({"left": "-1023px"}, 200);
		timer2 = setTimeout(slide2, 5000);
	})
	
	//轮播图2号
	var timer2;
	slide2();

	
	function slide2(index){
		
		var dis = $(".limited_price_right > ul").css("left");
		

		clearTimeout(timer2);

		if(dis == '0px'){
			$(".limited_price_right > ul").animate({"left": "-1023px"}, 200)
		}
		
		if(dis == '-1023px'){
			$(".limited_price_right > ul").animate({"left": "0px"}, 200)
		}
		
		
	
		timer2 = setTimeout(slide2, 5000);
	}
	
	//一号抢购 图片微移
	$(".limited_price_right ul li").mouseenter(function(){

		$(this).find("img").animate({"right": "15px"}, 200)
	}).mouseleave(function(){
		$(this).find("img").animate({"right": "10px"}, 200)
	})
	
	//一号闪购 图片微移
	$(".flashover_left_right_pic").mouseenter(function(){
		$(this).find("img").animate({"right": "23px"}, 200)
	}).mouseleave(function(){
		$(this).find("img").animate({"right": "18px"}, 200)
	})
	
	$(".flashover_left_bottom_pic").mouseenter(function(){
		$(this).find("img").animate({"right": "23px"}, 200)
	}).mouseleave(function(){
		$(this).find("img").animate({"right": "18px"}, 200)
	})
	
	
	//登录界面
	$(".help").mouseover(function(){
		$(this).css({"border-top": "solid 1px #cccccc", "border-left": "solid 1px #cccccc", "border-right": "solid 1px #cccccc" });
		$(".title").css("color", "#FF4040");
		$(".help_menu").show();
	}).mouseout(function(){
		$(this).css({"border-top": "solid 1px #FFFFFF", "border-left": "solid 1px #FFFFFF", "border-right": "solid 1px #FFFFFF" });
		$(".title").css("color", "black");
		$(".help_menu").hide();
	})
	
	//自动登录
	$(".auto").click(function(){
		if($(".auto").attr("id") == "auto_1"){
			$(".auto").attr("id", "auto_2");
			$(".auto_forget > span").show();
		}else{
			$(".auto").attr("id", "auto_1");
			$(".auto_forget > span").hide();
		}
	})
	
//	更改图标颜色
	$("#qq").mouseover(function(){
		$(this).find("img").attr("src", "img/yihaodian_login/qqt.png")
	}).mouseout(function(){
		$(this).find("img").attr("src", "img/yihaodian_login/qqf.png")
	})
	
	$("#wb").mouseover(function(){
		$(this).find("img").attr("src", "img/yihaodian_login/wbt.png")
	}).mouseout(function(){
		$(this).find("img").attr("src", "img/yihaodian_login/wbf.png")
	})
	
	$("#wx").mouseover(function(){
		$(this).find("img").attr("src", "img/yihaodian_login/wxt.png")
	}).mouseout(function(){
		$(this).find("img").attr("src", "img/yihaodian_login/wxf.png")
	})
	
	$("#zfb").mouseover(function(){
		$(this).find("img").attr("src", "img/yihaodian_login/zhit.png")
	}).mouseout(function(){
		$(this).find("img").attr("src", "img/yihaodian_login/zhif.png")
	})
	
	//	点击更多合作网站,显示
	$(".login_contain_right_bottom_2 > a").click(function(){
		if($(".small_icon").css("display") == "none" ){
			$(".login_contain_right_bottom_2").find("i").css("background-position", "-250px 3px")
			$(".small_icon").show();
		}else{
			$(".login_contain_right_bottom_2").find("i").css("background-position", "-200px 3px")
			$(".small_icon").hide();
		}
		
	})
	
	//鼠标移动到二维码，变颜色
	$(".login_change > a").mouseover(function(){
		$(".login_change > a").css("background-position", "-88px -88px")
	}).mouseout(function(){
		$(".login_change > a").css("background-position", "-88px 0px")
	})
	
	$(".login_change2 > a").mouseover(function(){
		$(".login_change2 > a").css("background-position", "0px -88px")
	}).mouseout(function(){
		$(".login_change2 > a").css("background-position", "0px 0px")
	})
	
	$(".login_change > a").click(function(){
		$(".login_contain_right").hide();
		$(".login_contain_right_two").show();
	})
	
	$(".login_change2 > a").click(function(){
		$(".login_contain_right").show();
		$(".login_contain_right_two").hide();
	})
	
//	背景变化
	var icon_timer;
	icon();
	function icon(){
		var num = Math.floor( Math.random() * 5 ) + 1;
		var num2 = Math.floor( Math.random() * 5 ) + 1
//		console.log(num);
		
		$(".register_contain_icon" + num).fadeIn(3000);
		$(".register_contain_icon" + num2).fadeOut(3000);
		
		
		icon_timer = setTimeout(icon, 3000)
	}
	
//	注册移动
	$(".register_enter li").click(function(){

		if($(this).find(".word").text() == '短信验证码'){
			$(this).find(".word").animate({"left": "-90px"})
		}else if($(this).find(".word").text() == '设置密码'){
			$(this).find(".word").animate({"left": "-75px"})
		}else if($(this).find(".word").text() == '确认密码'){
			$(this).find(".word").animate({"left": "-75px"})
		}else{
			$(this).find(".word").animate({"left": "-60px"})
		}
	})
	
//	验证
	$("input").focus(function(){
		$(this).parent().siblings(".focus").show();
		$(this).parent().siblings(".blurs_none").hide();
		$(this).parent().siblings(".blurs_wrong").hide();
		if($(this).parent().siblings(".focus").css("top") != "0px"){
			$(this).parent().siblings(".focus").animate({"top": "-2px"}, 500);
			$(this).parent().siblings(".focus").animate({"top": "0px"}, 500);
		}
	}).blur(function(){
		$(this).parent().siblings(".focus").hide();
		$(this).parent().siblings(".focus").animate({"top": "10px"}, 500);
		
		var text1 = $(this).siblings(".word").text();
		var value = $(this).val();
		var reg_user = /^[\w]{4,20}$/;
		var reg_phone = /^1[0-9]{10}$/;
		var psw = /^[\w]{6,20}$/;
//		var reg_user = /^[1-4]$/;
		console.log(value);
		console.log(reg_user.test(value));
		
		if(text1 == '用户名'){
			if(value == '' ){
				$(this).parent().css("border-color", "#FF4040");
				$(this).parent().siblings(".blurs_none").show();
				$(this).parent().siblings(".blurs_none").animate({"top": "2px"}, 500);
				$(this).parent().siblings(".blurs_none").animate({"top": "0px"}, 500);
			}else if( reg_user.test(value) == false ){
					$(this).parent().css("border-color", "#FF4040");
					$(this).parent().siblings(".blurs_wrong").show();
					$(this).parent().siblings(".blurs_wrong").animate({"top": "2px"}, 500);
					$(this).parent().siblings(".blurs_wrong").animate({"top": "0px"}, 500);
					
					}else{
						$(this).parent().css("border-color", "#E5E5E5");
					}
		}
		
		if(text1 == '手机号'){
			if(value == '' ){
				$(this).parent().css("border-color", "#FF4040");
				$(this).parent().siblings(".blurs_none").show();
				$(this).parent().siblings(".blurs_none").animate({"top": "2px"}, 500);
				$(this).parent().siblings(".blurs_none").animate({"top": "0px"}, 500);
			}else if( reg_user.test(value) == false ){
					$(this).parent().css("border-color", "#FF4040");
					$(this).parent().siblings(".blurs_wrong").show();
					$(this).parent().siblings(".blurs_wrong").animate({"top": "2px"}, 500);
					$(this).parent().siblings(".blurs_wrong").animate({"top": "0px"}, 500);
					
					}else{
						$(this).parent().css("border-color", "#E5E5E5");
					}
		}
		
		if(text1 == '设置密码'){
			if(value == '' ){
				$(this).parent().css("border-color", "#FF4040");
				$(this).parent().siblings(".blurs_none").show();
				$(this).parent().siblings(".blurs_none").animate({"top": "2px"}, 500);
				$(this).parent().siblings(".blurs_none").animate({"top": "0px"}, 500);
			}else if( reg_user.test(value) == false ){
					$(this).parent().css("border-color", "#FF4040");
					$(this).parent().siblings(".blurs_wrong").show();
					$(this).parent().siblings(".blurs_wrong").animate({"top": "2px"}, 500);
					$(this).parent().siblings(".blurs_wrong").animate({"top": "0px"}, 500);
					
					}else{
						$(this).parent().css("border-color", "#E5E5E5");
					}
		}
	})
	
	//相关分类
	$(".all_class").mouseover(function(){
		$("#white_arrow").css("transform","rotate(180deg)")
		$(".nav_big_left ul").show();
	}).mouseout(function(){
		$("#white_arrow").css("transform","rotate(0deg)")
		$(".nav_big_left ul").hide();
	})
	
	//品牌移动上去框变颜色
	$(".brand_main > ul > li").mouseover(function(){
		$(this).css({"border-color": "#FF4040", "z-index": 1})
		$(this).find("img").hide();
		$(this).find("span").css({"color": "#FF4040", "top": "-1px"});
		
	}).mouseout(function(){
		$(this).css({"border-color": "#E5E5E5", "z-index": 0});
		$(this).find("img").show();
		$(this).find("span").css({"color": "#333333", "top": "0px"});
	})
	
	//相关分类
	$(".guide_main ul li").mouseover(function(){
		$(this).find("img").css("transform","rotate(180deg)")
//		$(".nav_big_left ul").show();
	}).mouseout(function(){
		$(this).find("img").css("transform","rotate(0deg)")
//		$(".nav_big_left ul").hide();
	})
	
	
	//更多筛选项
	$(".more_main ul li").mouseover(function(){
		$(this).find("img").css("transform","rotate(180deg)")
//		$(".nav_big_left ul").show();
	}).mouseout(function(){
		$(this).find("img").css("transform","rotate(0deg)")
//		$(".nav_big_left ul").hide();
	})
	
	$(".screen_top_left_arrow").mouseover(function(){
		$(this).find("img").attr("src", "img/classify/475178128200456548.png")
		$(this).parent().css({"background": "#FFFFFF", "color": "#FF4040"})
	}).mouseout(function(){
		$(this).find("img").attr("src", "img/classify/661309576414104934.png")
		$(this).parent().css({"background": "#F5F5F5", "color": "black"})
	})
	
	$(".screen_top_left_price").mouseover(function(){
		$(this).css({"background": "#FFFFFF", "border-left": "solid 1px #E1E1E1", "border-right": "solid 1px #E1E1E1"})
	}).mouseout(function(){
		$(this).css({"background": "#F5F5F5", "border-left": "none"})
	})
	
//	更多筛选项打勾
	$(".screen_bottom_contain ul li a").click(function(){
		if($(this).find("i").css("background-position") == "-64px -70px" ){
			$(this).find("i").css("background-position", "-76px -58px")
		}else{
			$(this).find("i").css("background-position", "-64px -70px")
		}
	})
	
	//加减
	$(".up").click(function(){
		var count = $(this).parent().parent().siblings("input").val();
		count++;
		$(this).parent().parent().siblings("input").val(count);
		$(".down").css({"background-position": "-63px -14px"})
	})
	
	$(".down").click(function(){
		var count = $(this).parent().parent().siblings("input").val();
		count--;
		if(count <= 1){
			count = 1;
			$(".down").css({"background-position": "-46px -14px"})
		}
		$(this).parent().parent().siblings("input").val(count);
	})
	//出现框
	$(".product").mouseover(function(){
		$(this).find(".product_bd_1").show();
		$(this).find(".product_bd_2").show();
	}).mouseout(function(){
		$(".product_bd_1").hide();
		$(".product_bd_2").hide();
	})
	//右下角页码
	$(".page a").mouseover(function(){
		$(this).css({"background-color": "#FF8C64", "color": "white"})
	}).mouseout(function(){
		$(this).css({"background-color": "#FAFAFA", "color": "#999"})
	})
	
	//移动到小图片，加框、更换大图片，
	$(".left_pic_small ul li").mouseenter(function(){
		var img = $(this).find("img").attr("src");
		
		$(".left_pic_big").find("img").attr("src", img);
		$(".left_pic_small ul li").css("border-color", "#FFFFFF");
		$(this).css("border-color", "#999999");
	})
	
	//关注 爱心切换
	$("#left_bottom_2").mouseenter(function(){
		$("#left_bottom_2_1").animate({"top": "-20px"});
		$("#left_bottom_2_2").animate({"bottom": "-5px"});
		$(this).css("color", "#FF4040")
	}).mouseleave(function(){
		$("#left_bottom_2_1").animate({"top": "0px"});
		$("#left_bottom_2_2").animate({"bottom": "-20px"});
		$(this).css("color", "#666666")
	})
	
	//详情页加减
	$(".up2").click(function(){
		var count = $(this).parent().parent().siblings("input").val();
		count++;
		$(this).parent().parent().siblings("input").val(count);
		$(".down2").css({"background-position": "-124px -73px"})
	})
	
	$(".down2").click(function(){
		var count = $(this).parent().parent().siblings("input").val();
		count--;
		if(count <= 1){
			count = 1;
			$(".down2").css({"background-position": "-148px -73px"})
		}
		$(this).parent().parent().siblings("input").val(count);
	})
	
	//选择口味
	$(".choose_taste ul li").mouseover(function(){
		$(this).css("border-color", "#E60012")		
	}).mouseout(function(){
		if($(this).attr("id") != "choose"){
			$(this).css("border-color", "#DDDDDD")
		}
	}).click(function(){
		$(".choose_taste ul li").attr("id", "")
		$(".choose_taste ul li").css("border-color", "#DDDDDD")
		$(".choose_taste ul li").find("i").hide();
		$(this).attr("id", "choose")
		$(this).find("i").show()
		$(this).css("border-color", "#E60012")
	})
	
	$(".right_top_nav ul li").mouseover(function(){
		$(".right_top_nav ul li").attr('id', '')
		$(this).attr("id", "mouse")
		
		var num = $(this).index();
		$(".right_top_contain img").hide();
		$(".right_top_contain img").eq(num).show();
	})
})
