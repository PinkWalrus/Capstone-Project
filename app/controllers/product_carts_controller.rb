class ProductCartsController < ApplicationController
    def index
        product_carts = ProductCart.all
        render json: product_carts, status: :ok 
     end
 
     def show
        product_cart = ProductCart.find_by(id: params[:id])
        render json: product_cart, status: :ok
     end

     def create
         product_cart = ProductCart.create(cart_params)
         render json: cart, status: :created
      end

      def show
         product_cart = ProductCart.find_by(id: params[:id])
         render json: cart, status: :ok
      end

      def update
         product_cart = ProductCart.find_by(id: params[:id])
         product_cart.update(cart_params)
         render json: product_cart, status: :ok
      end

      def destroy
         product_cart = ProductCart.find_by(id: params[:id])
         product_cart.destroy
         head :no_content
  end
end
