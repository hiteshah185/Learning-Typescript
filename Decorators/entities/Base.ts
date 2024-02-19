import "reflect-metadata";
export type EntityTypeInstance<T>
    = new (...args: any[]) => T;

export interface IEntity {
    getPersistenceObject(): any;
}
export class EntityFactory {
    static fromPersistenceObject<T extends IEntity>(Obj: Object, type: EntityTypeInstance<T>): T {
        let output = new type();
        const persistedProperties:string[] = Ref
        return {} as T;
    }
}
export default class BaseEntity implements IEntity {
    getPersistenceObject() {
        return {};
    }
}