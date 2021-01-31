class State {
    static container = document.getElementById('container')
    static selectState = document.getElementById("select-state")
    static states = document.getElementById('states')
    static districts = document.getElementById('districts')
    static chosenState = ""
    static chosenDistrict = ""
    static all = []
    constructor({id, name, capital, governor, covid_url, representatives, senators}){
        this.id = id
        this.name = name 
        this.capital = capital 
        this.governor = governor 
        this.covid_url = covid_url 
        this.representatives = representatives 
        this.senators = senators 

        this.stateOption = document.createElement('option') 
        this.stateOption.value = `${this.name}` 

        this.districtOption = document.createElement('option')

        
        State.all.push(this)
    } 

    renderState(){
        this.stateOption.innerText = this.name 
    } 

    static renderAllStates(){
        State.all.forEach(state => {
            state.renderState()
            State.states.appendChild(state.stateOption)
        })
    }

    static addStatesEventListener(){
        State.states.addEventListener('change', e=> {
            const stateName = e.target.value 
            
            const state = State.all.find(state => state.name == stateName)
            State.chosenState = state  
            state.renderAllDistricts() 
        }) 
    } 

    static addDistrictEventListener(){
        State.districts.addEventListener('change', e=> {
            State.chosenDistrict = e.target.value 

            // 
            QuestionAdapter.fetchAndMakeQuestion()
            .then(Question.renderAllQuestionsAndAnswers)
            .then(State.selectState.classList.add("hidden"))
            .then(container.classList.remove("hidden"))
            .then(Navigation.navigationContainer.classList.remove("hidden"))
            // .then(State.selectState.classList.add("hidden"))
            // .then(State.container.classList.remove("hidden"))
        })
    }


    renderAllDistricts(){
        this.representatives.forEach( rep => {
            
            State.districts.innerHTML += `<option value=${rep.district}>${rep.district}</option>`
            
        }) 
    } 

    
    

    
} 
