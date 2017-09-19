window.onload = function(){
	//侧导航
	let aside = document.getElementsByClassName('ban4')[0];
	let lis = aside.getElementsByTagName('li');
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			let items=this.getElementsByClassName('item')[0];
			items.className='item block';
		}
		lis[i].onmouseout=function(){
			let items=this.getElementsByClassName('item')[0];
			items.className='item';
		}
	}
	// 轮播
    let btn1 =$('.imglist')[0];
    let img= $('li',btn1);
    let ban2=$('.ban2')[0];
    let btn3 =$('.banner1-right',btn1)[0];
    let btn4 =$('.banner1-left',btn1)[0];

    console.log(ban2);
    // 按钮
	let btn = $('.ban5')[0];
    let lis1= $('li',btn);    
    // 实现自动轮播
    let num = 0;
    let t;
    t = setInterval(move,2000);
    function move(){
        num++;
        if(num==img.length){
            num=0;
        }
        for(let i=0;i<img.length;i++){
            img[i].style.display='none';
            lis1[i].style.background= '#A2A2A2';
        }
        img[num].style.display='block';
        lis1[num].style.background = '#F1F1F1';
    }
    // 当鼠标移入时停止自动轮播
    ban2.onmouseover=function(){
        clearInterval(t);
    }
    ban2.onmouseout=function(){
        t = setInterval(move,2000);
    }
    // 鼠标移入
    for(let i=0;i<lis1.length;i++){
        lis1[i].onmouseover = function(){
            clearInterval(t);
            for(let j=0;j<img.length;j++){
                img[j].style.display='none';
                lis1[j].style.background= '#A2A2A2';
            }
            img[i].style.display='block';
            lis1[i].style.background = '#F1F1F1';
            num=i;
        }
        lis1[i].onmouseout = function(){
            t = setInterval(move,2000);
        }
    }
    // 右按钮
    btn3.onclick=function(){
        move();
    }
    // 左按钮
    btn4.onclick=function(){
        moveL();
    }
    function moveL(){
        num--;
        if(num<0){
            num=img.length-1;
        }
        for(let i=0;i<img.length;i++){
            img[i].style.display='none';
            lis1[i].style.background= '#A2A2A2';
        }
        img[num].style.display='block';
        lis1[num].style.background = '#F1F1F1';
    }
}   