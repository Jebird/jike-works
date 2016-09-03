//加载express
var express = require('express');

//通过express获取Router对象
var router = express.Router();

//加载newsDao
var newsdao = require('../dao/newsdao');

//拦截/news请求
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

//进入百度新闻
router.get('/home', function(req, res, next) {
  res.render('bdnews', { title: '百度新闻' });
});

 //查询所有新闻列表
router.get('/queryAll', function(req, res,next) {
	
    newsdao.queryAll(req, res, next);
    //两次render会报错
    
    
});
 //加载更多新闻
router.get('/querymore', function(req, res, next) {
    
    newsdao.querymore(req, res, next);
    //两次render会报错
    
    
});
 //查询新闻页面
router.get('/getquery', function(req, res) {
	
	res.render('getquery', { });
   

});
 //查询新闻类别
 router.post('/query', function(req, res, next) {
	//在后台查询页面已经render了模板再次加载会报错（两次set header）
    newsdao.query(req, res, next);
    
    

});

router.post('/querybd', function(req, res, next) {
    //在后台查询页面已经render了模板再次加载会报错（两次set header）
    newsdao.querybd(req, res, next);
    
    

});
//增加新闻页面
router.get('/addNews', function(req, res, next) {
	// res.send(req.body.newsimg)
	
	res.render('addnews', { title: '增加新闻' });
	
	
   
});
//增加新闻提交表单到数据库
router.post('/addnews', function(req, res, next) {
	// res.send(req.body.newsimg)
	
	
	newsdao.add(req, res, next);
	
    
    
    
});

router.post('/updateNews', function(req, res, next) {

    newsdao.update(req, res, next);

});

router.post('/deleteNews', function(req, res, next) {

    newsdao.delete(req, res, next);

});


module.exports = router;