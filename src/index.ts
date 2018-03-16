import {Message, Session} from "automata";
import fsm from "./fsm";
import FsmController from "./controllers/fsm";
import {WsServer} from "./wss";
import * as express from "express";
import {Message, Session} from "automata/src/automata";


class Test {

    private wss: WsServer;
    private fsm: fsm;

    constructor() {
        this.wss = new WsServer();
        this.fsm = new fsm();

        this.wss.initWebSocket({port: 5001});

        this.wss.on("connected", (connectedCount: number) => {
            console.log("Connected", connectedCount);

            this.fsm.start(this.wss.getClients()).then(function (session: Session<FsmController>, message?: Message) {
                console.log(message);
                if (connectedCount === 6) {
                    const initStat = "u" + Math.round(Math.random() * 5) + 1;
                    session.postMessage({ msgId: initStat });
                } else {

                }
            });
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
