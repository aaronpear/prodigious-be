const db = require('../data/dbConfig');

const get = () => {
    return db('keys');
}

const add = async (key) => {
    const [newKey] = await db('keys').insert(key).returning('*');
    return newKey;
}

const edit = (id, key) => {
    return db('keys').where('key_id', id).update(key).returning('*');
}

module.exports = { get, add, edit };