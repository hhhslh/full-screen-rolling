$(function(){
	 // $("#fullpage").fullpage();

	$('#fullpage').fullpage( {
			// anchors: ['page1', 'page2', 'page3', 'page4'],
			sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],//设置背景颜色 
			slidesColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
	        verticalCentered: true,                             //设置section中的内容是否垂直居中  
	        resize:           true,                             //字体是否随着窗口缩放而缩放  
	        scrollingSpeed: '700',                              //滚动的毫秒数  
	        easing: 'easeInOutBounce',                          //滑动动画
	  	// navigation:true,
    //     slidesNavigation:true,
    //     slidesNavPosition:"top",
    //     controlArrowColor:"red",

	});

});



