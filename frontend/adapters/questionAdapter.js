class QuestionAdapter {
    static baseURL = "http://localhost:3000/questions" 

    static fetchAndMakeQuestion(){
        return fetch(QuestionAdapter.baseURL)
        .then(resp => resp.json())
        .then(questions => {
            // questions.forEach(question => new Question(question, state, district))
            questions.forEach(question => new Question(question, State.state, State.district))
        })
    } 
}