import {Client} from "../wss";

export default class {
    private clients: Client[] = [];

    constructor(clients){
        this.clients = clients;
    }

    FsmTest1_enter = function (session, state, msg) {
        console.log(state + " enter ");
    };
    FsmTest1_exit = function (session, state, msg) {
        console.log(state + " exit ");
    };

     common_enter = function (session, state, msg){
        console.log(state + " enter ");
    };

    common_exit = function (session, state, msg){
        console.log(state + " exit ");
    };

    common_transition = function (session, state, msg) {
        console.log("transition: " + msg.msgId);
    };

    u1_enter = this.common_enter;
    u1_exit = this.common_exit;
    u12_transition = this.common_transition;
    u1end_transition = this.common_end;

    u2_enter = this.common_enter;
    u2_exit = this.common_exit;
    u23_transition = this.common_transition;
    u2end_transition = this.common_end;

    u3_enter = this.common_enter;
    u3_exit = this.common_exit;
    u34_transition = this.common_transition;
    u3end_transition = this.common_end;

    u4_enter = this.common_enter;
    u4_exit = this.common_exit;
    u45_transition = this.common_transition;
    u4end_transition = this.common_end;

    u5_enter = this.common_enter;
    u5_exit = this.common_exit;
    u56_transition = this.common_transition;
    u5end_transition = this.common_end;

    u6_enter = this.common_enter;
    u6_exit = this.common_exit;
    u61_transition = this.common_transition;
    u6end_transition = this.common_end;

}