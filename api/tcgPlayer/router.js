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

router.get('/products', (req, res, next) => {
    axiosWithTCGPKey()
        .get('/catalog/products/229758?getExtendedFields=true')
        .then((response) => {
            console.log(response);
            res.status(200).json(response.data.results);
        })
        .catch(next);
});


module.exports = router;