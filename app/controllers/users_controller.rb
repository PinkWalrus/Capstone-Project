class UsersController < ApplicationController
    def index
        users = User.all.order(id: :asc)
        render json: users, status: :ok 
    end
    
    # /sign up
    def create
        # create a user
        user = User.create!(user_params)
        cart = Cart.create
        user.cart = cart
        # if user was created and successfully validated
        if user && user.valid?
            # set our session user id to the current user id
            session[:user_id] = user.id
            session[:current_cart_id] = cart.id
            # render user as json with status of created
            render json: user, status: :created
            # render json: {user: user, cart: session[:current_cart_id]}, status: :created
        else
            # else - render errors with status of unprocessable_entity
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    # /me
    def show
        if session[:user_id]
            user = User.find(session[:user_id])
            # user.cart=Cart.create
            cart = Cart.find(session[:current_cart_id])
            # cart = Cart.find(session[:current_cart_id])
            #     cart=Cart.create
            #     session[:current_cart_id] = cart.id
            # end
            render json: user
            # render json: {user: user, cart: user.cart.id}
        else 
            if !session[:current_cart_id]
                cart = Cart.create
                session[:current_cart_id] = cart.id
            end
            render json: {cart: session[:current_cart_id]}

            # render json: {cart: cart.id}
        end
    end

    def update
        user = User.find(session[:user_id])
        user.update(user_params)
        render json: user, status: :ok
    end

    private

    def user_params
        params.permit(:email, :first_name, :last_name, :password, :password_confirmation, :address_line1, :address_line2, :city, :state, :zipcode, :phone_number)
    end

end
