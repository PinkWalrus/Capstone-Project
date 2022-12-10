# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# 5.times do
#     email = Faker::Internet.email
#     password = Faker::Internet.password(min_length: 6, max_length: 20)
#     first_name = Faker::Name.first_name 
#     last_name = Faker::Name.last_name 
#     address1 = Faker::Address.street_address
#     address2 = Faker::Address.secondary_address
#     city = Faker::Address.city
#     state = Faker::Address.state
#     zipcode = Faker::Address.zip
#     phone_number = Faker::PhoneNumber.cell_phone

#     User.create(
#         email: email,
#         password: password,
#         first_name: first_name,
#         last_name: last_name,
#         address_line1: address1,
#         address_line2: address2,
#         city: city,
#         state: state,
#         zipcode: zipcode,
#         phone_number: phone_number
#         )
# end

# 5.times do
#     name = Faker::Coffee.blend_name
#     description = Faker::Coffee.notes
#     product_image = Faker::LoremFlickr.image(size: "50x60", search_terms: ['coffee'])
#     price = 8
#     quantity_in_stock = 50

#     Product.create(
#         name: name,
#         description: description,
#         product_image: product_image,
#         price: price,
#         quantity_in_stock: quantity_in_stock
#     )
# end


puts "🌱 Seeding..."

# USERS

u1 = User.create(email: "user1@aol.com", password: "pass1", first_name: "email1@aol.com", first_name: "John", last_name: "Smith", address_line1: "123 Test Pl", address_line2: "Apt A", city: "Sarasota", state: "FL", zipcode: "34243", phone_number: "72711111111")

u2 = User.create(email: "user2@aol.com", password: "pass2", first_name: "email2@aol.com", first_name: "Jane", last_name: "Doe", address_line1: "456 Another Test Dr", address_line2: "Unit 2", city: "Tampa", state: "FL", zipcode: "33592", phone_number: "7272222222")

# PRODUCTS

p1 = Product.create(name: "Holiday Blend", category: "Dark Roast", description: "A fitting blend for the most festive time of year—candied orange, velvety chocolate, and baking spice come together in a coffee heavy on holiday cheer.", price: 22.95, product_image: "https://ik.imagekit.io/pinkwalrus/tr:w-300,h-300/Coffee2_sjVW1tWrD.jpeg", quantity_in_stock: 20)

p2 = Product.create(name: "Arabian Mocha-Java", category: "Dark Roast", description: "Steeped in myth and origin, you can taste the full-bodied nature of the best mocha beans from East and West in this world-famous blend.", price: 19.95, product_image: "https://ik.imagekit.io/pinkwalrus/tr:w-300,h-300/Coffee2_sjVW1tWrD.jpeg", quantity_in_stock: 22)

p3 = Product.create(name: "Luminosa Breakfast Blend", category: "Light Roast", description: "Our lightest and brightest roast, layering subtle sweetness from Colombia with just the right touch of Ethiopia floral aromatics.", price: 17.95, product_image: "https://ik.imagekit.io/pinkwalrus/tr:w-300,h-300/Coffee2_sjVW1tWrD.jpeg", quantity_in_stock: 24)

p4 = Product.create(name: "Cafe Domingo", category: "Medium Roast", description: "Looking for some slow sipping and savoring? This medium roast blend was crafted from three Latin American coffees, for moments just like these.", price: 18.95, product_image: "https://ik.imagekit.io/pinkwalrus/tr:w-300,h-300/Coffee2_sjVW1tWrD.jpeg", quantity_in_stock: 26)

p5 = Product.create(name: "Las Hermanas", category: "Medium Roast", description: "100% women-produced, Fair Trade certified, and roasted to perfection in a medium style. The cup delivers milk chocolate sweetness and satisfying, creamy texture.", price: 18.95, product_image: "https://ik.imagekit.io/pinkwalrus/tr:w-300,h-300/Coffee2_sjVW1tWrD.jpeg", quantity_in_stock: 28)

p6 = Product.create(name: "Costa Rica Aurora", category: "Light Roast", description: "Greet the dawn of a new day. Costa Rica meets Kenya in this bright, electric light roast.", price: 18.95, product_image: "https://ik.imagekit.io/pinkwalrus/tr:w-300,h-300/Coffee2_sjVW1tWrD.jpeg", quantity_in_stock: 30)

