// 时间动态图，含getTime()
window.onload = function () {
  getTime();
  topleft();
  lunbotu();
}
// 以下是头像滚动效果
function topleft(){
  var lefttop = document.getElementById("lefttop");
  var x=0;
  setInterval(function(){
    lefttop.style.backgroundPosition=x+"px 0px";
    x--;
  },20)
}
// 以下是时间动态效果
function getTime(){
  var date = new Date();
  var hours =formatTime(date.getHours());
  var minutes = formatTime(date.getMinutes());
  var seconds = formatTime(date.getSeconds());
  var $time = document.getElementById('time');
  $time.innerHTML=hours +"<img src='images/hm.png' style='margin:0 10px;' width='10' height='25'/>"+ minutes+"<img style='margin:0 10px;'  src='images/ms.png' width='10' height='25'/>"+ seconds;
  
  setTimeout("getTime()",500);
}
function formatTime(i){
  if(i<10&&i==1){
      i=  "<img src='images/0.png' width='20' height='30'/>"+"<img src='images/1.png' width='20' height='30'/>";
  }else if(i<10&&i!=1){
      i= "<img src='images/0.png' width='20' height='30'/>" + "<img src='images/"+i+".png' width='20' height='30'/>";
  }else{
     
      var j= i.toString().charAt(0);
      var z =i.toString().charAt(1);
     if(j<10 && z<10&&j!=1&&z!=1){
         i = "<img src='images/"+j+".png' width='20' height='30'/>" + "<img src='images/"+z+".png' width='20' height='30'/>";
      }else if(j<10 && z<10&&j==1&&z!=1){
        
         i = "<img src='images/1.png' width='20' height='30'/>" + "<img src='images/"+z+".png' width='20' height='30'/>";

     }else if(j<10 && z<10&&z==1&&j!=1){
             i =  "<img src='images/"+j+".png' width='20' height='30'/>"+"<img src='images/1.png' width='20' height='30'/>";

     }else if(j<10 && z<10&&(j==1&&z==1)){
         i="<img src='images/1.png' width='20' height='30'/>"+"<img src='images/1.png' width='20' height='30'/>";
     }
  }

  return i;
}
// 以下是轮播图效果
function lunbotu() {
    var container = document.getElementById('container');     //获取最外层容器
    var innerone = document.getElementById('innerone');       
    var innertwo = document.getElementById('innertwo');
    var list = document.getElementById('list');               //获取列表
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var alinks = document.getElementById('alinks').getElementsByTagName('li');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index = 1;
    var len = parseInt(list.getAttribute('value'));   //轮播图个数
    var animated = false;
    var interval = 2000;
    var timer;

    function animate (offset) {
        if (offset == 0) {
            return;
        }
        animated = true;
        var time = 300;
        var inteval = 10;
        var speed = offset/(time/inteval);
        var left = parseInt(list.style.left) + offset;     // 自身left加上偏移量

        var go = function (){
            if ( (speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
                list.style.left = parseInt(list.style.left) + speed + 'px';
                setTimeout(go, inteval);
            }
            else {
                list.style.left = left + 'px';           //将left赋值到html上
                if(left>-200){
                    list.style.left = -600 * len + 'px';
                }
                if(left<(-600 * len)) {
                    list.style.left = '-600px';
                }
                animated = false;
            }
        }
        go();
    }

    function showButton() {       //为按钮添加on,增加其属性
        for (var i = 0; i < buttons.length ; i++) {
            if( buttons[i].className == 'on'){
                buttons[i].className = '';
                break;
            }
        }
        buttons[index - 1].className = 'on';
    }

    function showalink(){
        for (var i = 0; i < alinks.length ; i++) {
            if( alinks[i].className == 'on'){
                alinks[i].className = '';
                break;
            }
        }
        alinks[index - 1].className = 'on';
    }

    function play() {
        timer = setTimeout(function () {
            next.onclick();
            play();
        }, 5000000000);         //自动轮播图时间
    }
    function stop() {
        clearTimeout(timer);
    }

    next.onclick = function () {
        if (animated) {
            return;
        }
        if (index == len) {
            index = 1;
        }
        else {
            index += 1;
        }
        animate(-600);
        showButton();
    }
    prev.onclick = function () {
        if (animated) {
            return;
        }
        if (index == 1) {
            index = len;
        }
        else {
            index -= 1;
        }
        animate(600);
        showButton();
    }

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            if (animated) {
                return;
            }
            if(this.className == 'on') {
                return;
            }
            var myIndex = parseInt(this.getAttribute('index'));   //当前index
            var offset = -600 * (myIndex - index);

            animate(offset);
            index = myIndex;
            showButton();
        }
    }

    for (var i = 0; i < alinks.length; i++) {
        alinks[i].onclick = function () {
            if (animated) {
                return;
            }
            if(this.className == 'on') {
                return;
            }
            var myIndex = parseInt(this.getAttribute('index'));   //当前index
            var offset = -600 * (myIndex - index);

            animate(offset);
            index = myIndex;
            showalink();
        }
    }

    container.onmouseover = stop;
    container.onmouseout = play;

    play();

}
