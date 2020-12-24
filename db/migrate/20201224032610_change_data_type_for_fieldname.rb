class ChangeDataTypeForFieldname < ActiveRecord::Migration[6.0]
  def change
    change_column( :tasks, :date, :date)
  end
end
