$(function(){
    if(localStorage.f==1){
       h=localStorage.h;
       m=localStorage.m;
       s=localStorage.s;
       $('#clock').after("开始时间:"+h+":"+m+":"+s);
       $('#in').html("结束");
   }
});

$('.btn').click(function(){
    if(localStorage.f!=1){
	var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
	localStorage.h=h;
    localStorage.m=m;
    localStorage.s=s;
    localStorage.f=1;
	$('#clock').after("<h2>开始时间:</h2>"+h+":"+m+":"+s);
    }else{
        localStorage.f=0;
        var today=new Date();
        var h=today.getHours();
        var m=today.getMinutes();
        var s=today.getSeconds();
        var ch=h-localStorage.h;
        var cm=m-localStorage.m;
        var cs=s- localStorage.s;
        $('#clock').after("<h2>结束时间:</h2>"+h+":"+m+":"+s);
        $('#clock').after("<h2>花费时间:</h2>"+ch+":"+cm+":"+cs);
    }
});