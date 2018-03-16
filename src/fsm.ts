import {Automata} from "automata";
import FsmTest1 from "./controllers/fsm";

export default class FSM {

    protected fsmName = "FsmTest1";

    init(initStat: string = 'u1'): void {

        let initStat = 'u1';
        if (dynamicStart) {

        }

        const stepTimeoutMS = 5000;
        const nextRoundTimeoutMS = 6000;

        Automata.RegisterFSM({
            name: this.fsmName,
            state: ["u1", "u2", "u3", "u4", "u5", "u6"],
            initial_state: initStat,
            transition: [
                {event: "u12", from: "u1", to: "u2", timeout: {millis: stepTimeoutMS}},
                {event: "u1end", from: "u1", to: "end"},

                {event: "u23", from: "u2", to: "u3", timeout: {millis: stepTimeoutMS}},
                {event: "u2end", from: "u2", to: "end"},

                {event: "u34", from: "u3", to: "u4", timeout: {millis: stepTimeoutMS}},
                {event: "u3end", from: "u3", to: "end"},

                {event: "u45", from: "u4", to: "u5", timeout: {millis: stepTimeoutMS}},
                {event: "u4end", from: "u4", to: "end"},

                {event: "u56", from: "u5", to: "u6", timeout: {millis: stepTimeoutMS}},
                {event: "u5end", from: "u5", to: "end"},

                {event: "u61", from: "u6", to: "u1", timeout: {millis: stepTimeoutMS}},
                {event: "u6end", from: "u6", to: "end"},
            ]
        });

    }

    start(clients) {
        return Automata.CreateSession(
            new FsmTest1(clients),
            this.fsmName
        );
    }
}