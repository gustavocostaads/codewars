// DESCRIPTION:
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// FUNDAMENTALS STRING SARRAYS

function check(a, x) {
    var i = a.length;
    while (i--) {
       if (a[i] === x) {
           return true;
       }
    }
    return false;
}