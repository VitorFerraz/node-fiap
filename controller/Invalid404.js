

class Invalid404 {
    invalidRoute(req, res) {
        res.status(404).send("Rota não encontrada");
      }
}

module.exports = Invalid404;