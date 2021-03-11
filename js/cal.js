document.getElementById("text").focus();
var num=0; //定义输入数据
function gtn(num){
	document.getElementById("text").value += document.getElementById(num).value;
}
function eq(){ //结果计算
document.getElementById("text").value = eval(document.getElementById("text").value);
}

function c(){	//清零

 	document.getElementById("text").value=null;
 	document.getElementById("text").focus();
            
        }
function del() { //退格
        var arr = document.getElementById("text"); //将输入框的数字表达式放到数组里面
        arr.value = arr.value.substring(0, arr.value.length - 1);
        }
function dokeydown() { //回车监听，当监听到回车事件调用计算函数
        if ( event.keyCode == 13) 
        { 
          document.getElementById('eq').click();
        } 
    } 
  

