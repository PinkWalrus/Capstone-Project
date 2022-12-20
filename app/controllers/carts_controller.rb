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
        cart = Cart.find_by(id: session[:current_cart_id])
        user = User.find(session[:user_id])
        if params[:type] == "DELETE_PRODUCT"
            product_carts = ProductCart.where(product_id: params[:payload][:id], cart_id: session[:current_cart_id])
            product_carts.each {|pc| pc.destroy}
        end
        render json: user, status: :ok
    end

    def destroy
        cart = Cart.find_by(id: session[:current_cart_id])
        user = User.find(session[:user_id])
        cart.destroy
        new_cart = Cart.create
        user.cart = new_cart
        session[:current_cart_id] = new_cart.id
        render json: user, status: :ok
    end

    private

    def cart_params
        params.permit(:quantity, :cart_total)
    end

end