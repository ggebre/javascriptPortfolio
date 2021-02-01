class QuestionControls {
    static questionControls = document.getElementById("question-controls")
    constructor(){
        this.nextButton = document.createElement('button')
        this.nextButton.innerText = "Next"

        this.previousButton = document.createElement('button')
        this.previousButton.innerText = "Previous" 


        this.nextButton.addEventListener('click', e=> Question.renderNextSetOfQuestions()) 
        this.previousButton.addEventListener('click', e => Question.renderPreviousSetOfQuestions())
    } 

    static renderQuestionControls() {
        const questionControls = new QuestionControls()
        QuestionControls.questionControls.append(questionControls.previousButton, questionControls.nextButton)
    }

}