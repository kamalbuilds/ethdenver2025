import { WebSocket, WebSocketServer } from "ws";
import { EventBus } from "./comms/event-bus";


const WS_PORT = 3002;

// export function setupWebSocket(eventBus: EventBus) {
//   console.log("Web socket >>>");

//   const wss = new WebSocketServer({ port: 3002 });

//   wss.on("connection", (ws: WebSocket) => {
//     console.log(`[WebSocket] Client connected on port ${WS_PORT}`);

//     // Forward agent events to the client
//     const forwardEvent = (data: any) => {
//       ws.send(
//         JSON.stringify({
//           type: "agent-event",
//           ...data,
//         })
//       );
//     };

//     eventBus.subscribe("agent-action", forwardEvent);
//     eventBus.subscribe("agent-response", forwardEvent);
//     eventBus.subscribe("agent-error", forwardEvent);

//     ws.on("message", async (message: string) => {
//       try {
//         const data = JSON.parse(message);
//         if (data.type === "command") {
//           if (data.command === "stop") {
//             // Stop all agent activities
//             agents.observerAgent.stop();
//             eventBus.emit("agent-action", {
//               agent: "system",
//               action: "All agents stopped",
//             });
//           } else {
//             // Start task processing
//             eventBus.emit("agent-action", {
//               agent: "system",
//               action: "Starting task processing",
//             });

//             // Start with observer agent
//             await agents.observerAgent.processTask(data.command);
//           }
//         }
//       } catch (error) {
//         console.error("Error processing WebSocket message:", error);
//         eventBus.emit("agent-error", {
//           agent: "system",
//           error: "Failed to process command",
//         });
//       }
//     });

//     ws.on("close", () => {
//       console.log("Client disconnected");
//       eventBus.unsubscribe("agent-action", forwardEvent);
//       eventBus.unsubscribe("agent-response", forwardEvent);
//       eventBus.unsubscribe("agent-error", forwardEvent);
//     });
//   });

//   return wss;
// }
