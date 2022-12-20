class UpdateUserIdOnInvoices < ActiveRecord::Migration[7.0]
  def change
    change_column_null :invoices, :user_id, true
  end
end
