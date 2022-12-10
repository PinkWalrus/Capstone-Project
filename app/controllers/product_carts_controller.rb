class ProductCartsController < ApplicationController
    def index
        product_carts = ProductCart.all
        render json: product_carts, status: :ok 
     end
 
     def show
        product_cart = ProductCart.find_by(id: params[:id])
        render json: product_cart, status: :ok
     end
end
