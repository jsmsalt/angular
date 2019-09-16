import { Persona } from './persona.model';

export class Cliente extends Persona {
    public cuil:string;
    public apellido:string;
    public dni:string;
}