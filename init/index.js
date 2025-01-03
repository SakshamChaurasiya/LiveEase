const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");


const Mongo_url = "mongodb://127.0.0.1:27017/LiveEase";
main()
    .then((res) => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(Mongo_url);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=> ({...obj,owner:"677068ac88ae76acaa7aed7d"}))
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
};

initDB();