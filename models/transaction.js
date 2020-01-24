const database = require('../util/database');

const mongodb = require('mongodb');

//126mgbyXocI2oUop ----> senha do banco 

class Transaction {

  constructor(title, date, amount, type) {
    this.title = title;
    this.date = date;
    this.amount = amount;
    this.type = type;
  }

  saveTransaction() {
    if (this.type === 'expense') {
      this.amount *= -1;
    }
    database.getDB().collection('transaction').insertOne(this)
      .then(result => {
        console.log('success!', result);
      })
      .catch(err => {
        console.log("faild", err);
      });
  }

  static getAll() {
    return database.getDB().collection('transaction').find().toArray()
      .then(result => {
        // console.log('success!', result);
        return result;
      })
      .catch(err => {
        console.log(err);
      });
  }



  static deleteTransaction(id) {
    return database.getDB().collection('transaction').deleteOne({
      _id: new mongodb.ObjectId(id)
    });
  }

  static updateTransaction(id, title, date, amount, type) {
    return database.getDB().collection('transaction')
      .updateOne({
        _id: new mongodb.ObjectId(id)
      }, {
        $set: {
          title: title,
          date: date,
          amount: amount,
          type: type
        }
      });
  }
}

module.exports = Transaction;