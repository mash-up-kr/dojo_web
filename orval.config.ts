import { defineConfig } from "orval";

export default defineConfig({
  "chauffeur-api": {
    input: {
      target:
        "http://dojo-backend-eb-env.eba-33qhzuax.ap-northeast-2.elasticbeanstalk.com/v3/api-docs",
    },
    output: {
      baseUrl:
        "http://dojo-backend-eb-env.eba-33qhzuax.ap-northeast-2.elasticbeanstalk.com",
      client: "react-query",
      mock: {
        baseUrl:
          "http://dojo-backend-eb-env.eba-33qhzuax.ap-northeast-2.elasticbeanstalk.com",
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
