import mysql from "mysql2/promise";
import dbConfig from "../config/dbconfig.js";

/* instacia de la conexion a la base de datos */
const getConnection = async () => {
    return await mysql.createConnection(dbConfig);
};

/* Insertar producto con inventarios */

const insertProduct = async (nombre, descripcion, estado, cantidad) => {

    const bodegadefault = 11;

    const connection = await getConnection();
    const query_productos = `INSERT INTO productos (nombre, descripcion, estado) VALUES (${nombre},${descripcion},${estado});`;
    const [result_productos] = await connection.execute(query_productos);

    const productoId = result_productos.insertId;

    const query_inventarios = `INSERT INTO inventarios ( id_bodega , id_producto , cantidad) VALUES (${bodegadefault},${productoId},${cantidad});`;
    
    const [result_inventarios] = await connection.execute(query_inventarios);

    const [inventario] = await connection.query(
        `SELECT * FROM inventarios WHERE id_bodega = ${result_inventarios.insertId};`
    ) 

    const [porducto] = await connection.query(
        `SELECT * FROM productos WHERE id = ${productoId};`
    )

    return {
        "producto": porducto[0],
        "inventario" : inventario[0]
    };
};

export default { insertProduct };