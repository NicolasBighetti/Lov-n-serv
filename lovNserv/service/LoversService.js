var LoversModel = require('../models/LoversModel');

//req.params
exports.getLocalLovers = async function(query, page, limit){
  var options = {
    page,
    limit
  };

  try{
    var lovers = await LoversModel.find(query);
    return lovers;
  } catch(e){
    console.log(JSON.stringify(LoversModel));
    console.log('couldnt locate local lovers.\n Error : ' + e);
  }
}
