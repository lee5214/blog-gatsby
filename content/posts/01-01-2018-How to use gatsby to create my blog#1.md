---
path: '/How-to-use-gatsby-to-create-my-blog-1'  
title: 'Build dynamic blog with Gatsby' 
published: true
date: 01-01-2018
about: 'Gatsby'
series: 1
tags: [Gatsby, React, Redux, GraphQL, Markdown]
snippet : "I'm a big fan of react ecosystem and I always want to create my own blog to share and record some learning experience, so this is it.    
          Gatsby is a super fast static sit generator which let React users to scaffold out a static site in 'React way'.  
          How it works? At building phase, its SSR allows us to render dynamic components into static html content then serve.  
          With all the benefits from both dynamic and static site, it became my first choice.   
          In this post, I will cover some basic use of Gatsby / React / Redux / GraphQL / Styled Component / Markdown / Netlify."
---

I'm a big fan of react ecosystem and I always want to create my own blog to share and record some learning experience, so this is it.    
Gatsby is a super fast static sit generator which let React users to scaffold out a static site in 'React way'.  
How it works? At building phase, its SSR allows us to render dynamic components into static html content then serve.  
With all the benefits from both dynamic and static site, it became my first choice.   
In this post, I will cover some basic use of Gatsby / React / Redux / GraphQL / Styled Component / Markdown / Netlify.  

## Install & Config

### My current environment:

```javascript
    node: v8.9.4
    npm: v5.6.0
```
    
### Start fresh

```javascript
    npm install -g gatsby-cli // install cli globally
```

```javascript
    gatsby new [your-project-name] // create new project
```

I want to minimize my dependency so that I could add some tools I wanna learn/use, but you could use a starter package from [Gatsby Starter](https://www.gatsbyjs.org/docs/gatsby-starters/) for faster result.

### Install plugins  

This is important, there are hundreds of plugins which make gatsby powerful.   
Review them here: [Gatsby Plugins](https://www.gatsbyjs.org/packages/).  
Then install 3 basic plugins for styled-components / data grabbing from source file (markdown)  / markdown parser.  

```javascript
    npm i --s gatsby-plugin-styled-components  gatsby-source-filesystem  gatsby-transformer-remark
```   

### Modify root/gatsby-config.js so gatsby could use those plugins.  
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
### Create markdown file
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
 
### Create post template
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

### Tell plugin to create pages
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

### Create post list in index
To get a list of posts, it's similar as what we did above. Use graphql in `pages/index.js` to query the list of post info, then pass into a 
component as props.
  
---

## Style
### Code block highlight
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

### Styled component modify markdown  
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

