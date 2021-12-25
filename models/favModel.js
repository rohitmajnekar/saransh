const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favSchema = new Schema( {
    link: {type:String}
});

const Favs = mongoose.model('Fav', favSchema)

module.exports = Favs