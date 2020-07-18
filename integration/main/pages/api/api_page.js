const supertest = require ('supertest');
const api = supertest('https://jsonplaceholder.typicode.com');

function getAPI(response) {
    api.get('/posts')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .end((err, result) => {
            response(result);
        });
}

function postAPI(response) {
    api.post('/posts')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .end((err, result) => {
            response(result);
        });
}

module.exports = {
    getAPI,
    postAPI
}