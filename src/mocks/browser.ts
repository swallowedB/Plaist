import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";
import { searchHandlers } from "./searchHandler";

export const worker = setupWorker(
  ...handlers,
  ...searchHandlers,
);
