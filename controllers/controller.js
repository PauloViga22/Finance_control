const Note = require('../models/note');
const Transaction = require('../models/transaction');

exports.getHomePage = (req, res, next) => {
  res.render('home');
}

exports.writeTransaction = (req, res, next) => {
  res.render('writeTransaction');
}

exports.postTransaction = (req, res, next) => {
  console.log(req.body)
  const transaction = new Transaction(req.body.title, req.body.date, req.body.amount, req.body.type, req.body.type);
  console.log("transaction ---> ", transaction)
  transaction.saveTransaction()
  res.redirect('/readTransaction');
}

exports.readTransactions = (req, res, next) => {
  Transaction.getAll().then(transactions => {
    res.render('readTransaction', {
      transactions: transactions
    });
  });
}

exports.seeTransaction = (req, res, next) => {
  const transactionId = req.params.transactionId;
  const isEditing = req.query.edit;

  Transaction.getAll().then(transactions => {
    const transaction = transactions.find((tr) => tr._id == transactionId)

    res.render('seeTransaction', {
      transaction: transaction,
      editMode: isEditing
    });
  });
}

exports.deleteTransaction = (req, res, next) => {
  const transactionId = req.body.transactionId;
  // console.log("Deleting the transaction n:", transactionId);
  Transaction.deleteTransaction(transactionId);
  res.redirect('/readTransaction');
}


exports.updateTransaction = (req, res, next) => {
  const transactionId = req.body.transactionId;
  const title = req.body.title;
  const date = req.body.date;
  const amount = req.body.amount;
  const type = req.body.type;

  Transaction.updateTransaction(transactionId, title, date, amount, type);
  res.redirect('/transactions/' + transactionId);
}



exports.writeNote = (req, res, next) => {
  res.render('write');
}

exports.postNote = (req, res, next) => {
  const note = new Note(req.body.author, req.body.title, req.body.content);
  note.saveNote();
  res.redirect('/');
}

exports.readNotes = (req, res, next) => {
  Note.getAll().then(notes => {
    res.render('read', {
      notes: notes
    });
  });
}

exports.seeNote = (req, res, next) => {
  const noteId = req.params.noteId;
  const isEditing = req.query.edit;

  Note.getAll().then(notes => {
    const note = notes.find((nt) => nt._id == noteId)

    res.render('see', {
      note: note,
      editMode: isEditing
    });
  });
}

exports.deleteNote = (req, res, next) => {
  const noteId = req.body.noteId;
  console.log(noteId);
  Note.deleteNote(noteId);
  res.redirect('/read');
}

exports.updateNote = (req, res, next) => {
  const noteId = req.body.noteId;
  const title = req.body.title;
  const content = req.body.content;

  Note.updateNote(noteId, title, content);
  res.redirect('/notes/' + noteId);
}