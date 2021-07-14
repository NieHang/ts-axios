import { AxiosPromise, AxiosResponse } from './types/index'
import { AxiosRequestConfig } from './types'
import { parseHeaders } from './helpers/headers'

export function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise(resolve => {
    const xhr = new XMLHttpRequest()

    const { url, data = null, method = 'get', headers, responseType } = config

    if (responseType) {
      xhr.responseType = responseType
    }

    xhr.open(method.toUpperCase(), url, true)

    xhr.onreadystatechange = function() {
      if (xhr.readyState !== 4) return
      const responseHeaders = parseHeaders(xhr.getAllResponseHeaders())
      const responseData = responseType !== 'text' ? xhr.response : xhr.responseText
      const response: AxiosResponse = {
        data: responseData,
        status: xhr.status,
        statusText: xhr.statusText,
        headers: responseHeaders,
        config,
        request: xhr
      }
      resolve(response)
    }

    Object.keys(headers).forEach(name => {
      if (data == null && name.toLowerCase() === 'content-type') {
        delete headers[name]
      } else {
        xhr.setRequestHeader(name, headers[name])
      }
    })

    xhr.send(data)
  })
}
