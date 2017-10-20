var header = document.querySelector(".header");
var spnMid = header.querySelector(".spnMid");
var spnsA = spnMid.querySelectorAll('a');
var lineTh = spnMid.querySelector('.lineTh');
for(var i=0;i<spnsA.length;i++){
    spnsA[i].index = i;
    spnsA[i].addEventListener("click",function(){
        for(var j=0;j<spnsA.length;j++){
            spnsA[j].classList.remove('on');
        }
        spnsA[this.index].classList.add('on');
        lineTh.style.transform = "translate3d("+ 178* this.index +"%,0,0)";
        lineTh.style.transition = "transform .3s";
    },false);
}