import { readFileSync } from "fs";
import { envs } from "./envs";
import loggerConfig from "./logger";
import { MyLogger } from "./logger/custom.logger";
const pkg = JSON.parse(readFileSync("./package.json", { encoding: "utf8" }));

export const config: Partial<TsED.Configuration> = {
  version: pkg.version,
  envs,
  logger: MyLogger,
  graphql: {
    default: {
      path: "/graphql",
      buildSchemaOptions: {
      }
    }
  }
  // additional shared configuration
};
