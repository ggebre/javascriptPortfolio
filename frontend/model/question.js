class Question {
    static all = []
    static questionAnswerContainer = document.getElementById("question-answer-container") 
    static questionContainer = document.getElementById("question")
    static answersContainer = document.getElementById("answer")
    static displayScore = document.getElementById("score-display")
    static score = 0
    static questionSelectedId = 0
    static questonSelectedCount = 0 
    static questionSlicerIndexMultiplier = 0

    static questionsToDisplay = Question.all.slice(0, 10)

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
        this.questionDiv.style.margin = `5px`
        
        this.answerDiv = document.createElement('div')
        this.answerDiv.id = `answer-${this.id}`
        this.answerDiv.style.margin = `5px`

       
        
        this.questionDiv.addEventListener('click', e => {
            Question.questionSelectedId = this.id
            Question.questonSelectedCount++
            
            this.questionDiv.style.pointerEvents = 'none' 
            this.questionDiv.children[0].classList.remove("btn-primary")
            this.questionDiv.children[0].classList.add("btn-secondary")
        }) 
        this.answerDiv.addEventListener('click', e => {
                
                if(Question.questionSelectedId == this.id){
                    Question.score++ 
                }

                if([9,10].includes(Question.questonSelectedCount)){
                     Question.displayScore.innerHTML = `<h5> YOU SCORE: ${Question.score} / 10 </h5>`
                }
            this.answerDiv.style.pointerEvents = 'none'
            this.answerDiv.children[0].classList.remove("btn-primary")
            this.answerDiv.children[0].classList.add("btn-secondary")
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

        const someQuestion = Question.all.slice(Question.questionSlicerIndexMultiplier*10,(Question.questionSlicerIndexMultiplier + 1) * 10)
        // Question.all.forEach(question=> {
        //    someQuestion.sort(question => {

        //    })
        someQuestion.sort((a,b) => {
            let name1 = a.item.toLowerCase()
            let name2 = b.item.toLowerCase()
            if (name1 < name2 ){
                return -1 
            } else if (name1 > name2 ){
                return 1
            }else {
                return 0
            }
        }) 

            someQuestion.forEach(question => {
            question.renderQuestion()
            // Question.questionContainer.appendChild(question.questionDiv) 
            Question.questionContainer.appendChild(question.questionDiv) 
        })

        Helper.shuffle(someQuestion).forEach(question=>{
        // Helper.shuffle(Question.all).forEach(question=>{
            question.updateAnswer()
            // question.updateStateSpecificAnswers(question.state, question.district)
            question.updateStateSpecificAnswers(State.chosenState, State.chosenDistrict)
            question.renderAnswer()
        
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

    static renderNextSetOfQuestions(){
        Question.clearRendered()
        if (Question.questionSlicerIndexMultiplier < 9){
            Question.questionSlicerIndexMultiplier++
        } else {
            Question.questionSlicerIndexMultiplier = 0
        }
        Question.renderAllQuestionsAndAnswers()
    } 
    static renderPreviousSetOfQuestions(){
        Question.clearRendered()
        if (Question.questionSlicerIndexMultiplier > 0){
            Question.questionSlicerIndexMultiplier--
        } else {
            Question.questionSlicerIndexMultiplier = 9
        }
        Question.renderAllQuestionsAndAnswers()
    } 

    static clearRendered(){
        Question.questionContainer.innerHTML = ""
        Question.answersContainer.innerHTML = ""
        Question.questonSelectedCount = 0
        Question.displayScore.innerHTML = ""
    }
    
}