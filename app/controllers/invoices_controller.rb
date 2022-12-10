class InvoicesController < ApplicationController
    def index
        invoices = Invoice.all
        render json: invoices, status: :ok 
     end
 
     def show
        invoice = Invoice.find(params[:id])
        render json: invoice, status: :ok
     end
end
