const router = require('express').Router();
const { axiosWithTCGPKey } = require('../utils/axiosWithTCGPKey');

router.get('/', (req, res, next) => {
    axiosWithTCGPKey()
        .get('/catalog/products?categoryId=63&productTypes=Cards&limit=200')
        .then((response) => {
            res.status(200).json(response.data);
        })
        .catch(next);
});

module.exports = router;