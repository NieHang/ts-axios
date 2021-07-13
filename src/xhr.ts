import { AxiosRequireConfig } from './types'

export function xhr(config: AxiosRequireConfig): void {
  const xhr = new XMLHttpRequest()

  const { url, data = null, method = 'get' } = config

  xhr.open(method.toUpperCase(), url, true)

  xhr.send(data)
}
