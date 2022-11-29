class UsersController < ApplicationController
    # /sign up
    def create
        user = User.create(user_params)
        binding.pry
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
