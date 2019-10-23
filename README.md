# core-js v3 + Array.prototype.splice Perf Issue

Sample benchmark to confirm perf regression starting at core-js version 3+.

## Usage

```sh
npm start
```

## Sample output

```sh
➜ npm start

> splice-test@ start /Users/james.diefenderfer/Code/splice-perf
> benchmark.js

[22:43:50] Installing core-js version 2.6.10...
[22:43:54] Running benchmark with polyfill enabled...
splice x 262 ops/sec ±102.32% (72 runs sampled)
[22:44:00] Running benchmark with polyfill disabled...
splice x 326 ops/sec ±103.04% (82 runs sampled)
[22:44:06] Installing core-js version 3.0.0...
[22:44:09] Running benchmark with polyfill enabled...
splice x 0.42 ops/sec ±41.48% (6 runs sampled)
[22:44:41] Running benchmark with polyfill disabled...
splice x 40.29 ops/sec ±82.40% (35 runs sampled)
[22:44:47] Installing core-js version 3.2.1...
[22:44:54] Running benchmark with polyfill enabled...
splice x 0.75 ops/sec ±87.70% (10 runs sampled)
[22:45:27] Running benchmark with polyfill disabled...
splice x 377 ops/sec ±98.10% (85 runs sampled)
[22:45:33] Uninstalling core-js...
[22:45:35] All done!
```
