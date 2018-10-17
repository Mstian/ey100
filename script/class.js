
    $('.header').load('index.html .header');
    $('.footer').load('index.html .footer');


// (function(){
//     $('#logo .bot .sort').on('mouseenter',function(){
//         $('#logo .sort .tab').css({
//             display:block
//         })
//     })
// })();


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


//返回顶部

// (function(){
// 	var gotop = document.querySelector('.gotop');
// 	gotop.onclick = function(){
// 		document.documentElement.scrollTop = 0;
// 		document.body.scrollTop = 0;
// 	}
// })();


//侧边栏

(function(){
	$('.sidebar').on('mouseenter','li',function(){
		$(this).stop().animate({
			width:'86px',
			backgroundPosition:0 -31
		})
    })
    // console.log(11);
	$('.sidebar').on('mouseleave','li',function(){
		$(this).stop().animate({
			width:'30px',
			backgroundPosition:0,
		})
	})
})();

(function(){
	var index = 0;
	$('#goods .zoom .right p .min').click(function(){
		if(index == 0 ){
			return 0;
		}else{
			index --;
		}	
		$('#goods .zoom .right p .num').html(index);
		$('#goods .zoom .right p .add').html("￥" + index * 220+".00");
	})
	$('#goods .zoom .right p .plus').click(function(){
		index ++;
		$('#goods .zoom .right p .num').html(index);
		$('#goods .zoom .right p .add').html("￥" + index * 220+".00");
	})
	
})();