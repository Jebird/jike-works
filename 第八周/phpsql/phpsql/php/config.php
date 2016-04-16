<?php
	// header('Cache-Control:no-cache, must-revalidate');
	// header("Content-type:application/json,charset=utf-8");
	//连接服务器
	$con = mysql_connect('localhost', 'root', '');


	if (!$con) {

	die ('连接数据库出错: ' . mysql_error());

	}

	mysql_query("set names 'utf8'"); //数据库输出编码 

	mysql_select_db("newsdata",$con); //打开数据库


	// $conn=mysql_connect("localhost","root","") or die("error connecting") ; //连接数据库
 // 	if(!$conn){
	// 	die('Could not connect:'.mysql_error());
	// }else{
	
	 
	
	// }




	
?>
