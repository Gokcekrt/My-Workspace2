//VARIABLES
let newQuoteBtn = document.querySelector(".new-quote-btn");
let newQuote = document.querySelector(".quote-text");
let newAuthor = document.querySelector(".author-text");

const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "Oprah Winfrey",
  },
];

newQuoteBtn.addEventListener("click", function () {
  let randomnumber = Math.floor(Math.random() * quotes.length);
  newQuote.textContent = quotes[randomnumber].quote;
  newAuthor.textContent = quotes[randomnumber].author;
});
