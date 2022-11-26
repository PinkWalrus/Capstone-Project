class CartSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :cart_total
  has_one :user
end
