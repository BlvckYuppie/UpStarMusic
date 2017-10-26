const Artist = require('../models/artist');

/**
 * Sets a group of Artists as retired
 * @param {array} _ids - An array of the _id's of of artists to update
 * @return {promise} A promise that resolves after the update
 */
module.exports = (_ids) => {
  var rafters = [];
  const searchQuery = Artist.find( { $and: [ { _id: _ids }, { retired:false } ] } )
  .then((artists) => {
    artists.map((result) => {
      return rafters.push(result.id);
    })
  }).then(() => {
    return Artist.updateMany({_id: rafters}, {$set: {retired: true}});
  })
};
