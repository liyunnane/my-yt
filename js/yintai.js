window.onload=function(){
	var aa=document.getElementsByClassName('bannertu1');
	var bb=document.getElementsByClassName('tongpingxxx')
	var max=document.getElementsByClassName('bannertu')[0];
	var lis=document.getElementsByClassName('yuandian');
	var tabs=document.getElementsByClassName('banner-55')[0];
	var left=document.getElementsByClassName('banner-44')[0];
	var right=document.getElementsByClassName('banner-66')[0];
	var num=0;
	var flag=true;
	//var getColor=['#E65B08','#FFBACC','#DEDEDE','#B9DFF2','#E8F6FF']





	   //初始化
		for(var i=0;i<aa.length;i++){
			if(i==0){
				bb[i].style.display='block'
				tabs.style.display='none';//这儿初始化时为什么不能写left，right
				continue;
			}else{
				animate(aa[i],{opacity:0});
				animate(bb[i],{opacity:0});
			}
		}
		var t;



		//自动轮播
		t=setInterval(fn,1000);





        
		function fn(){
			num++;
			if(num==aa.length){
				num=0;
			}
			for(var i=0;i<aa.length;i++){
				
				animate(aa[i],{opacity:0},function(){
				flag=true;
			});
				lis[i].style.background='#D0D2D3';
				animate(bb[i],{opacity:0});
			}
			animate(aa[num],{opacity:1});
		    animate(bb[num],{opacity:1});
			lis[num].style.background='#DC0368'
			//max.style.borderColor=getColor[num];
		}







		function fnL(){
			num--;
			if(num<0){
				num=aa.length-1;		
			}
			for(var i=0;i<aa.length;i++){
				animate(bb[i],{opacity:0});
				animate(aa[i],{opacity:0},function(){
				flag=true;
			});
				lis[i].style.background='#D0D2D3'
			}
			animate(aa[num],{opacity:1});
		    animate(bb[i],{opacity:1});
			
			lis[num].style.background='#DC0368';
			//max.style.borderColor=getColor[num];

		}






        //鼠标点击停止效果
		max.onmouseover=function(){
			clearInterval(t);
			tabs.style.display='block';	
		}






		 //鼠标离开开始轮播效果
		max.onmouseout=function(){
			t=setInterval(fn,1000);
		    tabs.style.display='none';	
		}





		 //右侧箭头点击停止效果
		right.onclick=function(){
			if(flag){
			flag=false;
             fn();
           }
		}





		 //左侧箭头点击停止效果
		left.onclick=function(){
			if(flag){
			flag=false;
             fnL();
         }
		}






		//圆点点击效果
		for(var i=0;i<lis.length;i++){
	     lis[i].index=i;
            lis[i].onmouseover=function(){
            	num=this.index;
            	for(var j=0;j<aa.length;j++){
                     animate(aa[j],{opacity:0})
				    animate(bb[j],{opacity:0});
                    lis[j].style.background='#D0D2D3'
            	}
         animate(aa[this.index],{opacity:1});
		 animate(bb[this.index],{opacity:1});
         lis[this.index].style.background='#DC0368';
            }
		}










 var dd=document.getElementById('one');	
        dd.onmouseover=function(){

           /*var t=*/animate(dd,{right:20},500)
            };
     	
         dd.onmouseout=function(){
           /*var b=*/animate(dd,{right:0},500)
            };      
       









var kong=document.getElementsByClassName('kong')[0];
var righ=document.getElementById('duoyu1');
kong.style.display='none';
righ.onmouseover=function(){
     kong.style.display='block';
}
righ.onmouseout=function(){
     kong.style.display='none';
}








var banner1=document.getElementsByClassName('banner-x-top-1');
var banner2=document.getElementsByClassName('banner-x-bottom');
 for(var j=0;j<banner2.length;j++){
	   if(j==0){
			banner2[j].style.display='block';
		}else{
			banner2[j].style.display='none';
		}

	}
for(var i=0;i<banner1.length;i++){
	banner1[i].index=i;
	banner1[i].onmouseover=function(){
		for(var j=0;j<banner2.length;j++){
			if(this.index!=j){
    banner2[j].style.display='none';
}else{
    banner2[j].style.display='block';

}

	}
}
}





var tu1=document.getElementsByClassName('yingcang')[0];
var tu2=document.getElementById('huantu');
m=setInterval(bn,1000);
var number=0;
		function bn(){
			if(number==1){
				tu1.style.display='none';
				tu2.style.display='block';
				number=0;
			}else if(number==0){
				tu1.style.display='block';
				tu2.style.display='none';
				number=1;
			}
		}











//曲线图出现效果
var daye=document.getElementsByClassName('banner-x-bottom-1');
var dayes=document.getElementsByClassName('chuxian');
for(var i=0;i<dayes.length;i++){

	dayes[i].style.display='none'

}
for(var j=0;j<daye.length;j++){
	daye[j].index=j;
	daye[j].onmouseover=function(){
	   animate(daye[this.index],{opacity:0.8});
       dayes[this.index].style.display='block';
	}
	daye[j].onmouseout=function(){
	
	   animate(daye[this.index],{opacity:1});;
       dayes[this.index].style.display='none';
	}
	
}





var dayeing1=document.getElementById('remenpinpai');
var dayeing2=document.getElementById('benzhoutuijian');
var dayeiis=document.getElementsByClassName('bianbian')[0];
var dayeis=document.getElementsByClassName('bianbian1')[0];
dayeing1.onmouseover=function(){
	dayeis.style.display='none';
	dayeiis.style.display='block';
	
   }
dayeing2.onmouseover=function(){
	dayeiis.style.display='none';
	dayeis.style.display='block';
  }








var tub1=document.getElementsByClassName('zuihou1')[0];
var tub2=document.getElementsByClassName('zuihou2')[0];
var tub3=document.getElementsByClassName('zuihou3')[0];
tub1.onmouseover=function(){
	animate(tub1,{opacity:0.7});
}
tub1.onmouseout=function(){
	animate(tub1,{opacity:1});
}
tub2.onmouseover=function(){
	animate(tub2,{opacity:0.7});
}
tub2.onmouseout=function(){
	animate(tub2,{opacity:1});
}

tub3.onmouseover=function(){
	animate(tub3,{opacity:0.7});
}
tub3.onmouseout=function(){
	animate(tub3,{opacity:1});
}
















    	var win=$(".shishang-tupian")[0];
		var as=$('.wufeng');
		var len=as.length;
		var numm=0;
		var next=0;
		var list=$('.list');
		var mbb=true;
		var winw=parseInt(getStyle(win,'width'));
		var t;
		var jiantou=$('.wufenglunbo')[0];
		var ljiantou=$('.wufenglunbo1')[0];
		var rjiantou=$('.wufenglunbo2')[0];
		//初始化
		for(var i=0;i<len;i++){
			as[i].style.left=winw+'px';

		}
		as[numm].style.left=0;
		list[numm].style.background='red';
        jiantou.style.display='none';


		
         win.onmouseover=function(){
           jiantou.style.display='block';
	       animate(win,{opacity:0.9});;


         	
         }
         //鼠标离开开始轮播
         win.onmouseout=function(){
          jiantou.style.display='none';
	       animate(win,{opacity:1});;

         }








         //左触手
         ljiantou.onclick=function(){
         	if(mbb){
         		mbb=false;
         		moveR();
         }

         }
          //右触手
         rjiantou.onclick=function(){
         	if(mbb){
         		mbb=false;
         		moveL();
         }
         	

     }
    //控件轮播
         for(var i=0;i<len;i++){
         	list[i].ind=i;
         	list[i].onclick=function(){
         		 if(numm==this.ind){return;}
                var ind=this.ind;
         		if(numm<this.ind){
         			if(ind==0){
         			ind=len;
         			}
         		 	next=ind-1;
         	
         	 		moveL();
	         	 }else if(numm>this.ind){
         			if(ind==len){
         				ind=-1;
         			}
         		 	next=ind+1;
         	
         	 		moveR();
	         	 }
         	 		for(var j=0;j<len;j++){

         				list[j].style.background='#000';
         			}
         			list[this.ind].style.background='red';
         	 if(numm==this.ind){return;}
         	 if(numm<this.ind){
         	 	next=this.ind;
			
			//初始化下一张位置
			as[next].style.left=winw+'px';

			//控件轮播
			 for(var j=0;j<len;j++){

         		list[j].style.background='#000';
         		}
			
			list[this.ind].style.background='red';

			//图片轮播
			animate(as[numm],{left:-winw});
			animate(as[next],{left:0});
			numm=next;

         	 }else if(numm>this.ind){
         	 	next=this.ind;
			
			//初始化下一张位置
			as[next].style.left=-winw+'px';

			//控件轮播
			 for(var j=0;j<len;j++){

         		list[j].style.background='#000';
         		}
			
			list[this.ind].style.background='red';

			//图片轮播
			animate(as[numm],{left:winw});
			animate(as[next],{left:0});
			numm=next;

         	 }

         	 
         	
         		
         	}
         }

		function moveL(){
			//获取下一张图的角标
			next++;
			if(next==len){
				next=0;
			}
			//初始化下一张位置
			as[next].style.left=winw+'px';

			//控件轮播
			animate(list[numm],{background:'#000'});
			animate(list[next],{background:'#ff0000'})

			//图片轮播
			animate(as[numm],{left:-winw});
			animate(as[next],{left:0},function(){mbb=true;});
			numm=next;


		}
		function moveR(){
			//获取下一张图的角标
			next--;
			if(next<0){
				next=len-1;
			}
			//初始化下一张位置
			as[next].style.left=-winw+'px';

			//控件轮播
			animate(list[numm],{background:'#000'});
			animate(list[next],{background:'#ff0000'})

			//图片轮播
			animate(as[numm],{left:winw});
			animate(as[next],{left:0},function(){mbb=true;});
			numm=next;


		}









var aiwo1=document.getElementById('aiwo1');
var aiwo=document.getElementById('aiwo');

aiwo.onmouseover=function(){
     animate(aiwo,{opacity:0.8});
}
aiwo.onmouseout=function(){
     animate(aiwo,{opacity:1});
}
aiwo1.onmouseover=function(){
     animate(aiwo1,{opacity:0.8});
}
aiwo1.onmouseout=function(){
     animate(aiwo1,{opacity:1});
}













        var winss=document.getElementById('ooo1');
        
		var ass=$('.wufeng22');

		var lens=ass.length;
		var numms=0;
		var nexts=0;
		var listss=$('.list1');
		var mbbs=true;
		var winssw=parseInt(getStyle(winss,'width'));
		var k;
		var jiantous=$('.wufenglunbo111')[0];
		var ljiantous=$('.wufenglunbo11')[0];
		var rjiantous=$('.wufenglunbo21')[0];
		//初始化
		for(var i=0;i<lens;i++){
			ass[i].style.left=winssw+'px';

		}
		ass[numms].style.left=0;
		listss[numms].style.background='red';
        jiantous.style.display='none';


		
         winss.onmouseover=function(){
           jiantous.style.display='block';
	       animate(winss,{opacity:0.9});;


         	
         }
         //鼠标离开开始轮播
         winss.onmouseout=function(){
          jiantous.style.display='none';
	       animate(winss,{opacity:1});;

         }








         //左触手
         ljiantous.onclick=function(){
         	if(mbbs){
         		mbbs=false;
         		moveRR();
         }

         }
          //右触手
         rjiantous.onclick=function(){
         	if(mbbs){
         		mbbs=false;
         		moveLL();
         }
         	

     }
    //控件轮播
         for(var i=0;i<lens;i++){
         	listss[i].ind=i;
         	listss[i].onclick=function(){
         		 if(numms==this.ind){return;}
                var ind=this.ind;
         		if(numms<this.ind){
         			if(ind==0){
         			ind=len;
         			}
         		 	nexts=ind-1;
         	
         	 		moveL();
	         	 }else if(numms>this.ind){
         			if(ind==len){
         				ind=-1;
         			}
         		 	nexts=ind+1;
         	
         	 		moveR();
	         	 }
         	 		for(var j=0;j<lens;j++){

         				listss[j].style.background='#000';
         			}
         			listss[this.ind].style.background='red';
         	 if(numms==this.ind){return;}
         	 if(numms<this.ind){
         	 	nexts=this.ind;
			
			//初始化下一张位置
			ass[nexts].style.left=winssw+'px';

			//控件轮播
			 for(var j=0;j<len;j++){

         		listss[j].style.background='#000';
         		}
			
			listss[this.ind].style.background='red';

			//图片轮播
			animate(ass[numms],{left:-winw});
			animate(ass[nexts],{left:0});
			numms=nexts;

         	 }else if(numms>this.ind){
         	 	nexts=this.ind;
			
			//初始化下一张位置
			ass[nexts].style.left=-winssw+'px';

			//控件轮播
			 for(var j=0;j<len;j++){

         		listss[j].style.background='#000';
         		}
			
			listss[this.ind].style.background='red';

			//图片轮播
			animate(ass[numms],{left:winw});
			animate(ass[nexts],{left:0});
			numms=nexts;

         	 }

         	 
         	
         		
         	}
         }

		function moveLL(){
			//获取下一张图的角标
			nexts++;
			if(nexts==len){
				nexts=0;
			}
			//初始化下一张位置
			ass[nexts].style.left=winssw+'px';

			//控件轮播
			animate(listss[numms],{background:'#000'});
			animate(listss[nexts],{background:'#ff0000'})

			//图片轮播
			animate(ass[numms],{left:-winssw});
			animate(ass[nexts],{left:0},function(){mbbs=true;});
			numms=nexts;


		}
		function moveRR(){
			//获取下一张图的角标
			nexts--;
			if(nexts<0){
				nexts=len-1;
			}
			//初始化下一张位置
			ass[nexts].style.left=-winssw+'px';

			//控件轮播
			animate(listss[numms],{background:'#000'});
			animate(listss[nexts],{background:'#ff0000'});

			//图片轮播
			animate(ass[numms],{left:winw});
			animate(ass[nexts],{left:0},function(){mbbs=true;});
			numms=nexts;


		}





var chongzuo1=document.getElementsByClassName('chongzuo1')[0];
var bbbbb=document.getElementsByClassName('bbbbb')[0];
var qqqqq=document.getElementsByClassName('qqqqq')[0];
chongzuo1.onmouseover=function(){
	bbbbb.style.display='none';

	qqqqq.style.display='block';
}
chongzuo1.onmouseout=function(){
	bbbbb.style.display='block';

	qqqqq.style.display='none';
}






var chongzuo2=document.getElementsByClassName('chongzuo2')[0];
var ccccc=document.getElementsByClassName('ccccc')[0];
var ddddd=document.getElementsByClassName('ddddd')[0];
chongzuo2.onmouseover=function(){
	ccccc.style.display='none';
    chongzuo2.style.background='white';
	ddddd.style.display='block';
}
chongzuo2.onmouseout=function(){
	ccccc.style.display='block';
 chongzuo2.style.background='none';
	ddddd.style.display='none';
}




var chongzuo3=document.getElementsByClassName('chongzuo3')[0];
var eeeee=document.getElementsByClassName('eeeee')[0];
var fffff=document.getElementsByClassName('fffff')[0];
chongzuo3.onmouseover=function(){
	eeeee.style.display='none';
    chongzuo3.style.background='white';
	fffff.style.display='block';
}
chongzuo3.onmouseout=function(){
	eeeee.style.display='block';
 chongzuo3.style.background='none';
	fffff.style.display='none';
}





var bannerxbottom1=document.getElementsByClassName('banner-x-bottom-1');
xiankuangxiaoguo(bannerxbottom1)



var tupian33=document.getElementsByClassName('tupian33');
xiankuangxiaoguo(tupian33)












       var winssts=document.getElementById('ooo2');
        
		var assts=$('.wufeng23');

		var lensts=assts.length;
		var nummsts=0;
		var nextsts=0;
		var listssts=$('.list2');
		var mbbsts=true;
		var kuandu=parseInt(getStyle(winssts,'width'));
		var k;
		var jianyoutss=$('.wufenglunbo112')[0];
		var lljiantou=$('.wufenglunbo12')[0];
		var rrjiantou=$('.wufenglunbo22')[0];
		//初始化
		for(var i=0;i<lensts;i++){
			assts[i].style.left=kuandu+'px';

		}
		assts[nummsts].style.left=0;
		listssts[nummsts].style.background='red';
        jianyoutss.style.display='none';


		
         winssts.onmouseover=function(){
           jianyoutss.style.display='block';
	       animate(winssts,{opacity:0.8});


         	
         }





         //鼠标离开开始轮播
         winssts.onmouseout=function(){
          jianyoutss.style.display='none';
	       animate(winssts,{opacity:1});

         }








         //左触手
         lljiantou.onclick=function(){
         	if(mbbsts){
         		mbbsts=false;
         		moveRRr();
         }

         }
          //右触手
         rrjiantou.onclick=function(){
         	if(mbbsts){
         		mbbsts=false;
         		moveLLl();
         }
         	

     }
    //控件轮播
         for(var i=0;i<lensts;i++){
         	listssts[i].ind=i;
         	listssts[i].onclick=function(){
         		 if(nummsts==this.ind){return;}
                var ind=this.ind;
         		if(nummsts<this.ind){
         			if(ind==0){
         			ind=lensts;
         			}
         		 	nextsts=ind-1;
         	
         	 		moveL();
	         	 }else if(nummsts>this.ind){
         			if(ind==lensts){
         				ind=-1;
         			}
         		 	nextsts=ind+1;
         	
         	 		moveR();
	         	 }
         	 		for(var j=0;j<lensts;j++){

         				listssts[j].style.background='#000';
         			}
         			listssts[this.ind].style.background='red';
         	 if(nummsts==this.ind){return;}
         	 if(nummsts<this.ind){
         	 	nextsts=this.ind;
			
			//初始化下一张位置
			assts[nextsts].style.left=kuandu+'px';

			//控件轮播
			 for(var j=0;j<lensts;j++){

         		listssts[j].style.background='#000';
         		}
			
			listssts[this.ind].style.background='red';

			//图片轮播
			animate(assts[nummsts],{left:-kuandu});
			animate(assts[nextsts],{left:0});
			nummsts=nextsts;

         	 }else if(nummsts>this.ind){
         	 	nextsts=this.ind;
			
			//初始化下一张位置
			assts[nextsts].style.left=-kuandu+'px';

			//控件轮播
			 for(var j=0;j<lensts;j++){

         		listssts[j].style.background='#000';
         		}
			
			listssts[this.ind].style.background='red';

			//图片轮播
			animate(assts[nummsts],{left:kuandu});
			animate(assts[nextsts],{left:0});
			nummsts=nextsts;

         	 }

         	 
         	
         		
         	}
         }

		function moveLLl(){
			//获取下一张图的角标
			nextsts++;
			if(nextsts==lensts){
				nextsts=0;
			}
			//初始化下一张位置
			assts[nextsts].style.left=kuandu+'px';

			//控件轮播
			animate(listssts[nummsts],{background:'#000'});
			animate(listssts[nextsts],{background:'#ff0000'})

			//图片轮播
		animate(assts[nummsts],{left:-kuandu});
			animate(assts[nextsts],{left:0},function(){mbbsts=true;});
			nummsts=nextsts;


		}







		function moveRRr(){
			//获取下一张图的角标
			nextsts--;
			if(nextsts<0){
				nextsts=lensts-1;
			}
			//初始化下一张位置
			assts[nextsts].style.left=-kuandu+'px';

			//控件轮播
			animate(listssts[nummsts],{background:'#000'});
			animate(listssts[nextsts],{background:'#ff0000'});

			//图片轮播
			animate(assts[nummsts],{left:kuandu});
			animate(assts[nextsts],{left:0},function(){mbbsts=true;});
			nummsts=nextsts;


		}




  
xiaolunbo('zsx','ave','lists','list3','addd','aeee','abbb');

xiaolunbo1('zsxs','aves','listss','list3s','addds','aeees','abbbs');

xiaolunbo2('zsxss','avess','listsss','list3ss','adddss','aeeess','abbbss');

xiaolunbo3('zsxsss','avesss','listssss','list3sss','adddsss','aeeesss','abbbsss');






var shishangrighttop2=document.getElementsByClassName('shishang-right-top-2');
xiankuangxiaoguo(shishangrighttop2)



var shishangrighttop1=document.getElementsByClassName('shishang-right-top-1');
xiankuangxiaoguo(shishangrighttop1)



var dabox=document.getElementById('dabox');
xxlb(dabox);



var daboxa=document.getElementById('daboxa');
xxlb(daboxa);



var daboxaa=document.getElementById('daboxaa');
xxlb(daboxaa);

var daboxaaa=document.getElementById('daboxaaa');
xxlb(daboxaaa);



var daboxaaas=document.getElementById('daboxaaas');
xxlb(daboxaaas);

var daboxdd=document.getElementById('daboxdd');
xxlb(daboxdd);

var daboxdds=document.getElementById('daboxdds');
xxlb(daboxdds);

var daboxddv=document.getElementById('daboxddv');
xxlb(daboxddv);

var daboxddvv=document.getElementById('daboxddvv');
xxlb(daboxddvv);




var gouwuche2=document.getElementsByClassName('gouwuche2')[0];
var gouwu=document.getElementsByClassName('gouwu')[0];
gouwu.onmouseover=function(){
    gouwuche2.style.display='block'
}
gouwu.onmouseout=function(){
    gouwuche2.style.display='none'
}














//按需加载
    var obj=document.body.scrollTop?document.body:document.documentElement;
    //获取可是窗口的可视高度。
    var ch=document.documentElement.clientHeight;
    //获取每个楼层
    var floor=document.getElementsByClassName('jianju');
        //创建新的数组用来放每个楼层距离页面顶部的高度
    var floorArr=[];

    var flag=true;
    //for循环用来存储每个楼层的高度值；
    for(var i=0;i<floor.length;i++){
         floorArr.push(floor[i].offsetTop);

        //没有定位，因此offsettop就是距离顶部的
    }



    //楼层跳转
    var item=$('.item');
    var item1=$('.item1')[0];
    for(var i=0;i<item.length;i++){
    	item[i].index=i;
    	item[i].onclick=function(){   		
    		flag=false;    		
    	  floory[this.index].style.display='block';
            animate(document.body,{scrollTop:floorArr[this.index]},function(){
           	flag=true;
           });
        animate(document.documentElement,{scrollTop:floorArr[this.index]},function(){
           	flag=true;
           });
           
    	} 

    }






















    //滚轮触发事件，当滚轮滚动的时候
    window.onscroll=function(){
    	if(!flag)  return;
        //用于判断浏览器火狐，谷歌
    	
    	//用于获取滚轮的移动的距离
    	var obj=document.body.scrollTop?document.body:document.documentElement;
    	var scrollTop=obj.scrollTop;
    	

        //获取当前楼层下面的图片并且追加路径
    	for(var i=0;i<floor.length;i++){

    		if(ch+scrollTop>=floorArr[i]+300){

    			var imgs=$('img',floor[i]);//imgs=floor[i].getelementsByTagName('img')
    			for(var j=0;j<imgs.length;j++){   			
    				imgs[j].src=imgs[j].getAttribute('imgpath');
    			}
    		}
    	}
 


       
    	for(var i=0;i<item.length;i++){
    		
    		if(ch+scrollTop>=floorArr[i]+300){
    			for(var j=0;j<item.length;j++){
    			floorx[j].style.display='none';
    			;
    		}
    			floorx[i].style.display='block';
    		}
    	}
}






var floory=document.getElementsByClassName('floory')
var floorx=document.getElementsByClassName('floorx')
for (var x=0;x<item.length;x++){
	item[x].xx=x;
	item[x].onmouseover=function(){

		floory[this.xx].style.display='none';
		floorx[this.xx].style.display='block';
        
	}
	item[x].onmouseout=function(){
		


		floory[this.xx].style.display='block';
		floorx[this.xx].style.display='none';
        
	}
}


var youmulu=document.getElementsByClassName('bannercaidan');
var icon=document.getElementsByClassName('icon');
var icon1=document.getElementsByClassName('icon1');
var dh=document.getElementsByClassName('dh');
for(var i=0;i<dh.length;i++){
	
	
	for(var j=0;j<icon1.length;j++){
           icon1[j].style.display='none';
           youmulu[j].style.display='none';
		}
	dh[i].kkk=i;
	dh[i].onmouseover=function(){
		icon[this.kkk].style.display='none';
		youmulu[this.kkk].style.display='block';
		icon1[this.kkk].style.display='block';
	}
	dh[i].onmouseout=function(){
		icon1[this.kkk].style.display='none';
		icon[this.kkk].style.display='block';
		youmulu[this.kkk].style.display='none';

	}
}






var right=document.getElementsByClassName('right')[0];
var xiajiantou1=document.getElementsByClassName('xiajiantou1')[0];
var xiajiantou2=document.getElementsByClassName('xiajiantou2')[0];
	right.onmouseover=function(){
		xiajiantou1.style.display='none';
		xiajiantou2.style.display='block';
	}
	right.onmouseout=function(){
		xiajiantou2.style.display='none';
		xiajiantou1.style.display='block';

	}
















}






























