//多张图片无缝轮播封装函数
function duozhangwufenggundong(win,number){
     	var box=$('.box',win)[0];	
     	var tabs=$('.tabs',win)[0];
     	var left=$('.tableft',win)[0];
     	var right=$('.tabright',win)[0];
     	var tupian=$('a',box)[0];
     	var iw=parseInt(getStyle(tupian,'width'));
     	var flag=0;
     	var t=setInterval(movel,1000)
     	//从右向左移动
        function movel(){
           animate(box,{left:-iw},function(){
           	 var first=firstChild(box);
           	 box.appendChild(first);
             box.style.left=0;
             flag=true;
           })
        }        
         function moveR(){
         	var first=firstChild(box);
         	var last=lastChild(box);
           	 box.insertBefore(last,first);
             box.style.left=-iw+'px';
             animate(box,{left:0},function(){flag=true})
        }
        console.log(tabs)
        tabs.style.display='none';
        win.onmouseover=function(){
        	clearInterval(t);
            tabs.style.display='block';

        }
        win.onmouseout=function(){
          t=setInterval(movel,1000)
          tabs.style.display='none';

        }
       right.onclick=function(){
           if(flag){
            flag=false;
       	   moveR();
         }
       }
      left.onclick=function(){
           if(flag){
            flag=false;
           movel();
         }
       }
}








//getClass函数用于获取固定的类名函数
function getClass(classname){
	var arr=[];
	if(document.getElementsByClassName){
		return document.getElementsByClassName(classname);
	}else{
		var all=document.getElementsByTagName('*');
		for(var i=0;i<all.length;i++){
			if(all[i].className==classname){
               arr.push(all[i]);   
			}
		}
	}
	return arr;
}







//getClass1函数用于在固定范围内获取固定类名的元素
function getClass1(classname,range){
	var arr=[];
	 range=range?range:document;
      if(document.getElementsByClassName){
      	return range.getElementsByClassName(classname);
      }else{
      	var all=range.getElementsByTagName('*');
      	for(var i=0;i<all.length;i++){
      		if(all[i].className==classname){
      			arr.push(all[i]);
      		}  		
      	}
      }
      return arr;
}






//getClass2函数获取类名中只要包括指定类名即可的元素。如<div class='one two'><div>
function getClass2(classname){
	var arr=[];
      if(document.getElementByClassName){
      	return document.getElementByClassName(classname);
      }else{
      	var all=document.getElementsByTagName('*')
      	for(var i=0;i<all.length;i++){
      		if(check(all[i].className,classname)){
                  arr.push(all[i]);
      		}
      	}
      }
      return arr;
} 
function check(aa,bb){
	var brr=aa.split(' ');
	for(var i=0;i<brr.length;i++){
		if(brr[i]==bb){
			return true;
		}else{
			return false;
		}
	}
}






//简易的函数。使上面的函数调用更方便。
function $(selecter,range){
  if(typeof selecter=='string'){
    var range=range?range:document;
      if(selecter.charAt(0)=='.'){
            return getClass1(selecter.slice(1),range)
      }else if(selecter.charAt(0)=='#'){
            return document.getElementById(selecter.slice(1))
      }else if(/^[a-z][a-z1-6]{0,10}$/.test(selecter)){
            return range.getElementsByTagName(selecter)
      }else if(/^[a-z][a-z1-6]{0,10}$/.test(selecter)){
    return document.createElement(selecter.slice(1,-1))
      }
    }else if(typeof selecter=='function'){
      addEvent(window,'load',selecter)
    }
      
}









//getStyle用于获取对象obj的属性
function getStyle(obj,attr){
      if(obj.currentStyle){
            return obj.currentStyle[attr];
      }else{
            return getComputedStyle(obj,null)[attr];
      }
}








//用于获取一个节点的下一个节点
function getNext(obj,type){
    var next=obj.nextSibling;
    if(type==true){
       if(next==null){
        return false;
    }
    while(next.nodeType!=1){
       next=next.nextSibling;
       if(next==null){
       return false;
    }
    return next;
    }
 } else if(type==false){

   if(next==null){
        return false;
    }
    while((next.nodeType=3&&/^\s+$/.test(next.nodeValue))||next.nodeType==8){
       next=next.nextSibling;
       if(next==null){
       return false;
    } 
    }
   return next;
}
}








//insertAfter()用于在一个节点之后插进去一个节点。
//newobj要插进去的节点，obj在谁后面插，type，两种插的方法，true，不包括文本，false，包含有意义的文本
function insertAfter(newobj,obj,type){
var parent=obj.parentNode;
var type=type?type:false;
var pos=getNext(obj,type);
   if(!pos){
    parent.appendChild(newobj);
   }else{
    pos.insertBefore(newobj);
   }
}










//getChilds用以获取节点中标签子元素
function getChilds(obj){
     var arr=obj.childNodes;
     var brr=[];
     for(var i=0;i<arr.length;i++){
      if(arr[i].nodeType==1){
        brr.push(arr[i]);
      }
     }
     return brr;
}






//getChild()用以获取有效的子元素或者是标签元素，以type来区分
function getChild(obj,type){
   var type=type?type:false;
     var arr=obj.childNodes;
     var brr=[];
     if(type==true){
      for(var i=0;i<arr.length;i++){
        if(arr[i].nodeType==1||(arr[i].nodeType==3 && !(/^\s+$/.test(arr[i].nodeValue)))){
          brr.push(arr[i]);
        }
      }
        return brr;
     }else if(type==false){
     for(var i=0;i<arr.length;i++){
      if(arr[i].nodeType==1){
        brr.push(arr[i]);
      }
     }
     return brr
 }
}





//用于获取节点的第一个子元素
function firstChild(obj){
  return getChilds(obj)[0];
}








//用于获取最后一个子元素
function lastChild(obj){ 
  var length=getChilds(obj).length;
  return getChilds(obj)[length-1];
}





//用于获取第num个子元素
function lastChilds(obj,num){
  var length=getChilds(obj).length;
  if(num>=length){
    return 'error';
  }
  return getChilds(obj)[num];
}



//给对象添加函数
function addEvent(obj,type,fn){
  if(obj.attachEvent){
    obi.attachEvent('on'+type,fn);
  }else{
    obj.addEventListener(type,fn,false);
  }
}





function removeEvent(obj,type,fn){
  if(obj.attachEvent){
    obi.detachEvent('on'+type,fn);
  }else{
    obj.removeEventListener(type,fn,false);
  }
}
