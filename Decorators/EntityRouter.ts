import express, { Router, Request, Response } from "express";
import BaseEntity, { EntityTypeInstance } from "./entities/Base";
import { db } from "./MockServerAppMain";

export default class EntityRouter<T extends BaseEntity>{
    private _router: Router;
    get router(): Router {
        return this._router;
    }
    constructor(public name: string, private classRef: EntityTypeInstance<T>) {
        this._router = express.Router();

    }

    addEntityRoutes() {
        this._router.post('/',
            (req, res) => {
                this.createEntity(req, res);
            }
        );
        this._router.get('/',
            (req, res) => {
                this.fetchAllEntities(req, res);
            }
        );
        this._router.put('/:id',
            (req, res) => {
                this.fetchEntity(req, res);
            }
        );
        this._router.put('/:id',
            (req, res) => {
                this.updateEntity(req, res);
            }
        );
        this._router.delete('/:id',
            (req, res) => {
                this.deleteEntity(req, res);
            }
        );
    }


    private createEntity(req: Request, res: Response) {

    }
    private fetchAllEntities(req: Request, res: Response) {
        let data = {};
        data = db.getData(`/${this.name}`);
        res.json(data);
    }
    private fetchEntity(req: Request, res: Response) {
        let data = {};
        data = db.getData(`/${this.name}/${req.params.id}`);
        res.json(data);
    }
    private updateEntity(req: Request, res: Response) {

    }
    private deleteEntity(req: Request, res: Response) {
        db.delete(`/${this.name}/${req.params.id}`);
        res.json({});
    }
}