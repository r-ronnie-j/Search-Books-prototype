const express = require('express');
const libgen = require('libgen')
const router = express.Router();
router.get(/\/search\/*/, async (req, res) => {
    const mirror = await libgen.mirror();
    const options = {
        mirror: mirror,
        query: req.query.queryString,
        count: 5,
        sort_by: 'year',
        reverse: true
    }
    const result = await libgen.search(options)
    res.render('search', {
        title: req.query.queryString,
        result: result
    });
})
module.exports = router;