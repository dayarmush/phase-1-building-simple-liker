// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

const error = document.querySelector('#modal')
error.setAttribute('class', 'hidden')

const hearts = document.querySelectorAll('.like-glyph')

hearts.forEach((heart) => {
  heart.addEventListener('click' , (e) => {
    mimicServerCall()
    .then(() => {
      heart.classList.toggle('activated-heart')
    })
    .catch(() => {
      error.setAttribute('class', 'like-glyph')
      setTimeout(() => {
        error.setAttribute('class', 'hidden')
      }, 3000)
    })
  })
})

