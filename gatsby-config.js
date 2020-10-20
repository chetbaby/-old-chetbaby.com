module.exports = {
  siteMetadata: {
    title: `ChetBABY!'s Blog'`,
    name: `ChetBABY!`,
    siteUrl: `https://www.chetbaby.com`,
    description: `The personal blog of ChetBABY!`,
    hero: {
      heading: `The home of all things ChetBABY!`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/chetbaby`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/chetbabyplays`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/chethay`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors/authors/",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
