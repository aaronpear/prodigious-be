const db = require('../data/dbConfig');

const getKeys = () => {
    return db('keys');
}

const addKey = async (key) => {
    const [newKey] = await db('keys').insert(key, ["API_ACCESS_KEY"]);
    return newKey;
}

const editKey = async (id, key) => {
    return db('keys').where('key_id', id).update(key);
}

module.exports = { getKeys, addKey, editKey };