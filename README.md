# core-js v3 + Array.prototype.splice Perf Issue

Sample benchmark to confirm perf regression starting at core-js version 3+. Fixed in version 3.3.4.

Related GitHub issue: https://github.com/zloirock/core-js/issues/677
Fix commit: https://github.com/zloirock/core-js/commit/d2a901d9b246a93b4a09c35fd6a3efd266c13fce

## Usage

```sh
npm start
```

## Sample output

```sh
➜ npm start

> core-js-3-splice-perf@ start /Users/james.diefenderfer/Code/core-js-3-splice-perf
> benchmark.js

[11:45:36] Installing core-js version 2.6.10...
[11:45:40] Running benchmark with polyfill enabled...
splice x 167 ops/sec ±93.66% (67 runs sampled)
[11:45:46] Running benchmark with polyfill disabled...
splice x 308 ops/sec ±106.34% (64 runs sampled)
[11:45:52] Installing core-js version 3.0.0...
[11:45:55] Running benchmark with polyfill enabled...
splice x 4.05 ops/sec ±79.93% (27 runs sampled)
[11:46:12] Running benchmark with polyfill disabled...
splice x 442 ops/sec ±107.64% (71 runs sampled)
[11:46:19] Installing core-js version 3.2.1...
[11:46:21] Running benchmark with polyfill enabled...
splice x 6.23 ops/sec ±79.45% (37 runs sampled)
[11:46:38] Running benchmark with polyfill disabled...
splice x 485 ops/sec ±112.11% (84 runs sampled)
[11:46:44] Installing core-js version 3.3.4...
[11:46:47] Running benchmark with polyfill enabled...
splice x 377 ops/sec ±105.94% (57 runs sampled)
[11:46:53] Running benchmark with polyfill disabled...
splice x 373 ops/sec ±107.59% (67 runs sampled)
[11:46:59] Uninstalling core-js...
[11:47:01] All done!
```
