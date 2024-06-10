export function validityCheck(val: string) {
  if (val === "" || val === " " || val.length < 8) {
    return false;
  }
  return true;
}
