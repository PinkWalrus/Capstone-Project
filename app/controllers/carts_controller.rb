class CartsController < ApplicationController
    
    def index
        carts = Cart.all
        render json: carts, status: :ok 
     end

     def create
        cart = Cart.find_by(id: session[:current_cart_id])
        product = Product.find(params[:id])
        cart.products << product
        render json: cart, status: :created
     end
 
     def show
         cart = Cart.find_by(id: params[:id])
         render json: cart, status: :ok
     end

    def update
        cart = Cart.find_by(id: params[:id])
        # binding.pry
        if params[:type] == "DELETE_PRODUCT"
            # product = Product.find(params[:payload][:id])
            product_carts = ProductCart.where(product_id: params[:payload][:id], cart_id: session[:current_cart_id])
            # binding.pry
            product_carts.each {|pc| pc.destroy}
            # render json: cart, status: :ok
            # render json
        end
        # cart.update(cart_params)
        render json: cart, status: :ok
    end

    def destroy
        cart = Cart.find_by(id: params[:id])
        # cart = Cart.find_by(id: session[:current_cart_id])
        cart.destroy
        head :no_content
    end

    private

    def cart_params
        params.permit(:quantity, :cart_total)
    end

end