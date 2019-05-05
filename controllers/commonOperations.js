const Actor_Movie = require('../models/actor_movie');

const findMovieIDsByActorId = (id) => {
    const promise = Actor_Movie.findAll({ where: {actor_id: id}})
    promise.then((ids) => {
        return ids;
    }).catch(err => {
        return err;
    })
}

