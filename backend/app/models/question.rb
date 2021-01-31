class Question < ApplicationRecord
    
    has_many :answers
    has_many :question_categories 
    has_many :categories, through: :question_categories 

    def self.someQuestions(limit, offset)
        limit(limit).offset(offset)
    end
end
