<?php 
	require 'config.php';
	$sql ="select * from news"; //SQL语句
	 
	
	
	@$newskind=$_REQUEST['newskind'];
	@$newstitle=$_REQUEST['newstitle'];
	@$newsimg=$_REQUEST['newsimg'];
	@$newscontent=$_REQUEST['newscontent'];
	@$newstime=$_REQUEST['newstime'];
	
	

	$result="INSERT INTO `news`(`newstype`,`newstitle`, `newsimg`, `newscontent`, `newstime`) VALUES ('".$newskind."','".$newstitle."','".$newsimg."','".$newscontent."','".$newstime."')";
	
	// $result ="DELETE FROM `news` WHERE newsid=$newsid";//为什么加引号newsid删除失败
	// $result ="DELETE FROM `news` WHERE 'newsid'=$newsid";

	$result=mysql_query($result,$con); //执行修改
	if(!$result){
			die('新闻添加数据失败:'.mysql_error());
					
		}else{
					
			echo "新闻添加数据成功";
			echo "Success";
		}
	





?>