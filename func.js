$(function(){
   var f=0;
   var num=4;
   if(localStorage.f){
       f=localStorage.f;
   }
   if(f==1){
       $("#in").html("ING");
       h=localStorage.h;
       m=localStorage.m;
       s=localStorage.s;
       clock.innerHTML = "Bg: "+h+":"+m+":"+s;
   }
   $("#num").append("Ac's num:  "+num); 
   $("#in").click(function(){
    if(f==0){
        $("#in").html("ING");
    }else{
        $("#in").html("St");
    }
    var clock = document.getElementById('clock');
    init_clock(clock,f);
    
   });
});

function init_clock(el,f){
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m=m>=10?m:('0'+m);
    s=s>=10?s:('0'+s);
    if(f==0){
        localStorage.h=h;
        localStorage.m=m;
        localStorage.s=s;
        localStorage.f=1;
        el.innerHTML = "Bg:"+h+":"+m+":"+s;
    }else{
        h-=localStorage.h;
        m-=localStorage.m;
        s-=localStorage.s;
        el.innerHTML = "Cost:"+h+":"+m+":"+s;
        localStorage.removeItem("f");
    }
}
