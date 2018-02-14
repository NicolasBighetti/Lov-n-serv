var LoversModel = require('../models/LoversModel');

//req.params
exports.getLocalLovers = async function(query, page, limit){
  var options = {
    page,
    limit
  };

  try{
    var lovers = await LoversModel.paginate(query, options);
    return lovers;
  } catch(e){
    console.log('couldnt locate local lovers');
  }
}
