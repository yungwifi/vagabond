class Api::CitiesController < ApplicationController
    def index 
        @cities = City.all
        render json: @cities
    end
    def show
        @city = City.find(params[:id])
        @posts = City.find(params[:id]).posts
        @response = {city: @city, posts: @posts}
        render json: @response
    end

    def update 
        @city = City.find(params[:id])
        @city.update!(city_params)

        render json: @city
    end

    def create
        @city = City.create!(city_params)

        render json: @city
    end

    def destroy
        @city = City.find(params[:id]).delete
    
        render status: :ok
      end


    private
    def city_params
      params.require(:city).permit(:name)
    end
end
