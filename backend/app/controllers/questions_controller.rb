class QuestionsController < ApplicationController
    def index 
        
        questions = Question.all 
        # filter based on category 
        # questions = Question.someQuestions(10, 20)
        # render json: questions, include: [:answers => {:only => [:id, :item]}, :categories => {:only => [:id, :item]}], only: [:id, :item]
        render json: QuestionSerializer.new(questions).to_serialized_json
    end 

    def show 
        question = Question.find(params[:id]) 
        render json: QuestionSerializer.new(question).to_serialized_json
        
        # render json: question, include: [:answers => {:only => [:id, :item]}, :categories => {:only => [:id, :item]}], only: [:id, :item]
    end 
    
end
