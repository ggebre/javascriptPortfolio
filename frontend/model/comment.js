class Comment {
    static all = []
    // static commentContainer = document.getElementById('comments-container')
    static commentContainer = document.getElementById('comment-list')
    
    static createComment = document.getElementById('create-comment')


    constructor({id, content}){
        this.content = content 
        this.id = id

        this.commentP = document.createElement('p')
        // this.commentP.innerText = this.content 
        this.changeDiv = document.createElement('div')
        this.changeDiv.className = "comments"
        this.editButton = document.createElement('button')
        this.deleteButton = document.createElement('button')
        this.editButton.textContent = "Edit"
        this.deleteButton.textContent = "Delete"
        this.editButton.className = "btn btn-warning"
        this.editButton.style.marginRight= "5px"
        this.deleteButton.className = "btn btn-danger"

        // this.changeDiv.append(this.commentP, this.editButton,this.deleteButton )
        
        this.form = document.createElement('form')
        this.editButton.addEventListener('click', this.renderEditCommentForm)
        this.deleteButton.addEventListener('click', this.deleteComment)
        this.form.addEventListener('submit', this.submitEditedComment, false)

        Comment.all.push(this)
    }

    renderComment(){
        // this.changeDiv.innerHTML = `<p>${this.content}</p>`
        this.commentP.innerHTML = `<small>${this.content}</small>`
        this.changeDiv.append(this.commentP, this.editButton,this.deleteButton )

    } 


    static renderAllComments(){
        Comment.all.forEach(comment => {
            comment.renderComment()
            Comment.commentContainer.appendChild(comment.changeDiv)
        })

        // Comment.renderCreateCommentForm()
    } 


    deleteComment = (e) => {
            CommentAdapter.deleteComment(this.id)
            this.changeDiv.parentNode.removeChild(this.changeDiv)
    }

    renderEditCommentForm = () => {
        this.editButton.disabled = true
        this.changeDiv.innerHTML = ''
        this.changeDiv.appendChild(this.form)
        this.form.innerHTML = `
        <textarea name=content>${this.content}</textarea>
        <br>
        <input id=edit-comment type="submit" value="Submit">
        `
    }
    submitEditedComment = (e) => {
        e.preventDefault()
        this.content = this.form.querySelector('textarea').value
        this.changeDiv.removeChild(this.form)
        this.editButton.disabled = false
        
        this.renderComment()

        CommentAdapter.editComment(this) 
        Comment.renderAllComments()
        
    } 


    static renderCreateCommentForm(){
        const form = document.createElement("form")
        form.id = "create-form"
        const input = document.createElement("input")
        input.type = "text"
        input.style.marginTop = "5px"
        input.className = "form-control"
        const submit = document.createElement("input")
        submit.type = "submit"
        submit.className = "btn btn-primary"
        submit.style.marginTop = "5px"
        submit.style.marginBottom = "5px"

        form.append(input, submit) 
        Comment.createComment.appendChild(form)


        form.addEventListener('submit', e => {
            e.preventDefault() 
            const newComment = document.querySelector('input').value 
            CommentAdapter.createComment(newComment)
            .then(CommentAdapter.fetchLastComment)
            .then(comment => {
                const newComment = new Comment(comment)
                newComment.renderComment()
                Comment.commentContainer.prepend(newComment.changeDiv)
            })

            document.querySelector('input').value = ""

        }, false)
    }

}

