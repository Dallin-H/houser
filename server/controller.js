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
    const dbInstance = req.app.get("db");
    dbInstance
      .get_houses()
      .then(houses => res.status(200).send(houses))
      .catch(err => {
        res.status(500).send({ errorMessage: "failed to get all" });
        console.log(err);
      });
  },
  addHouse: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { name, address, city, state, zipcode } = req.body;
    dbInstance
      .add_house([name, address, city, state, zipcode])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "failed to add house" });
        console.log(err);
      });
  },
  deleteHouse: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;
    dbInstance
      .delete_house(id)
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "failed to delete" });
        console.log(err);
      });
  }
  //next method here
};
