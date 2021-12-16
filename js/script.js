/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

//Created a Array of 5 objects which hold 2 keys: A Quote string, and a Source String
let quotes = [
  {
    quote: 'Getting information off the internet is like taking a drink from a fire hydrant.',
    source: '-Mitch Kapor'
  },
  {
    quote: 'Cyberspace can\'t compensate for real space. We benefit from chatting to people face to face',
    source: '-Jonathan Sacks'
  },
  {
    quote: 'The way to get started is to quit talking and begin doing',
    source: '-Walt Disney'
  },
  {
    quote: 'If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success.',
    source: '-James Cameron'
  },
  {
    quote: 'Life is what happens when you\'re busy making other plans.',
    source: '-John Lennon'
  }];
//console.log('Quote Array: ', quotes); -> Quotes successfully shown in the console as an array of 5 object w/ 2 key/value pairs


//Created a function that takes an array as a param, in this case the Quotes array, and returns a random object within said array.
function getRandomQuote(arr) {
  let randomNum = arr[Math.floor(Math.random() * arr.length)];
  return randomNum[quotes];
}
//console.log(getRandomQuote(quotes)); -> Random Object successfully shown in the console when you hit the refresh in the browser

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);