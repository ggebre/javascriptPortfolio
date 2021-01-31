class CommentsController < ApplicationController
    def index 
        comments = Comment.order("created_at DESC").limit(10)
        # render json: comments 
        render json: CommentSerializer.new(comments).to_serialized_json
    end 
    def create 
        Comment.create(comment_params) 
    end 

    def getLast 
        comment = Comment.order("created_at DESC").first 
        render json: CommentSerializer.new(comment).to_serialized_json
    end

    def update 
        comment = Comment.find(params[:id])
        comment.update(comment_params) 
        render json: CommentSerializer.new(comment).to_serialized_json
    end

    def destroy
        comment = Comment.find(params[:id])
        comment.destroy
    end

    private 
    def comment_params 
        params.require(:comment).permit(:content)
    end
end
