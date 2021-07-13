import { urlBuild } from './helpers/url'
import { AxiosRequireConfig } from './types'
import { xhr } from './xhr'

export default function axios(config: AxiosRequireConfig) {
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequireConfig): void {
  config.url = transformURL(config)
}

function transformURL(config: AxiosRequireConfig): string {
  const { url, params } = config
  return urlBuild(url, params)
}
