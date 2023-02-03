// Declare the variables int1 and int2, assign them number values and Check if the two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
console.log("in the range 50 to 99");
let int1, int2;
int1 = 33;
int2 = 45;
// op 1
if ((int1 >= 50 && int1 <= 99) || (int2 >= 50 && int2 <= 99)) {
  console.log("true");
} else {
  console.log("false");
}
// op 2
console.log(
  (int1 >= 50 && int1 <= 99) || (int2 >= 50 && int2 <= 99) ? true : false
);
// Declare the variable int3, assign it a number value and Check if the three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.
console.log("in the range 50 to 99");
let int3 = 56;
console.log(
  (int1 >= 50 && int1 <= 99) ||
    (int2 >= 50 && int2 <= 99) ||
    (int3 >= 50 && int3 <= 99)
    ? true
    : false
);
console.log("___________________________");
// Declare the variables a, b and c and give them number values. Check which one out of the three variables has the largest value and print it to the console. do the same with int1, int2 and int3. Then change the values of the variables to see if your conditional still works.
console.log("largest value");
let a, b, c;
a = 2;
b = 55;
c = 54;
console.log(Math.max(a, b, c));
console.log(Math.max(int1, int2, int3));
a = 54;
b = 66;
c = 87;
int1 = 69;
int2 = 0;
int3 = 70;
console.log(Math.max(a, b, c));
console.log(Math.max(int1, int2, int3));
console.log("___________________________");
// Declare the variables str with value "thon". If the given string begins with "Py" then print the original string, otherwise add the prefix "Py" to the behinning of the string and print the result. Change the value of str to test your condition.
console.log("strPrefix");
let str = "thon";
let strPrefix = "Py";
if (str.substring(0, 2) == strPrefix) {
  console.log(str);
} else {
  console.log(`${strPrefix}${str}`);
}
str = "cool";
if (str.substring(0, 2) == strPrefix) {
  console.log(str);
} else {
  console.log(`${strPrefix}${str}`);
}
console.log("___________________________");
// Calculate the sum of int1 and int2. If the sum is in the range 50 to 80, print 65, otherwise print 80.
console.log("in the range 50 to 80");
let sum = int1 + int2;
console.log(sum <= 50 && sum >= 80 ? 65 : 80);
console.log("___________________________");
// Declare the variables int4 and int5 Check whether their sum is 8, or whether their difference is 8. If one of these is the case, print true. otherwise print false.
console.log("Check whether their sum is 8");
let int4, int5;
int4 = 55;
int5 = 89;
if (int4 + int5 || Math.abs(int4 - int5) == 8) {
  console.log(true);
} else {
  console.log(false);
}
console.log("___________________________");
// Check whether either one of int4 or int5 is 15, or if their sum is 15. If one of these is the case, print true. otherwise print false.
console.log("if their sum is 15");
console.log(int4 == 15 || int5 == 15 || int4 + int5 == 15 ? true : false);
console.log("___________________________");
// Check whether either one of int4 or int5 is a multiple of 7 or 11. If so, print true. otherwise print false.
console.log("is a multiple of 7 or 11");
console.log(
  int4 % 7 == 0 || int4 % 11 == 0 || int5 % 7 == 0 || int5 % 11 == 0
    ? true
    : false
);
console.log("___________________________");
// Calculate the sum of int4 and int5. If the two values are equal, then print triple their sum. otherwise just return their sum.
console.log("two values are equal");
let resultSum = int4 + int5;
let resultTriple = resultSum * 3;
console.log(int4 == int5 ? resultSum : resultTriple);
console.log("___________________________");
// Calculate the difference between int5 and the number 19. Print double the difference if the value of int5 is greater than 19. Otherwise just print the difference.

// BONUS CHALLENGE: Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to and more than 20 and less than 30, then print "firstName is a young adult". If none of these conditions apply, print "firstName is a adult".

// BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc.
