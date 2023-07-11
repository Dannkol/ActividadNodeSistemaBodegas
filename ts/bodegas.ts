import { Expose, Transform } from 'class-transformer';


/* 

    {
        "cantidad": 23, Number
        "producto": 18, Number
        "bodega_send": 19, Number
        "bodega_to": 12 Number
    }
*/

export class BodegaPost {

  @Expose({name: 'id_responsable'})
  @Transform(({ obj }) => {return (Math.floor(obj.id_responsable)) ? obj.id_responsable : false})
  id_responsable: number;


  @Expose({ name: 'nombre' })
  @Transform(({ obj }) => {return (/^[a-zA-Z]+$/.test(obj.nombre))? obj.nombre : false})
  nombre: string;

  @Expose({ name: 'estado' })
  @Transform(({ obj }) => {return (Math.floor(obj.estado)) ? obj.estado : false})
  estado: number;
  
}