class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :description, :product_image, :price, :quantity_in_stock

  has_many :carts

  def price
    "$#{object.price}"
  end
end
