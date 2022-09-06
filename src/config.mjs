const PROD = import.meta.env.PROD;

export default {
  name: "MCBanners",
  
  origin: "https://mcbanners.com",
  basePathName: "/",

  upstreamOrigin: "https://api.mcbanners.com",
  
  title: "MCBanners - Generate beautiful banners from backend statistics",
  description: "MCBanners is a free - as in free beer, and as in libre - banner creation software stack that allows you to create beautiful banners from backend statistics. We support a variety of services with more coming all the time.",
  
  googleAnalyticsId: PROD ? import.meta.env.GOOGLE_ANALYTICS_ID : false,
  googleSiteVerificationId: PROD ? import.meta.env.GOOGLE_SITE_VERIFICATION_ID : false
}
