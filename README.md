# The Coffee Shop
<img width="1440" alt="Screen Shot 2022-12-20 at 7 04 31 PM" src="https://user-images.githubusercontent.com/107666746/208790278-3a452595-9944-4c1b-b64f-987fe82a9a94.png">

This is an e-commerce web app created using Create React App that utilizes Rails in the backend.

With this app, the user is able to Signup, Login, Logout, and update user information. Additionally, the cart utilizes full CRUD which allows a user to view, add, edit, and delete the cart and its items.

While the project isn't fully developed, a lot of additional features, styling, and functionality will be implemented in the future.

## Installation
- Clone the repo onto your local computer
- While in your terminal, `cd` into the cloned directory
- Run the following commands: 
  - bundle install
  - rails db:create
  - rails db:migrate
  - rails db:seed
- `cd` into the client directory and run `npm install`

## Running the Local Server
- While in your top level directory, run the command `rails s`
- Open another terminal and run `npm start --prefix client`
- If the browser doesn't open automatically, paste this URL into your browser: http://localhost:4000

## Stopping the Local Server
- In both terminals, press `control + c`
