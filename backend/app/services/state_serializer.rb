class StateSerializer 
    def initialize(state_object)
        @state = state_object
    end
    def to_serialized_json 
        options = {
            :include => {
                :senators => {:only => [:name]},
                :representatives => {:only => [:name, :district]}
              }, :except => [:updated_at]
        }
        @state.to_json(options)
    end
end

