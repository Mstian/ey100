$('.header').load('index.html .header');
$('.footer').load('index.html .footer');



(function(){
   var checkall = document.querySelector('.checkall');
   var input = document.getElementsByTagName('input');
   var allcheck = document.querySelector('.allcheck');
   console.log(input)
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
})();
