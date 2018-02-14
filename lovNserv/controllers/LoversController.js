var LoversService = require('../service/LoversService');

exports.getLocalLovers = async function(req, res, next){

    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 1000;

    console.log("REQ : " + JSON.stringify(req.query));

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
