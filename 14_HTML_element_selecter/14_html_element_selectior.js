console.log("This tutorial is for understanding html element selector...");
/*Element selector:
  1. single element selector
  3. multi element selector
 */

//// 1. single element selector📌📌📌

// let element = document.getElementById("item1");
// console.log(element);


// // element = element.className;
// // element = element.idName;
// // element = element.childNodes;
// // element = element.parentNode;
// element.style.color = 'white';
// element.style.background = 'black';
// element.style.padding = '10px';
// element.style.marginRight = '500px';
// element.style.textAlign = 'center';
// element.style.fontSize = '1.5rem';
// console.log(element);
// element.innerText = "Sanjay is a good boy";
// element.innerHTML = "<b> Sanjay is a good boy </b>";




//color changing condition by 0 and 1 created by me📌📌📌

// let i = prompt("Enter your number");

// if (Number(i) === 0) {
//     element.style.background = 'green';
// }
// else if (Number(i) === 1) {
//     element.style.background = 'red';
// }
// else {
//     element.style.background = 'black';
//     element.style.fontSize = '5rem';
// }



// 2. Quary selector📌📌📌

// let selector1 = document.querySelector("#item2");
//     selector1 = document.querySelector('.myClass');
//     selector1 = document.querySelector('div');
// console.log(selector1);

// selector1.style.color = "white";
// selector1.style.background = "blue";
// selector1.style.marginRight = '200px';
// selector1.style.padding = '5px';


//// 1. Multi element selector📌📌📌


// let sel2 = document.getElementsByClassName('head');
// console.log(sel2);



// let oneUnderOne = sel2[0].getElementsByClassName('myClass');
//    console.log(oneUnderOne);
// for (let i = 0; i < 4; i++) {
//     oneUnderOne[i].style.color = "red";
//     oneUnderOne[i].style.background = "black";    
// }


// //------------
// let tagElement = document.getElementsByTagName('div');
// console.log(tagElement);

// Array.from(tagElement).forEach(e =>{
//     e.style.color= "pink";
// });

