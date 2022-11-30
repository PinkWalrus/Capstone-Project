class UsersController < ApplicationController
    # /sign up
    def create
        # create a user
        user = User.create!(user_params)
        # if user was created
        if user && user.valid?
            # set our session user id
            session[:user_id] = user.id
            # render user as json with status of created
            render json: user, status: :created
        # else - render errors with status of unprocessable_entity
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        user = User.find(session[:user_id])
        binding.pry
    end

    private

    def user_params
        params.permit(:email, :password, :password_confirmation)
    end

end
