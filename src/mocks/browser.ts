import { setupWorker } from "msw/browser";
import { ChannelHandlers } from "./handlers/ChannelHandler";
import { AuthHandlers } from "./handlers/AuthHandlers";
import { UserHandlers } from "./handlers/UserHandler";
import { SearchHandlers } from "./handlers/SearchHandlers";

const allHandlers = [
  ...ChannelHandlers,
  ...AuthHandlers,
  ...UserHandlers,
  ...SearchHandlers,
];
export const worker = setupWorker(...allHandlers);
