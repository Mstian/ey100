$('.footer').load('index.html .footer');

//页面跳转按钮
(function(){
    var tolog = document.querySelector('.tolog');
    tolog.onclick = function(){
        location.href = 'http://localhost:8888/denglu.html';
    }
})();


//表单验证
(function(){
    $('.phone').blur(function(){
        var phone_val = $('.phone').val();
        var phone_reg =  /^[1][3,4,5,7,8][0-9]{9}$/;
        if(phone_reg.test(phone_val)){
            $('.phone').next().html('电话号码可用');
            $('.phone').next().css({
                color:'yellowgreen'
            })
        }else{
            $('.phone').next().html('请输入正确格式的电话号码');
            $('.phone').next().css({
                color:'#e33333'
            })
        }
    })

    $('.password').blur(function(){
        var pass_val = $('.password').val();
        var pass_reg = /^[0-9a-zA-Z\!\@\#\$\%\^\&\*\(\)\_\+\-]{1,20}$/;
        if(pass_reg.test(pass_val)){
            var count = 0;
            var regnum =  /\d/;
            var regleter = /[a-zA-Z]/;
            var regsymbol =  /[\!\@\#\$\%\^\&\*\(\)\_]/;
            if(regnum.test(pass_val)){
                count++;
            }
            if(regleter.test(pass_val)){
                count++;
            }
            if(regsymbol.test(pass_val)){
                count++;
            }
            switch(count){
                case 1:$('.password').next().html('您的密码强度较弱').css({
                    color:'#e33333',
                });break;
                case 2:$('.password').next().html('您的密码强度适中').css({
                    color:'rgb(181, 228, 121)',
                });break;
                case 3:$('.password').next().html('您的密码强度较高').css({
                    color:'yellowgreen',
                });break;
            }

        }
    })
    $('.agpassword').blur(function(){
       
        var pass_val = $('.password').val();
        var agpass_val = $('.agpassword').val();
        if(pass_val == agpass_val){
            $('.agpassword').next().html('密码正确').css({
                color:'yellowgreen'
            })
        }else{
            $('.agpassword').next().html('请输入相同的密码').css({
                color:'#e33333'
            })
        }
    })
})();


//后台






































//页面转换
(function(){
    var tab = document.querySelectorAll('.chioce div');
    var main = document.querySelectorAll('.maintab .main');
    
    for(var i = 0; i <= tab.length; i++){
        tab[i].index = i;
        tab[i].onclick  = function(){
            for(var i = 0; i<tab.length; i++){
                tab[i].className = ''; 
            }
            this.className = 'active';
            for(var j = 0; j< main.length; j++){
                main[j].style.display = 'none';
            }
            main[this.index].style.display = 'block';
        }
    }
})();

