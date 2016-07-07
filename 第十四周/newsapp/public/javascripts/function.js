$(document).ready(function(){
	$(".more").click(function(){
		$("table").find("tr").show();
		$(".footer").show();
	})
	//加载页面时取推荐新闻数据
	var newstype=$('.current').attr("data-type");
	$.ajax({
			url:'/news/querybd',
			type:'post',
			cache:'false',
			data:{newstype},
			dataType:'json',
			beforeSend:beforeCheck,
			error:errCheck,//错误执行方法
			success:succCheck//成功执行方法
		})
		//查询之前清空显示区
		function beforeCheck() {
			$('.page-list').empty();
			$(".page-list").text('加载中...');

		}
		function errCheck(){
			alert("Error!");
		}
		function succCheck(data){
			$('.page-list').empty();
			inputData(data);
		}

	$(".newstype").click(function(){
		$(this).addClass("current").parents("td").siblings().find(".newstype").removeClass("current");
		var newstype=$(this).attr("data-type");
		$.ajax({
			url:'/news/querybd',
			type:'post',
			cache:'false',
			data:{newstype},
			dataType:'json',
			beforeSend:beforeCheck,
			error:errCheck,//错误执行方法
			success:succCheck//成功执行方法
		})
		//查询之前清空显示区
		function beforeCheck() {
			$('.page-list').empty();
			$(".page-list").text('加载中...');

		}
		function errCheck(){
			alert("Error!");
		}
		function succCheck(data){
			$('.page-list').empty();
			inputData(data);
		}

	})
	
	

	// 点击加载更多
	$('.refresh-wrapper').click(function(){
		//AJAX属于本地跨域，请在服务端运行
		$.ajax({
			url:'/news/querymore',
			type:'get',
			cache:'false',
			dataType:'json',
			beforeSend:LoadFunction,//加载执行方法
			error:errFunction,//错误执行方法
			success:succFunction//成功执行方法
		})
		function LoadFunction(){
			$(".refresh").text('加载中...');
		}
		function errFunction(){
			alert("Error!");
		}
		function succFunction(data){
			$(".refresh").text('点击加载更多');
			inputData(data);
			
			// console.log(data[i].newstitle);
				
			}
			
			

	})

	function inputData(data){
		
		//解析json数据并循环输出
		for(i in data){
				//创建json数据
				var dataInt={
					newdata:[{
						newstitle:data[i].newstitle,
						newsimg:data[i].newsimg,
						newscontent:data[i].newscontent,
						newstime:data[i].newstime
					}]
				}
				//创建DOM结构并循环输出json数据
				$.each(dataInt.newdata,function(key,value){
				var newbox = $("<div>").addClass("page-list-item").appendTo($(".page-list"));
				var newsitem = $("<div>").addClass("page-list-main showleft").appendTo($(newbox));
				var imgbox = $("<div>").addClass("page-list-img").appendTo($(newsitem));
				var img = $("<img>").attr("src", $(value).attr("newsimg")).appendTo($(imgbox));
				var newstext = $("<div>").addClass("page-list-text").appendTo($(newsitem));
				var title = $("<div>").addClass("list-text-title").text($(value).attr("newstitle")).appendTo($(newstext));
				var content = $("<div>").addClass("list-text-abs").text($(value).attr("newscontent")).appendTo($(newstext));
				var newsbottom = $("<div>").addClass("page-list-bottom").appendTo($(newsitem));
				var time = $("<div>").addClass("page-list-time").appendTo($(newsbottom));
				var newtime = $("<div>").addClass("list-new-time").text($(value).attr("newstime")).appendTo($(time));
			})
		}
	}



	$(function() {
        // 轮播图
        
        var bannerlist = $(".banner-list");
        var banneritem = $(".banner-item");


        // 为第一个按钮添加样式
        $(".banner-icons").children("i").first().addClass("current");
        // 复制第一张图片并添加到末尾
        var cloneimg = $(".banner-item").first().clone();
        $(".banner-list").append(cloneimg);
        var i = 0;
        // 获取图片数量
        var imgnum = $(".banner-list").children().length;
            // 运动
        function move() {


            // 当点击到第一张图时，将索引变成最后一张
            if (i == -1) {
                bannerlist.css({
                    "margin-left": -(imgnum - 1) * 404+ "px"
                })
                i = imgnum - 2;
                console.log(i);
            }
            // 当点击到最后一张图时，将索引变成第一张
            if (i == imgnum) {

                bannerlist.css({
                    "margin-left": "0"
                })
                i = 1;
            }
            bannerlist.stop().animate({
                    "margin-left": -i * 404 + "px"
                }, 500)
                // 按钮移动样式变化
                // 判断达到最后一张图时按钮显示
            if (i == imgnum - 1) {
                $(".banner-icons").children("i").eq(0).addClass("current").siblings().removeClass("current");
            } else {
                $(".banner-icons").children("i").eq(i).addClass("current").siblings().removeClass("current");
            }
        }


        

        //自动轮播
        var t = setInterval(function() {
            i++;
            move();
        }, 3000)

        
    })

})