//#485.1
// function modifyElement(selector, newContent) {
//     let element = document.querySelector(selector);
//     if (element) {
//       element.textContent = newContent;
//     } else {
//       console.log("Element not found");
//     }
//   }
  
//   modifyElement("#elem1", "text1");
//   modifyElement("#elem2", "text2");
  
//#485.2
// function setAttr(selector, attributeName, attributeValue) {
//     let element = document.querySelector(selector);
//     if (element) {
//       element.setAttribute(attributeName, attributeValue);
//     } else {
//       console.log("Element not found");
//     }
//   }
  
//   setAttr("#elem1", "title", "Title for elem1");
//   setAttr(".class1", "data-id", "12345");
  
//#486.1
// function appendText(selector, text) {
//     let elements = document.querySelectorAll(selector);
//     if (elements.length > 0) {
//       elements.forEach(function(element) {
//         element.textContent += text;
//       });
//     } else {
//       console.log("Element not found");
//     }
//   }
  
//   appendText("#elem1", " Additional text for elem1");
//   appendText(".class1", " Additional text for class1");
  

//#487.1
// function addExclamationMark() {
//     let paragraphs = document.querySelectorAll('p');
//     paragraphs.forEach(function(paragraph) {
//       paragraph.textContent += '!';
//     });
//   }

//   addExclamationMark();

//#488.1
// function addExclamationMark() {
//     let paragraphs = document.querySelectorAll('p');
//     paragraphs.forEach(function(paragraph, index) {
//       paragraph.textContent = (index + 1) + '. ' + paragraph.textContent;
//     });
//   }

//   addExclamationMark();

//#489.1
// function addExclamationMark() {
//     let paragraphs = document.querySelectorAll('p');
//     paragraphs.forEach(function(paragraph, index) {
//       paragraph.textContent = (index + 1) + '. ' + paragraph.textContent;
//     });
//   }

//   function appendText(element, text) {
//     element.textContent += text;
//   }

//   let paragraph1 = document.getElementById('paragraph1');
//   appendText(paragraph1, ' Дополнительный текст.');

//   addExclamationMark();

//#489.2
// function addExclamationMark() {
//     let paragraphs = document.querySelectorAll('p');
//     paragraphs.forEach(function(paragraph, index) {
//       paragraph.textContent = (index + 1) + '. ' + paragraph.textContent;
//     });
//   }

//   function appendText(element, text) {
//     element.textContent += text;
//   }

//   let paragraph1 = document.getElementById('paragraph1');
//   appendText(paragraph1, '!');

//   let paragraph2 = document.getElementById('paragraph2');
//   appendText(paragraph2, '!');

//   let paragraph3 = document.getElementById('paragraph3');
//   appendText(paragraph3, '!');

//   addExclamationMark();

//#489.3
// function setValue(input, text) {
//     input.value = text;
//   }

//   let inputField = document.getElementById('inputField');
//   setValue(inputField, 'Пример текста для инпута');

//#490.1
// function appendText(elements, text) {
//     elements.forEach(function(element) {
//       element.innerHTML += text;
//     });
//   }

//   let paragraphs = [document.getElementById('paragraph1'), document.getElementById('paragraph2')];
//   appendText(paragraphs, ' Дополнительный текст');

//#490.2
// function appendElem(ulElement, text) {
//     let newLi = document.createElement('li');
//     newLi.appendChild(document.createTextNode(text));
//     ulElement.appendChild(newLi);
//   }

//   let ul = document.getElementById('list');
//   appendElem(ul, 'Новый элемент');

//#490.3
// function appendElem(ulElement, text) {
//     let newLi = document.createElement('li');
//     newLi.appendChild(document.createTextNode(text));
//     ulElement.appendChild(newLi);
//   }

//   let ul = document.getElementById('list');
//   let arr = ['Элемент 3', 'Элемент 4', 'Элемент 5'];

//   arr.forEach(function(item) {
//     appendElem(ul, item);
//   });



//#491 
// function createTable(rows, cols, parent) {  
//     let table = document.createElement('table');  
//     for (let i = 0; i < rows; i++) { 
//       let row = table.insertRow(); 
//       for (let j = 0; j < cols; j++) { 
//         let cell = row.insertCell(); 
//         cell.textContent = Row ${i + 1}, Cell ${j + 1}; 
//       } 
//     } 
//     parent.appendChild(table);  
// } 
 
// #492.1 
// function createTable(rows, cols) {  
//     let table = document.createElement('table');  
//     for (let i = 0; i < rows; i++) { 
//       let row = table.insertRow(); 
//       for (let j = 0; j < cols; j++) { 
//         let cell = row.insertCell(); 
//         cell.textContent = Row ${i + 1}, Cell ${j + 1}; 
//       } 
//     } 
//     return table;  
//   } 
//   let div = document.querySelector('#elem');  
//   let table = createTable(3, 4);  
//   table.style.color = 'red';  
//   div.appendChild(table); 
 
// #492.2 
// function createTable() { 
//     var table = document.createElement('table'); 
//     table.style.color = 'red'; 
//     var tbody = document.createElement('tbody'); 
//     for (var i = 1; i <= 3; i++) { 
//       var row = document.createElement('tr'); 
//       for (var j = 1; j <= 4; j++) { 
//         var cell = document.createElement('td'); 
//         cell.textContent = 'Row ' + i + ', Cell ' + j; 
//         row.appendChild(cell); 
//       } 
//       tbody.appendChild(row); 
//     } 
//     table.appendChild(tbody); 
//     return table; 
// } 
//   var newTable = createTable(); 
//   var elem = document.getElementById('elem'); 
//   elem.appendChild(newTable);
// #493 
// let div = document.querySelector('#elem'); 
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; 
// let table = createTableByArr(arr); 
// div.appendChild(table); 
// function createTableByArr(arr) { 
//     var table = document.createElement('table'); 
//     var tbody = document.createElement('tbody'); 
//     for (var i = 0; i < arr.length; i++) { 
//       var row = document.createElement('tr'); 
//       for (var j = 0; j < arr[i].length; j++) { 
//         var cell = document.createElement('td'); 
//         cell.textContent = arr[i][j]; 
//         row.appendChild(cell); 
//       } 
//       tbody.appendChild(row); 
//     } 
//     table.appendChild(tbody); 
//     return table; 
//   } 
//   let div = document.querySelector('#elem'); 
//   let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; 
//   let table = createTableByArr(arr); 
//   div.appendChild(table); 
 
// #497 
// function calculateSum() { 
//     let num1 = +document.getElementById('num1').value; 
//     let num2 = +document.getElementById('num2').value; 
//     let num3 = +document.getElementById('num3').value; 
//     let sum = num1 + num2 + num3; 
//     console.log('The sum is: ' + sum); 
// } 
//   document.getElementById('calculate').addEventListener('click', calculateSum);