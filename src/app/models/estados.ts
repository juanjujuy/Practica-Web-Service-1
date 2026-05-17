import { Paises } from "./paises";
export class Estados {
    private _id!:number;
    name!:string;
    isoCode!:string;
    countryCode!:string;
    latitude!:string;
    longitude!:string;
    country!:Paises;

    set id(id:number) {
        this._id = id +100;
    }

    get id () {
        return this._id;
    }

}
