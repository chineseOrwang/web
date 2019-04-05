// 时间动态图，含getTime()
window.onload = function () {
  getTime();
  topleft();
  homeleftgun();
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
// 以下是文字滚动
function homeleftgun(){
  var homeleftgun = document.getElementById("homeleftgun");
  var y1=0;
  setInterval(function(){
    homeleftgun.style.top=y1+"px";
    y1--;
    if(y1<-570){
      y1=0;
    }
  },50)
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
