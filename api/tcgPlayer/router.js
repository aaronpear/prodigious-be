const axios = require('axios');
const router = require('express').Router();

router.get('/', (req, res, next) => {
    axios.get('https://api.tcgplayer.com/catalog/products?categoryId=63&productTypes=Cards&limit=200',
        {
            headers: {
                'User-Agent': 'Prodigious',
                'Authorization': 'bearer npxSN5IqHL86a1GSZ8e3iQoLKHZyNI6tMP8fod_-9Nm15lzkn3w00L7vxjzUhi1jGyGDhEmAFbWj8GmefajgtmDdP80LUueSxJUbqgTdOxyDjOxxECUWWkIGIbx85SlVXga6NJO2LgSf0wlLMpWPtYAOeNv4MV3Gm9C1yOPDwyvA7pyUUPckdTSJCuiWWn-k9rod4YUkxVkii_tgk8rv4d2gQXal6rnzbGtbHysq-5Qx4rnwor49XGXDwfMXjTp5lk4imZ2DyFBZxSy-kvYFuPVeFAoLtZD7bamke6_wWkf2v8z9SCjs6E62pNZKWyQCrkfLVg'
            }
        })
        .then((response) => {
            res.status(200).json(response.data);
        })
        .catch(next);
});

module.exports = router;