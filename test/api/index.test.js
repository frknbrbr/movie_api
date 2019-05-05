const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../../app');

chai.use(chaiHttp);

describe('Node server', () => {
    it('(GET) returns index', (done) => {
        chai.request(server)
            .get('/api')
            .end((err,res) => {
                res.should.have.status(200);
                done();
            })
    })
})
