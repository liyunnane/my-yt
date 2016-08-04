	function xiankuangxiaoguo(box){
        for(var i=0;i<box.length;i++){
            box[i].index=i;
        	  box[i].onmouseover=function(){
            var left=box[this.index].getElementsByClassName('leftt')[0];
      	    var right=box[this.index].getElementsByClassName('rightt')[0];
      	    var top=box[this.index].getElementsByClassName('topt')[0];
      	    var bottom=box[this.index].getElementsByClassName('bottomt')[0];
      	    var boxwidth=box[this.index].offsetWidth;
            var boxheighe=box[this.index].offsetHeight;
 
      		animate(left,{height:boxheighe});
      		animate(top,{width:boxwidth});
      		animate(right,{height:boxheighe});
      		animate(bottom,{width:boxwidth});





        }

      		box[i].onmouseout=function(){
            var left=box[this.index].getElementsByClassName('leftt')[0];
            var right=box[this.index].getElementsByClassName('rightt')[0];
            var top=box[this.index].getElementsByClassName('topt')[0];
            var bottom=box[this.index].getElementsByClassName('bottomt')[0];
            var boxwidth=box[this.index].offsetWidth;
            var boxheighe=box[this.index].offsetHeight;
      		animate(left,{height:0})
      		animate(top,{width:0})
      		animate(right,{height:0})
      		animate(bottom,{width:0})
        }
      	
      }
  }