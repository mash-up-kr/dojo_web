import { defineConfig } from "orval";

export default defineConfig({
  "chauffeur-api": {
    input: {
      target: "https://docker-ecs.net/v3/api-docs",
    },
    output: {
      baseUrl: "https://docker-ecs.net",
      client: "react-query",
      mock: {
        baseUrl: "https://docker-ecs.net",
        delay: 1000,
        type: "msw",
        useExamples: false,
      },
      mode: "tags-split",
      override: {
        mutator: {
          path: "./src/apis/custom-client.ts",
          name: "customInstance",
        },
        title: (title) => `${title}-api`,
      },
      schemas: "src/generated/model",
      target: "src/generated",
    },
  },
});
