// W O R K I N G    O N     D O C U M E N T

// let val;
// val=document;
// val=document.all[1];
// val=document.all.length;
// val=document.URL;
// val=document.characterSet;
// val=document.links[1];
// val=document.images[1];
// val=document.scripts[0].getAttribute("src");
// val=document.contentType;
// val=document.forms[0].method;
// console.log(val);



//  C A L L B A C K forEach() 

// let scripts = document.scripts;
// console.log(scripts);
// scripts.forEach(function(script){    - ERROR - scripts.forEach is not a function  (forEach is for arrays only)
//     console.log(script);
// });

// let scriptsArr = Array.from(scripts);  // making array
// scriptsArr.forEach(function(script){
//     console.log(script.getAttribute("src"));
// }); //   WORKING CODE



// ***************** D O M   S E L E C T O R S *********************

// S I N G L E    E L E M E N T S     S E L E C T O R S          (done)

//  -  C H A N G E    S T Y L I N G

// console.log(document.getElementById("parag1"));
// document.getElementById("parag1").style.background="yellow";
// document.getElementById("parag1").innerHTML='<span style="color:red">Lorem ipsum.</span>';
// document.getElementById("parag1").style.display="none";
// const parag1 = document.getElementById("parag1");
// parag1.style.padding="20px";
// document.querySelector("#parag2").style.padding="20px";
// console.log(document.querySelector("#parag2"));
// document.querySelector("h1").style.textAlign="center";
// document.querySelector("ul").style.padding="20px";
// document.querySelector(".box").style.padding="20px";
// const start=document.getElementById("start");
// console.log(start.className);
// start.style.background="white";
// document.getElementById("start").style.display="none";

//  -  C H A N G E   C O N T E N T

// start.textContent="Chuck Norris";
// start.innerText="Andrzej Gołota";
// start.innerHTML='<h2 style="color:red">Tyson Fury<h2>';
// document.querySelector() - much powerful, you can use everything to select, just like jQuery $()
// console.log(document.querySelector('#start'));
// document.querySelector('li').style.color="red"; // only first one is red, becouse it's single selector
// document.querySelector('li:last-child').style.color="green";
// document.querySelector('li:nth-child(3)').style.color="blue";
// document.querySelector('li:nth-child(3)').textContent="blue";
// document.querySelector('li:nth-child(even)').textContent="even"; // only one is changed


// M U L T I P L E    E L E M E N T S     S E L E C T O R S     (done)

// document.getElementsByClassName();

//const items=document.getElementsByClassName("item");
// console.log(items);
// console.log(items[0]);
// items[4].style.color="purple";

// let lis=document.getElementsByTagName("li");
//console.log(lis[3]);
// lis[3].style.color="aqua";
// lis[2].textContent="winner!";

// Convert to Array
// lis=Array.from(lis);
// lis.reverse();
// console.log(lis);

// lis.forEach(function(li, index){
//     console.log(li.className);
//     li.textContent="gggg";
//     li.textContent=`${index} :hello`; 
// });

// const lists = document.querySelectorAll("ul.collection li.item")  //node list, not neceserry converting to array
// console.log(lists);
// lists.forEach(function(li){
//     li.style.color="red";
// })

// const odd=document.querySelectorAll('li:nth-child(odd)');
// odd.forEach(function(li){
//     li.style.background="#ccc";
// })

// const even=document.querySelectorAll('li:nth-child(even)');
// for(let i=0;i<even.length;i++){
//     even[i].style.background="#f4f4f4";
// };


// T R A V E R S I N G     D O M      (don't work!!!!!!)
// let vac;
// const list=document.querySelectorAll('ul.collection');
// const listItem=document.querySelectorAll('li.item:first-child');
// let vax=document.body.childNodes;
// vac=list;
// vac = listItem;
// get child node
// vac=listItem.childNodes;  

// get children element nodes
// vac=list.childNodes;
// vac=list.children;
// console.log(vac);


// **************************   C R E A T I N G    E L E M E N T S (done)   *************************************
//const li = document.createElement('li');
//add class
//li.className='item';
//add id
//li.id='new-item';
//add atribute
//li.setAttribute('title','new item');
//create text node and append
//li.appendChild(document.createTextNode('hello world!'));
//creating link
//const link=document.createElement('a');
//append innerHTML
//link.innerHTML="<a href=#> delete </a>";
//append link to li
//li.appendChild(link);
//append li as a child to ul
//document.querySelector('ul.collection').appendChild(li);

