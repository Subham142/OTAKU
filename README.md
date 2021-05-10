# 🅾🆃🅰🅺🆄

An online e-commerce site to buy manga.

![WhatsApp Image 2021-05-10 at 20 06 20 (1)](https://user-images.githubusercontent.com/64212940/117678996-86a05a80-b1cd-11eb-806a-e3fc8bcb8d3a.jpeg)

![WhatsApp Image 2021-05-10 at 20 06 20](https://user-images.githubusercontent.com/64212940/117679122-9ddf4800-b1cd-11eb-98ec-36d48a1ac978.jpeg)

![WhatsApp Image 2021-05-10 at 20 06 22](https://user-images.githubusercontent.com/64212940/117679188-acc5fa80-b1cd-11eb-9d47-7476e978956f.jpeg)

## Features

- Google auth for sign in and sign up
- Full-featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as a delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)
- Chatbot

Deployed at Heroku

## Tech Stack Used
### Frontend
React with Functional Components & Hooks

React router

React-Bootstrap UI library

Component level state & props

Managing global state with Redux (Actions & Reducers)

### Backend

Express

MongoDB database and the Mongoose ODM

JWT authentication (JSON web tokens)

PayPal API


### ES Modules in Node

We use ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error

You can also install and setup Babel if you would like

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@example.com (Admin)
123456

john@example.com (Customer)
123456

jane@example.com (Customer)
123456

