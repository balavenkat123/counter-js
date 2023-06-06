let count=0
let adder=document.getElementById("increment-btn")
let saver=document.getElementById("save-btn")

adder.addEventListener("click",function() {
    count=count+1
    document.getElementById("count").innerText= count
    
    if (count==30){
        document.getElementById("people").innerText="BALA"
    } 

})

saver.addEventListener("click",function(){
    document.getElementById("saved").innerText+=" " + count+" - "
})



// function increment(){
//     count=count+1
//     document.getElementById("count").innerText= count
    
//     if (count==30){
//         document.getElementById("people").innerText="BALA"
//     }  
// }  

// function save(){
    
//     document.getElementById("saved").innerText+=" " + count+" - "
// }
  

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