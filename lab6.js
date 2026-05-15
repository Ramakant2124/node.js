const message = "Wel-Come to Node Js";
const times=5;
const delay=1000;
for (let i=1;i<=times;i++){
setTimeout(()=>{
    console.log(message+"-"+i);}
,i* delay);}


