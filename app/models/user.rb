class User < ApplicationRecord
    has_many :invoices
    has_one :cart

    validates :email, presence: true
end
