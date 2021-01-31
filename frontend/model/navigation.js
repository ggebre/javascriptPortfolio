class Navigation {
   
    static navigationContainer = document.getElementById('nav')
    static questionNumber = 0
    static allQuestions = Question.all

    static listner(){
        Navigation.navigationContainer.addEventListener('click', (event) => {
            if (event.target.innerText == "Quiz"){
                FlashCard.container.classList.add("hidden")
                State.container.classList.remove("hidden")
            }
            if (event.target.innerText == "Flash Cards"){
                State.selectState.classList.add("hidden")
                FlashCard.container.classList.remove("hidden")
                State.container.classList.add("hidden")
                Navigation.flashCardRender()
            }
        })
    }
    
    static flashCardListner(){
        FlashCard.container.addEventListener('click', (event)=>{ 
            if (event.target.parentNode.id == "flashcard-buttons-container") {
                FlashCard.answerRendered = true
                if (event.target.innerText == 'Next') {
                    Navigation.questionNumber < Navigation.allQuestions.length - 1 ? Navigation.questionNumber++ : Navigation.questionNumber = 0
                   
                } else {
                    Navigation.questionNumber > 0 ? Navigation.questionNumber-- : Navigation.questionNumber = Navigation.allQuestions.length - 1 
                }
            } 
            if(FlashCard.container.childNodes[0].id == "flash-cards") {
                FlashCard.answerRendered = !FlashCard.answerRendered
            }
            Navigation.flashCardRender()
        }) 
    }
    
    
    static flashCardRender(){
        // console.log(questionNumber)
        FlashCard.container.innerHTML = ""
        const newflashCard = new FlashCard(Question.all[Navigation.questionNumber]) 
        newflashCard.renderQuestionOrAnswer()
    }
    
}