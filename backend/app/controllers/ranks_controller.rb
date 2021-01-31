class RanksController < ApplicationController
    
    def show 
        rank = Rank.find(params[:id])
        render json: RankSerializer.new(rank).to_serialized_json 
    end

    def update 
        rank = Rank.find(params[:id]) 
        rank.update(rank_params)
    end

    def rank_params 
        params.require(:rank).permit(:likes, :dislikes)
    end
end
