class User < ApplicationRecord
    has_secure_password
    
    has_many :invoices
    has_one :cart

    validates :first_name, presence: true
    validates :email, presence: true, uniqueness: true
end
