// const { MongoClient } = require("mongodb");
// const uri ="mongodb+srv://edi:edi%4055585961@cluster0.v0ywz4n.mongodb.net/?retryWrites=true&w=majority";
   
// const client = new MongoClient(uri);
  
// client.connect()
// .then(() => { console.log("Connected to database"); })
// .catch(e => console.log(e));
  
// const dbName = "CustomerDB";
// const collectionName = "CustomerAccountInfo";
// const database = client.db(dbName);
// const collection = database.collection(collectionName);

// module.exports = connectToMongoose;

//-------------------------------------------------------------------------------------------------------------//

// const { MongoClient } = require("mongodb");
// const Db = process.env.ATLAS_URI;
// const client = new MongoClient(Db, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
 
// var _db;
 
// module.exports = {
//   connectToServer: function (callback) {
//     client.connect(function (err, db) {
//       // Verify we got a good "db" object
//       if (db)
//       {
//         _db = db.db("employees");
//         console.log("Successfully connected to MongoDB."); 
//       }
//       return callback(err);
//          });
//   },
 
//   getDb: function () {
//     return _db;
//   },
// };