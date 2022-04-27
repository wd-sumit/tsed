import { $log, PlatformLoggerSettings } from "@tsed/common";
import { isProduction } from "../envs";

// const isProduction = true;
// if (isProduction) {
//   // Config for console logs
//   $log.appenders.set("stdout", {
//     type: "stdout",
//     levels: ["info", "debug"],
//     layout: {
//       // type: "json"
//       type: "pattern",
//       pattern: '[%d] [%p] %m',
//     }
//   });


//   $log.appenders.set("stderr", {
//     levels: ["trace", "fatal", "error", "warn"],
//     type: "stderr",
//     layout: {
//       // type: "json"
//       type: "pattern",
//       pattern: '[%d] [%p] %m',
//     }
//   });

// }
// $log.appenders.set("file", {
//   levels: ["error", "warn", "info"],
//   type: "file",
//   filename: `${__dirname}/../../../logs/access.log`,
//   pattern: '.yyyy-MM-dd', //filename format of compressed file ,  1 log file per day
//   layout: {
//     type: "pattern",
//     pattern: '[%d] [%p] [%m]'
//   },
//   maxLogSize: 1,
//   backups: 3,
//   compress: true
// })

export default <PlatformLoggerSettings>{
  disableRoutesSummary: isProduction,
};
