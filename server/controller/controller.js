module.exports = {
  getProducts: (req, res) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .get_all_products()
      .then(products => {
        console.log(res);
        res.status(200).send(products);
      })
      .catch(err => {
        res.status(500).send({ errorMessage: "oopsy daisy" });
      });
  },

  postProducts: (req, res) => {
    const dbInstance = req.app.get("db");
    const { name, price, img } = req.body;

    dbInstance
      .create_product(name, price, img)
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "oopsy daisy" });
      });
  },

  deleteProducts: (req, res) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;
    // console.log(id)
    dbInstance
      .delete_product([id])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "oopsy daisy" });
      });
  },

  editProducts: (req, res) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;
    const { name, price, img } = req.body;
    console.log("name/price", name, price);
    dbInstance
      .edit_products([id, name, price, "img.com"])
      .then(response => {
        console.log("response from query, ", response);
        return res.status(200).send(response);
      })
      .catch(err => {
        return res.status(500).send({ errorMessage: "oopsy daisy" });
      });
  }
};
