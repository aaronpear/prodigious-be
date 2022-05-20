const axios = require('axios');

const axiosWithTCGPKey = () => {
    return axios.create({
        headers: {
            'User-Agent': 'Prodigious',
            'Authorization': `bearer ${process.env.API_ACCESS_KEY}`
            },
        baseURL: 'https://api.tcgplayer.com'
    });
}

module.exports = { axiosWithTCGPKey };