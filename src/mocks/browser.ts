import { setupWorker } from "msw/browser";
import { authHandlers } from "./handlers/authHandlers";
import { userHandlers } from "./handlers/userHandler";
import { searchHandlers } from "./handlers/searchHandlers";
import { channelHandlers } from "./handlers/channelHandler";

const allHandlers = [
  ...channelHandlers,
  ...authHandlers,
  ...userHandlers,
  ...searchHandlers,
];

export const worker = setupWorker(...allHandlers);
