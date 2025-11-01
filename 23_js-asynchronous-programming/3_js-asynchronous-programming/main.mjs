import { parentPort, workerData } from "worker_threads";

import fib from "./fib.mjs";

const N = 42;

const start = process.hrtime();
const result = fib(N);
const [seconds, nanoseconds] = process.hrtime(start);
const elapsed = seconds * 1000 + nanoseconds / 1e6;
console.log(`fib(${N}) = ${result}`);
console.log(`Elapsed time: ${Math.round(elapsed)} ms`);
