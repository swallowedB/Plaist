import { setupWorker } from "msw/browser";
import { channelHandlers } from "./ChannelHandler";
import { authHandlers } from "./AuthHandlers";
import { searchHandlers } from "./SearchHandlers";
import { userHandlers } from "./UserHandler";
import { personalizationHandlers } from "./personalizationHandler";
import { commentHandlers } from "./commentHandlers";

const allHandlers = [
  ...channelHandlers,
  ...authHandlers,
  ...userHandlers,
  ...searchHandlers,
  ...personalizationHandlers,
  ...commentHandlers,

];

export const worker = setupWorker(...allHandlers);
