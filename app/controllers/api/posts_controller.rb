class Api::PostsController < ApplicationController
    def index 
        @post = City.find(params[:city_id]).posts

        render json: @post
    end

    def show 
        @post = Post.find(params[:id])

        render json: @post
    end

    def create 
        @post = City.find(params[:city_id]).posts
        @post.create!(post_params)

        render json: @post
    end


    def update 
        @post = Post.find(params[:id])
        @post.update!(post_params)

        render json: @post
    end

    def destroy
        @post = Post.find(params[:id])
        @post.destroy
        render status: 200
    end

    private
    def post_params
        params.require(:post).permit(:title, :content)
      end
end
