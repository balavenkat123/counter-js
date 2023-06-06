let count=0
function increment(){
    count=count+1
    document.getElementById("count").innerText= count
    console.log(count);
    if (count==30){
        document.getElementById("people").innerText="BALA"
    }  
}  

function save(){
    
    document.getElementById("saved").innerText+=" " + count+" - "
}
  

// counting---

// for(let i=0;i<4000;i++){
//     count+=count
//     document.getElementById("count").innerText= i
// }
//document.getElementById("count").innerText=10;

// let count=0;
// console.log(counnt);

// var myage=20;
// var dogage=5;

// let mul=myage*dogage;
// console.log(mul);

// let bonuspoints=50
 
// bonuspoints=bonuspoints+50
// bonuspoints=bonuspoints-75
// console.log(bonuspoints);
// bonuspoints=bonuspoints+45
// console.log(bonuspoints);