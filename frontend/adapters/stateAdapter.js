class StateAdapter {
    static baseURL = "http://localhost:3000/states" 


    static fetchAndMakeStates() {
        return fetch(StateAdapter.baseURL)
        .then(resp=> resp.json())
        .then(states => {
            states.forEach(state => new State(state))
        })
    } 

    
    static fetchStates() {
        return fetch(StateAdapter.baseURL)
        .then(resp=> resp.json())
    }

}