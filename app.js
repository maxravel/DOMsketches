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
console.log(document.querySelector("#parag2"));

