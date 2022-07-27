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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-GH8J5DN8JX",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Defers execution of google analytics script after page load
        defer: false,
        cookieDomain: "none",
      },
    },
  ],
}
