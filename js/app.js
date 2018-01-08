// let val;
// val =parseFloat(100.30);
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(0));

//DOM selectors

document.getElementById("parag1").style.background="yellow";
document.getElementById("parag1").innerHTML='<span style="color:red">Lorem ipsum.</span>';

const parag1 = document.getElementById("parag1");
parag1.style.padding="20px";

document.querySelector("#parag2").style.padding="20px";
//console.log(document.querySelector("#parag2"));

document.querySelector("h1").style.textAlign="center";
document.querySelector("ul").style.padding="20px";
document.querySelector(".box").style.padding="20px";

let val;

val=document;
val=document.all[1];
val=document.all.length;
val=document.URL;
val=document.characterSet;
val=document.links[1];
val=document.images[1];
val=document.scripts[0].getAttribute("src");
//console.log(val);

//Callback forEach
let scripts = document.scripts;
let scriptsArr = Array.from(scripts);
scriptsArr.forEach(function(script){
    //console.log(script.getAttribute("src"));
});


// S I N G L E    E L E M E N T S     S E L E C T O R S 
//change styling
const start=document.getElementById("start");
//console.log(start.className);
start.style.background="white";
//document.getElementById("start").style.display="none";
//change content
start.textContent="Chuck Norris";
start.innerText="Andrzej Gołota";
start.innerHTML='<h2 style="color:red">Tyson Fury<h2>';
//document.querySelector() - much powerful, you can use everything to select, just like jQuery $()
//console.log(document.querySelector('#start'));
document.querySelector('li').style.color="red"; // only first one is red, becouse it's single selector
document.querySelector('li:last-child').style.color="green";
document.querySelector('li:nth-child(3)').style.color="blue";
document.querySelector('li:nth-child(3)').textContent="blue";
document.querySelector('li:nth-child(even)').textContent="even"; // only one is changed


// M U L T I P L E    E L E M E N T S     S E L E C T O R S 
//document.getElementsByClassName();
const aqua=document.getElementsByClassName('item'); 
//console.log(collection[2]);
aqua[5].style.background="aqua";

const items=document.querySelectorAll(".item");
items[4].style.background="aqua";

const odd=document.querySelectorAll('li:nth-child(odd)');
odd.forEach(function(li){
    li.style.background="grey";
})

const even=document.querySelectorAll('li:nth-child(even)');
for(let i=0;i<even.length;i++){
    even[i].style.background="#333333";
};



let lis=document.getElementsByTagName("li");
//console.log(lis[3]);
lis[3].style.color="aqua";
lis[2].textContent="winner!";

//convert to array
lis=Array.from(lis);
lis.reverse();
console.log(lis);

lis.forEach(function(li, index){
    console.log(li.className);
    //li.textContent='${index} :hello'; //nie działa
});

