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
    quote:'It\'s the possibility of having a dream come true that makes life interesting.',
    source :'Paulo Coelho',
    citation :'The Alchemist',
    year: '1988',
    tags: 'Fantasy Fiction'

  },
  {
    quote:'Hoping for the best, prepared for the worst, and unsurprised by anything in between.',
    source :'Maya Angelou',
    citation :'I Know Why the Caged Bird Sings',
    year: '1969',
    tags: 'Autobiography'
  },
  {
    quote:'No one can make you feel inferior without your consent',
    source :'Eleanor Roosevelt',
    citation :'This is My Story',
    year: '1939',
    tags: 'Autobiography'
  },
  {
    quote:'The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.',
    source :'Isaac Asimov',    
    tags: 'Science Fiction'
  },
  {
    quote:'Tell the truth, or someone will tell it for you.',
    source :'Stephanie Klein',
    citation :'Straight Up and Dirty',
    year: '2006',
    tags: 'Memoir'
  },

  {
    quote:'Put some Windex.',
    source :'Gus Portokalos',
    citation :'My Big Fat Greek Wedding',
    year: '2002',
    tags: 'Comedy'
  },
  {
    quote:'What you\'re supposed to do when you don\'t like a thing is change it. If you can\'t change it, change the way you think about it. Don\'t complain.',
    source :'Maya Angelou',
    citation :'Wouldn\'t Take Nothing for My Journey Now',
    year: '1997',
    tags: 'Non-Fiction'
  },
  {
    quote:'Angry people are not always wise.',
    source:' Jane Austen',
    citation :'Pride and Prejudice',
    year: '1813',
    tags: 'Romance'
  },
  {
    quote:'Never memorize something that you can look up.',
    source:' Albert Einstein',  
    tags: 'Science'
  },
];



/***
 * `getRandomQuote` function
***/

const getRandomQuote = (array) => {

  let index = Math.floor((Math.random()  * array.length - 1) +  1);
  //console.log(index);
  let selected = array[index]; //the random number becomes the index and selects the object
  return selected;
};

/***
 * `randomColorNum` function
***/

const randomColorNum = () => {  //gets a random number value to be sent down to change background color
  let color = Math.floor((Math.random() * 255) + 1);  
  return color;    
};


 
/***
 * `printQuote` function
***/


const printQuote = () => {

  const quote = getRandomQuote(quotes);  
  let text = "";
  text = `
        <p class="quote">${quote.quote}</p>
        <p class="source">${quote.source}`;
        if(quote.citation){    
          text += `<span class="citation">${quote.citation}</span>`;
        }
        if(quote.year){    
          text += `<span class="year">${quote.year}</span>`;
        }
        if(quote.tags){    
          text += `, <span class="tags">${quote.tags}</span>`;
        }
  text += `</p>`; //closing tag for paragraph

  document.body.style.background = `rgb(${randomColorNum()},${randomColorNum()},${randomColorNum()})`;

  
  let html = document.getElementById('quote-box').innerHTML = text; 


  return html;
};

setInterval(function(){ printQuote() }, 10000);
 





/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);