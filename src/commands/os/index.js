import { getEOL } from "./eol.js";
import { getCpus } from "./cpus.js";
import { getHomedir } from "./homedir.js";
import { getUsername } from "./username.js";
import { getArchitecture } from "./architecture.js";

export async function commandOs(args) {
  if (args.length !== 1) {
    throw new Error(
      "os requires exactly one argument (--EOL, --cpus, --homedir, --username, --architecture)",
    );
  }

  const [option] = args;

  switch (option) {
    case "--EOL":
      return getEOL();
    case "--cpus":
      return getCpus();
    case "--homedir":
      return getHomedir();
    case "--username":
      return getUsername();
    case "--architecture":
      return getArchitecture();
    default:
      throw new Error(`Invalid option: ${option}`);
  }
}
