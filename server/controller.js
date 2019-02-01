// let allHouses = [
//     {
//         name: 'dallin',
//         address: '123',
//         city: 'salem',
//         state: 'utah',
//         zipcode: 123
//     }
// ]


module.exports = {
  getHouses: (req, res, next) => {
      const dbInstance = req.app.get('db');
      dbInstance.get_houses()
      .then( houses => res.status(200).send(houses) )
      .catch( err => {
          res.status(500).send({errorMessage: 'failed to getAll'});
          console.log(err);
      });
  },

};
