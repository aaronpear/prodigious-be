const router = require('express').Router();
const { axiosWithTCGPKey } = require('../utils/axiosWithTCGPKey');

// limit and offset parameters are used for pagination;
// limit determines the amount of cards retrieved at a time and offset
// determines the section of cards to retrieve (page 1 starts at offset = 0)
router.get('/:limit/:offset', (req, res, next) => {
    console.log(req.params);
    axiosWithTCGPKey()
        .get(`/catalog/products?categoryId=63&getExtendedFields=true&productTypes=Cards&limit=${req.params.limit}&offset=${req.params.limit * req.params.offset}`)
        .then((response) => {
            res.status(200).json(response.data);
        })
        .catch(next);
});

module.exports = router;