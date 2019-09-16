import { Moneda } from './moneda.model';
import { Subtipo } from './subtipo.model';
import { TipoPago } from './tipopago.model';
import { Cliente } from './cliente.model';
import { Proveedor } from './proveedor.model';

export class Movimiento {
    private id?:number;
    private fecha:string;
    private fechaVencimiento:string;
    private monto:number;
    private descripcion:string;
    private tipoMovimiento:number;
    private cotizacion:number;
    private subtipoMovimiento:Subtipo;
    private moneda:Moneda;
    private tipoPago:TipoPago;
    private cliente:Cliente;
    private proveedor:Proveedor;
}