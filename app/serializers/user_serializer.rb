class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name, :address_line1, :address_line2, :city, :state, :zipcode, :phone_number
end
