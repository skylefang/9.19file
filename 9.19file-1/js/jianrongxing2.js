function getClass(classname){
    if(false){   // 括号中也可以是document.getElementByClassName
      return document.getElementByClassName(classname)
    }else{
    	var newarr = [];
    	var all = document.getElementsByTagName('*');
    	for(var i=0;i<all.length;i++){
    		if(all[i].className==classname){
    			newarr.push(all[i]);
    		}
    	}
    	return newarr;
    }
}
