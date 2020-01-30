const express = require('express');
const controller = require('../controllers/controller');
const router = express.Router();

router.get('/', controller.getHomePage);

router.get('/writeTransaction', controller.writeTransaction);
router.post('/writeTransaction', controller.postTransaction);

router.get('/transactions/:transactionId', controller.seeTransaction);

router.post('/seeTransaction', controller.deleteTransaction);

router.post('/updateTransaction', controller.updateTransaction);

router.get('/readTransaction', controller.readTransactions);

module.exports = router;