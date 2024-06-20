import { setupWorker } from "msw/browser";

import { userHandlers } from "./handlers";

export const worker = setupWorker(...userHandlers);
