class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :ask_price
      t.integer :current_price

      t.timestamps
    end
  end
end
