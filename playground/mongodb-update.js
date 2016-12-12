// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({ _id: new ObjectID('584d8cf9c24898e285d2ee05')
  // }, { $set: { completed: true }}
  // ,{ returnOriginal: false}).then((result) => {console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({ _id: new ObjectID('584d217e47feca385c9e5445')}
  ,{ $set: { name: 'James' },$inc: {age: 1}}
  ,{ returnOriginal: false}).then((result) => {console.log(result);
  });


  //db.close();
});
