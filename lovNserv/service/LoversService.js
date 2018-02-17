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
    console.log('couldnt locate local lovers.\n Error : ' + e);
  }
}

exports.addNewLovers = async function(loversData){

  console.log('in service creating')
  var lovers = new LoversModel(
    {
      location : loversData.location,
      pictureBlob : loversData.pictureBlob
    }
  );

  try{
    var addedLovers = await lovers.save();
    return addedLovers;
  } catch(e){
    console.log('Error while saving new lovers')
  }
}
