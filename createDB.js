var MongoClient = require('mongodb').MongoClient

const uri = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(uri)
async function run() {
    try  {
        await client.connect();
        var database = client.db("midnightclub");
        database.dropDatabase()
        database = client.db("midnightclub");
        const cars = database.collection("cars");
        const result = await cars.insertOne({name: "Supra"});
        for (const key in result) {
            console.log(`${key}: ${result[key]}`);
            }
    } finally {
        await client.close();
    }
}
run()