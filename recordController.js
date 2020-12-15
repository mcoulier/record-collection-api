Record = require('./recordModel');

exports.index = function (req, res) {
    Record.get(function (err, records) {
        if (err) {
            res.json({
                status: "error",
                message: "err",
            });
        }
        res.json({
            status: 'success',
            message: 'Records retrieved successfully',
            data: records,
        });
    });
};

exports.new = function (req, res) {
    const record = new Record();
    record.name = req.body.name ? req.body.name : record.name;
    record.artist = req.body.artist;
    record.genre = req.body.genre;
    record.label = req.body.label;
    record.price = req.body.price;

    record.save(function (err){
        if (err){
            res.json(err);
        }
        res.json({
            message: 'New record created!',
            data: record
        });
    });
};

exports.view = function (req, res) {
    Record.findById(req.params.record_id, function (err, record) {
        if (err) {
            res.send(err);
        }

        res.json({
            message: 'Record details loading',
            data: record
        });
    });
};

exports.update = function (req, res) {
    Record.findById(req.params.record_id, function (err, record) {
        if (err) {
            res.send(err);
        }
        record.name = req.body.name ? req.body.name : record.name;
        record.artist = req.body.artist;
        record.genre = req.body.genre;
        record.label = req.body.label;
        record.price = req.body.price;

        record.save(function (err){
            if (err){
                res.json(err);
            }
            res.json({
                message: 'Record data updated!',
                data: record
            });
        });
    });
};

exports.delete = function (req, res) {
    Record.remove({
        _id: req.params.record_id
    }, function (err, record) {
        if (err) {
            res.send(err);
        }

        res.json({
            message: 'Record deleted!',
            status: 'success'
        });
    });
};