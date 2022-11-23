module.exports = {
  siteMetadata: {
    title: "Banana Chip Tech",
    description:"Banana Chip Tech is a company dedicated to optimizing healthcare through computational means. We build apps, websites, and create coding courses to achieve this end!"
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: ["gatsby-plugin-image",{
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        "G-2W2M9KLMV7", // Google Analytics / GA
        //"AW-CONVERSION_ID", // Google Ads / Adwords / AW
        //"DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
      ],
      // This object gets passed directly to the gtag config command
      // This config will be shared across all trackingIds
      gtagConfig: {
        optimize_id: "OPT_CONTAINER_ID",
        anonymize_ip: true,
        cookie_expires: 0,
      },
      // This object is used for configuration specific to this plugin
      pluginConfig: {
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Defaults to https://www.googletagmanager.com
        origin: "https://www.bananachiptech.com",
        // Delays processing pageview events on route update (in milliseconds)
        delayOnRouteUpdate: 0,
      },
    },
  },],
};
