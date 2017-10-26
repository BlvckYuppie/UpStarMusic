const Artist = require('../models/artist');

/**
 * Finds the lowest and highest yearsActive of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max yearsActive, like { min: 0, max: 14 }.
 */
 module.exports = () => {
   const minQuery = Artist
   .find({})
   .sort({yearsActive: 1})
   .limit(1)
   .then((artists) => artists[0].yearsActive)

   const maxQuery = Artist
   .find({})
   .sort({yearsActive: -1})
   .limit(1)
   .then((artists) => artists[0].yearsActive)

   return Promise.all([minQuery, maxQuery])
   .then((res) => {
     return{min: res[0], max:res[1]}
   });
 };



 // let min, max;
 // return User.find({})
 //   .sort({yearsActive: 1})
 //   .then((users)=>{
 //       min = users[0].yearsActive;
 //       max = users.[-1].yearsActive;
 //       return {min,max}
 //     });
