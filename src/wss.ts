import *  as WebSocket from "ws";
import * as events from "events";

export interface Client{
    id: number,
    broadcast: any,
    ws: WebSocket
}

export class WsServer extends events.EventEmitter{
    protected isAlive: boolean = false;
    private clients: Client[] = [];

    on(event: 'connected', listener: (connectedCount: number) => void): this;

    constructor() {
        super();
    }

    initWebSocket(options?: WebSocket.ServerOptions): void {

        const wss = new WebSocket.Server(options);

        wss.on("listening", () => {
            console.log("Starting websocket on port: " + wss.options.port);
        });

        wss.on("connection", (ws: WebSocket) => {
            const cliendId = this.clients.length + 1;
            this.clients.push({id: cliendId, broadcast: this.broadcast, ws: ws});
            this.initClientMessaging(ws);
            this.emit('connected', this.clients.length);

            ws.isAlive = true;

            ws.on("pong", () => {
                ws.isAlive = true;
            });
        });

        const interval = setInterval(() => {
            wss.clients.forEach(function each(ws : WebSocket) {
                if (ws.isAlive === false) return ws.terminate();
                ws.isAlive = false;
                ws.ping("", false, true);
            });
        }, 30000);
    }

    public getClients() {
        return this.clients;
    }

    public broadcast(command: string, data: any): void {
        if (this.clients.length > 0) {
            this.clients.forEach(function each(client: Client) {
                if (client.isActive()) {
                    client.sendTextResponse(command, data);
                }
            });
        }
    }

    private onClientDisconnect(client){
        this.clients.splice(this.clients.indexOf(client), 1);
    }

    private initClientMessaging(ws){
        ws.on("message", (message: string) => {
            this.broadcast(message);
        });
        ws.on("close", (reasonCode: number, description: string) => {
            console.log("Close " + (new Date()) + " Peer " + description + " disconnected.");
            this.onClientDisconnect(this);
        });
        ws.on("error", (reasonCode: number, description: string) => {
            console.log("Error " + (new Date()) + " Peer " + description + " disconnected.");
            // this.onDisconnect();
            // this.game.onClientDisconnect(this);
        });
    }

    on
}