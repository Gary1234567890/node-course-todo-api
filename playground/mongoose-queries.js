const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

const {ObjectID} = require('mongodb');

var id = '5855272fe660ccc425336bb3';

if (!ObjectID.isValid(id)) {
  console.log('ID not Valid');
}

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos',todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo',todo);
});

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('ID not found');
  }
  console.log('Todo by ID',todo);
}).catch((e) => console.log(e));


Todo.findById(id).then((user) => {
  if (!user) {
    return console.log('ID not found');
  }
  console.log('Todo by ID',user);
}).catch((e) => console.log(e));
