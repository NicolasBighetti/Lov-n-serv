var express = require('express');
var swagger = require('swagger-spec-express');

var router = express.Router();
swagger.swaggerize(router);

var LoversController = require('../../controllers/LoversController');

router.get('/', LoversController.getLocalLovers).describe({
    summary: "Récupère les lovers proche géographiquement",
    description: "Récupère les lovers distant d'au plus n mètres en fonction de la latitude et de la longitude",
    tags: [
      "Lovers"
    ],
    operationId: "Nearby",
    produces:["application/json"],
    parameters:[
        {
          "in":"query",
          "name":"lat",
          "type" : "number",
          "required": true,
          "description":"La latitude désirée"
        },
        {
          "in":"query",
          "name":"long",
          "type" : "number",
          "required": true,
          "description":"La longitude désirée"
        },
        {
          "in":"query",
          "name":"distance",
          "type" : "number",
          "required": true,
          "description":"La distance de recherche voulue en mètres"
        }
    ],
    responses: {
        200: {
            description: "Retourne la liste des accidents proches géographiquement"
        },
        400: {
            description: "Erreur de paramètres, voir les paramètres disponible"
        },
        500: {
            description: "Erreur interne"
        }
    }
});
router.post('/', LoversController.addLovers);

module.exports = router;
