const Actor = require('../models/actor');
const Actor_Movie = require('../models/actor_movie');
module.exports = {
    findActorIdByName: (name) => {
        const promise = Actor.findOne({
            where: {
                full_name: name
            }
        });
        promise.then((actor) => {
            return actor.id;
        }).catch((err) => {
            return err;
        })
    },
    addActor: (full_name, role) => {
        return Actor.sync().then(() => {
            return Actor.create({
                full_name: full_name,
                role: role
            });
        });
    }
}