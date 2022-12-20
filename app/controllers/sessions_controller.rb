class SessionsController < ApplicationController
    # /login
    def create
        # try to find a user by email
        user = User.find_by(email: params[:email])
        # if we find a user && they are authenticated with password
        if user&.authenticate(params[:password])
            # set the session[:user_id] to the found and authorized user
            session[:user_id] = user.id
            if user.cart 
                session[:current_cart_id] = user.cart.id
            else
                cart = Cart.create
                user.cart = cart
                session[:current_cart_id] = user.cart.id
            end
            render json: user, status: :ok
        else
            render json: { errors: ["Invalid email or password"] }, status: :unauthorized
        end
    end

    # /logout
    def destroy
        session.delete :user_id
        session.delete :current_cart_id
        cart = Cart.create
        session[:current_cart_id] = cart.id
        render json: {cart: session[:current_cart_id]} 
    end

end