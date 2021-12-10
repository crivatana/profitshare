interface Window extends Window {
  __profitshare: {
    cookieScriptName: string
    clickCode: string
    advertiserCode: string
    key: string
    iframeDomain: string
    cookieScriptDomain: string
    _ps_tgt: TrackingObject
  }
}

interface TrackingObject {
  advertiser_code: string
  product_code: string
  product_price: number
  category_code: string
  brand_code: string
}
