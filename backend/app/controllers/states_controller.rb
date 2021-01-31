class StatesController < ApplicationController
    def index 
        states = State.all 
        render json: states, include: [:senators, :representatives]
    end
end