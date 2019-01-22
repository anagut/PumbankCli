export class Pedido {

    constructor(private _pid: number, private _descripcion: string, private _monto: number) {

    }

    get pid() { return this._pid; }
    get descripcion() { return this._descripcion; }
    get monto() { return this._monto; }

    set pid(pid) { this._pid = pid; }
    set descripcion(descripcion) { this._descripcion = descripcion; }
    set monto(monto) { this._monto = monto; }


}