/* 
   Welcome to the Magic 8-ball Project.  Complete the 
   tasks outlined by the comments in this file.

   The following functions are available to you 
   (you can just call them):

   // This will hide the '8' (if shown) and 
   // show the triangle (if hidden).  It will
   // set the text on the triangle to the
   // string 'answerText'.
   function makeAnswerAppear(answerText)
*/

/* Returns a random integer in the range 'min' through 'max' inclusive. 

   This can be taken directly from MDN documentation: 
     https://tinyurl.com/3jkxa8h3
*/

/* Write a function that handles the magic 8-ball being clicked. Here are the steps:

   - Create an array containing at least 5 possible answers as strings.
   - Generate a random array index by calling 
       getRandomIntInclusive function.
   - Call 'makeAnswerAppear' using the random
       answer you selected.
   - (Level-up) Prevent your code from selecting the same answer multiple times in a row (loops could be required).
*/

function answerQuestion() {
  let answerText = ["It is Destined.", "It is very much likely.", "Without a doubt in mind.", "Yes! Definitely! Absolutely!", "You can rely on it.", "As I see it, yup.", "Most likely.", "Outlook is good.", "Yes.", "Signs point to a yes.", "Reply hazy, try again.", "Ask me again later.", " I better not tell you right now.", "Cannot predict it now.", "Concentrate and ask me again.", "Don't count on that pal.", "My reply is a big nope.", "My sources say heck no.", "LOL Nah! XD", "Extremely doubtful."];
  
  makeAnswerAppear(answerText[getRandomIntInclusive(0, 19)]);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
