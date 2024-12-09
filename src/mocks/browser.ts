import { setupWorker } from "msw/browser";
import { ChannelHandlers } from "./handlers/ChannelHandler";
import { AuthHandlers } from "./handlers/AuthHandlers";
import { UserHandlers } from "./handlers/UserHandler";

const allHandlers = [...ChannelHandlers, ...AuthHandlers, ...UserHandlers];
export const worker = setupWorker(...allHandlers);
