class StatesController < ApplicationController
    def index 
        states = State.all 
        # render json: states, include: [:senators, :representatives]
        render json: StateSerializer.new(states).to_serialized_json
    end
end