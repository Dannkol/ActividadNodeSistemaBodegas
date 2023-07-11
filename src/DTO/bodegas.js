var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
}
__decorate([
    Expose({ name: 'id_responsable' }),
    Transform(({ obj }) => { return (Math.floor(obj.id_responsable)) ? obj.id_responsable : false; })
], BodegaPost.prototype, "id_responsable", void 0);
__decorate([
    Expose({ name: 'nombre' }),
    Transform(({ obj }) => { return (/^[a-zA-Z]+$/.test(obj.nombre)) ? obj.nombre : false; })
], BodegaPost.prototype, "nombre", void 0);
__decorate([
    Expose({ name: 'estado' }),
    Transform(({ obj }) => { return (Math.floor(obj.estado)) ? obj.estado : false; })
], BodegaPost.prototype, "estado", void 0);
