const mongoose = require('mongoose');
const Product = require('./models/product');

const products = [
    {
        name: "iphone 15 pro",
        img: "https://unsplash.com/photos/a-cell-phone-sitting-on-top-of-a-black-table-2h1Bsi24_mU",
        price: 124000,
        desc: "very costly phone it is"
    },
    {
        name: "macbook pro",
        img: "https://unsplash.com/photos/macbook-pro-on-white-table-psGV5KhidlY",
        price: 230000,
        desc: "hello i am good machine"
    },
    {
        name: "apple pencil",
        img: "https://unsplash.com/photos/person-writing-on-white-paper-on-black-table-fUdTivaXoYs",
        price: 10000,
        desc: "i can write future"
    }
]


async function seedDB(){
    await Product.insertMany(products);
    console.log("DB seeded")
}

module.exports = seedDB;