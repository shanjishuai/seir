$(document).ready(function(){
    /*自制的小屏下拉菜单*/
    $("#menu").click(function(){
		$("#show").toggleClass("none");
		$("#show").slideToggle("slow");
	});
	var btn=document.getElementById("btn3");//按钮
      btn.onclick=function(){
	      if(btn.innerHTML=="查看更多"){
	      	$(".fover").css("display","block");
	      	btn.innerHTML="关闭";
	      }else{
	      	$(".fover").css("display","none");
	      	btn.innerHTML="查看更多";
	      }
      }
});