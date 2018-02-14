var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate')


var LoversSchema = new mongoose.Schema({
  //Geojson uses long/lat not lat/long
  location : {type: String, coordinates: [Number]},
  pictureBlob : {type: String}
});

LoversSchema.virtual('categoryId').get(function() {
    return this._id;
});

LoversSchema.index({location : '2dsphere'});

LoversSchema.plugin(mongoosePaginate);

const Lovers = mongoose.model('Lovers', LoversSchema);

module.exports = Lovers;
