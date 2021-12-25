const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema( {
    paper:{type:String},
    data: {type:Array},
    dates:{type:Array},
    link: {type:Array}

});

const News = mongoose.model('New', newsSchema)

module.exports = News