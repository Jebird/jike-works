<?php
// header("Content-type:application/json,charset=utf-8");
//连接服务器
$con = mysql_connect('localhost', 'root', '');


if (!$con) {

die ('连接数据库出错: ' . mysql_error());

}
//创建数据库newsdata
$database="newsdata";

$sqlDatabase = 'create database '.$database;

if(mysql_query($sqlDatabase, $con))

{
echo "<br>";
echo "恭喜你，数据库".$database."创建成功了!";

}

else

{
echo "<br>";
echo "创建数据库出错，错误号：".mysql_errno()." 错误原因：".mysql_error();

}

mysql_query("set names utf8");
mysql_select_db("newsdata",$con);

 
//添加数据表news包含newsid、newstitle、newscontent、newstime
$sqltuijian="create table newstuijian (

newsid int unsigned not null auto_increment primary key,

newstitle varchar(100) not null,
newsimg varchar(200) not null,
newscontent text not null,
newstime text not null 
)engine=innoDB collate=utf8_general_ci";

$sqlbaijia="create table news (

newsid int unsigned not null auto_increment primary key,

newstitle varchar(100) not null,
newsimg varchar(200) not null,
newscontent text not null,
newstime text not null 
)engine=innoDB collate=utf8_general_ci";

$sqlbendi="create table newsbendi (

newsid int unsigned not null auto_increment primary key,

newstitle varchar(100) not null,
newsimg varchar(200) not null,
newscontent text not null,
newstime text not null 
)engine=innoDB collate=utf8_general_ci";

 

if(mysql_query($sqltuijian))

{
echo "<br>";
echo "恭喜你，数据表创建成功了!";

}

else

{
echo "<br>";
echo "创建数据表出错，错误号：".mysql_errno()." 错误原因：".mysql_error();

}

if(mysql_query($sqlbaijia))

{
echo "<br>";
echo "恭喜你，数据表创建成功了!";

}

else

{
echo "<br>";
echo "创建数据表出错，错误号：".mysql_errno()." 错误原因：".mysql_error();

}

if(mysql_query($sqlbendi))

{
echo "<br>";
echo "恭喜你，数据表创建成功了!";

}

else

{
echo "<br>";
echo "创建数据表出错，错误号：".mysql_errno()." 错误原因：".mysql_error();

}


//向数据库写入部分数据



mysql_select_db("newsdata",$con); //打开数据库
	 
$sql1 ="select * from newstuijian "; //SQL语句
$sql2 ="select * from news "; //SQL语句
$sql3="select * from newsbendi"; //SQL语句
	 
$result1 = mysql_query($sql1,$con);
$result2 = mysql_query($sql2,$con);
$result3 = mysql_query($sql3,$con);

//第一次执行（数据表为空）向数据库写入部分数据
if(!mysql_fetch_array($result1)){
	for($num=1;$num<=10;$num++){
		$sql="INSERT INTO `newstuijian`(`newstitle`, `newsimg`, `newscontent`, `newstime`) VALUES ('乐视的野心:今年进入美国市场','http://t10.baidu.com/it/u=http://img2.cache.netease.com/3g/2016/3/8/20160308100136e4bd0.jpg&fm=36','贾跃亭在乐视年会上宣布，2015年乐视生态经济总收入超过200亿元，生态总估值突破3000亿元。','1小时前')"; 
	if(mysql_query($sql))//借SQL语句插入数据

		{
		echo "<br>";
		echo "恭喜你，表1中写入数据成功了!";
		echo "<br>";

		}

	}

}else{
	//接受前台传来的参数
	@$newskind=$_REQUEST['newskind'];
	@$newstitle=$_REQUEST['newstitle'];
	@$newsimg=$_REQUEST['newsimg'];
	@$newscontent=$_REQUEST['newscontent'];
	@$newstime=$_REQUEST['newstime'];
	
	 
	if($newskind=="推荐"){
			//将前台传来的数据写入数据库
		$data="INSERT INTO `newstuijian`(`newstitle`, `newsimg`, `newscontent`, `newstime`) VALUES ('".$newstitle."','".$newsimg."','".$newscontent."','".$newstime."')";

		//返回结果
		$result=mysql_query($data,$con);
		if(!$result){
			die('推荐新闻添加数据失败:'.mysql_error());
					
		}else{
			echo "<br>";		
			echo "推荐新闻添加数据成功";
		}
	}
	
	
	

}

