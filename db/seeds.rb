# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

5.times do
    email = Faker::Internet.email
    password = Faker::Internet.password(min_length: 6, max_length: 20)
    first_name = Faker::Name.first_name 
    last_name = Faker::Name.last_name 
    address1 = Faker::Address.street_address
    address2 = Faker::Address.secondary_address
    city = Faker::Address.city
    state = Faker::Address.state
    zipcode = Faker::Address.zip
    phone_number = Faker::PhoneNumber.cell_phone

    User.create(
        email: email,
        password: password,
        first_name: first_name,
        last_name: last_name,
        address_line1: address1,
        address_line2: address2,
        city: city,
        state: state,
        zipcode: zipcode,
        phone_number: phone_number
        )
end

5.times do
    name = Faker::Coffee.blend_name
    description = Faker::Coffee.notes
    product_image = Faker::LoremFlickr.image(size: "50x60", search_terms: ['coffee'])
    price = 8
    quantity_in_stock = 50

    Product.create(
        name: name,
        description: description,
        product_image: product_image,
        price: price,
        quantity_in_stock: quantity_in_stock
    )
end

# puts "Seeding users"

# u1 = User.create(email: "test@gmail.com", password: "abc123", first_name: "Jane", last_name: "Doe", address_line1: "555 Street Dr", address_line2: "Apt A", city: "Sarasota", state: "FL", zipcode: "34243", phone_number: "9012225555")

# u2 = User.create(email: "test@aol.com", password: "xyz321", first_name: "John", last_name: "Smith", address_line1: "123 Test Pl", address_line2: "Unit 2", city: "Tampa", state: "FL", zipcode: "33592", phone_number: "7279993333")

# puts "Finished seeding users"

# puts "Seeding products"

# puts "Finished seeding products"