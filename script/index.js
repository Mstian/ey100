//主体轮播图
(function(){
	var banbg = document.querySelector('.banbg');
	console.log(banbg)
	var index = 0;
	var slidepoint = document.querySelectorAll('.banbg .point span');
	var slideimg = document.querySelectorAll('.banbg .slide li');
	function autoplay(){
		if(index == slideimg.length - 1){
			index = 0;
		}else{
			index++;
		}
		
		for(var j = 0; j < slidepoint.length; j++ ){
			slidepoint[j].className = '';
		}
		slidepoint[index].className = "active";
		for(var j = 0; j < slideimg.length; j++){
			slideimg[j].className = '';
		}
		slideimg[index].className = "active";
	}
	for(let i = 0; i < slidepoint.length; i++){	
		slidepoint[i].onclick = function(){
			if(i == index){
				return 0;
			}
			index = i;
			for(var j = 0; j < slidepoint.length; j++ ){
				slidepoint[j].className = '';
			}
			this.className = "active";
			for(var j = 0; j < slideimg.length; j++){
				slideimg[j].className = '';
			}
			slideimg[index].className = "active";
		}
	}
	var timer = setInterval(autoplay,2000);
	banbg.onmouseover = function(){
		clearInterval(timer);
	}
	banbg.onmouseout = function(){
		clearInterval(timer);
		timer = setInterval(autoplay,2000);
	}
})();

//二级菜单
(function(){
	//ey100
	$('#header .right ul .ey100').on('mouseover',function(){
		$(this).css({
			background:'#e33333',
			color:'#fff'
		})
		.find('i').addClass('icon-jiantou-copy-copy-copy')
		.end()
		.find('.second').css({
			color:'#999',
			display:'block'
		})
	})
	$('#header .right ul .ey100').on('mouseout',function(){
		$(this).css({
			background:'#fff',
			color:'#898989'
		})
		.find('i').removeClass('icon-jiantou-copy-copy-copy')
		.end()
		.find('.second').css({
			color:'#999',
			display:'none'
		})
	})
	//message
	$('#header .right ul .message').on('mouseover',function(){
		$(this).css({
			background:'#e33333',
			color:'#fff'
		})
		.find('i').addClass('icon-jiantou-copy-copy-copy')
		.end()
		.find('.second').css({
			color:'#999',
			display:'block'
		})
	})
	$('#header .right ul .message').on('mouseout',function(){
		$(this).css({
			background:'#fff',
			color:'#898989'
		})
		.find('i').removeClass('icon-jiantou-copy-copy-copy')
		.end()
		.find('.second').css({
			color:'#999',
			display:'none'
		})
	})
	//custom
	$('#header .right ul .custom').on('mouseover',function(){
		$(this).css({
			background:'#e33333',
			color:'#fff'
		})
		.find('i').addClass('icon-jiantou-copy-copy-copy')
		.end()
		.find('.second').css({
			color:'#999',
			display:'block'
		})
	})
	$('#header .right ul .custom').on('mouseout',function(){
		$(this).css({
			background:'#fff',
			color:'#898989'
		})
		.find('i').removeClass('icon-jiantou-copy-copy-copy')
		.end()
		.find('.second').css({
			color:'#999',
			display:'none'
		})
	})
})();

//吸顶菜单
   
(function(){
	var flag = false;
	$(window).scroll(function(){
		var scrollTop = $(document).scrollTop();
		if(scrollTop>=500){
			if(flag) return 0;
			flag = true;
			$('.topmenu').stop().animate({
				top:0
			},function(){
				flag = false;
			})
		}else{
			$('.topmenu').stop(true,true);
			$('.topmenu').css({
				top:-124
			})
		}
	})

})();

//选项卡
(function(){
	var tab = document.querySelector('#logo .sort .tab');
	var tabLi = document.querySelectorAll('#logo .sort .tab li');
	var tablistLi = document.querySelectorAll('#logo .sort .tablist li');
	for(var i = 0; i < tabLi.length; i++){
		tabLi[i].index = i;
		tabLi[i].onmouseover = function(){
			for(var i = 0;i<tabLi.length; i++){
				tabLi[i].className = '';
			}
			this.className = 'active';
			for( var j = 0; j<tablistLi.length; j++){
				tablistLi[j].style.display = 'none';
			}
			tablistLi[this.index].style.display = 'block';
		}
		tabLi[i].onmouseout = function(){
			this.className = '';
			tablistLi[this.index].onmouseover = function(){
				this.style.display = 'block';
			}
			tablistLi[this.index].onmouseout = function(){
				this.style.display = 'none';
			}
			tablistLi[this.index].style.display = 'none';
		}
	}
})();

//content 选项卡图片
(function(){
	var pointLi = document.querySelectorAll(' .idea #main .point li');
	var changeImg = document.querySelectorAll('.idea #main .changeimg li');
	for(var i = 0;i<pointLi.length;i++){ 
		pointLi[i].index = i;
		pointLi[i].onmouseover = function(){
			for(var i = 0;i<pointLi.length; i++){
				pointLi[i].className = '';
			}
			this.className = 'active';
			for(var j = 0; j<changeImg.length; j++){
				changeImg[j].className = '';
			}
			changeImg[this.index].className = 'active';
		}
	}
})();

(function(){
	var pointLi = document.querySelectorAll(' .work #main .point li');
	var changeImg = document.querySelectorAll('.work #main .changeimg li');
	for(var i = 0;i<pointLi.length;i++){ 
		pointLi[i].index = i;
		pointLi[i].onmouseover = function(){
			for(var i = 0;i<pointLi.length; i++){
				pointLi[i].className = '';
			}
			this.className = 'active';
			for(var j = 0; j<changeImg.length; j++){
				changeImg[j].className = '';
			}
			changeImg[this.index].className = 'active';
		}
	}
})();

(function(){
	var pointLi = document.querySelectorAll(' .problem #main .point li');
	var changeImg = document.querySelectorAll('.problem #main .changeimg li');
	for(var i = 0;i<pointLi.length;i++){ 
		pointLi[i].index = i;
		pointLi[i].onmouseover = function(){
			for(var i = 0;i<pointLi.length; i++){
				pointLi[i].className = '';
			}
			this.className = 'active';
			for(var j = 0; j<changeImg.length; j++){
				changeImg[j].className = '';
			}
			changeImg[this.index].className = 'active';
		}
	}
})();

//返回顶部

(function(){
	var gotop = document.getElementsByClassName('gotop')[0];
	gotop.onclick = function(){
		document.documentElement.scrollTop = 0;
		document.body.scrollTop = 0;
	}
})();
// (function(){
// 	var scrollTop = $(document).scrollTop();
// 	$('.gotop').on('click',function(){
// 		scrollTop = 0;
// 	})
// })();

//侧边栏
(function(){
	$('.sidebar').on('mouseenter','li',function(){
		$(this).stop().animate({
			width:'86px',
			backgroundPosition:0 -31
		})
	})
	$('.sidebar').on('mouseleave','li',function(){
		$(this).stop().animate({
			width:'30px',
			backgroundPosition:0,
		})
	})
})()