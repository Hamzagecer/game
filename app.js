const questions =document.getElementById("question");
const options =Array.from(document.getElementsByClassName("choice-text"));
let userquestion =[];
let screenquestion ={};


function startGame()
{
    userquestion=[...game]
    getScreenQuestion()
}


function getScreenQuestion()
{
    let questionİndex =Math.floor(Math.random()*userquestion.length)
    const currentQuestion=userquestion[questionİndex]
    questions.innerText=currentQuestion.question
    options.forEach(choice => {
    const number= choice.dataset["number"];
       choice.innerText=currentQuestion["option"+number]
  
   });
   userquestion.splice(questionİndex,1)
}

options.forEach(choice => {
    choice.addEventListener("click",e => {
     const selectedOptions=e.target.dataset["number"]
    const dogrulama=selectedOptions==screenquestion.answer ? "correct":"incorrect"
    e.target.parentElement.classList.add(dogrulama)
    setTimeout(() => {
        e.target.parentElement.classList.remove(dogrulama)
    }, 1000);
  
     getScreenQuestion()
    })
    
});




startGame();

