import * as http from "http";
import express, { Express } from "express";
import bodyParser from "body-parser";
import BaseEntity from "./entities/Base";
export default class MockAPIServer {
    private _app: Express;

    get app(): Express {
        return this._app;
    }

    private _server: http.Server;

    get server(): http.Server {
        return this._server;
    }

    constructor(portNo: number = 3000) {
        this._app = express();

        this._app.set("port", process.env.PORT || portNo);
        this.configureMiddleware();
    }

    public configureMiddleware(): void {
        this._app.use(bodyParser.json());
        this._app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(function (req, res, next) {
            res.setHeader("Access-Control-Allow-Credentials", "true");
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
            res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
            next();
        });
    }
    public addEntity<T extends BaseEntity>() {

    }

    public start(): void {
        this._server = this._app
            .listen(this._app.get("port"),
                () => {
                    console.log("Server is running on port: " + this._app.get("port"));
                });
    }
}