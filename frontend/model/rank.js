class Rank {
    static all = []
    static rankContainer = document.getElementById("likeDislikeContainer") 
    static toggleLikeIcon = true 
    static toggleDislikeIcon = true 
    constructor({id, likes, dislikes}){
        this.likes = parseInt(likes) 
        this.dislikes = parseInt(dislikes) 
        this.id = id 
        this.likeDiv = document.createElement('div')
        this.likeDiv.id = `like-${this.id}`

        this.disLikeDiv = document.createElement('div')
        this.disLikeDiv.id = `disLike-${this.id}`

        Rank.all.push(this)
    } 

    renderLike(){
        const className = Rank.toggleLikeIcon ? "far fa-thumbs-up" : "fas fa-thumbs-up"
        this.likeDiv.innerHTML = `<i id=likes class="${className}"></i><h6>${this.likes}</h6>`
        // this.likeDiv.innerHTML = `<i id=likes class="far fa-thumbs-up"></i><h6>${this.likes}</h6>`
    } 
    renderDislike(){
        const className = Rank.toggleDislikeIcon ? "far fa-thumbs-down" : "fas fa-thumbs-down"
        this.disLikeDiv.innerHTML = `<i id=dislikes class="${className}"></i><h6>${this.dislikes}</h6>`
        // this.disLikeDiv.innerHTML = `<i id=dislikes class="far fa-thumbs-down"></i><h6>${this.dislikes}</h6>`
    }
    static renderRank(){
        Rank.all[0].renderLike()
        Rank.all[0].renderDislike()
        Rank.rankContainer.appendChild(Rank.all[0].likeDiv)
        Rank.rankContainer.appendChild(Rank.all[0].disLikeDiv)
    }

    static addEventListner(){
        Rank.rankContainer.addEventListener('click', (event) => {

            if (event.target.id == 'likes'){
                    Rank.all[0].updateLikes()
                    Rank.toggleLikeIcon = !Rank.toggleLikeIcon
               if( !Rank.toggleDislikeIcon) {
                    Rank.all[0].updateDislikes()
                    Rank.toggleDislikeIcon = true 
               }
            }  
       
            if (event.target.id == 'dislikes'){
                    Rank.all[0].updateDislikes()
                    Rank.toggleDislikeIcon = !Rank.toggleDislikeIcon 
               if( !Rank.toggleLikeIcon) {
                    Rank.all[0].updateLikes()
                    Rank.toggleLikeIcon = true 
               }
           } 
           Rank.renderRank()
        // update rank database 
        const body = Rank.all[0]
        RankAdapter.updateRank(body)
        })
       
    } 
    
    updateLikes(){
        Rank.toggleLikeIcon ? this.likes++ : this.likes--
    }
    updateDislikes(){
        Rank.toggleDislikeIcon ? this.dislikes++ : this.dislikes--
    }

     
                
               
}