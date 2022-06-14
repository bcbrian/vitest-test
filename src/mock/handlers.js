import { rest } from "msw";
export const handlers = [
  rest.post("http://localhost:3000/api/test", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        test: "test",
      })
    );
  }),
  // Handles a GET /user request
  rest.get("http://localhost:3000/api/test", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        test: "test",
      })
    );
  }),
];
