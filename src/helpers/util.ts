const toString = Object.prototype.toString

export function isDate(data: any): data is Date {
  return toString.call(data) === '[object Date]'
}

// export function isObject(data: any): data is Object {
//   return data !== null && typeof data === 'object'
// }

export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}

export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}
