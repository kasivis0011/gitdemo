// let res=0;

// update = setInterval(function(){ window.localStorage.setItem("GUVI",res++) }, 2000);

// setTimeout(function(){
//     localStorage.removeItem("GUVI");
//     clearInterval(update);
// }, 15000);

// 1. apply filter for the JSON get the object with has dog;
// 2. apply map for the JSON get the object with the age * 5;
// 3. apply reduce for the JSON get the sum of all the age;

let arr = [
  {
    name: "Butters",
    age: 3,
    type: "dog",
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog",
  },
  {
    name: "Red",
    age: 1,
    type: "cat",
  },
  {
    name: "Joey",
    age: 3,
    type: "dog",
  },
];

//   var result = arr.filter((ele)={
//       if (arr.name == "dog")

//   })

var filterResult = arr.filter(function checkDog(ele) {
  return ele.type === "dog";
});

console.log(filterResult);

var mapResult = filterResult.map(function multiplyAge(ele) {
  return ele.age * 5;
});

console.log(mapResult);

var reduceResult = mapResult.reduce(function addAge(prev, curr) {
  return prev + curr;
});

console.log(reduceResult);
