class QuestionSerializer 
    def initialize(question_object)
        @question = question_object
    end
    def to_serialized_json 
        options = {:include =>{
            :answers => {:only => [:item]},
            :categories => {:only => [:item]}},
            :except => [:updated_at]}
            
        @question.to_json(options)
    end
end