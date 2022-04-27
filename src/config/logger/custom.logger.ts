import { PlatformLoggerSettings } from "@tsed/common";
import { Logger } from "@tsed/logger";

export const MyLogger = new Logger("myLogger");

MyLogger.appenders
  .set("console", {
    type: "stdout",
    levels: ["info", "debug"],
    layout: {
      type: "pattern",
      pattern: '[%d] [%p] [%x{user}] [%m]',
      tokens: {
        user: 'user-1'
      }
    }
  })
  .set("everything", {
    type: 'file',
    levels: ['info', 'debug'],
    filename: `${__dirname}/../../../logs/access.log`,
    pattern: '.yyyy-MM-dd', //filename format of compressed file
    layout: {
      type: "pattern",
      pattern: '[%d] [%X{respId}] [%p] [%x{user}] [%m] %n'
    },
    maxLogSize: 100000,
    backups: 3,
    compress: true
  })

export default <PlatformLoggerSettings>{
  disableRoutesSummary: false,
};