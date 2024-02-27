import { entity, id, isEmail, isRequired, persist } from "../decorators";
import BaseEntity from "./Base";
export enum Department {
    TRV = 'Trivandrum Team',
    CND = 'Canada Team'
}
@entity("people")
export default class Person extends BaseEntity {
    @id
    id: string;
    @persist
    @isRequired
    fistName: string;
    @persist
    lastName: string;
    @persist
    @isEmail
    email: string;
    @persist
    department: Department
}