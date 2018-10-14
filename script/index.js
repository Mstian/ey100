//主体轮播图
(function(){
	var nowindex = 0;
	var slidepoint = document.querySelectorAll('.banbg .point span');
	var slideimg = document.querySelectorAll('.banbg .slide li');
	for(let i = 0; i < slidepoint.length; i++){	
		slidepoint[i].onmouseover = function(){
			this.nowindex = i;
			for(var j = 0; j < slidepoint.length; j++ ){
				slidepoint[j].className = '';
			}
			this.className = "active";
			for(var j = 0; j < slideimg.length; j++){
				slideimg[j].className = '';
			}
			slideimg[this.nowindex].className = "active";
		}
	}
})();

//吸顶菜单
   
(function(){
	var flag = false;
	$(window).scroll(function(){

		//var scrollTop = $('html,body').scrollTop();
		var scrollTop = document.body.scrollTop || document.Element.scrollTop;
		// console.log(scrollTop)
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

})()

