<?php 
	require 'config.php';
	$sql ="select * from news"; //SQL语句
	 
	
	@$newsid= $_REQUEST['newsid'];
	@$newskind=$_REQUEST['newskind'];
	@$newstitle=$_REQUEST['newstitle'];
	@$newsimg=$_REQUEST['newsimg'];
	@$newscontent=$_REQUEST['newscontent'];
	@$newstime=$_REQUEST['newstime'];
	
	

	$result="UPDATE `news` SET `newstype`='$newskind',`newstitle`='$newstitle',`newsimg`='$newsimg',`newscontent`='$newscontent',`newstime`='$newstime' WHERE newsid=$newsid";
	
	// $result ="DELETE FROM `news` WHERE newsid=$newsid";//为什么加引号newsid删除失败
	// $result ="DELETE FROM `news` WHERE 'newsid'=$newsid";

	$updateresult=mysql_query($result,$con); //执行修改
	if(!$updateresult){
		die("修改失败");
	}
	$selectnews="SELECT `newsid`, `newstype`, `newstitle`, `newsimg`, `newscontent`, `newstime` FROM `news` WHERE newsid=$newsid";

	$printresult=mysql_query($selectnews,$con); //执行查询

	if(!$printresult){
		die("Valid result!");
	}else{

		//循环从数据集取出数据
		$arr=array();
		while( $row = mysql_fetch_array($printresult) ){
		    // echo "新闻标题:".$row['newstitle']."<br />";
		    // echo "新闻图片:".$row['newsimg']."<br />";
		    // echo "新闻内容:".$row['newscontent']."<br />";
		    // echo "新闻时间:".$row['newstime']."<br /><br />";
		    array_push($arr,array("newsid"=>urlencode($row['newsid']),"newstitle"=>urlencode($row['newstitle']),"newsimg"=>$row['newsimg'],"newscontent"=>urlencode($row['newscontent']),"newstime"=>urlencode($row['newstime'])));
		}
		echo urldecode(json_encode($arr));
		
	}





?>