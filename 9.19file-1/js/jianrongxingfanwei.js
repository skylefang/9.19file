// ie低版本中没有通过获取类名操作元素的方法所以用现有的方法模拟ClassName
// ranger进来要替换的参数为document,所以它代表的是一个对象表示获取元素的范围
function getClass(classname,ranger){
	ranger = ranger ? ranger: document
	if(document.getElementsByClassName){
		return ranger.getElementsByClassName(classname);
	}else{
		var newarr = [];
		var all = renger.getElementsByTagName('*');
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