const increase= document.getElementById('inc');
const decrease= document.getElementById('dec');
const reset= document.getElementById('rst');
const countlabel = document.getElementById('countlabel');
let count = 0;


increase.onclick = function(){
    count++;
    countlabel.textContent=count;
}
decrease.onclick = function(){
   count--;
   countlabel.textContent=count;
}
reset.onclick = function(){
    count=0;
    countlabel.textContent=count;
}