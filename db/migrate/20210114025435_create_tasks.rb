class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :name
      t.boolean :completed
      t.date :date
      t.boolean :star
      t.belongs_to :list, null: false, foreign_key: true
    end
  end
end
