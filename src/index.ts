import fsm from "./fsm";
import {WsServer} from "./wss";
import * as express from "express";


class Test {

    private wss: WsServer;
    private fsm: fsm;

    constructor() {
        this.wss = new WsServer();
        this.fsm = new fsm();

        this.wss.initWebSocket({port: 5001});

        this.wss.on("connected", (connectedCount: number) =>{
            if (connectedCount === 6) {
                this.fsm.start(this.wss.getClients());
            }
        });
    }
}

const app = new Test();


const http = express();
// app.use(express.static(path.join(path.dirname("./"), "html")));
http.use(express.static("html"));

http.listen(3000, function () {
    console.log("The game you can find here http://localhost:3000");
});


var test = 1;
let test2 = new Array();
