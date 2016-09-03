<?php 
	require 'config.php';
	$sql ="select * from news"; //SQL语句
	 
	
	@$newsid= $_REQUEST['newsid'];
	echo $newsid;
	
	$result ="DELETE FROM `news` WHERE newsid=$newsid";//为什么加引号newsid删除失败
	// $result ="DELETE FROM `news` WHERE 'newsid'=$newsid";

	$printresult = mysql_query($result,$con); //执行查询

	if(!$printresult){
		die("Valid result!");
	}else{

		echo $newsid;
		//循环从数据集取出数据
		// $arr=array();
		// while( $row = mysql_fetch_array($printresult) ){
		//     // echo "新闻标题:".$row['newstitle']."<br />";
		//     // echo "新闻图片:".$row['newsimg']."<br />";
		//     // echo "新闻内容:".$row['newscontent']."<br />";
		//     // echo "新闻时间:".$row['newstime']."<br /><br />";
		//     array_push($arr,array("newsid"=>urlencode($row['newsid']),"newstitle"=>urlencode($row['newstitle']),"newsimg"=>$row['newsimg'],"newscontent"=>urlencode($row['newscontent']),"newstime"=>urlencode($row['newstime'])));
		// }
		// echo urldecode(json_encode($arr));
		// echo $callback.'('.json_encode($arr).')';
	}





?>