var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var tokens = require('csrf');

var routes = require('./routes/index');
var users = require('./routes/users');
var news = require('./routes/news');  //加载news路由
var session = require('express-session');
var app = express();

var Db = require('mysql-activerecord');           //使用mysql-activerecord数据库

global.db = new Db.Adapter({
    server: '127.0.0.1',
    username: 'root',
    password: '',
    database: 'newsdata',
    reconnectTimeout: 2000
  });

if(!db){
  console.log('Mysql connecting error !');
}


var ejs=require('ejs');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//session支持
app.use(session({                                 
  secret:'secret',
  cookie:{
    maxAge:1000*60*30
  },
  resave:false,
  saveUninitialized:true
}));

app.use(function(req, res, next) {
  res.locals.user = req.session.user;       // 从session 获取 user对象
  var err = req.session.error;              //获取错误信息
    delete req.session.error;
    res.locals.message = "";                // 展示的信息 message
    if(err){ 
        res.locals.message = '<div class="alert alert-danger" style="margin-bottom:20px;color:red;">'+err+'</div>';
    }
    next();                                 //中间件传递
});

app.use('/', routes);
app.use('/users', users);
app.use('/news', news); //指定/news路径使用的路由


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
