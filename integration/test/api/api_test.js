const data = require('./../../main/data/api/api_data');
const responseStatus = require('./../../main/helper/responseCode.json')
const schemaAPI = require('./../../main/data/api/schema/api_schema.json');
const api = require('./../../main/pages/api/api_page');
const expect  = require('chai').expect;
const chai = require('chai');
const expect_json_schema = require('chai').expect
chai.use(require('chai-json-schema'));

describe('API - GET', () => {
    it('@GET @critical @ID-01 Check Type Data', (done) => {
        api.getAPI((response) => {
            expect(response.status).to.equal(responseStatus.successOk);
            expect_json_schema(response.body).to.be.jsonSchema(schemaAPI);
            done();
        });
    });
});

describe('API - POST', () => {
    it('@POST @normal @ID-02 Get Correct Response', (done) => {
        api.postAPI((response) => {
            expect(response.status).to.equal(responseStatus.successCreated);
            expect(response.body.title).to.equal(data.title);
            expect(response.body.body).to.equal(data.body);
            expect(response.body.userId).to.equal(data.userId);
            done();
        });
    });
});