var LoversService = require('../service/LoversService');

exports.getLocalLovers = async function(req, res, next){

    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 1000;

    var options = {
      lat : req.params.latitude,
      long : req.params.longitude,
      distance : req.params.distance
    }
    try{
        var lovers = await LoversService.getLocalLovers(options, page, limit)
        return res.status(200).json({status: 200, data: lovers});
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}
