class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :product_image, :price, :quantity_in_stock
end
