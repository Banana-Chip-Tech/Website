module.exports = {
  siteMetadata: {
    title: "Banana Chip Tech",
    description:"Banana Chip Tech is a company dedicated to optimizing healthcare through computational means. We build apps, websites, and create coding courses to achieve this end!"
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [{
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        "G-2W2M9KLMV7", // Google Analytics / GA
      ],
      // This object is used for configuration specific to this plugin
      pluginConfig: {
        // Puts tracking script in the head instead of the body
        head: true,
      },
    },
  },
  "gatsby-plugin-image"],
};
