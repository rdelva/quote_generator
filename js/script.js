/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote:'"It\'s the possibility of having a dream come true that makes life interesting."',
    author:'Paulo Coelho',
    book:'The Alchemist',
    year: '1988',
    tags: 'Fantasy Fiction'

  },
  {
    quote:'"Hoping for the best, prepared for the worst, and unsurprised by anything in between."',
    author:'Maya Angelou',
    book:'I Know Why the Caged Bird Sings',
    year: '1969',
    tags: 'Autobiography'
  },
  {
    quote:'"No one can make you feel inferior without your consent"',
    author:'Eleanor Roosevelt',
    book:'This is My Story',
    year: '1939',
    tags: 'Autobiography'
  },
  {
    quote:'“We’ve all got both light and dark inside us. What matters is the part we choose to act on. That’s who we really are.”',
    author:'J. K. Rowling',
    book:'Harry Potter and the Order of the Phoenix',
    year: '2004',
    tags: 'Young Adult'
  },
];


/***
 * `getRandomQuote` function
***/
const getRandomQuote = () => {
  let randomNumber = Math.floor(Math.random() * quotes.length + 1);
  let selected = quotes[randomNumber]; //chooses the selected quote
  
}


/***
 * `printQuote` function
***/

const printQuote = () => {

}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);