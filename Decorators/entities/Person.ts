import { entity, id, persist } from "../decorators/entity";
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
    fistName: string;
    @persist
    lastName: string;
    @persist
    email: string;
    @persist
    department: Department
}