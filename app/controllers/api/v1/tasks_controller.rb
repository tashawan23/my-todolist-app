module Api
    module V1
        class TasksController < ApplicationController

            def new 
                @task = Task.new
            end

            def edit
                @task = Task.find(params[:id])
            end 
            
            def show 
                @task = Task.find(params[:id])
            end 
            
            def create 
                @task = Task.new(task_params)
        
                if(@task.save)
                render json: @task
                else
                    render json:{ error: task.errors.messages }
                end
            end

            def update 
                @task = Task.find(params[:id])
                if(@task.update(task_params))
                    render json: @task
                    else
                        render json:{ error: task.errors.messages }
                    end
            end 
        
            def destroy
                @task = Task.find(params[:id])
                @task.destroy
        
                redirect_to tasks_path
            end

            # def all_tasks 
            #     completed = Task.where(completed: true)
            #     incomplete = Task.where(completed: false)
            #     render json: {completed: completed. incomplete: incomplete}
            # end
            
            
            private def task_params
                params.require(:task).permit(:name)
            end
        end
    end
end
