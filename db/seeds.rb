puts "🌱 Seeding..."

# USERS

u1 = User.create(email: "user1@aol.com", password: "pass1", first_name: "John", last_name: "Smith", address_line1: "123 Test Pl", address_line2: "Apt A", city: "Sarasota", state: "FL", zipcode: "34243", phone_number: "72711111111")

u2 = User.create(email: "user2@aol.com", password: "pass2", first_name: "Jane", last_name: "Doe", address_line1: "456 Another Test Dr", address_line2: "Unit 2", city: "Tampa", state: "FL", zipcode: "33592", phone_number: "7272222222")

# PRODUCTS

p1 = Product.create(name: "Holiday Blend", category: "Dark Roast", description: "A fitting blend for the most festive time of year—candied orange, velvety chocolate, and baking spice come together in a coffee heavy on holiday cheer.", price: 22.95, product_image: "https://ik.imagekit.io/pinkwalrus/tr:w-650,h-650/Coffee_Mockups-01_K6_CHbkuh.png", quantity_in_stock: 20)

p2 = Product.create(name: "Arabian Mocha-Java", category: "Dark Roast", description: "Steeped in myth and origin, you can taste the full-bodied nature of the best mocha beans from East and West in this world-famous blend.", price: 19.95, product_image: "https://ik.imagekit.io/pinkwalrus/tr:w-650,h-650/Coffee_Mockups-04_8KMvT7cMT.png", quantity_in_stock: 22)

p3 = Product.create(name: "Luminosa Breakfast Blend", category: "Light Roast", description: "Our lightest and brightest roast, layering subtle sweetness from Colombia with just the right touch of Ethiopia floral aromatics.", price: 17.95, product_image: "https://ik.imagekit.io/pinkwalrus/tr:w-650,h-650/Coffee_Mockups-02_cmTflaw2y.png", quantity_in_stock: 24)

p4 = Product.create(name: "Cafe Domingo", category: "Medium Roast", description: "Looking for some slow sipping and savoring? This medium roast blend was crafted from three Latin American coffees, for moments just like these.", price: 18.95, product_image: "https://ik.imagekit.io/pinkwalrus/tr:w-650,h-650/Coffee_Mockups-03_aA9vssKY9.png", quantity_in_stock: 26)

p5 = Product.create(name: "Las Hermanas", category: "Medium Roast", description: "100% women-produced, Fair Trade certified, and roasted to perfection in a medium style. The cup delivers milk chocolate sweetness and satisfying, creamy texture.", price: 18.95, product_image: "https://ik.imagekit.io/pinkwalrus/tr:w-650,h-650/Coffee_Mockups-01_K6_CHbkuh.png", quantity_in_stock: 28)

p6 = Product.create(name: "Costa Rica Aurora", category: "Light Roast", description: "Greet the dawn of a new day. Costa Rica meets Kenya in this bright, electric light roast.", price: 18.95, product_image: "https://ik.imagekit.io/pinkwalrus/tr:w-650,h-650/Coffee_Mockups-04_8KMvT7cMT.png", quantity_in_stock: 30)

p7 = Product.create(name: "Organic Alameda Morning Blend", category: "Medium Roast", description: "A medium roast organic blend that's the perfect way to start your day; lively and caramel-sweet with floral aromatics.", price: 20.95, product_image: "https://ik.imagekit.io/pinkwalrus/tr:w-650,h-650/Coffee_Mockups-02_cmTflaw2y.png", quantity_in_stock: 20)

p8 = Product.create(name: "Moka Batak Blend", category: "Dark Roast", description: "Lushly aromatic, wildly flavorful, and expansive, Sumatra Batak's heady herbal notes open up into Yemeni spiced chocolate in this highly specialized riff on the classic Mocha-Java.", price: 18.95, product_image: "https://ik.imagekit.io/pinkwalrus/tr:w-650,h-650/Coffee_Mockups-04_8KMvT7cMT.png", quantity_in_stock: 22)

p9 = Product.create(name: "French Roast", category: "Dark Roast", description: "For those who relish smoky overtones and a pleasant bite, drinking French Roast exemplifies our commitment to rich, powerful coffee.", price: 18.95, product_image: "https://ik.imagekit.io/pinkwalrus/tr:w-650,h-650/Coffee_Mockups-02_cmTflaw2y.png", quantity_in_stock: 24)

p10 = Product.create(name: "Baridi Blend", category: "Medium Roast", description: "For the lover of cold brew comes this refreshingly crisp, artfully crafted blend of bold, juicy East African coffees.", price: 18.95, product_image: "https://ik.imagekit.io/pinkwalrus/tr:w-650,h-650/Coffee_Mockups-01_K6_CHbkuh.png", quantity_in_stock: 26)

p11 = Product.create(name: "Italian Roast", category: "Dark Roast", description: "For those seeking a penetrating, balanced roast with vigorous flavors. Masterfully slow roasted for boldly perfect cups.", price: 18.95, product_image: "https://ik.imagekit.io/pinkwalrus/tr:w-650,h-650/Coffee_Mockups-04_8KMvT7cMT.png", quantity_in_stock: 28)

p12 = Product.create(name: "Sulawesi-Kalosi", category: "Dark Roast", description: "Taste heaven in your cup. A rare coffee, semi-aged and cultivated in the traditional Sulawesi method.", price: 19.95, product_image: "https://ik.imagekit.io/pinkwalrus/tr:w-650,h-650/Coffee_Mockups-03_aA9vssKY9.png", quantity_in_stock: 30)

p13 = Product.create(name: "Big Bang", category: "Medium Roast", description: "Our most loved medium roast—smooth with a balanced richness.", price: 18.95, product_image: "https://ik.imagekit.io/pinkwalrus/tr:w-650,h-650/Coffee_Mockups-02_cmTflaw2y.png", quantity_in_stock: 22)

p14 = Product.create(name: "Brazil", category: "Medium Roast", description: "Taste the unctuous, body-driven, luscious result of coffee cherries naturally processed and sweetened by the Brazilian sun.", price: 17.95, product_image: "https://ik.imagekit.io/pinkwalrus/tr:w-650,h-650/Coffee_Mockups-03_aA9vssKY9.png", quantity_in_stock: 24)

p15 = Product.create(name: "Guatemala San Sebastian", category: "Dark Roast", description: "Savor a coffee both potent and refined from the best farm in Antigua, a favorite of our Roastmasters for more than 40 years.", price: 20.95, product_image: "https://ik.imagekit.io/pinkwalrus/tr:w-650,h-650/Coffee_Mockups-01_K6_CHbkuh.png", quantity_in_stock: 26)

puts "✅ Done seeding!"