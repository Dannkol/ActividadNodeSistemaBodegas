import { Expose, Transform } from "class-transformer";

/* 

    {
        "cantidad": 23,
        "producto": 18,
        "bodega_send": 19,
        "bodega_to": 12
    }

*/

export class TrasladoPost {

    @Expose({ name: "cantidad" })
    @Transform(({ obj }) => {
      return Math.floor(obj.cantidad) ? obj.cantidad : false;
    })
    cantidad: number;
  
    @Expose({ name: "producto" })
    @Transform(({ obj }) => {
      return Math.floor(obj.producto) ? obj.producto : false;
    })
    producto: number;
  
    @Expose({ name: "bodega_send" })
    @Transform(({ obj }) => {
      return Math.floor(obj.bodega_send) ? obj.bodega_send : false;
    })
    bodega_send: number;

    @Expose({ name: "bodega_to" })
    @Transform(({ obj }) => {
      return Math.floor(obj.bodega_to) ? obj.bodega_to : false;
    })
    bodega_to: number;
    
}
