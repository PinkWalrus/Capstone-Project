class UpdateCartIdInInvoices < ActiveRecord::Migration[7.0]
  def change
    change_column_null :invoices, :cart_id, true
  end
end
