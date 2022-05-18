const router = require('express').Router();
const Keys = require('./model');

router.get('/', (req, res, next) => {
    Keys.get()
        .then((key) => {
            res.status(200).json(key);
        })
        .catch(next);
});

router.post('/', async (req, res, next) => {
    await Keys.add(req.body)
        .then((newKey) => {
            res.status(201).json(newKey);
        })
        .catch(next);
});

router.put('/:id', async (req, res, next) => {
    const { id } = req.params;
    await Keys.edit(id, req.body)
        .then((updatedKey) => {
            res.status(200).json(updatedKey);
        })
        .catch(next);
})

module.exports = router;