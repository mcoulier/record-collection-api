const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        status: 'Working',
        message: 'Your record collection'
    });
});

let recordController = require('./recordController');

router.route('/records')
    .get(recordController.index)
    .post(recordController.new)

router.route('/records/:record_id')
    .get(recordController.view)
    .put(recordController.update)
    .delete(recordController.delete)

module.exports = router;