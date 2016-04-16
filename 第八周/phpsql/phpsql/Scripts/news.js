$(document).ready(function() {

	//侧边栏标签切换
	$(".menu-list").click(function(){
		var tab = $(this).attr("data-val");
	    $(this).addClass("current").siblings().removeClass("current");
	    $("#menu" + tab).show().siblings().hide();
	})

	//显示新闻列表
	$(".newslist").click(function(){
		$.ajax({
		url: 'php/shownews.php',
		type: 'post',
		cache: 'false',
		dataType: 'json',
		error: error, //错误执行方法
		success: success //成功执行方法
	})

	function error() {
		alert("Error!");
	}

	function success(data) {
		for (i in data) {
			//创建json数据
			var dataInt = {
					newdata: [{
						newstitle: data[i].newstitle,
						newsimg: data[i].newsimg,
						newscontent: data[i].newscontent,
						newstime: data[i].newstime
					}]
				}
				//创建DOM结构并循环输出json数据
			$.each(dataInt.newdata, function(key, value) {
				var newbox = $("<div>").addClass("page-list-item").appendTo($(".show-news"));
				var newsitem = $("<div>").addClass("page-list-main").appendTo($(newbox));
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
	})

	//增加新闻
	$("#addData").submit(function() {

		var options = {
			url: 'php/addnews.php',
			type: 'post',
			dataType: 'text',
			error:addErr,
			success: addSuccess
		};
		$(this).ajaxSubmit(options);
		return false;
		function addErr(){
			alert("添加新闻失败");
		}

		function addSuccess(data){
			alert("添加新闻成功");
		}
	});

	

	// 查询新闻处理返回结果

	$("#submitData").submit(function() {

		var options = {
			url: 'php/selectnews.php',
			type: 'post',
			dataType: 'json',
			data: 'newskind',
			beforeSubmit: beforeSelect,
			success: selectSuccess
		};
		$(this).ajaxSubmit(options);
		return false;


	});
	//查询之前清空显示区
	function beforeSelect() {
		$('.select-result').empty();

	}



	function selectSuccess(data) {
		for (i in data) {
			//创建json数据
			var dataInt = {
					newdata: [{
						newsid: data[i].newsid,
						newstitle: data[i].newstitle,
						newsimg: data[i].newsimg,
						newscontent: data[i].newscontent,
						newstime: data[i].newstime
					}]
				}
				//创建DOM结构并循环输出json数据
			$.each(dataInt.newdata, function(key, value) {
				var newbox = $("<div>").addClass("page-list-item").attr("news-id", $(value).attr('newsid')).appendTo($(".select-result"));
				var newsitem = $("<div>").addClass("page-list-main").appendTo($(newbox));
				var imgbox = $("<div>").addClass("page-list-img").appendTo($(newsitem));
				var img = $("<img>").attr("src", $(value).attr("newsimg")).appendTo($(imgbox));
				var newstext = $("<div>").addClass("page-list-text").appendTo($(newsitem));
				var title = $("<div>").addClass("list-text-title").text($(value).attr("newstitle")).appendTo($(newstext));
				var content = $("<div>").addClass("list-text-abs").text($(value).attr("newscontent")).appendTo($(newstext));
				var newsbottom = $("<div>").addClass("page-list-bottom").appendTo($(newsitem));
				var time = $("<div>").addClass("page-list-time").appendTo($(newsbottom));
				var newtime = $("<div>").addClass("list-new-time").text($(value).attr("newstime")).appendTo($(time));
				var update = $("<div>").addClass("update btn").text('修改').appendTo($(time));
				var deleta = $("<div>").addClass("delete btn").text('删除').appendTo($(time));

			})


		}



	}

	//删除新闻,使用on绑定事件对动态生成的元素
	$(document).on('click', '.delete', function(e) {
		// console.log(e.target);
		// console.log($(this));
		var event = e.target;
		var newsid = $(event).parents(".page-list-item").attr("news-id");
		console.log($(event).parents(".page-list-item"))



		var re = confirm('确定要删除这条新闻吗?');
		if (re) {

			$.ajax({
				type: "post",
				url: "php/deletenews.php",
				dataType: 'json',
				data: {
					newsid
				}, //data是对象
				success: function(data) {

					$(event).parents(".page-list-item").remove();

					alert("删除成功");
				}
			})

		}

	})



	//修改新闻,使用on绑定事件对动态生成的元素
	$(document).on('click', '.update', function(e) {
		$(".mask").show();
		$(".update-news").show();

		var event = e.target;
		var newsid = $(event).parents(".page-list-item").attr("news-id");
		var newsimg = $(event).parents(".page-list-bottom").siblings(".page-list-img").children("img").attr("src");
		var newstitle = $(event).parents(".page-list-bottom").siblings(".page-list-text").children(".list-text-title").text();
		var newscontent = $(event).parents(".page-list-bottom").siblings(".page-list-text").children(".list-text-abs").text();
		var newstime = $(event).siblings(".list-new-time").text();
		// console.log($(event).parents(".list-new-time")
		$(".mask #updateid").val(newsid);
		$(".mask #updatekind").val(newskind);
		$(".mask #updatetitle").val(newstitle);
		$(".mask #updatecontent").val(newscontent);
		$(".mask #updateimg").val(newsimg);
		$(".mask #updatetime").val(newstime);


		// 异步提交表单接收修改后的数据
		$("#updateData").submit(function() {
			var updates = {
				url: 'php/updatenews.php',
				type: 'post',
				dataType: 'json',
				
				beforeSubmit: beforeUpdate,
				success: updateSuccess
			};

			$(this).ajaxSubmit(updates);
			return false;
		})

		function beforeUpdate() {
			$(".mask").hide();
			$(".update-news").hide();

		}

		function updateSuccess(data) {
			console.log(data)
			for(i in data){
					var dataInt = {
					newdata: [{
						newsid: data[i].newsid,
						newstitle: data[i].newstitle,
						newsimg: data[i].newsimg,
						newscontent: data[i].newscontent,
						newstime: data[i].newstime
					}]
				}
				
				$.each(dataInt.newdata, function(key, value) {
				$(event).parents(".page-list-item").attr("news-id",$(value).attr('newsid'));
				$(event).parents(".page-list-bottom").siblings(".page-list-img").children("img").attr("src",$(value).attr('newsimg'));
			 	$(event).parents(".page-list-bottom").siblings(".page-list-text").children(".list-text-title").text($(value).attr('newstitle'));
			 	$(event).parents(".page-list-bottom").siblings(".page-list-text").children(".list-text-abs").text($(value).attr('newscontent'));
				$(event).siblings(".list-new-time").text($(value).attr('newstime'));
				})
			}
			
			
			alert("修改成功");



		}

	})



	$(document).on('click', '.update-title', function(e) {
		$(".mask").hide();
		$(".update-news").hide();

	})



})