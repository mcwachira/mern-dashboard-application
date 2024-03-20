# Full Stack App Dashboard  Built Using the Mern Stack adn Material ui 




<img src="./mern-Ecommerce.png">
### Links

- Solution URL: [Github](https://github.com/mcwachira/mern-dashboard-application)
- Live Site URL: [Live](https://admin-dashboard-frontend-ye6f.onrender.com/)
<!-- toc -->

- [Features](#features)
- [Usage](#usage)
    - [Env Variables](#env-variables)
    - [Install Dependencies (frontend & backend)](#install-dependencies-frontend--backend)
    - [Run](#run)
- [Build & Deploy](#build--deploy)
    - [Seed Database](#seed-database)

*

<!-- tocstop -->

## Features

- Full-featured DashBoard
- Ability to view Products
- Ability to View Users
- Ability to monitor sales
- Ability to Monitor Geography of users


## Usage

- Create a MongoDB database and obtain your `MongoDB URI` - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)

### Env Variables

Rename the `.env.example` file to `.env` and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'

```

Change the JWT_SECRET and PAGINATION_LIMIT to what you want

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

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```
---


### Built with

- React
- Material Ui
- Nodejs
- Express
- MongoDb
- Reacharts
- Mobile-first workflow

### What I learned

- Learnt How to build a App Dashboard
- Learnt How to use React , Material UI Node and Express to build an app.
- Learnt How to use MongoDB to store my data


## Author

- Website - [mcwachira.com](https://mcwachira.com)
- Twitter - [@mc_wachira](https:https://twitter.com/mc_wachira)
