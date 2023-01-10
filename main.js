// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
function clickHeart(){
 
 const like =  document.querySelectorAll(".like")
           
            like.forEach((one) => {
              one.addEventListener("click",
              event => {
               
                const span = one.childNodes[1]
                mimicServerCall()
                .then(res => {
                
                  if (span.innerHTML == EMPTY_HEART){
                    span.classList.add("activated-heart")
                    span.innerHTML = FULL_HEART
                  }
                  else {
                    span.classList.remove("activated-heart")
                    span.innerHTML = EMPTY_HEART
                  }
                  
                })
                 .catch((err) => {
                 
                  let errDiv = document.getElementById("modal")
                  errDiv.removeAttribute("class")
                  errDiv.querySelector("h2").innerHTML = err
                  setTimeout(()=>{
                    errDiv.setAttribute("class","hidden")
                  },3000)
                      
                 })

              })
            })
          
           
 
 
 
}

document.addEventListener("DOMContentLoaded",()=>{
  clickHeart()
})

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


// console.log(event.target);
              //   let heart = document.querySelector(".like-glyph")
              //  heart.setAttribute("class","activated-heart")
              //  heart.innerHTML = FULL_HEART