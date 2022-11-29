class Cart < ApplicationRecord
  belongs_to :user
  has_one :invoice
  has_many :products, through: :product_carts
end
