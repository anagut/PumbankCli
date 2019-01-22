export class User {

    constructor(private _uid: number, private _nombre: string, private _email: string, private _edad: number) {

    }

    get uid() { return this._uid; }
    get nombre() { return this._nombre; }
    get email() { return this._email; }
    get edad() { return this._edad; }

    set uid(uid) { this._uid = uid; }
    set nombre(nombre) { this._nombre = nombre; }
    set email(email) { this._email = email; }
    set edad(edad) { this._edad = edad; }


}