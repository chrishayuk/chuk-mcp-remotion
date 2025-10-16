import { Config } from "@remotion/cli/config";

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
// Set concurrency based on system cores (max 16 on this system)
// Use 50% of cores for better stability
const cpuCores = require('os').cpus().length;
Config.setConcurrency(Math.min(Math.floor(cpuCores * 0.5), 8));
