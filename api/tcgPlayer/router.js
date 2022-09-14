const router = require('express').Router();
const { default: axios } = require('axios');
const { axiosWithTCGPKey } = require('../utils/axiosWithTCGPKey');

// limit and offset parameters are used for pagination;
// limit determines the amount of cards retrieved at a time and offset
// determines the section of cards to retrieve (page 1 starts at offset = 0)
router.get('/:limit/:offset', (req, res, next) => {
    axiosWithTCGPKey()
        .get(`/catalog/products?categoryId=63&getExtendedFields=true&productTypes=Cards&limit=${req.params.limit}&offset=${req.params.limit * req.params.offset}`)
        .then((response) => {
            res.status(200).json(response.data);
        })
        .catch(next);
});

router.get('/manifest', (req, res, next) => {
    axiosWithTCGPKey()
        .get('https://api.tcgplayer.com/catalog/categories/63/search/manifest')
        .then((response) => {
            res.status(200).json(response.data);
        })
        .catch(next);
})

router.post('/', (req, res, next) => {
    axiosWithTCGPKey()
        .post('/catalog/categories/63/search', req.body)
        .then(response => {
            res.status(201).json({totalItems: response.data.totalItems, results: response.data.results});
        })
        .catch(next);
})

router.get('/:ids', (req, res, next) => {
    axiosWithTCGPKey()
        .get(`/catalog/products/${req.params.ids}?getExtendedFields=true`)
        .then((response) => {
            res.status(200).json(response.data.results);
        })
        .catch(next);
})

module.exports = router;