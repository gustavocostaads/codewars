// DESCRIPTION:
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// MATHEMATICS FUNDAMENTALS

even_or_odd = n => n % 2 ? 'Odd' : 'Even';

Refactor

function even_or_odd(n) {
    if(n % 2 === 0) {
      return 'Even'
    } else { 
    return 'Odd'
    }   
  }

  Refactor