//console.log(li);


// R E P L A C I N G   E L E M E N T S       (nearly done)
//create element
// const newHeading= document.createElement("h2");
//add id
// newHeading.id="newHeading";
//new text node
// newHeading.appendChild(document.createTextNode('Task List'));
//get the old heading
// const oldHeading=document.getElementById('task-title');
//parent
// const container=document.querySelector(".container");
//replace
// container.replaceChild(newHeading,oldHeading);

//REMOBE ELEMENT
// const lis=document.querySelectorAll('li');
// const list=document.querySelectorAll('ul');
//remove list item
// lis[0].remove();
//remove child
//list.removeChild(lis[3]); (don't work!!!)
// console.log(list);

//CLASSES and ATTR
// const firstLi=document.querySelector('li:first-child');
// const link=firstLi.children[0];
//classes
// let val;
// val=link.className;
// val=link.classList;
// val=link.classList[0];
// link.classList.add('test');
// val=link.classList;
//attr
// val=link.getAttribute('href');
// val=link.setAttribute('href','http://google.com');
// val=link.hasAttribute('href');
// link.setAttribute('title','google');
// link.removeAttribute('title');
// val=link;

// console.log(val);


//***********************     E V E N T   L I S T E N E R S    ****************************
// document.querySelector(".remove-task").addEventListener('click',
// function(e){
//     console.log("hello world");

//     e.preventDefault();
// });
//named function

// document.querySelector('.remove-task').addEventListener('click', onClick);
// function onClick(e){
//     console.log('hello world');
//     let val;
//     val=e;
//     //event target element
//     val=e.target;
//     val=e.target.className;
//     val=e.target.classList;
//     //event type
//     val=e.type;
//     //timestamp
//     val=e.timeStamp;
//     //coords event relative to window
//     val=e.clientY;
//     val=e.clientX;
//     //coords event relative to the element
//     val=e.offsetY;
//     val=e.offsetX;
//     console.log(val);
// };


//*************************    M O U S E    E V E N T S   ************************** (done)

// const removeBtn = document.querySelector('.remove-task');
// const card=document.querySelector('.container');
// const heading=document.querySelector('h2');

// //add click
// removeBtn.addEventListener('click', runEvent);
// //add dblclick
// removeBtn.addEventListener('dblclick', runEvent);
// //mouseenter
// card.addEventListener('mouseenter', runEvent);
// //mousemove
// card.addEventListener('mousemove', runEvent);
// //event handler
// function runEvent(e){
//     console.log(`EVENT TYPE: ${e.type}`);

//     heading.textContent=`Mouse x: ${e.offsetX}  Mouse y: ${e.offsetY}`;
//     document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY}, 40)`;
// }


//************************** K E Y B O A R D    E V E N T S (done) ***************************
// const form=document.querySelector('form');
// const taskInput=document.querySelector('#task');
// const heading=document.querySelector('h2');
// const select=document.querySelector('#select');

// form.addEventListener('submit', runEvent);
// taskInput.value='';

// //taskInput.addEventListener('keydown', runEvent);
// //taskInput.addEventListener('keyup', runEvent);
// //taskInput.addEventListener('keypress', runEvent);
// //taskInput.addEventListener('focus', runEvent);
// //taskInput.addEventListener('cut', runEvent);
// //taskInput.addEventListener('paste', runEvent);
// select.addEventListener('change', runEvent);

// function runEvent(e){
//     console.log(`Event type: ${e.type}`);
//     console.log(e.target.value);
//     heading.innerHTML=e.target.value;

//     //e.preventDefault();
// }


//****************************** E V E N T   B U B B L I N G   &   E V E N T    D E L E G A T I O N   ***************************
//EVENT BUBBLING
// const cardTitle=document.querySelector('#task-title');
// const card = document.querySelector('.card');
// const container = document.querySelector('.container');

// cardTitle.addEventListener('click', function(){
//     console.log('card title');
// })

// card.addEventListener('click', function(){
//     console.log('card');
// })

// container.addEventListener('click', function(){
//     console.log('container');
// })

//EVENT DELEGATION

document.body.addEventListener('click', deleteItem);

function deleteItem(e){
    // console.log('delete item');
    // console.log(e.target);
    if(e.target.className==="delete"){
        console.log('delete item');
        e.target.parentElement.remove();
    }
    // if(e.target.parentElement.classList.contains('delete')){
    //     console.log('delete item');   //don't work!!!!!!!!!!! problems with parent?!?!?!?!
    // }
}