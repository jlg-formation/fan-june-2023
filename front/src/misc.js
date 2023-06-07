export function dirname(filePath) {
  const lastSlashIndex = filePath.lastIndexOf("/");
  const dirname = filePath.substring(0, lastSlashIndex);
  return dirname;
}

export function sleep(delayMs, $q) {
  return $q((resolve) => {
    setTimeout(resolve, delayMs);
  });
}
