const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../../app');

chai.use(chaiHttp);

const test_mail = Math.random().toString(36).substr(2, 5);

describe('/api/movies test', () => {
    it("register test",(done) => {
        chai.request(server)
            .post('/users/register')
            .send({
                email: test_mail,
                fullname: "sfb",
                password: "246"
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('id');
                res.body.should.have.property('fullname');
                res.body.should.have.property('password');
                res.body.should.have.property('email');
                done();
            })
    });

    
})