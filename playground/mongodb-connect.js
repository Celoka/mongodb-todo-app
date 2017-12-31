const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Unable to connect to MongoDB server');  // use return  instead of else statement
  }
  console.log('Connected to MongoDB server');

  // Insert a document into mongodb
  // db.collection('Todos').insert({
  //   test: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todo', err)
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })

  // Insert new doc into Users (name, age, location)
  // db.collection('Users').insert({
  //   name: 'Adrew',
  //   age: 25,
  //   location: 'New York'
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert user', err)
  //   }
  //   console.log(result.ops)
  //   console.log(result.ops[0]._id.getTimestamp()) // Get time stamp
  // })

  db.close();
})