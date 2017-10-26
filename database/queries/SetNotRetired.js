const Artist = require('../models/artist');

/**
 * Sets a group of Artists as not retired
 * @param {array} _ids - An array of the _id's of of artists to update
 * @return {promise} A promise that resolves after the update
 */
module.exports = (_ids) => {
    var rafters = [];
    const searchQuery = Artist.find( { $and: [ { _id: _ids }, { retired:true } ] } )
    .then((artists) => {
      artists.map((result) => {
        return rafters.push(result.id);
      })
    }).then(() => {
      return Artist.updateMany({_id: rafters}, {$set: {retired: false}});
    })
    console.log(rafters);
};


// User.findByIdAndUpdate(joe._id, {name: "Joseph"})
//
// Artist.updateMany({_id:[rafters]}, {$set: {retired: false}});
//  assert.equal(2, r.matchedCount);
//  assert.equal(2, r.modifiedCount);
//
//  function check(peeps) {
//    Artist.findById(peeps)
//  }
//
//
// result.retired ?  : false


// ( { $and: [ { _id: _ids }, { retired:true } ] } )





// Artist.find({_id: _ids})
// .then((artist) => {
//   artist.map((result) => {
//   console.log(result);
//   })
// })
