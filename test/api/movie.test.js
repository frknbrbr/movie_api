const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../../app');

chai.use(chaiHttp);

describe('/api/movies test', () => {
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

    describe('/GET movies', () => {
        it('it should GET all the movies', (done) => {
            chai.request(server)
                .get('/api/movie')
                .set('x-access-token', token)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('movie');
                    res.body.movie.should.be.a('array');
                    res.body.status.should.be.equal(true);
                    movieId = res.body.movie[0].id;
                    genre = res.body.movie[0].genre;
                    title = res.body.movie[0].title;
                    done();
                });
        })
    });

    describe('/GET movie', () => {
        it('it should GET movie by id', (done) => {
            chai.request(server)
                .get('/api/movie/' + movieId)
                .set('x-access-token', token)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('movie');
                    res.body.status.should.be.equal(true);
                    done();
                })
        })
    });

    describe('/GET movie ', () => {
        it('it should GET movie by genre', (done) => {
            chai.request(server)
                .get('/api/movie/genre/' + genre)
                .set('x-access-token', token)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('movie');
                    res.body.status.should.be.equal(true);
                    done();
                })
        })
    })

    describe('/GET movie ', () => {
        it('it should GET movie by title', (done) => {
            chai.request(server)
                .get('/api/movie/title/' + title)
                .set('x-access-token', token)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('movie');
                    res.body.status.should.be.equal(true);
                    done();
                })
        })
    })

    describe('/POST movie', () => {
        it('it should POST a movie', (done) => {
            const movie = {
                title: 'Test',
                genre: 'Comedy',
                release_date: 1950,
                description: "Test movie",
                media: ""
            };

            chai.request(server)
                .post('/api/movie')
                .send(movie)
                .set('x-access-token', token)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('title');
                    res.body.should.have.property('genre');
                    res.body.should.have.property('media');
                    res.body.should.have.property('release_date');
                    res.body.should.have.property('description');
                    movieId = res.body.id;
                    done();
                });
        });
    });

    describe('/DELETE/:movie_id movie', () => {
		it('it should DELETE a movie given by id', (done) => {
			chai.request(server)
				.delete('/api/movie/' + movieId)
				.set('x-access-token', token)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					res.body.should.have.property('status').eql(true);
					done();
				});
		});
	});
})