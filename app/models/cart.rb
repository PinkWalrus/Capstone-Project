class Cart < ApplicationRecord
  belongs_to :user
  has_many :invoices
  has_many :products, through: :product_carts
end
