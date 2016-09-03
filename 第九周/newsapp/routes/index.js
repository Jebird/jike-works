var express = require('express');
var router = express.Router();
var newsdao = require('../dao/newsdao');
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: '新闻后台管理系统' });
  newsdao.queryAll(req, res, next);
  //重定向到新闻列表
  res.redirect('news/queryAll');
  // res.render('allnews', {  });
});

// router.get('/queryAll', function(req, res, next) {
	
    
    
//     newsdao.queryAll(req, res, next);
//     res.render('allnews', { tit: '新闻列表' });

    
// });

module.exports = router;
