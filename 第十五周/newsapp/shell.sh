#!/bin/bash

i＝0
# 启动express
pm2 start ./bin/www
echo '正在启动，请稍候...'
#脚本休眠1s，等待进程启动
sleep 1
while [ true ]
do
	# 获取node进程pid
	pid=$(ps -e |grep '[0-9].node./'|awk '{print $1}')
	# 获取node进程所占用CPU负载
	CPU=$(pm2 prettylist |grep memory |cut -d : -f 4 |cut -d } -f 1)
	let i++
	# 显示node进程所占用CPU负载
	echo $i:程序占用CPU:%$CPU

	# 若进程pid不存在或进程所占CPU负载超过80%，重启当前进程
	if [ ! pid -o $CPU -gt 80 ]
	then
		pm2 restart www
		echo '正在重启，请稍候...'
		# 重启进程，脚本休眠2s
		sleep 2
	fi

	#脚本休眠1s
	sleep 1
done
