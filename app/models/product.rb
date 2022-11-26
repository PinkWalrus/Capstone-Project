class Product < ApplicationRecord
    has_many :carts, through: :product_carts
    has_many :invoices
end
