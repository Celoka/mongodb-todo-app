const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Unable to connect to MongoDB server');  // use return  instead of else statement
  }
  console.log('Connected to MongoDB server');

  // Update
  // db.collection('Todos').findOneAndUpdate({
  //   _id: ObjectID('5a479fb5fce54f7479610f13')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result)
  // })

  // Assignment
  db.collection('Users').findOneAndUpdate({
    _id: ObjectID('5a479be6c05bc809b75c638c')
  }, {
    $set: {
      name: 'Ebuka'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  })

  //db.close();
})