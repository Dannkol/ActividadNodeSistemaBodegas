import express from "express";

/* controladores */
import controllerbodega from "./controladores/controllerbodega.js";
import controllerporducto from "./controladores/controllerporducto.js";
import controllerinventarios from "./controladores/controllerinventarios.js";
import controllertraslado from "./controladores/controllertraslado.js";

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


// Ruta POST /productos para crear un producto
/* 

 recibe

{
  "nombre": "arroz",
  "descripcion": "Arroz Blanco",
  "estado": 1,
  "cantidad": 10
}

devuelve

{
  "mensaje": "Producto creado",
  "producto": {
    "producto": {
      "id": 63,
      "nombre": "arroz",
      "descripcion": "Arroz Blanco",
      "estado": 1,
      "created_by": null,
      "updated_by": null,
      "created_at": null,
      "updated_at": null,
      "deleted_at": null
    },
    "inventario": {
      "id": 80,
      "id_bodega": 11,
      "id_producto": 63,
      "cantidad": 10,
      "created_by": null,
      "updated_by": null,
      "created_at": "2023-07-06T06:17:17.000Z",
      "updated_at": null,
      "deleted_at": null
    }
  }
}


*/

router.post("/productos", (req, res) => {
    controllerporducto.crearproducto(req, res)
})


// Ruta POST /inventario para crear nuevo inventario

/* 

    Dependiendo del caso el funcionamiento del endpoint cambia

    recibe

    {
        "id_producto": 62,
        "id_bodega": 13,
        "cantidad": 2
    }

    si el inventario existe actualiza la cantidad y devuelve 

    {
        "mensaje": "actualizacion de inventario",
        "inventario": [
            {
                "id": 82,
                "id_bodega": 13,
                "id_producto": 62,
                "cantidad": 54,
                "created_by": null,
                "updated_by": null,
                "created_at": "2023-07-06T07:19:58.000Z",
                "updated_at": null,
                "deleted_at": null
            }
        ]
    }


    Si el inventario no existe crea uno nuevo y devuelve

    {
        "mensaje": "crear nuevo inventario",
        "inventario": [
            {
                "id": 83,
                "id_bodega": 12,
                "id_producto": 62,
                "cantidad": 2,
                "created_by": null,
                "updated_by": null,
                "created_at": "2023-07-06T07:26:01.000Z",
                "updated_at": null,
                "deleted_at": null
            }
        ]
    }

*/

router.post("/inventario", (req, res) => {
    controllerinventarios.crearInventario(req, res)
})


// Ruta POST /traslado para realizar el traslado de productos entre bodejas

/* 

    el endpoint cuenta con varias validaciones que

    recibe

    {
        "cantidad": 23,
        "producto": 18,
        "bodega_send": 19,
        "bodega_to": 12
    }

    si el traslado es correcto devuelve

    {
        "menssage": "Traslado exitoso", Mensaje de exito
        "data": {
            "bodega_origen": 19, - bodega de origen
            "bodega_destino": 12, - bodega de destino
            "cantidad": 23, - cantidad trasladad de una bodega a otra
            "historial": [ - tabla historial
            {
                "id": 35,
                "cantidad": 23, 
                "id_bodega_origen": 19,
                "id_bodega_destino": 12,
                "id_inventario": 12, - id del inventario relacionada con el historial
                "created_by": null,
                "updated_by": null,
                "created_at": "2023-07-06T08:42:45.000Z",
                "updated_at": null,
                "deleted_at": null
            }
            ]
        }
    }

*/

router.post("/traslado", (req, res) => {
    controllertraslado.traslados(req, res)
})

// Exportar el router
export default router;
