

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


// function registerButtonClick(element){
    
//     element.addEventListener('click', (event)=> {
//         if (event.target.nodeName == 'BUTTON'){
//             // get random color to set the backgroundColor when it is clicked 
            
//             if (element.id == 'question'){
//                 const question_id = event.target.dataset.id
//                 matched = questionAndAnserMatched(question_id )
//                 const randColor = Helper.randomColor()
//                 event.target.style.backgroundColor = randColor
//                 color = randColor
//             } else {
//                 const answer_id = event.target.dataset.id
//                 // matched(answer_id) 
//                 matched(answer_id) ? score++ : missed++
                
//                 event.target.style.backgroundColor = color 
//                 color = ""
//             }
//         }
//     })
// } 

    Navigation.listner() 
    Navigation.flashCardListner()

