class InvoiceSerializer < ActiveModel::Serializer
  attributes :id, :order_date, :order_total, :quantity
  has_one :user
  # has_one :cart
end
