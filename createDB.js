var MongoClient = require('mongodb').MongoClient
var data = require("./data.js").data

const uri = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(uri)
async function run() {
    try  {
        await client.connect();
        var database = client.db("midnightclub");
        database.dropDatabase()
        database = client.db("midnightclub");
        const cars = database.collection("cars");
        const result = await cars.insertMany(data);
        console.log(`${result.insertedCount} documents were inserted`);
    } finally {
        await client.close();
    }
}
run()