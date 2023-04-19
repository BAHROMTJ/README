
// function sum(a) {
//   if(a<=1)
//   {
//   return 1;
//   }
//  return a+sum(a-1)

// }
//  console.log(sum(5));
//  console.log(sum(1));
//  console.log(sum(12));


// function factorial(a) {
// if(a==1)
// {
// return 1;
// }
// return a*factorial(a-1)
  
// }
// console.log(factorial(5));

// function sumDigit(a) {
//   if (a<=0) {
//     return "";
//   }
//   return a%10+ +sumDigit(Math.floor(a/10) )
// }
// console.log(sumDigit(111));
// console.log(sumDigit(222));
// console.log(sumDigit(333));

// function doubleFactoria(a) {
//  if (a==1 ||a==0) {
// return 1;
//  }
// return a*doubleFactoria(a-2)
// }
// console.log(doubleFactoria(0));
// console.log(doubleFactoria(2));
// console.log(doubleFactoria(9));

// function Fibonacci(a) {
//   if (a==0) {
//     return 0;
//   }
//   if (a==1)
//   {
//   return 1;
//   }
//   return Fibonacci(a-1)+Fibonacci(a-2)
// }
// console.log(Fibonacci(5));


// function makePlusFunction (a) {
//   return function (b)
//   {
//   return a+b;
//   }
// }
// const plusFive = makePlusFunction(5);
// console.log(plusFive(2));
// console.log(plusFive(-8));
// const plusTen = makePlusFunction(10);
// console.log(plusTen(0));
// console.log(plusTen(188));
// console.log(plusTen(0)+plusFive(0));


// function product(a, b) {
//   return function(c, d) {
//     return function(e, f) {
//       return (a * c * e) + (b * d * f);
//     }
//   }
// }

// console.log(product(1,2)(1,1)(2,3));
// console.log(product(10,2)(5,0)(2,3)); 
// console.log(product(1,2)(2,3)(3,4));


// function multiply(x, y) {
//   if (y === 0) {
//     return 0;
//   } else if (y < 0) {
//     return -multiply(x, -y);
//   } else {
//     return x + multiply(x, y - 1);
//   }
// }

// console.log(multiply(10, 2)); 
// console.log(multiply(-51, -4));
// console.log(multiply(3, 9)); 



let a="I have never seen a thin person drinking Diet Coke.";

for (let index = 0; index < a.length; index++) {
    if (a[index]=="a") {
        a[index]=" ";
    }
    console.log(a[index]);
}


