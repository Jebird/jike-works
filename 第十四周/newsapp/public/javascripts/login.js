$(document).ready(function(){

    var state = 5; //判断登陆验证的状态变量
    $('#username').focus();
    // ajax发送用户名和密码至后台判断登陆凭证
    $('#login').unbind('click').click(function(e){
        
        if ($('#username').val()&&$('#psw').val()) {
            e.preventDefault();  //组织默认刷新事件
            $.ajax({

                url:'users/login',              
                dataType:'text',
                type:'post',
                data:{
                    name:$('#username').val(),
                    password:$('#psw').val()
                },
                success:function(data){

                    if (data == '1') {
                        alert('密码错误!');
                    }else if (data == '2'){
                        alert('不存在该用户!');
                    }else{      
                        // sessionStorage.setItem('token', 'data');
                        location.href = 'news/queryAll';//若后台验证成功，跳转到管理页面                        
                    }
                    $('#username').val('');
                    $('#psw').val('');
                    $('#username').focus();
                    
                },
                error:function(){
                    alert('错误!');
                }
            })
        };
        
    });
});




	

