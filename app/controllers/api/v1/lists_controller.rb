module Api
    module V1
        class ListsController < ApplicationController
            def index
                @lists = List.all
                render json: @lists
            end 
            
            def show 
                @list = List.find_by(slug: params[:slug])
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
                @list = List.find_by(slug: params[:slug])
            end

            def update 
                @list = List.find_by(slug: params[:slug])
                if(@list.update(list_params))
                    redirect_to @list
                    else
                        render json:{ error: list.errors.messages }
                    end
            end 

            def destroy
                @list = List.find_by(slug: params[:slug])
                @list.destroy
            end 

            private
            def post_params
                params.require(:list).permit(:title)
            end



        end
    end
end
