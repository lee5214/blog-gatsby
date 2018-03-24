---
path: '/How-to-use-gatsby-to-create-my-blog-2'  
title: 'Build dynamic blog with Gatsby #2' 
published: true
date: 01-05-2018
about: 'Gatsby'
tags: [Gatsby, React, Redux, GraphQL, Markdown]
snippet : "Gatsby is super good with netlify and contentful. Let me show you how to config and deploy a CMS for this blog project"
---

Gatsby is super good with netlify and contentful. With these tools, we could build a powerful CMS 
Let me show you how to config and deploy for this blog project.


## Netlify

#### Link with your github repository
Once registered on Netlify, we are able to authorize Netlify to access our github. 
Just choose the blog project repository, Netlify will detect and run build scripts from project root. 
Build logs are under the deploys section for debug. 

#### Domain
If successfully deployed, Netlify will provide a free sub-domain, which is long and ugly. You may use it for preview and debug, but I suggest you to buy a domain and bind it with your project.
For example, I have my domain `cong-li.com` hosted by google, and there are several sub-domains under it because some of my web apps are in google app engine and I use those sub-domains as entry-points.
So in my domain DNS configuration, I create a CNAME record like this
```
blog CNAMA 1h xxxx.netlify.com
```
Under netlify/settings/domain management, I add custom domain to my newly created subdomain 'blog.cong-li.com'.
Netlify also provides free HTTPS, please enable it, wait few minutes, go to your new blog site to check if it's updated.

#### Be aware
1. I have a method that validate if a button's target path === current path, an error says 'window' is not defined while deploying. 
Reason is that when the server renders, it may be not in a browser so the `window` doesn't exist. One way to get it work is to put it inside ComponentDidMount. 
My situation is more complex, so I found another solution => 
Gatsby uses react-router that provides an injected property in route component (normally the layouts/index).
And this object is never mutated, which means we could pass it to any child components and access it through `this.props.location`.



#### Install plugins  

---

## Contentful

This is important, there are handreds of plugins which make gatsby powerful.   
Review them here: [Gatsby Plugins](https://www.gatsbyjs.org/packages/).  
Then install 3 basic plugins for styled-components / data grabbing from source file (markdown)  / markdown parser.  

```javascript
    npm i --s gatsby-plugin-styled-components  gatsby-source-filesystem  gatsby-transformer-remark
```   

#### Modify root/gatsby-config.js so gatsby could use those plugins.  
Gatsby-config.js has similar style as webpack. 

```javascript{7-14}
    module.exports = {
        // site-wide header meta
        siteMetadata : {
            title : `XX\'s blog`,
        },
        plugins : [
            `gatsby-plugin-react-helmet`,
            `gatsby-plugin-styled-components`,
            `gatsby-transformer-remark`,
            {
                resolve : `gatsby-source-filesystem`,
                options : {
                    name : `pages`,
                    path : `${__dirname}/src/pages/posts`,
                },
            },
        ],
    };
```

To get the site running, use one command

```javascript
    gatsby develop
```

you should be able to see 
* default page on localhost:8000
* graphql debugger page on localhost:8000/__graphql   

---

## Page & Template
#### Create markdown file
In file /posts, create [your-markdown-file-name].md, inside start with
```markdown
    ---
    path: '/How-to-use-gatsby-to-create-my-blog-1'  
    title: 'How to use gatsby to create my blog #1' 
    published: true
    date: 01-01-2018
    tag: [Gatsby, React, Redux, GraphQL, Styled Component, Markdown, Netlify]
    ---
    [your-blog-content]
```
This header for all posts in markdown is called `frontmatter`, it provides details for each post so that graphql could filter/sort based on the info.  
 
#### Create post template
Gatsby already set up the basic functions such as routing under the hood, so that we don't need to do those things again.
To generate a static page, just create a component file in `src/pages`, it will be served on `domain/[file-name]`.
To create pages based on these markdown files dynamically, a template is needed as `src/template/postTemplate.js`.  

```javascript{5,9,16-23}
    import React from 'react';
    
    // data is the props that injected by graphql query
    export default function Template ({data}) {
        const {markdownRemark : post} = data; // markdownRemark from remark plugin
        return (
            <div>
                <h1>{ post.frontmatter.title }</h1>
                <p dangerouslySetInnerHTML={ {__html : post.html} }/> // react api to inject html content
            </div>
        );
    }
    // graphql query
    // detail is in graphql section
    export const postQuery = graphql`
        query BlogPostByPath($path: String!){ 
            markdownRemark(
                frontmatter: {path: {eq: $path}}
            ){
                html
                frontmatter {
                    path
                    title
                }
            }
        }
    `;
```

#### Tell plugin to create pages
To let plugins to create pages, config in gatsby-node.js is needed.  

```javascript{5-6,28-31}
    const path = require ('path');
    
    // boundActionCreators let us use gatsby's redux action creators 
    exports.createPages = ({boundActionCreators, graphql}) => {
        const {createPage} = boundActionCreators;
        const postTemplate = path.resolve ('src/templates/postTemplate.js');
        
        // query all markdown data
        return graphql (`{
            allMarkdownRemark() {
                edges{
                    node{
                        html
                        id
                        frontmatter {
                            path
                            title
                            date
                        }
                    }
                }
            }
        }`).then ((res) => {
            if (res.errors) {
                return Promise.reject (res.errors);
            }
            // createPage api will create for each markdown file
            res.data.allMarkdownRemark.edges.forEach (({node}) => {
                createPage ({
                    path : node.frontmatter.path,
                    component : postTemplate,
                });
            });
        });
    };
```
Now the page should be showing on `domain/[file-path]`

#### Create post list in index
To get a list of posts, it's similar as what we did above. Use graphql in `pages/index.js` to query the list of post info, then pass into a 
component as props.
  
---

## Style
#### Code block highlight
You may wonder how to get the code style and highlight like I did above, it's a plugin called ```gatsby-remark-prismjs```.  
install the plugin and modify in ```gatsby-config``` like this.  

```javascript 
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
```
Also import a pre-defined style sheet such as `prismjs/themes/prism-tomorrow.css` in `layout/index.js` 
or create your own css class `.gatsby-highlight-code-line`.  
For more detail, read [here](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/?=pri)  

#### Styled component modify markdown  
I want to use styled component for modify some markdown default styles, such as subtitles' `margin-top`.  
in `src/templates/postTemplate.js`
```javascript
    // create a wrapper
    const MDContentWrapper = styled.div`
        > h1, h2, h3, h4 {
        margin-top: 2.5rem;
        }
    `
    // replace <p> with the new wrapper
    <MDContentWrapper dangerouslySetInnerHTML={ {__html : post.html} }/>
```  
---

## End
This is what I get from the first day learning Gatsby / GraphQL, will write another post once I understand more deeply.
The code repo here [Github](https://github.com/lee5214/blog-gatsby)


