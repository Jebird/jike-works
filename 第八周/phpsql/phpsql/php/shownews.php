<?php 
	require 'config.php';
	$sql ="select * from news"; //SQL语句
	 
	$result = mysql_query($sql,$con); //查询
	// $callback = $_GET['callback'];
	if(!$result){
		die("Valid result!");
	}else{
		//循环从数据集取出数据
		$arr=array();
		while( $row = mysql_fetch_array($result) ){
		    // echo "新闻标题:".$row['newstitle']."<br />";
		    // echo "新闻图片:".$row['newsimg']."<br />";
		    // echo "新闻内容:".$row['newscontent']."<br />";
		    // echo "新闻时间:".$row['newstime']."<br /><br />";
		    array_push($arr,array("newstitle"=>urlencode($row['newstitle']),"newsimg"=>$row['newsimg'],"newscontent"=>urlencode($row['newscontent']),"newstime"=>urlencode($row['newstime'])));
		}
		echo urldecode(json_encode($arr));
		// echo $callback.'('.json_encode($arr).')';
	}





?>