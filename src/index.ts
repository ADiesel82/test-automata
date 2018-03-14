import {Automata, Message, Session} from "automata";

let initStat = Math.random() * 6;
initStat = initStat as Integer;

console.log(initStat);

// Automata.RegisterFSM({
//     name: "Test1",
//     state: ["u1", "u2", "u3", "u4", "u5", "u6"],
//     initial_state: initStat,
//     transition: [
//         {
//             event: "ab",
//             from: "a",
//             to: "b"
//         },
//         {
//             event: "bc",
//             from: "b",
//             to: "c"
//         }
//     ]
// });
//
// class Controller {
//     constructor(){}
//
//     a_enter = function (session, state, msg) {
//         console.log(state + " enter ");
//     };
//     a_exit = function (session, state, msg) {
//         console.log(state + " exit ");
//     };
//     b_enter = function (session, state, msg) {
//         console.log(state + " enter ");
//     };
//     b_exit = function (session, state, msg) {
//         console.log(state + " exit ");
//     };
//     c_exit = function (session, state, msg) {
//         console.log(state + " exit");
//     };
//     c_enter = function (session, state, msg) {
//         console.log(state + " enter");
//     };
//     ab_transition = function (session, state, msg) {
//         console.log("transition: " + msg.msgId);
//     };
//     bc_transition = function (session, state, msg) {
//         console.log("transition: " + msg.msgId);
//     };
//     Test1_enter = function (session, state, msg) {
//         console.log(state + " enter ");
//     };
//     Test1_exit = function (session, state, msg) {
//         console.log(state + " exit ");
//     };
// }
//
//
// Automata.CreateSession(
//     new Controller(),
//     "Test1"
// ).then(
//     function success(s: Session<Controller>, m: Message) {
//         console.log(s, m);
//         s.dispatchMessage( { msgId: "12" } );
//     },
//     function error(s: Session<Controller>, m: Error) {
//         console.log(s, m);
//     }
// );