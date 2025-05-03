export const parseArgs = () => {
  const parsedArgs = {};
  const args = process.argv.slice(2);

  args.forEach((arg) => {
    if (arg.startsWith("--")) {
      const [key, value] = arg.substring(2).split("=");

      if (key && value !== undefined) {
        parsedArgs[key] = value;
      }
    }
  });

  return parsedArgs;
};
