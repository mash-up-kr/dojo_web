import { http, HttpResponse } from "msw";

export const userHandlers = [
  http.get("/user", () => {
    return HttpResponse.json({
      id: 1,
      name: "John Doe",
    });
  }),
];
