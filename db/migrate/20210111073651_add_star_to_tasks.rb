class AddStarToTasks < ActiveRecord::Migration[6.0]
  def change
    add_column :tasks, :star, :boolean
  end
end
