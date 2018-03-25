module.exports = {
	// site-wide header meta
	siteMetadata : {
		title : 'CongLi\'s Blog',
	},
	plugins : [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-styled-components`,
		{
			resolve : `gatsby-transformer-remark`,
			options : {
				plugins : [
					{
						resolve : `gatsby-remark-prismjs`,
						options : {
							classPrefix : `language-`,
						},
					},
				],
			},
		},
		{
			resolve : `gatsby-plugin-typography`,
			options : {
				pathToConfigModule : `src/utils/typography.js`,
			},
		},
		{
			resolve : `gatsby-plugin-google-fonts`,
			options : {
				fonts : [
					`Montserrat\:300,400,500,600`,
					`Roboto:300,400,500`,
					`Teko:300,400,500,600,700`,
					`Audiowide`,
					`Unica\+One`,
				],
			},
		},
		{
			resolve : `gatsby-source-contentful`,
			options : {
				spaceId : process.env.CONTENTFUL_SPACE_ID || require ('./config').CONTENTFUL_SPACE_ID,
				accessToken : require ('./config').CONTENTFUL_ACCESS_TOKEN,
				//host: `preview.contentful.com`,
			},
		},
		// {
		//  resolve : `gatsby-source-filesystem`,
		//  options : {
		//  name : `pages`,
		//  path : `${__dirname}/src/content/posts`,
		//  },
		//  },
		`gatsby-plugin-netlify`,
	],
};
