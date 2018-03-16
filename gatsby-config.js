module.exports = {
	siteMetadata : {
		title : 'Gatsby Default Starter',
		author: 'Cong Li',
	},
	plugins : [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		'gatsby-transformer-remark',
		{
			resolve : 'gatsby-source-filesystem',
			options : {
				name : 'pages',
				path : `${__dirname}/src/pages/posts`,
			},
		},
	],
};
