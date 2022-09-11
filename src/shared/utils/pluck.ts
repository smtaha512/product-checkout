export function pluck<T extends Record<string, any>, U extends keyof T>(name: U) {
  return function pluck(obj: T): T[U] {
    return obj[name];
  };
}
