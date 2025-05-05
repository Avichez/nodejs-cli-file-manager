import os from "node:os";

export function getCpus() {
  const cpus = os
    .cpus()
    .map(({ model, speed }) => ({ model, clock_rate: (speed / 1000).toFixed(2) + " GHz" }));

  console.log("Total amount of CPUS:", cpus.length);
  console.table(cpus);
}
