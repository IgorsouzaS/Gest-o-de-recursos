const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://igordb:db123456@cluster0-daoxd.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true });


const include = client.connect(err => {

    const collection = client.db("clients").collection("employers");
    

    client.close();

});

module.exports(include);