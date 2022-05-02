class AddBiderNameToItems < ActiveRecord::Migration[7.0]
  def change
    add_column :items, :bider_name, :string
  end
end
