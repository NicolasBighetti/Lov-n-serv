var LoversService = require('../service/LoversService');

exports.getLocalLovers = async function(req, res, next){

    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 1000;

    if(!req.query.long || !req.query.lat){
        return res.status(400).json({status: 400, message: "lat and long needed for geospatial query near"});
    }

    if(isNaN(req.query.distance)){
        return res.status(400).json({status: 400, message: "distance (in meters) must be a number "});
    }
    // setup geoJson for query
     var geoJson             = {};
     geoJson.type            = "Point";
     geoJson.coordinates     = [parseFloat(req.query.long), parseFloat(req.query.lat)];

     // setup options for query
     var options             = {};
     options.spherical       = true;
     //distance in METERS
     options.maxDistance     = parseInt(req.query.distance);
     // you can put any query here to further refine the result.
     options.query = { "loc.type": "Point" };

     var query = {
      location:
        { $near :
           {
             $geometry: geoJson,
             $maxDistance: parseInt(req.query.distance)
           }
        }
    }

    try{
        var lovers = await LoversService.getLocalLovers(query, page, limit)
        return res.status(200).json({status: 200, data: lovers});
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

//POST params
// lat , long, picture (base64  data)

exports.addLovers = async function(req, res, next){
  var lovers = {
    location : {
      type : 'Point',
      coordinates: [req.body.long, req.body.lat]
    },
    pictureBlob : req.body.picture
  }

  try{
    var createdLover = await LoversService.addNewLovers(lovers);

    return res.status(201).json({status: 201, data: createdLover, message: "Succesfully Created Lovers"})
  }catch(e){
  return res.status(400).json({status: 400, message: e.message + ", Lovers Creation was Unsuccesfull"})
  }
}
