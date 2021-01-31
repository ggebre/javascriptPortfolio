class FlashCard {
    // get ALL THE QUESTIONS HERE AND RENDER THESE QUESTIONS ON A FLASH CARD 
    static container = document.getElementById("flash-card")
    static answerRendered = false
    
    constructor({id, item, answers}){
        this.id = id 
        this.item = item 
        this.answers = answers 

        this.main = document.createElement('div')
        this.main.id = "flash-cards"

        this.questionP = document.createElement('p')
        this.questionP.id = `question-${this.id}`

        this.buttonContainer = document.createElement('div')
        this.buttonContainer.id = "flashcard-buttons-container"
        this.nextButton = document.createElement('button')
        this.nextButton.innerText = 'Next'
        this.previousButton = document.createElement('button')
        this.previousButton.innerText = 'Previous'

        this.buttonContainer.append(this.previousButton, this.nextButton)
        this.answerList = document.createElement('ul') 
        this.answerList.id = `answer-${this.id}` 

       
        // FlashCard.container.append(this.previousButton, this.nextButton)
        FlashCard.container.append(this.buttonContainer)
        
        // this.main.addEventListener('click', e => {
        //     // switch between question and answer lists when clicked!!!!!
            
        //     FlashCard.answerRendered = !FlashCard.answerRendered
        //     this.main.innerHTML = ""
            
        // })
    } 

    renderQuestion(){
        this.questionP.innerHTML = `<h2>${this.item}</h2>`
        this.main.appendChild(this.questionP)
    } 
    renderAnswers(){
        this.answers.forEach(answer => {
            this.answerList.innerHTML += `<h3>${answer.item}<h3>`
        })
        this.main.appendChild(this.answerList)
    } 

    renderQuestionOrAnswer(){
        
        FlashCard.answerRendered ? this.renderAnswers() : this.renderQuestion()
        FlashCard.container.prepend(this.main)
       
    } 

    // toggleAnswerRendered

}