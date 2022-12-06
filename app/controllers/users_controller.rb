class UsersController < ApplicationController
    # /sign up
    def create
        # create a user
        user = User.create!(user_params)
        # if user was created and successfully validated
        if user && user.valid?
            # set our session user id to the current user id
            session[:user_id] = user.id
            # render user as json with status of created
            render json: user, status: :created
        else
            # else - render errors with status of unprocessable_entity
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        user = User.find(session[:user_id])
        render json: user
    end

    private

    def user_params
        params.permit(:email, :first_name, :password, :password_confirmation)
    end

end
