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
			resolve : `gatsby-source-filesystem`,
			options : {
				name : `pages`,
				path : `${__dirname}/src/pages/posts`,
			},
		},
	],
};
