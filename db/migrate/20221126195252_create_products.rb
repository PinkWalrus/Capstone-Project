class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :description
      t.string :product_image
      t.float :price
      t.integer :quantity_in_stock

      t.timestamps
    end
  end
end
