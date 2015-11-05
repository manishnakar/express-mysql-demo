//Following test case assumes you have express js server running at port 3000 and has api /api/login

var should = require('should');
var assert = require('assert');
var request = require('supertest');
var winston = require('winston');

describe('Routing', function() {
    var url = 'http://localhost:3000';

    before(function(done) {
        // In our tests we use the test db

        done();
    });

    describe('REST Api', function() {
        it('should return valid AuthId', function(done) {
            var params = {
                username: 'test',
                password: 'password',

            };

            request(url)
                .post('/api/login')
                .send(params)
            // end handles the response
            .end(function(err, res) {
                if (err) {
                    throw err;
                }
                res.should.have.status(200);
                res.body.should.have.property('AuthId');
                
                done();
            });
        });

    });
});