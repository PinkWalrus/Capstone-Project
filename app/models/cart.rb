class Cart < ApplicationRecord
  belongs_to :user, optional: true
  
  has_one :invoice

  has_many :product_carts
  has_many :products, through: :product_carts
end
