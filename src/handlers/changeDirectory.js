export async function changeDirectory(targetPath) {
  try {
    process.chdir(targetPath);
  } catch (error) {
    throw new Error(`Failed to change directory: ${error.message}`);
  }
}
