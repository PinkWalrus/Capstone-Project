class ProductsController < ApplicationController
    def index
        render json: Product.all, status: :ok
    end

    def show
        product = Product.find_by(id: params[:id])
            if product
                render json: product, status: :ok
            else
                render json: { errors: ["Product not found."] }, status: :not_found
            end
    end

    private

    def product_params
        params.permit(:name, :description, :product_image, :price, :quantity_in_stock)
    end
end