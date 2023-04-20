
# FANTASTIC UMBRELLA

 

## Table of Content
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Testing](#testing)
- [Questions](#questions)

## Description
All ecommerce companies require an application that can keep track of products and the associated data. This is a server side application that keeps track of current producuts to include price current stock and associates the products into categories and applies search tags to the product.

## Installation
To install this application clone the Github repo and create a copy on your local machine. Once you have cloned your copy open the application in VS Code, open a new terminal and in the CLI type NPM Install.

<img width="1277" alt="NPM Install" src="https://user-images.githubusercontent.com/120262482/233230844-cf61db3b-876d-450c-9e36-7db62e4b28fb.png">

Before runnig the application you must install MySQL onto your local machine ensuring you are using the Server version.  Once install open a second terminal and start the MySQL CLI interface by typing mysql -u root -p 

<img width="1278" alt="MYSQL Install" src="https://user-images.githubusercontent.com/120262482/233231164-03d84e9f-5e8b-441c-a2df-5169256f2423.png">

At the mysql> prompt type "SOURCE db/schema.sql;" This will initiate the sales_db database. Once complete typ "USE sales_db;".

<img width="1277" alt="Use Sales DB" src="https://user-images.githubusercontent.com/120262482/233231775-399eca48-68fc-4ca9-a723-0644836a2086.png">

Change back to the first terminal and type "npm run seed" to seed the tables to able to use the routes.

<img width="1277" alt="Seed the tables" src="https://user-images.githubusercontent.com/120262482/233232484-61e9d9c1-44df-4e04-8084-137bbbbebc35.png">

## Usage
After the DataBase has been setup at the bash command line type "NPM Start". 

<img width="1280" alt="NPM Start" src="https://user-images.githubusercontent.com/120262482/233232670-e1116b2c-e68b-4b68-ad10-2eaeb7ad8311.png">

At this time the application is running on port 3001 and you can use Insomnia or equivilant program of you choosing and run GET, POST, PUT and DELETE routes to manipulate the data. A demonstration of the applications function is linked below.

https://drive.google.com/file/d/1tYAoCrS5Qv5EONGjWMmN2deeRUMSITIA/view

## License
This project does not have a license attached.

## Contributing
NA

## Testing
NA

## Questions

Any questions regarding this project can be directed to: 

EMail me at:
MSchuur31@gmail.com


My Github username:
MSchuur
