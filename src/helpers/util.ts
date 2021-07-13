const toString = Object.prototype.toString

export function isDate(data: any): data is Date {
  return toString.call(data) === '[object Date]'
}

export function isObject(data: any): data is Object {
  return data !== null && typeof data === 'object'
}
