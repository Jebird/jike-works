var express = require('express');
var router = express.Router();
var tokens = require('csrf');                     //csrf支持
var namex;


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


//登陆用户密码验证接口
router.post('/login', function(req, res, next) {
  var msg;
  var secret;
  global.token = 0;    //获取token随机数
  // 过滤用户名和密码
  namex = htmlEncode(req.body.name);
  var passwordx = htmlEncode(req.body.password);
  db.where({ 'name': namex}).get('login', function(err, results, fields) {
    if(results.length>0){
      if(passwordx == results[0].password) {
        req.session.user = namex;
        secret = tokens().secretSync();
        token = tokens().create(secret);           
        msg = token;
        req.session.token = token;

        //若用户登录成功则生成token随机数,并把当前用户登录token令牌存入数据库中
  db.where({ 'name': namex}).update('login', { 'token': token}, function(err,info) {
                if (!err) {
            console.log('UPDATE token success !');
          }
        });
       
      }else{
        msg = '1';
        req.session.error = "密码错误";
      }
    }else{
      msg = '2';
      req.session.error = '用户名不存在';
    }
    res.send(msg);
  }); 
});

router.get("/logout",function(req,res){    // 到达 /logout 路径则登出， session中user,error对象置空，并重定向到根路径
    req.session.user = null;
    req.session.error = null;
    res.redirect('/');
});



//html字符转义过滤函数
function htmlEncode(str) {  
    return str.replace(/&/g,"&amp;").replace(/\"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/ /g,"&nbsp;");  
} 
module.exports = router;
