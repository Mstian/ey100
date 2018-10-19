
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

(function(){
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
})();

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

//--------------------------------------------------------------------------
(function(){
	
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

	
})();

//-----------------------------------------------------------------------------------
