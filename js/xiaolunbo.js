function xiaolunbo(zsx,ave,lists,list3,addd,aeee,abbb){
	   	var obj=$('#zsx');
	   	var as=$('.ave',obj);	   	
		var len=as.length;
		var numm=0;
		var next=0;
		var lists=$('.lists',obj)[0];
		var list=$('.list3',lists);
		var mbb=true;		
		var winw=parseInt(getStyle(obj,'width'));
		var t;
		var jiantou=$('.addd')[0];
		var ljiantou=$('.aeee')[0];
		var rjiantou=$('.abbb')[0];
		//初始化
		for(var i=0;i<len;i++){
			as[i].style.left=winw+'px';

		}
		as[numm].style.left=0;
		list[numm].style.background='red';
        jiantou.style.display='none';


		
         obj.onmouseover=function(){
           jiantou.style.display='block';
	       animate(obj,{opacity:0.9});;


         	
         }
         //鼠标离开开始轮播
         obj.onmouseout=function(){
          jiantou.style.display='none';
	       animate(obj,{opacity:1});;

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
	}







function xiaolunbo1(zsxs,aves,listss,list3s,addds,aeees,abbbs){
	   	var obj=$('#zsxs');
	   	var as=$('.aves',obj);
		var len=as.length;
		var numm=0;
		var next=0;
		var lists=$('.listss',obj)[0];
		var list=$('.list3s',lists);
		var mbb=true;		
		var winw=parseInt(getStyle(obj,'width'));
		var t;
		var jiantou=$('.addds')[0];
		var ljiantou=$('.aeees')[0];
		var rjiantou=$('.abbbs')[0];
		//初始化
		for(var i=0;i<len;i++){
			as[i].style.left=winw+'px';

		}
		as[numm].style.left=0;
		list[numm].style.background='red';
        jiantou.style.display='none';


		
         obj.onmouseover=function(){
           jiantou.style.display='block';
	       animate(obj,{opacity:0.9});;


         	
         }
         //鼠标离开开始轮播
         obj.onmouseout=function(){
          jiantou.style.display='none';
	       animate(obj,{opacity:1});;

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
	}








function xiaolunbo2(zsxss,avess,listsss,list3ss,adddss,aeeess,abbbss){
	   	var obj=$('#zsxss');
	   	var as=$('.avess',obj);
		var len=as.length;
		var numm=0;
		var next=0;
		var lists=$('.listsss',obj)[0];
		var list=$('.list3ss',lists);
		var mbb=true;		
		var winw=parseInt(getStyle(obj,'width'));
		var t;
		var jiantou=$('.adddss')[0];
		var ljiantou=$('.aeeess')[0];
		var rjiantou=$('.abbbss')[0];
		//初始化
		for(var i=0;i<len;i++){
			as[i].style.left=winw+'px';


		}
		as[numm].style.left=0;
		list[numm].style.background='red';
        jiantou.style.display='none';


		
         obj.onmouseover=function(){
           jiantou.style.display='block';
	       animate(obj,{opacity:0.7});;


         	
         }
         //鼠标离开开始轮播
         obj.onmouseout=function(){
          jiantou.style.display='none';
	       animate(obj,{opacity:1});;

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
	}






	function xiaolunbo3(zsxsss,avesss,listssss,list3sss,adddsss,aeeesss,abbbsss){
	   	var obj=$('#zsxsss');
	   	var as=$('.avesss',obj);
		var len=as.length;
		var numm=0;
		var next=0;
		var lists=$('.listssss',obj)[0];
		var list=$('.list3sss',lists);
		var mbb=true;		
		var winw=parseInt(getStyle(obj,'width'));
		var t;
		var jiantou=$('.adddsss')[0];
		var ljiantou=$('.aeeesss')[0];
		var rjiantou=$('.abbbsss')[0];
		//初始化
		for(var i=0;i<len;i++){
			as[i].style.left=winw+'px';


		}
		as[numm].style.left=0;
		
		list[numm].style.background='red';
        jiantou.style.display='none';


		
         obj.onmouseover=function(){
           jiantou.style.display='block';
	       animate(obj,{opacity:0.7});;


         	
         }
         //鼠标离开开始轮播
         obj.onmouseout=function(){
          jiantou.style.display='none';
	       animate(obj,{opacity:1});;

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
	}

