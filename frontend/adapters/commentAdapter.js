class CommentAdapter {
    static baseURL = "http://localhost:3000/comments"

    static fetchAndMakeComments(){
        return fetch(CommentAdapter.baseURL)
        .then(resp => resp.json())
        .then(comments => {
            comments.forEach(comment => new Comment(comment))
        })
    } 
    static createComment(content){
        return fetch(CommentAdapter.baseURL, {
            method: "POST",
            redirect: 'follow',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({content})
        })
    }
    static fetchLastComment(){
        return fetch(CommentAdapter.baseURL + "/getLast")
        .then(resp => resp.json())
        
    }
    static editComment({content, id}){
        return fetch(`${CommentAdapter.baseURL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({content})
        })
    } 

    static deleteComment(id){
        return fetch(`${CommentAdapter.baseURL}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })
        
    } 

}