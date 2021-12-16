/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//Created a Array of 5 objects which hold 2 keys: A Quote string, and a Source String
let quotes = [
  {
    quote: 'Getting information off the internet is like taking a drink from a fire hydrant.',
    source: '-Mitch Kapor',
    citation: 'test'
  },
  {
    quote: 'Cyberspace can\'t compensate for real space. We benefit from chatting to people face to face',
    source: '-Jonathan Sacks',
    citation: 'test'
  },
  {
    quote: 'The way to get started is to quit talking and begin doing',
    source: '-Walt Disney',
    citation: 'test'
  },
  {
    quote: 'If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success.',
    source: '-James Cameron',
    citation: 'test'
  },
  {
    quote: 'Life is what happens when you\'re busy making other plans.',
    source: '-John Lennon',
    citation: 'test'
  }];
//console.log('Quote Array: ', quotes); -> Quotes successfully shown in the console as an array of 5 object w/ 2 key/value pairs


//Created a function that takes an array as a param, in this case the Quotes array, and returns a random object within said array.
function getRandomQuote(arr) {
  let randomQuote = arr[Math.floor(Math.random() * arr.length)];
  //console.log('Random Number: ', randomQuote); -> Successfully rendered a random quote object to the console.
  return randomQuote;
}

function printQuote() {
  let retriveRandomQuote = getRandomQuote(quotes);
  //console.log(retriveRandomQuote); -> Successfully pulled a quote from the getRandomQuote function
  let html = `
  <p class = 'quote'>${retriveRandomQuote.quote}</p>
  <p class = 'source'>${retriveRandomQuote.source}
  `;
  //console.log('html: ', html); //-> Successfully renders the objects as text
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);