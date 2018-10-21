$('.header').load('index.html .header');
$('.footer').load('index.html .footer');


//渲染购物车
function renderCar(){}
$.extend(renderCar.prototype,{
    init:function(){
        this.main = $('#buycar li');
        this.buycar = $('#buycar');
        //#buycar li span .jia
        //#buycar li span .jian
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
            this.renderPage();
            this.bindEvent();
		}.bind(this))
    },
    loadJson:function(){
		var opt = {
			url:"http://localhost:8888/data/data.json",
			context:this,
		}
		return $.ajax(opt);
    },

    getItem:function(id){
        for(var i = 0; i<this.data.length; i++){
            if(this.data[i].mid == id){
                return this.data[i];
            }
        }

    },
    bindEvent:function(){
        this.buycar.on('click','li .del',this.removeCar.bind(this));
        this.buycar.on('click','li .jia',this.countUp.bind(this));
        this.buycar.on('click','li .jian',this.countDown.bind(this));
    },
    renderPage:function(){
        var cookie;
        if(!(cookie = $.cookie('shopCar'))){
            return 0;
        }
        var cookieArray = JSON.parse(cookie);
        var html = '';
        for(var  i = 0; i<cookieArray.length; i++){
            var list = this.getItem(cookieArray[i].id);
            console.log(list);
            html+=`
                <li>
                    <input type="checkbox">
                    <span>
                        <div class="info">
                            <img src="${list.picurl}" alt="">
                            <div class="title"> ${list.title} </div>
                            <div class="every">单位:包</div>
                        </div>
                    </span>
                    <span class="mark">700-92-96</span>
                    <span class="price">${"￥" + list.price}</span> 
                    <span class="score">0</span>
                    <span class="kucun">有库存</span>
                    <span class="num">
                        <div class="jian" id=${list.mid}>-</div>
                        <div class="frame">${cookieArray[i].num}</div>
                        <div class="jia" id=${list.mid}>+</div>
                    </span>
                    <span class="count">${list.price*cookieArray[i].num+".00"}</span>
                    <span class="opera">
                        <div class="del" id=${list.mid}>删除</div>
                        <div class="col">收藏</div>
                    </span>
                </li>
                `;
        }
        
        this.main.html(html);   
    },
    removeCar:function(event){
        var cookieArray = JSON.parse($.cookie('shopCar'));
        // console.log(cookieArray);
       
        var target = event.target;
        var id = $(target).attr('id');
        var flag = confirm ("是否删除此商品?");
        if(flag){
            for(var i = 0; i<cookieArray.length; i++){
                if(cookieArray[i].id == id){
                    var index = cookieArray.indexOf(cookieArray[i]);
                    cookieArray.splice(index,1);
                    $.cookie('shopCar',JSON.stringify(cookieArray));
                    this.renderPage();
                }
            }
            
        }
    },
    countUp:function(event){
       var cookieArray = JSON.parse($.cookie('shopCar'));
       var target = event.target;
       var id = $(target).attr('id');
       var list = this.getItem(id);
       var all = 0;
       for(var i = 0; i<cookieArray.length; i++){
            if(cookieArray[i].id == id){
               cookieArray[i].num++;
               $('#buycar li span .frame').eq(i).html(cookieArray[i].num);
               $('#buycar li .count').eq(i).html(cookieArray[i].num*list.price+".00");
               all += $('#buycar li .count').eq(i).html();
               $.cookie('shopCar',JSON.stringify(cookieArray));
            }
       }
       $('#buycar h4 .all i').html("￥"+all); 
    },
    countDown:function(event){
       var cookieArray = JSON.parse($.cookie('shopCar'));
       var target = event.target;
       var id = $(target).attr('id');
       var list = this.getItem(id);
       var all = 0;
       for(var i = 0; i<cookieArray.length; i++){
            if(cookieArray[i].id == id){
               cookieArray[i].num--;
               if(cookieArray[i].num==0){
                    return 0;
               }
               $('#buycar li span .frame').eq(i).html(cookieArray[i].num);

               $('#buycar li .count').eq(i).html(cookieArray[i].num*list.price+".00");

               all += $('#buycar li .count').eq(i).html();
             
               $.cookie('shopCar',JSON.stringify(cookieArray));
            }
            $('#buycar h4 .all i').html("￥"+all); 
       }
    },
})
var rendercar = new renderCar();
rendercar.init();



//全选 反选

setTimeout((function(){
    var checkall = document.querySelector('.checkall');
    var input = document.getElementsByTagName('input');
    var allcheck = document.querySelector('.allcheck');
    // console.log(input)
    var len = input.length;
 
    checkall.onclick = function(){
         for(var i = 0; i<len + 1; i++){ 
             input[i].checked = this.checked;
         }
    }
    allcheck.onclick = function(){
     for(var i = 0; i<len; i++){
         input[i].checked = this.checked;
       }
     }   
 }),1000);

