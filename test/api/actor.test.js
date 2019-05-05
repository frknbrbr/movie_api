const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../../app');

chai.use(chaiHttp);

describe('/api/actor test', () => {
    before((done) => {
        chai.request(server)
            .post('/users/login')
            .send({
                email: "ick@gmail.com",
                password: "246"
            })
            .end((err, res) => {
                token = res.body.token;
                console.log(token);
                done();
            })
    });

    describe('/POST actor', () => {
        it('it should POST an actor', (done) => {
            const actor = {
                full_name: 'Test',
                role: 'Lead'
            };

            chai.request(server)
                .post('/api/actor')
                .send(actor)
                .set('x-access-token', token)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('full_name');
                    res.body.should.have.property('role');
                    actorId = res.body.id;
                    done();
                });
        });
    });
})