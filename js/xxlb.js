function xxlb(obj){
     
       
        
		var assts=$('.xxlunbo',obj);
		var lensts=assts.length;
		var nummsts=0;
		var nextsts=0;
		var mbbsts=true;
		var kuandu=parseInt(getStyle(obj,'width'));
		var k;
		var jianyouts=$('.pppp',obj)[0];
		var lljiantou=$('.zuojian1',jianyouts)[0];
		var rrjiantou=$('.youjian1',jianyouts)[0];
		//初始化
		for(var i=0;i<lensts;i++){
			assts[i].style.left=kuandu+'px';

		}
		assts[nummsts].style.left=0;
       







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
        
			

		function moveLLl(){
			//获取下一张图的角标
			nextsts++;
			if(nextsts==lensts){
				nextsts=0;
			}
			//初始化下一张位置
			assts[nextsts].style.left=kuandu+'px';

			//控件轮播
			

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
			
			//图片轮播
			animate(assts[nummsts],{left:kuandu});
			animate(assts[nextsts],{left:0},function(){mbbsts=true;});
			nummsts=nextsts;


		}



}