p7 = Product.create(name: "Organic Alameda Morning Blend", category: "Medium Roast", description: "A medium roast organic blend that's the perfect way to start your day; lively and caramel-sweet with floral aromatics.", price: 20.95, product_image: "https://ik.imagekit.io/pinkwalrus/tr:w-300,h-300/Coffee2_sjVW1tWrD.jpeg", quantity_in_stock: 20)

p8 = Product.create(name: "Moka Batak Blend", category: "Dark Roast", description: "Lushly aromatic, wildly flavorful, and expansive, Sumatra Batak's heady herbal notes open up into Yemeni spiced chocolate in this highly specialized riff on the classic Mocha-Java.", price: 18.95, product_image: "https://ik.imagekit.io/pinkwalrus/tr:w-300,h-300/Coffee2_sjVW1tWrD.jpeg", quantity_in_stock: 22)

p9 = Product.create(name: "French Roast", category: "Dark Roast", description: "For those who relish smoky overtones and a pleasant bite, drinking French Roast exemplifies our commitment to rich, powerful coffee.", price: 18.95, product_image: "https://ik.imagekit.io/pinkwalrus/tr:w-300,h-300/Coffee2_sjVW1tWrD.jpeg", quantity_in_stock: 24)

p10 = Product.create(name: "Baridi Blend", category: "Medium Roast", description: "For the lover of cold brew comes this refreshingly crisp, artfully crafted blend of bold, juicy East African coffees.", price: 18.95, product_image: "https://ik.imagekit.io/pinkwalrus/tr:w-300,h-300/Coffee2_sjVW1tWrD.jpeg", quantity_in_stock: 26)

p11 = Product.create(name: "Italian Roast", category: "Dark Roast", description: "For those seeking a penetrating, balanced roast with vigorous flavors. Masterfully slow roasted for boldly perfect cups.", price: 18.95, product_image: "https://ik.imagekit.io/pinkwalrus/tr:w-300,h-300/Coffee2_sjVW1tWrD.jpeg", quantity_in_stock: 28)

p12 = Product.create(name: "Sulawesi-Kalosi", category: "Dark Roast", description: "Taste heaven in your cup. A rare coffee, semi-aged and cultivated in the traditional Sulawesi method.", price: 19.95, product_image: "https://ik.imagekit.io/pinkwalrus/tr:w-300,h-300/Coffee2_sjVW1tWrD.jpeg", quantity_in_stock: 30)

p13 = Product.create(name: "Big Bang", category: "Medium Roast", description: "Our most loved medium roast—smooth with a balanced richness.", price: 18.95, product_image: "https://ik.imagekit.io/pinkwalrus/tr:w-300,h-300/Coffee2_sjVW1tWrD.jpeg", quantity_in_stock: 22)

p14 = Product.create(name: "Brazil", category: "Medium Roast", description: "Taste the unctuous, body-driven, luscious result of coffee cherries naturally processed and sweetened by the Brazilian sun.", price: 17.95, product_image: "https://ik.imagekit.io/pinkwalrus/tr:w-300,h-300/Coffee2_sjVW1tWrD.jpeg", quantity_in_stock: 24)

p15 = Product.create(name: "Guatemala San Sebastian", category: "Dark Roast", description: "Savor a coffee both potent and refined from the best farm in Antigua, a favorite of our Roastmasters for more than 40 years.", price: 20.95, product_image: "https://ik.imagekit.io/pinkwalrus/tr:w-300,h-300/Coffee2_sjVW1tWrD.jpeg", quantity_in_stock: 26)


# CART

c1 = Cart.create(quantity: 4, cart_total: 20, user:u1)
c2 = Cart.create(quantity: 6, user:u2)

# INVOICE

i1 = Invoice.create(order_date: "Fri, 09 Dec 2022", order_total: 25.20, user:u1, cart:c1)
i2 = Invoice.create(order_date: "Sun, 11 Dec 2022", order_total: 36.00, user:u2, cart:c2)

# PRODUCT_CART

pc1 = ProductCart.create(product:p1, cart:c1)
pc2 = ProductCart.create(product:p2, cart:c2)

puts "✅ Done seeding!"