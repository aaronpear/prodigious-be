const axios = require('axios');
const router = require('express').Router();

router.get('/', (req, res, next) => {
    axios.get('https://api.tcgplayer.com/catalog/products?categoryId=63&productTypes=Cards&limit=200',
        {
            headers: {
                'User-Agent': 'Prodigious',
                'Authorization': `bearer ${process.env.API_ACCESS_KEY}`
            }
        })
        .then((response) => {
            res.status(200).json(response.data);
        })
        .catch(next);
});

module.exports = router;