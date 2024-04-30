const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');

describe('Basic Web Application', () => {
    it('should respond with "Hello from your basic web application!"', (done) => {
        request('http://localhost:3000')
            .get('/')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res.statusCode).to.equal(200);
                expect(res.text).to.equal('Hello from your basic web application!');
                done();
            });
    });
});
