/*鼠标悬停显示侧边栏*/
window.onload=function(){
  var more=document.getElementById("more");

  var morethings=document.getElementById("morethings");

  more.onmouseover=function(){
    morethings.style.display="block";
  }
  more.onmouseout=function(){
    morethings.style.display="none";
  }
  morethings.onmouseover=function(){
    morethings.style.display="block";
  }
  morethings.onmouseout=function(){
    morethings.style.display="none";
  }

}
