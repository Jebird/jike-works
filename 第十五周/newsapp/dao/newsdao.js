
//加载mysql驱动
var mysql = require('mysql');

//创建连接  
var client = mysql.createConnection({
    host: '127.0.0.1', //数据库的ip地址
    user: 'root',
    password: '',
    database: 'newsdata',
    port: 3306
});

//连接
client.connect();

module.exports = {
    //查询所有
    queryAll: function(req, res, next) {
    client.query('select * from news order by newsid desc', function(err, results, fields) {
        if (err) {
        throw err;
        }
        if (results) {
        // 返回json
        
        var arr = [];
        for (var i = 0; i < results.length; i++) {
            console.log("%d\t%s\t%s", results[i].newsid, results[i].newstype,results[i].newsimg,results[i].newstitle, results[i].newscontent, results[i].newstime);
            var news = {};
            news.id = results[i].newsid;
            news.type = results[i].newstype;
            news.img = results[i].newsimg;
            news.title = results[i].newstitle;
            news.content = results[i].newscontent;       
            news.time = results[i].newstime;
            arr.push(news);
        }
        //返回视图
        res.render('allnews', {
            "data": JSON.stringify(arr)
        });
        
        }
        // client.end();
    });
    },
    //点击加载更多
    querymore: function(req, res, next) {
    client.query('select * from news order by newsid desc', function(err, results, fields) {
        if (err) {
        throw err;
        }
        if (results) {
        // 返回json 
        res.json(results);
        }
        // client.end();
    });
    },
    //查询种类
    query: function(req, res, next) {
    client.query('select * from news where newstype=?',[req.body.newstype],function(err, results, fields) {
        if (err) {
        throw err;
        }
        if (results) {
        // 返回json
        // res.json(results);
        var arr = [];
        for (var i = 0; i < results.length; i++) {
            console.log("%d\t%s\t%s", results[i].newsid, results[i].newstype,results[i].newsimg,results[i].newstitle, results[i].newscontent, results[i].newstime);
            var news = {};
            news.id = results[i].newsid;
            news.type = results[i].newstype;
            news.img = results[i].newsimg;
            news.title = results[i].newstitle;
            news.content = results[i].newscontent;       
            news.time = results[i].newstime;
            arr.push(news);
        }
        //返回视图
        res.render('querynews', {
            "data": JSON.stringify(arr),
            "token": req.session.token
        });
        
        
        }
        // client.end();
    });
    },
    //查询百度新闻种类
    querybd: function(req, res, next) {
    client.query('select * from news where newstype=?',[req.body.newstype],function(err, results, fields) {
        if (err) {
        throw err;
        }
        if (results) {
        // 返回json到前台模板
        res.json(results);
        
        }
        // client.end();
    });
    },
    //删除新闻
    delete: function(req, res, next) {
    client.query('delete from news where newsid=?',[req.body.newsid],function(err, results, fields) {
        if (err) {
        throw err;
        }
        if (results) {
        
        //返回结果
        res.send(results);
        }
        // client.end();
    });
    },
    //增加新闻
    add: function(req, res, next) {

    if (req.body.token !== req.session.token) return res.json({err: '非法请求'}, 403);
        
    client.query('INSERT INTO news SET ?',{
        newstype:req.body.newstype,
        newstitle:req.body.newstitle,
        newsimg:req.body.newsimg,
        newscontent:req.body.newscontent,
        newstime:req.body.newstime
    }, function(err,results,fields) {
        if (err) {
        throw err;
        }
        if (results) {
        
        // console.log(results);
        res.json(results);
        
        
        }
        
    });
    },
    //修改新闻
    update: function(req, res, next) {
        console.log(req.session.token, req.body.token);
    if (req.body.token !== req.session.token) return res.json({err: '非法请求'}, 403); 
    client.query('update news set ? where newsid=?',[{
        // newsid:req.body.newsid,
        newstype:req.body.newstype,
        newstitle:req.body.newstitle,
        newsimg:req.body.newsimg,
        newscontent:req.body.newscontent,
        newstime:req.body.newstime
    },req.body.newsid], function(err,results,fields) {
        if (err) {
        throw err;
        }
        if (results) {
            client.query('select * from news where newsid=?',[req.body.newsid],function(err, result, fields) {
                if (err) {
                throw err;
                }
                if (result) {
                // 返回json到前台模板
                res.json(result);
                
                }
                // client.end();
            });
        
        }
        // client.end();
    });


    }


};