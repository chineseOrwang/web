// 答题js
var count = 0;
function checkRadio(form,right){
	right--;
	var inputs = form.getElementsByTagName('input');
	var checked = [];
	var righttext = inputs[right].value;
	var array = ["A","B","C","D"]
	for (var i = 0; i < inputs.length; i++) {
		if(inputs[i].checked){
		//	De(form);   //删除单选节点
			if(i==right){
				var newnode = document.createElement("span");
				newnode.innerHTML="<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您的答案对了！";
				form.appendChild(newnode);
			}else{
				var newnode = document.createElement("span");
				newnode.innerHTML="<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您的答案错了。"+"正确答案是:"+array[right]+"."+righttext;
				form.appendChild(newnode);
			}
		return;
		}
	}
	var newnode = document.createElement("span");
	newnode.innerHTML="<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您的答案错了。"+"正确答案是:"+array[right]+"."+righttext;
	form.appendChild(newnode);
}
function answer(){
	var answerbutton = document.getElementById('answerbutton');
	var td = document.querySelectorAll('.td');

	count++;
	if (count>1) {
		alert("请刷新页面，重新做；");
	}
	else{
		var first = document.getElementById("first");
		checkRadio(first,2);
		var second = document.getElementById("second");
		checkRadio(second,1);
		var third = document.getElementById("third");
		checkRadio(third,1);
		var fourth = document.getElementById("fourth");
		checkRadio(fourth,1);
		var fifth = document.getElementById("fifth");
		checkRadio(fifth,3);
		var sixth = document.getElementById("sixth");
		checkRadio(sixth,2);
		var seventh = document.getElementById("seventh");
		checkRadio(seventh,3);
		var eighth = document.getElementById("eighth");
		checkRadio(eighth,1);
		var nineth = document.getElementById("nineth");
		checkRadio(nineth,4);
		var tenth = document.getElementById("tenth");
		checkRadio(tenth,1);
		for(i=0;i<td.length;i++){
			var span = td[i].querySelectorAll('span');
			span[0].style.lineHeight="30px";
			span[1].style.lineHeight="30px";
		}
		alert("每小题10分，快来算算自己得了多少分！");
		answerbutton.style.display="none";

	}

}