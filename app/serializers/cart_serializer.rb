class CartSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :cart_total, :products
  has_one :user
  # has_many :products

  def products
    # create empty array - e.g. products array
    products_array = []
    # iterate over self.object.products
    self.object.products.each do |p|
      # create empty hash
      # binding.pry
      found_product = products_array.find{|fp| fp[:product][:name] == p.name}
      if found_product
        found_product[:quantity] += 1
      else
        new_hash = {}
        new_hash[:product] = p
        # new_hash[:product] = ActiveModelSerializers::SerializableResource(p.product_carts, each_serializer:ProductSerializer)
        # new_hash[:product] = ActiveModel::SerializableResource.new(p.product_carts, each_serializer:ProductSerializer)
        new_hash[:quantity] = 1
        products_array.push(new_hash)
      end
      # create a name key on the hash that is the name of the current product
      # set the value of the name key to the current product - the whole object
      # create a quantity
    end
    # return the products array
    products_array
  end
end