export function dirname(filePath) {
  const lastSlashIndex = filePath.lastIndexOf("/");
  const dirname = filePath.substring(0, lastSlashIndex);
  return dirname;
}
