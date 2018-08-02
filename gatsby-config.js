module.exports = {
  siteMetadata: {
    title: "CongLi's Blog"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`
          }
        ]
      }
    },
    /*{
			resolve : `gatsby-plugin-typography`,
			options : {
				pathToConfigModule : `src/utils/typography.js`,
			},
		},*/

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat:300,400,500`, `Roboto:300,400,500`]
      }
    },

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId:
          require('./config/credentials').CONTENTFUL_SPACE_ID || '5smkipbj19p3',
        accessToken:
          require('./config/credentials').CONTENTFUL_ACCESS_TOKEN ||
          '6a9c16981add68e02b1d9ecacb4698aec5c42a553d368a9c4116dec488572dec'
      }
    },
    `gatsby-plugin-netlify`
  ]
};
