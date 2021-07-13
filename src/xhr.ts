import { AxiosRequireConfig } from './types'

export function xhr(config: AxiosRequireConfig): void {
  const xhr = new XMLHttpRequest()

  const { url, data = null, method = 'get', headers } = config

  xhr.open(method.toUpperCase(), url, true)

  Object.keys(headers).forEach(name => {
    if (data == null && name.toLowerCase() === 'content-type') {
      delete headers[name]
    } else {
      xhr.setRequestHeader(name, headers[name])
    }
  })

  xhr.send(data)
}
