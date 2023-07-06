import express from "express";

/* controladores */
import controllerbodega from "./controladores/controllerbodega.js";

const router = express.Router();

// Ruta de ejemplo: GET /
router.get("/", (req, res) => {
    res.send("Api sistema de bodegas");
});

// Ruta POST /bodegas para crear una nueva bodega

/* 

recibe

{
  "id_responsable" : 16,
  "nombre" : "daniel",
  "estado" : 2
}

devuelve

{
  "id": 54,
  "nombre": "daniel",
  "id_responsable": 16,
  "estado": 2,
  "created_by": null,
  "updated_by": null,
  "created_at": "2023-07-06T04:41:23.000Z",
  "updated_at": null,
  "deleted_at": null
}

*/

router.post("/bodegas", (req, res) =>{controllerbodega.createBodega(req, res)} );


// Ruta GET /bodegas para listar totales de porductos

/* 

 devuelve los productos en forma descendente agrupados por bodegas
 ejemplo

 [
  {
    "bodega": "prueba",
    "total": "89700",
    "producto": 27
  },
  {
    "bodega": "bodega2",
    "total": "87000",
    "producto": 28
  },
  {
    "bodega": "bodega7",
    "total": "55281",
    "producto": 27
  }
]


*/

router.get("/bodegas", (req, res) => {
    controllerbodega.listarproductos(req, res)
})


router.post("/productos", (req, res) => {

})



// Exportar el router
export default router;
