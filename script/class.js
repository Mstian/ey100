
    $('.header').load('index.html .header');
    $('.footer').load('index.html .footer');
	

// (function(){
//     $('#logo .bot .sort').on('mouseenter',function(){
//         $('#logo .sort .tab').css({
//             display:block
//         })
//     })
// })();

// 价格



//--------------------------------------------------------------------------


//-----------------------------------------------------------------------------------

function Render(){}
$.extend(Render.prototype,{
	init:function(){
		this.main = $('#goods');
		var str = location.hash;
		this.id = str.replace(/\#/,'');
		console.log(this.id)
		this.loadJson()
		.then(function(res){
			this.data = res.data;
			var arr = [];
			
			for(var i = 1; i<6; i++){
				for(var j = 1; j<6; j++){
					arr.push(this.data[i][j].list);
				}
			}
			var arr2 = [];
			for(var k = 0; k<arr.length; k++){
				for(var d = 0; d<arr[k].length; d++){
					arr2.push(arr[k][d]);
				}
			}
			this.data = arr2;
			
			// console.log(JSON.parse(this.data));
			this.renderPage();

		}.bind(this))
		//console.log(this.id);
	},
	loadJson:function(){
		var opt = {
			url:"http://localhost:8888/data/data.json",
			context:this,
		}
		return $.ajax(opt);
	},
	renderPage:function(){
		var nowData = this.getItem();
		// console.log(nowData);
		var html='';
		html+=`
			<div class="zoom clearfix">
				<div class="left clearfix">
					<ul class="tab">
						<li><img src="${nowData.picurl}" alt=""></li>
						<li><img src="http://img3.ey100.com/ItemImages/21/2108/2108001/8030-5632/ViewSmall/8030-5632-1.jpg" alt=""></li>
						<li><img src="http://img3.ey100.com/ItemImages/21/2108/2108001/8030-5632/ViewSmall/8030-5632-2.JPG" alt=""></li>
						<li><img src="http://img3.ey100.com/ItemImages/21/2108/2108001/8030-5632/ViewSmall/8030-5632-3.jpg" alt=""></li>
					</ul>
					<ul class="list">
					
						<li class="active zindex"><img src="${nowData.picurl}" alt=""></li>
						<li><img src="http://img3.ey100.com/ItemImages/21/2108/2108001/8030-5632/ViewBig/8030-5632-1.jpg" alt=""></li>
						<li><img src="http://img3.ey100.com/ItemImages/21/2108/2108001/8030-5632/ViewBig/8030-5632-2.JPG" alt=""></li>
						<li><img src="http://img3.ey100.com/ItemImages/21/2108/2108001/8030-5632/ViewBig/8030-5632-3.jpg" alt=""></li>
						<div class="frame"></div>
						<div class="mo"></div>
					</ul>
					<ul class="big">
						<li class="active"><img src="${nowData.picurl}" alt=""></li>
						<li><img src="http://img3.ey100.com/ItemImages/21/2108/2108001/8030-5632/ViewBig/8030-5632-1.jpg" alt=""></li>
						<li><img src="http://img3.ey100.com/ItemImages/21/2108/2108001/8030-5632/ViewBig/8030-5632-2.JPG" alt=""></li>
						<li><img src="http://img3.ey100.com/ItemImages/21/2108/2108001/8030-5632/ViewBig/8030-5632-3.jpg" alt=""></li>
					</ul>
				</div>
				<div class="right">
					<h3>${nowData.title}</h3>
					<p>销 售 价：<span class="price">${"￥"+nowData.price}</span></p>
					<p>商品编号：<span>8030-5632</span> </p>
					<p>商品品牌：<span>国誉</span></p>
					<p>商品评分：<img src="http://www.ey100.com/images/item/xbstar0.gif" alt=""><span>(已有0人评价)</span><img src="http://www.ey100.com/images/office-icon.jpg" alt=""></p>
					<p>配 送 至: <select>
									<option value="">上海</option>
									<option value="">西安</option>
									<option value="">北京</option>
									<option value="">南京</option>
							</select>
							<span>可配送</span>
					</p>
					<p>库存状况：<span>有库存</span></p>
					
					<p class="wantbuy">我要购买：<span class="min">-</span><span class="num">1</span><span class="plus">+</span>合计：<span class="add">${"￥"+nowData.price}</span></p>
					<div class="button">
						<button class="shopcar">加入购物车</button>
						<button class="collect">加入收藏</button>
					</div>
					<p class="direct">
							温馨提示：经拆封后或包装损坏的食品；一经激活或者试用后价值贬损较大的商品，如手机等电子产品、硒鼓、墨盒等OA消耗品，不支持7天无理由退货。详情请参考退换货政策
					</p>
				</div>
			</div>
			`;
			this.main.html(html);
	},
	getItem:function(){	
		for(var i = 0; i<this.data.length; i++){
			if(this.data[i].mid == this.id){
				return this.data[i];
			}
		}
	}

})
var render = new Render();
render.init();


//放大镜
setTimeout((function(){
	
	var list = document.querySelectorAll('#goods .zoom .left .list li');
	var frame = document.querySelector('#goods .zoom .left .list .frame');
	var big = document.querySelectorAll('#goods .zoom .left .big li')[0];
	var mo =  document.querySelector('#goods .zoom .left .list .mo');
	var big_img = big.children[0];
	mo.onmouseover = function(){
		frame.style.display = 'block';
		big.style.display = 'block';
		big.style.opacity = '1';
		frame.onmouseover = function(){
			big.style.display = 'block';
			big.style.opacity = '1';
		}
		frame.onmouseout = function(){
			big.style.display = 'none';
			big.style.opacity = '0';
		}
		mo.onmousemove = function(event){
			var e = event || window.event;
			var offsetX = e.offsetX;
			var offsetY = e.offsetY;
			var nLeft = offsetX - frame.offsetWidth / 2;
			var nTop = offsetY - frame.offsetHeight	/ 2;
			if(nLeft < 0){
				nLeft = 0;
			}
			if(nTop < 0){
				nTop = 0;
			}
			var maxLeft = mo.offsetWidth - frame.offsetWidth;
			if(nLeft > maxLeft){
				nLeft = maxLeft;
			}
			var maxTop = mo.offsetHeight - frame.offsetHeight;
			if(nTop > maxTop ){
				nTop = maxTop;
			}	
			frame.style.left = nLeft + 'px';
			frame.style.top = nTop + 'px';
			var propX = big.offsetWidth / frame.offsetWidth; 
			var propY = big.offsetHeight / frame.offsetHeight;
			big_img.style.left = -propX * nLeft + 'px';
			big_img.style.top = -propY * nTop + 'px';
		}
	}
	mo.onmouseout = function(){
		frame.style.display = 'none';
		big.style.display = 'none';
		big.style.opacity = '0';
	}


}),1000);
//-----------------------------------------------------
setTimeout((function(){

	var index = 0;
	var str = $('#goods .zoom .right p .add').html().replace(/\￥/g,'');

	$('#goods .zoom .right p .min').click(function(){
		// console.log(str);
		if(index == 1 ){
			return 0;
		}else{
			index --;
		}	
		console.log(0)
		$('#goods .zoom .right p .num').html(index);
		$('#goods .zoom .right p .add').html("￥" + index * str + '.00');
	})
	$('#goods .zoom .right p .plus').click(function(){
		index ++;
		$('#goods .zoom .right p .num').html(index);
		$('#goods .zoom .right p .add').html("￥" + index * str + '.00');
	})
	
}),1000);

//选项卡
setTimeout((function(){
	var tab = document.querySelectorAll('#goods .zoom .left .tab li');
	var list = document.querySelectorAll('#goods .zoom .left .list li');
	var zindex = 1;
	for(var i = 0; i< tab.length; i ++){
		tab[i].index = i;
		tab[i].onmouseover = function(){
			for(var i = 0; i<list.length; i++){
				list[i].className = '';
			}
			list[this.index].className = 'active';
			list[this.index].style.zIndex = ++zindex;
		}
	}
}),1000);



(function(){
	var list = document.querySelectorAll('#goods .zoom .left .list li');
	var big = document.querySelectorAll('#goods .zoom .left .big li');
	var frame = document.querySelector('#goods .zoom .left .list .frame');
	var mo =  document.querySelector('#goods .zoom .left .list .mo');
	for(var i = 0; i<list.length; i++){
		list[i].index = i;
		list[i].onmouseover = function(){
			for(var i = 0; i<big.length; i++){
				big[i].className = '';
			}
			big[this.index].className = 'active';
			big[this.index].style.display = 'block';
		}
		list[i].onmouseout = function(){
			big[this.index].style.display = 'none';
		}
	}

	
})();