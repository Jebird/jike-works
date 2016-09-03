$(document).ready(function() {

	

	//增加新闻
	$("#addData").submit(function() {

		var options = {
			
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
			window.location='http://localhost:3000/news/queryAll';
		}
	});

	

	// 查询新闻处理返回结果

	$("#submitData").submit(function() {

		var options = {
			
			type: 'post',
			dataType: 'json',
			data: 'newstype',
			beforeSubmit: beforeSelect,
			
		};
		$(this).ajaxSubmit(options);
		return false;


	});
	//查询之前清空显示区
	function beforeSelect() {
		$('.select-result').empty();

	}



	

	//删除新闻,使用on绑定事件对动态生成的元素
	$(document).on('click', '.delete', function(e) {
		// console.log(e.target);
		// console.log($(this));
		var event = e.target;
		var newsid = $(event).parents(".page-list-item").attr("news-id");
		console.log($(event).parents(".page-list-item").attr("news-id"));



		var re = confirm('确定要删除这条新闻吗?');
		if (re) {

			$.ajax({
				type: "post",
				url: "/news/deleteNews",
				dataType: 'json',
				data: {
					newsid
				}, //data是对象
				success: function(data) {

					$(event).parents(".page-list-item").remove();

					alert("删除成功");
				}
			});

		}

	});



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
		// $(".mask #updatekind").val(newstype);
		$(".mask #updatetitle").val(newstitle);
		$(".mask #updatecontent").val(newscontent);
		$(".mask #updateimg").val(newsimg);
		$(".mask #updatetime").val(newstime);


		// 异步提交表单接收修改后的数据
		$("#updateData").submit(function() {
			// var newsid=$(".mask #updateid").val(newsid);
			// var newstype=$(".mask #updatekind").val(newstype);
			// var newstitle=$(".mask #updatetitle").val(newstitle);
			// var newscontent=$(".mask #updatecontent").val(newscontent);
			// var newsimg=$(".mask #updateimg").val(newsimg);
			// var newstime=$(".mask #updatetime").val(newstime);
			var updates = {
				url: '/news/updateNews',
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
				
				for(i in data){
					var dataInt = {
					newdata: [{
						// newsid: data[i].newsid,
						newstitle: data[i].newstitle,
						newsimg: data[i].newsimg,
						newscontent: data[i].newscontent,
						newstime: data[i].newstime
					}]
				};
				
				$.each(dataInt.newdata, function(key,value) {
				// $(event).parents(".page-list-item").attr("news-id",$(value).attr('newsid'));
				$(event).parents(".page-list-bottom").siblings(".page-list-img").children("img").attr("src",$(value).attr('newsimg'));
			 	$(event).parents(".page-list-bottom").siblings(".page-list-text").children(".list-text-title").text($(value).attr('newstitle'));
			 	$(event).parents(".page-list-bottom").siblings(".page-list-text").children(".list-text-abs").text($(value).attr('newscontent'));
				$(event).siblings(".list-new-time").text($(value).attr('newstime'));
				});
			}
			
			
			
			alert("修改成功");



		}

	})



	$(document).on('click', '.update-title', function(e) {
		$(".mask").hide();
		$(".update-news").hide();

	})



})