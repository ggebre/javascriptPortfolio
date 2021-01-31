class RankAdapter {
    static baseURL = "http://localhost:3000/ranks/1"

    static fetchAndMakeRanks(){
        return fetch(RankAdapter.baseURL)
        .then(resp => resp.json())
        .then(rank => new Rank(rank))
    } 
    static updateRank(rank){
        const {likes, dislikes} = rank 
        fetch(RankAdapter.baseURL, {
            method : 'PATCH', 
            headers: {
                'Content-Type': 'application/json',
                },
            body: JSON.stringify({likes, dislikes}),     
        })
    }
}