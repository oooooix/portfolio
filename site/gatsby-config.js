module.exports = {
  siteMetadata: {
    description: "Personal page of Mengyao Zhang",
    locale: "en",
    title: "Mengyao Zhang | Portfolio",
    formspreeEndpoint: "https://formspree.io/f/mlezqydw",
  },
  plugins: [
    {
      resolve: "../gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: false,
        theme: "classic",
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-GH8J5DN8JX", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Defaults to https://www.googletagmanager.com
          origin: "https://www.mengyaozhang.me",
        },
      },
    },
  ],
}
