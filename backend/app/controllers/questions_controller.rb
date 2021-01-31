class QuestionsController < ApplicationController
    def index 
        
        #  questions = Question.all 
        # filter based on category 
        questions = Question.someQuestions(10, 20)
        render json: questions, include: [:answers, :categories] 
    end 

    def show 
        question = Question.find(params[:id]) 
        render json: question, include: [:answers, :categories], only: :item
    end 

    def new 

    end

    def create 

    end 
    def edit 
        question = Question.find(params[:id]) 
        render json: question, only: :item
    end
    def update 
        question = Question.find(params[:id]) 
        question.update(question_params)
    end

    def question_params 
        params.require(:question).permit(:item)
    end 

    
end
