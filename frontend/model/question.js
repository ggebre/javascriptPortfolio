class Question {
    static all = []
    static questionAnswerContainer = document.getElementById("question-answer-container") 
    static questionContainer = document.getElementById("question")
    static answersContainer = document.getElementById("answer")
    static score = 0
    static questionsNeedAnswerUpdate = [20,23,28,29, 39, 40, 43,44, 46, 47]
    static answerUpdates = {28: "Joseph Robinette Biden Jr (Joe Biden)",
                            29: "Kamala Devi Harris", 
                            39: "9",
                            40: "John Roberts",
                            46: "Democrat",
                            47: "Nancy Pelosi"} 
    static stateAndDistricSpecific = {senators: 20, representative: 23, governor: 43, capital: 44}

    constructor({item, categories, id, answers}, state, district){
        this.item = item 
        this.id = id 
        this.answers = answers
        this.categories = categories 
        this.state = state 
        this.district = district
        
        
        this.questionDiv = document.createElement('div')
        this.questionDiv.id = `question-${this.id}`
        this.space = document.createElement('p')
        this.answerDiv = document.createElement('div')
        this.answerDiv.id = `answer-${this.id}`
        // this.questionButton.id = `question-${this.id}`

        this.matched = 0
        
        this.questionDiv.addEventListener('click', e => {
            this.questionDiv.style.pointerEvents = 'none' 
                this.matched++
        }) 
        this.answerDiv.addEventListener('click', e => {
            
                if (this.matched){
                    Question.score++ 
                }
        
            this.answerDiv.style.pointerEvents = 'none'
            
            console.log(`${Question.score}`)
        })
        
        Question.all.push(this)
    } 

    randomAnswer(){
        const length = this.answers.length 
        const randIndex = Math.floor(Math.random() * length)
        return this.answers[randIndex]
    }

    renderQuestion(){
        this.questionDiv.innerHTML = `<button data-id=${this.id} class="btn btn-primary">${this.item}</button>` 
    } 

    renderAnswer(){
        this.answerDiv.innerHTML = `<button data-id=${this.id} class="btn btn-primary">${this.randomAnswer().item}</button>` 
    }

    static renderAllQuestionsAndAnswers() {
        // randomize Question to get answers randomized 
        Question.all.forEach(question=> {
            question.renderQuestion()
            
            Question.questionContainer.appendChild(question.questionDiv) 
        })

        Helper.shuffle(Question.all).forEach(question=>{
            question.updateAnswer()
            // question.updateStateSpecificAnswers(question.state, question.district)
            question.updateStateSpecificAnswers(State.chosenState, State.chosenDistrict)
            question.renderAnswer()
            // Question.answersContainer.appendChild(question.answerDiv)
            Question.answersContainer.appendChild(question.answerDiv)
        })
    }
    updateAnswer(){
        // console.log(`${Question.answerUpdates[this.id]}`)
        if(Question.answerUpdates[this.id]){
            this.answers[0].item = Question.answerUpdates[this.id]
        }
    }
    updateStateSpecificAnswers(state, district){
        
        if(Question.stateAndDistricSpecific.governor == this.id){
            this.answers[0].item = state.governor
        } 
        if(Question.stateAndDistricSpecific.capital == this.id){
            this.answers[0].item = state.capital
        } 
        if(Question.stateAndDistricSpecific.senators == this.id){
            this.answers = []
            state.senators.forEach(senator => {
                this.answers.push({question_id: this.id, item: senator.name})
            })
        }

        
        if(Question.stateAndDistricSpecific.representative == this.id){
            this.answers[0].item = state.representatives.find(rep => rep.district == district).name
        } 
    }
    
}