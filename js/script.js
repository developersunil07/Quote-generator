//  1. Stored all api data in the variable and the variable name is = data





// 2. Here I selected all important id's from html

let show = document.querySelector("#show");
let author = document.querySelector("#author");
let btn = document.querySelector("#btn");



btn.addEventListener("click", function () {

    function myFunction1(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

     let myFunction2 = myFunction1(1, 15)

    
     
      fetch("https://type.fit/api/quotes").then(function (response) {
    return response.json()
})

.then(function (response) {
           
             show.innerHTML = response[myFunction2].text;
             author.innerHTML = response[myFunction2].author;
             console.log(response)
          

    

})

   
  
})





// Trying other methodes

// var array = ['jane', 'alax', 'russell', 'max' ,'Mike','Jenny','robin' ,'sam'];
// var newArr = [];
// // variable for keep track of clicks
// var c = 0;

// function myFunction() {
//   // check value of counter
//   if (c < array.length) {
//     // push value and increment counter
//     newArr.push(array[c++])
//     // set html
//     document.getElementById("res").innerHTML = newArr;
//   }
// }

// let fruits = ['apple', 'banana', 'orange', 'mango'];
// let index = fruits.indexOf(2);
// console.log(index); // Output: 2

// index = fruits.indexOf('pear');
// console.log(index); // Output: -1

// async function fetchData(url) {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
// }

// const citiesData = [];
// const url = 'https://type.fit/api/quotes';

// // Fetch data only once
// async function getData() {
//     const data = await fetchData(url);
//     citiesData.push(...data);
// }

// getData();





// console.log(citiesData)
// document.write(citiesData[0].text)
  


