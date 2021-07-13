import { transformRequest } from './helpers/data'
import { urlBuild } from './helpers/url'
import { AxiosRequireConfig } from './types'
import { xhr } from './xhr'

export default function axios(config: AxiosRequireConfig) {
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequireConfig): void {
  config.url = transformURL(config)
  config.data = transformRequestData(config)
}

function transformURL(config: AxiosRequireConfig): string {
  const { url, params } = config
  return urlBuild(url, params)
}

function transformRequestData(config: AxiosRequireConfig): any {
  return transformRequest(config.data)
}
