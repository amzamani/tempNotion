module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId   : 'ad10cf4d2f9b45968b4ba05392c99334',
  // rootNotionPageId: 'd3924321ce6b4f909b03ab1f6b8f2f55',
  // rootNotionPageId: '40ed7d3dfa034bf6ae964cda57a97360',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'ToffeeMoney',
  domain: 'toffeemoney.com',
  author: 'Zamani Tech Ventures Pvt Ltd',

  // open graph metadata (optional)
  description: 'ToffeeMoney: Track your spending and boost your savings.',
  // socialImageTitle: 'Islem Maboud Aka CoderOne',
  // socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  // twitter: 'amzamanidotme',
  // github: 'amzamani',
  // linkedin: 'amzamani',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null
}
