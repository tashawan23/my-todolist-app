module Api
    module V1
        class ListsController < ApplicationController

            def index
                @lists = List.all
                render json: @lists, include: 'tasks'
            end 
            
            def show 
                @list = List.find_by(id: params[:id])
                render json: @list, include: 'tasks'
            end
            
            def new 
                @list = List.new
            end

            def create 
                list = List.new(list_params)
                if list.save
                render json:list
                else 
                    render json:{ error: list.errors.messages }
                end
            end
            
            def edit
                @list = List.find_by(id: params[:id])
            end

            def update 
                @list = List.find_by(id: params[:id])
                if(@list.update(list_params))
                    render json: @list
                    else
                        render json:{ error: list.errors.messages }
                    end
            end 

            def destroy
                @list = List.find_by(id: params[:id])
                @list.destroy
            end 

            private
            def list_params
                params.require(:list).permit(:title)
            end



        end
    end
end
