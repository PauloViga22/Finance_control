const express = require('express');
const controller = require('../controllers/controller');
const router = express.Router();

router.get('/', controller.getHomePage);

router.get('/write', controller.writeNote);
router.post('/write', controller.postNote);

router.get('/writeTransaction', controller.writeTransaction);
router.post('/writeTransaction', controller.postTransaction);

router.get('/notes/:noteId', controller.seeNote);
router.get('/transactions/:transactionId', controller.seeTransaction);

router.post('/see', controller.deleteNote);
router.post('/seeTransaction', controller.deleteTransaction);

router.post('/update', controller.updateNote);
router.post('/updateTransaction', controller.updateTransaction);

router.get('/read', controller.readNotes);

router.get('/readTransaction', controller.readTransactions);

module.exports = router;