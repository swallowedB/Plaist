import { setupWorker } from "msw/browser";
import { channelHandlers } from "./ChannelHandler";
import { authHandlers } from "./AuthHandlers";
import { searchHandlers } from "./SearchHandlers";
import { userHandlers } from "./UserHandler";
import { personalizationHandlers } from "./personalizationHandler";

const allHandlers = [
  ...channelHandlers,
  ...authHandlers,
  ...userHandlers,
  ...searchHandlers,
  ...personalizationHandlers,
  
];

export const worker = setupWorker(...allHandlers);
