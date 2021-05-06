

const flashCard = document.getElementById("flash-card")

let matched

let score = 0
let missed = 0

CommentAdapter.fetchAndMakeComments()
.then(Comment.renderAllComments)
.then(Comment.renderCreateCommentForm)



// .then(Comment.renderCreateCommentForm)
RankAdapter.fetchAndMakeRanks()
.then(Rank.renderRank) 
.then(Rank.addEventListner)


// QuestionAdapter.fetchAndMakeQuestion()
StateAdapter.fetchAndMakeStates()
.then(State.renderAllStates)
.then(State.addStatesEventListener)
.then(State.addDistrictEventListener)
.then(QuestionControls.renderQuestionControls)


Navigation.listner() 
Navigation.flashCardListner()

