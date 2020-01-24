const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
let db;
const uri =
  "mongodb+srv://DBadmin:126mgbyXocI2oUop@cluster0-5qo3r.azure.mongodb.net/test?retryWrites=true&w=majority";

exports.mongoConnect = callback => {
  MongoClient.connect(uri)
    .then(client => {
      db = client.db("ciccc");
      callback();
    })
    .catch(err => {
      console.log("DATA BASE EROOORR:", err);
    });
};

exports.getDB = () => {
  if (db) {
    return db;
  } else {
    throw err;
  }
};
