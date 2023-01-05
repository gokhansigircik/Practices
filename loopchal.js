
// Using a loop write code that will console.log all of the odd values from 1 up to 20. Odd Numbers

for(var i=1; i<20; i+=2) {
  console.log(i);
}


// Decreasing Multiples of 3
// Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0

for(var i=100; i>-1; i--) {
  if(i % 3 == 0) {
      console.log(i);
  }
}


// Print the sequence
// Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.


for(var i=4; i>-4; i-=1.5) {
  console.log(i);
}



// Sigma
// Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.


var sum = 0;
for(var i=1; i<101; i++) {
  sum += i;
}
console.log(sum);



// Factorial
// Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.

var product = 1;
for(var i=1; i<13; i++) {
  product *= i;
}
console.log(product);

// i need to do more algos and get better for the interviews

// What is FizzBuzz?
// Firstly, let’s get this out of the way, FizzBuzz is a task where the programmer is asked 
// to print numbers from 1 to 100, but here’s the catch, multiple of three should print “Fizz” and 
// similarly print “Buzz” for multiples of 5 and lastly print “FizzBuzz” for multiples of three and five.

for (var i = 1; i < 101; i++) {
  if (i % 15 == 0) console.log("FizzBuzz");
  else if (i % 3 == 0) console.log("Fizz");
  else if (i % 5 == 0) console.log("Buzz");
  else console.log(i);
}