$('.header').load('index.html .header');
$('.footer').load('index.html .footer');


//数据加载;

function Layout(){}
$.extend(Layout.prototype,{
    init:function(){
        this.main = $('#detail .list ul');
        this.loadJson()
        .then(function(res){
            this.data = res.data;
            console.log(this.data);
            var arr = [];
            for(var i = 1; i < 6; i++ ){
                for(var j = 1; j<6; j++){
                    arr.push(this.data[i][j].list);
                }
            }
            var arr2 = [];
            for(var n = 0; n< arr.length; n++){
                for(var k = 0; k < arr[n].length; k++ ){
                    arr2.push(arr[n][k]);
                }
            }
            this.data = arr2;
            this.renderPage();
        }.bind(this))

    },
    loadJson:function(){
        var opt = {
            url:'http://localhost:8888/data/data.json',
            context:this,
        }
        return $.ajax(opt);
    },
    renderPage:function(){
        var html = '';
        for(var i = 0; i<this.data.length; i++){
            html+=`
                <li>
                    <img src="${this.data[i].picurl}" alt="">
                    <div class="title">${this.data[i].title}</div>
                    <div class="price">${"￥" + this.data[i].price}</div>
                    <div class="add">加入购物车</div>
                </li>
                  `;
        }
        this.main.html(html);
    }
}) 

var layout = new Layout();
layout.init();