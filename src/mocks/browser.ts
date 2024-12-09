import { setupWorker } from "msw/browser";
<<<<<<< HEAD
import { handlers } from "./handlers";

export const worker = setupWorker(...handlers);
=======
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
>>>>>>> Sebin
