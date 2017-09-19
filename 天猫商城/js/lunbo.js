function getClass(classname,ranger){
	ranger = ranger ? ranger : ducument;
	if(document.getElementsByClassName){
		return ranger.getElementsByClassName(classname);
	}else{
		var newarr = [];
		var all = ranger.getElementsByTagName('*');
		for(var i=0;i<all.length;i++){
		   	if(checkClass(all[i].className,classname)){
		   		newarr.push(all[i]);
		   	}
		}
		return newarr;
	}
}
/*
checkClass(className,classname)
className 里面是否包含 classname
className 'box box1 box2'
classname 'box'
 */
function checkClass(className,classname){
	var arr = className.split(' ');
	for(var i=0;i<arr.length;i++){
		if(arr[i] == classname){
			return ture;
		}
	}
	return false;
}
/*
 
 */
function $(select,ranger){
	ranger = ranger || document;
	var first = select.charAt(0);
	if(first =='.'){
		// class
		return getClass(select.substring(1),ranger);
	}else if(first=='#'){
		// id
		return document.getElementById(select.substring(1));
	}else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
        // tag
        return ranger.getElementsByTagName(select);
	}
}









    	/*for(let i=0;i<lis1.length;i++){
    		lis1[i].onmouseover = function(){
    			for(let i =0;i<img.length;i++){
    				//先让所有的都消失掉 再让对应的显示，这样就不会发生覆盖
    				img[i].style.display = 'none'; 
    				lis1[i].style.background= '#A2A2A2';
    			}
    		    // 让移入的显示
    			img[i].style.display = 'block';
    			lis1[i].style.background = '#F1F1F1';
    		}
    	}*/
   /* let now = 0;
    for(let i =0;i<lis1.length;i++){
    	lis1[i].onclick=function(){
    		// 所有的消失，对应的显示
    		img[now].style.display='none';
    		img[i].style.display='block';
    		now=i;
    	}
    }*/
    // 用var
 /* 
    let now = 0;
    for(var i =0;i<lis1.length;i++){
    	lis1[i].index=i; // 换成var需要加一个自定义属性，使i与它的下标对应
    	lis1[i].onclick=function(){
    		// 所有的消失，对应的显示
    		img[now].style.display='none';
    		img[this.index].style.display='block';
    		now=this.index;  // 谁调用this，this就会指向谁，在这里指向lis1
    	}
    }*/
    // 闭包
    /*
    for(var i=0;i<lis1.length;i++){
        lis1[i].index=i;
        lis1[i].onclick=(function(i){
	        return function(){
		        img[now].style.display='none';
	    		img[i].style.display='block';
	    		now=i;
	        }
        })(i)
    }
     */