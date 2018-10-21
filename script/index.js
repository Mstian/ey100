//主体轮播图
(function(){
	var banbg = document.querySelector('.banbg');
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
})();


//瀑布流

function Waterfull(){}
$.extend(Waterfull.prototype,{
	init:function(){
		this.main = $('#more .display ul');
		this.buy = $('#logo .top .buying');
		this.showbuy = $('#logo .top .buying .goods');
		this.showNumEle = $('#logo .top .buying .count');
		this.pagnum = 0;
		this.rendering = false;
		this.loadJson()
		.then(function(res){
			this.data = res.data;
			var arr = [];
			for(var i = 1; i < 6; i++){
				for(var j=1;j < 6; j++){
					arr.push(this.data[i][j].list);
				}
			}
			var arr2 = [];
			for(var d = 0; d<arr.length; d++){
				for(var n = 0; n<arr[d].length; n++){
					arr2.push(arr[d][n]);
				}
			}
			this.data = arr2;
			// console.log(this.data);
			this.renderPage();
			this.handleEvent();
			this.showNum();
		}.bind(this))
	},
	loadJson:function(){
		var opt = {
			url:"http://localhost:8888/data/data.json",
			context:this,
		}
		return $.ajax(opt);
	},
	handleEvent:function(){
		onscroll = this.ifRender.bind(this);
		this.main.on('click','img',this.changePage.bind(this));
		this.main.on('click','button',this.addCar.bind(this));
		this.buy.on('mouseenter',this.showCar.bind(this));
		this.buy.on('mouseleave',this.hideCar.bind(this));
	},
	ifRender:function(){
		if(this.rendering) return 0;
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		var clientHeight = document.body.clientHeight || document.documentElement.clientHeight;
		var child = this.main[0].children;
		var lastchild = child[child.length - 1];
		if(scrollTop + 400 > lastchild.offsetTop){
			this.rendering = true;
			this.pagnum ++;
			this.renderPage();
		}
	},
	renderPage:function(){
		var html = '';
		var list = this.data;
		for(var i = this.pagnum*6; i < this.pagnum*6 + 6; i++){
			// <a href="class.html#${list[i].mid}">
			html+=`
					<li data-id="${list[i].mid}"> 
						<img data-id="${list[i].mid}" src="${list[i].picurl}" alt="">
						<p data-id="${list[i].mid}">${list[i].title}</p>
						<span data-id="${list[i].mid}">${"￥" + list[i].price}</span>
						<button data-id="${list[i].mid}">${'加入购物车'}</button>
					</li>
				`;
			//</a>
		}
		this.main[0].innerHTML += html;
		this.rendering = false;
	},
	changePage:function(event){

		var target = event.target;
		location.href = 'class.html#' + $(target).attr('data-id');
	},
	addCar:function(event){
		var target = event.target;
		var goodsId = $(target).attr('data-id');
		// console.log(goodsId);
		var cookie;
		if(!(cookie = $.cookie('shopCar'))|| cookie =='[]'){
			$.cookie('shopCar',`[{"id":${goodsId},"num":1}]`);
			return 0;
		}
		var cookieArray = JSON.parse(cookie);
		var flag = false;

		for(var i = 0;i<cookieArray.length; i++){
			if(cookieArray[i].id == goodsId){
				flag = true;
				cookieArray[i].num++;
			}
		}
		if(flag == false){
			cookieArray.push({
				id:goodsId,
				num:1
			});
		}
		
		$.cookie('shopCar',JSON.stringify(cookieArray));
		this.showNum();
		// console.log($.cookie('shopCar'));
	},
	showCar:function(){
		// console.log(111);
		var cookie;
		if(!(cookie = $.cookie('shopCar'))){
			return 0;
		}
		var cookieArray = JSON.parse(cookie);
		// console.log(cookieArray)
		var html = '';
		for(var i = 0; i<cookieArray.length; i++){
			
			var list = this.getItem(cookieArray[i].id);
			console.log(list);
			html+=`
				<li>
					<img src="${list.picurl}" alt="">
					// <span class="title">${list.title}</span>
					<span class="price">${list.price}</span>
					<span class="num">${cookieArray[i].num}</span>
				</li>
			`;
			this.showbuy.html(html);
		}
	},
	getItem:function(id){
		for(var i = 0; i<this.data.length; i++){
			if(this.data[i].mid == id){
				return this.data[i];
			}
		}
	},
	hideCar:function(){
		this.showbuy.children().remove();
	},
	showNum:function(){
		var cookie;
		if(!(cookie = $.cookie('shopCar'))){
			this.showNumEle.html(0);
			return 0;
		}
		var cookieArray = JSON.parse(cookie);
		var sum = 0;
		for(var i = 0; i<cookieArray.length; i++){
			sum += cookieArray[i].num;
		}
		this.showNumEle.html(sum);
	},
})

var waterfull = new Waterfull();
waterfull.init();



//活动页连接
(function(){
	$('#ad img').click(function(){
		location.href = 'http://localhost:8888/active.html';
	})
})();

//detail跳转
(function(){
	$('#logo .sort .tab').click(function(){
		location.href = 'http://localhost:8888/detail.html';
	})
})();
//购物车buy页面跳转

(function(){
	$('#logo .top .buying').click(function(){
		location.href = 'http://localhost:8888/buy.html';
	})
})();
//侧边栏buy跳转
(function(){
	$('.sidebar li:nth-child(2)').click(function(){
		location.href = 'http://localhost:8888/buy.html';
	})
})();

//侧边栏登录跳转

(function(){
	$('.sidebar li:nth-child(1)').click(function(){
		location.href = 'http://localhost:8888/denglu.html';
	})
})()