type Name =
  | 'navigateTo'
  | 'navigateBack'
  | 'switchTab'
  | 'reLaunch'
  | 'redirectTo'
  | 'postMessage'
type WebInvokeData = {
  name: Name
  arg: any
}
export type WebInvokeAppService = (
  webInvokeData: WebInvokeData,
  pageId: number | number[]
) => void

export const onWebInvokeAppService: WebInvokeAppService = (
  { name, arg },
  pageId
) => {
  if (name === 'postMessage') {
    // TODO 小程序后退、组件销毁、分享时通知
  } else {
    uni[name](arg)
  }
}
