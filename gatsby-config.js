module.exports = {
	// site-wide header meta
	siteMetadata : {
		title : 'CongLi\'s Blog',
	},
	plugins : [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-netlify`,
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
		/*	{
		 resolve : `gatsby-plugin-typography`,
		 options : {
		 pathToConfigModule : `src/utils/typography.js`,
		 },
		 },*/
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
	/*	{
			resolve : `gatsby-source-contentful`,
			options : {
				spaceId : `5smkipbj19p3`,
				accessToken : `6a9c16981add68e02b1d9ecacb4698aec5c42a553d368a9c4116dec488572dec`,
				//host: `preview.contentful.com`,
			},
		},*/
		{
			resolve : `gatsby-source-filesystem`,
			options : {
				name : `pages`,
				path : `${__dirname}/content/posts`,
			},
		},
	],
};
