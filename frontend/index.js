

const flashCard = document.getElementById("flash-card")




let matched

let score = 0
let missed = 0

CommentAdapter.fetchAndMakeComments()
.then(Comment.renderAllComments)
.then(Comment.renderCreateCommentForm)



// .then(Comment.renderCreateCommentForm)
RankAdapter.fetchAndMakeRanks()
.then(Rank.renderRank) 
.then(Rank.addEventListner)


// QuestionAdapter.fetchAndMakeQuestion()
StateAdapter.fetchAndMakeStates()
.then(State.renderAllStates)
.then(State.addStatesEventListener)
.then(State.addDistrictEventListener)


function registerButtonClick(element){
    
    element.addEventListener('click', (event)=> {
        if (event.target.nodeName == 'BUTTON'){
            // get random color to set the backgroundColor when it is clicked 
            
            if (element.id == 'question'){
                const question_id = event.target.dataset.id
                matched = questionAndAnserMatched(question_id )
                const randColor = Helper.randomColor()
                event.target.style.backgroundColor = randColor
                color = randColor
            } else {
                const answer_id = event.target.dataset.id
                // matched(answer_id) 
                matched(answer_id) ? score++ : missed++
                
                event.target.style.backgroundColor = color 
                color = ""
            }
        }
    })
} 

    Navigation.listner() 
    Navigation.flashCardListner()

// nav.addEventListener('click', (event) => {
//     if (event.target.innerText == "Quiz"){
//         flashCard.classList.add("hidden")
//         container.classList.remove("hidden")
//     }
//     if (event.target.innerText == "Flash Cards"){
//         selectState.className = "hidden" 
//         flashCard.classList.remove("hidden")
//         container.classList.add("hidden")
//         flashCardObj = Question.all
//         flashCardRender()
//     }
// })

// flashCard.addEventListener('click', (event)=>{ 
//     const flashCardObj = Question.all
//     if (event.target.parentNode.id == "flashcard-buttons-container") {
//         FlashCard.answerRendered = true
//         if (event.target.innerText == 'Next') {
//             questionNumber < flashCardObj.length - 1 ? questionNumber++ : questionNumber = 0
           
//         } else {
//             questionNumber > 0 ? questionNumber-- : questionNumber = flashCardObj.length - 1 
//         }
//     } 
//     if(flashCard.childNodes[0].id == "flash-cards") {
//         FlashCard.answerRendered = !FlashCard.answerRendered
//     }
//     flashCardRender()
// }) 

// function flashCardRender(){
//     // console.log(questionNumber)
//     flashCard.innerHTML = ""
//     const newflashCard = new FlashCard(Question.all[questionNumber]) 
//     newflashCard.renderQuestionOrAnswer()
// }