if(!mysql_fetch_array($result2)){
	for($num=1;$num<=10;$num++){
		$sql="INSERT INTO `newsbaijia`(`newstitle`, `newsimg`, `newscontent`, `newstime`) VALUES ('阿尔法完胜，人类怎么办？','http://b.hiphotos.baidu.com/news/crop%3D0%2C23%2C600%2C360%3Bw%3D638/sign=0f8f8de00d7b0208188665a15fe9dee1/024f78f0f736afc318b89a20b419ebc4b745123a.jpg','我们都知道人工智能迟早赶上人类，只是不愿意也没有料到超越来的怎么快，以致还来不及做好防止下一步...','1小时前')"; 
	if(mysql_query($sql))//借SQL语句插入数据

		{
		echo "<br>";
		echo "恭喜你，表2中写入数据成功了!";
		echo "<br>";

		}

	}

}else{
	//接受前台传来的参数
	@$newskind=$_REQUEST['newskind'];
	@$newstitle=$_REQUEST['newstitle'];
	@$newsimg=$_REQUEST['newsimg'];
	@$newscontent=$_REQUEST['newscontent'];
	@$newstime=$_REQUEST['newstime'];
	 
	if($newskind=="百家"){
			//将前台传来的数据写入数据库
		$data="INSERT INTO `newsbaijia`(`newstitle`, `newsimg`, `newscontent`, `newstime`) VALUES ('".$newstitle."','".$newsimg."','".$newscontent."','".$newstime."')";

		//返回结果
		$result=mysql_query($data,$con);
		if(!$result){
			die('百家新闻添加数据失败:'.mysql_error());
					
		}else{
			echo "<br>";		
			echo "百家新闻添加数据成功";
		}
	}

	

}

if(!mysql_fetch_array($result3)){
	for($num=1;$num<=10;$num++){
		$sql="INSERT INTO `newsbendi`(`newstitle`, `newsimg`, `newscontent`, `newstime`) VALUES ('北京保障房申请材料“瘦身” 18项减至12项','http://g.hiphotos.baidu.com/news/crop%3D0%2C1%2C366%2C219%3Bw%3D638/sign=dbc1f8a2962397ddc236c24464b29e86/314e251f95cad1c8197f3d62783e6709c83d51ab.jpg','今后申请保障性住房时，社保证明、纳税证明、就业证明、失业证明等5项材料将不用提交，另有一项有所简化。','1小时前')"; 
	if(mysql_query($sql))//借SQL语句插入数据

		{
		echo "<br>";
		echo "恭喜你，表3中写入数据成功了!";
		echo "<br>";

		}

	}

}else{
	//接受前台传来的参数
	@$newskind=$_REQUEST['newskind'];
	@$newstitle=$_REQUEST['newstitle'];
	@$newsimg=$_REQUEST['newsimg'];
	@$newscontent=$_REQUEST['newscontent'];
	@$newstime=$_REQUEST['newstime'];


	if($newskind=="本地"){
			//将前台传来的数据写入数据库
		$data="INSERT INTO `newsbendi`(`newstitle`, `newsimg`, `newscontent`, `newstime`) VALUES ('".$newstitle."','".$newsimg."','".$newscontent."','".$newstime."')";

		//返回结果
		$result=mysql_query($data,$con);
		if(!$result){
			die('本地新闻添加数据失败:'.mysql_error());
					
		}else{
			echo "<br>";		
			echo "本地新闻添加数据成功";
		}
	}
	 

	

}


	
			

 

mysql_close();

?>