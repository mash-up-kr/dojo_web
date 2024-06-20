import { setupServer } from "msw/node";
import { userHandlers } from "./handlers";

export const server = setupServer(...userHandlers);
