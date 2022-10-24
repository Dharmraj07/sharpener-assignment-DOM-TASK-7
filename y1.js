/*var itemlist=document.querySelector('#items');
console.log(itemlist.parentNode);
itemlist.parentNode.style.backgroundColor="yellow";
itemlist.parentNode.parentNode.style.backgroundColor="red";*/
var itemlist=document.querySelector('#items');
/*console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor="red"
console.log(itemlist.parentElement.parentElement)*/
//childNodes

//console.log(itemlist.childNodes);

//console.log(itemlist.children);
//itemlist.children[2].style.backgroundColor="red"
/*
firstChild
console.log(itemlist.firstChild);
itemlist.firstElementChild.innerHTML="hello world!!";
itemlist.firstElementChild.style.backgroundColor="red";
*//*
// lastChild
console.log(itemlist.lastChild);
itemlist.lastElementChild.innerHTML="!!Axe";
itemlist.lastElementChild.style.backgroundColor="yellow";



*/
// nextSibling
console.log(itemlist.nextSibling);
// nextElementSibling
itemlist.nextElementSibling.innerHTML="Graph";
// previousSibling
console.log(itemlist.previousSibling);
itemlist.previousElementSibling.style.backgroundColor="red"
//
     //----------------------Create Element--------------->>>>>>>>
     var newDiv=document.createElement('div');
     newDiv.className="hello";
     newDiv.id='hello World!!';
     newDiv.setAttribute('title','hello div')
     
     console.log(newDiv)
    var newdivText=document.createTextNode('Where are you!!')
    newDiv.appendChild(newdivText);
    var container=document.querySelector('header .container')
    var h1=document.querySelector('header h1')
    container.insertBefore(newDiv,h1)
    newDiv.style.fontSize='33px'
    newDiv.style.color="black" 
