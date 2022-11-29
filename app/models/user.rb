class User < ApplicationRecord
    has_secure_password
    
    has_many :invoices
    has_one :cart

    validates :email, presence: true
end
