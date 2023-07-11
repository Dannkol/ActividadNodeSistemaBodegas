var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
}
__decorate([
    Expose({ name: "cantidad" }),
    Transform(({ obj }) => {
        return Math.floor(obj.cantidad) ? obj.cantidad : false;
    })
], TrasladoPost.prototype, "cantidad", void 0);
__decorate([
    Expose({ name: "producto" }),
    Transform(({ obj }) => {
        return Math.floor(obj.producto) ? obj.producto : false;
    })
], TrasladoPost.prototype, "producto", void 0);
__decorate([
    Expose({ name: "bodega_send" }),
    Transform(({ obj }) => {
        return Math.floor(obj.bodega_send) ? obj.bodega_send : false;
    })
], TrasladoPost.prototype, "bodega_send", void 0);
__decorate([
    Expose({ name: "bodega_to" }),
    Transform(({ obj }) => {
        return Math.floor(obj.bodega_to) ? obj.bodega_to : false;
    })
], TrasladoPost.prototype, "bodega_to", void 0);
