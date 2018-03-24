---
path: '/How-to-use-gatsby-to-create-my-blog-2'  
title: 'Build dynamic blog with Gatsby' 
published: true
date: 01-05-2018
about: 'Gatsby'
series: 2
tags: [Gatsby, React, Redux, GraphQL, Markdown]
serious
snippet : "Gatsby is super good with netlify and contentful. With these tools, we could build a powerful CMS
           When we say CMS, we usually mean traditional CMSs like WordPress or Drupal. But it's 2018 now and to work with modern tools like React, Gastby and GraphQL, we need a more powerful 'CMS' in the workflow.
           That's the combination of Contentful and Netlify.
           Contentful is a content infrastructure, while Netlify is a platform for automating projects using modern techs.
           They together, become a much powerful management system 
           Let me show you how to set them up and let the blog project goes alive."
---

Gatsby is super good with netlify and contentful. With these tools, we could build a powerful CMS
When we say CMS, we usually mean traditional CMSs like WordPress or Drupal. But it's 2018 now and to work with modern tools like React, Gastby and GraphQL, we need a more powerful 'CMS' in the workflow.
That's the combination of Contentful and Netlify.
Contentful is a content infrastructure, while Netlify is a platform for automating projects using modern techs.
They together, become a much powerful management system 
Let me show you how to set them up and let the blog project goes alive.

## Netlify
An all-in-one workflow combines global deployment & CI & https & https. What it does is that whenever you commit the repository that Netlify bind with, or modify contents on contentful,
it will automatically trigger the CI to build, test and publish. The process is pain-free and seems like heroku but for static site.

Netlify is not just really easy to set up and free to use, it also provide many services you don't need to create by yourself. Such as SSL, advanced CDN, load balancing, DDoS protection...

### Install plugin
```npm
npm install --save gatsby-source-contentful
```
```javascript

plugins: [
  // make sure to put last in the array
  {
    resolve: `gatsby-plugin-netlify`,
    options: {
      headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
      allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
      mergeSecurityHeaders: true, // boolean to turn off the default security headers
      mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
      mergeCachingHeaders: true, // boolean to turn off the default caching headers
      transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
      generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
    },
  },
];
```
### Link with your github repository
Once registered on Netlify, we are able to authorize Netlify to access our github. 
Just choose the blog project repository, Netlify will detect and run build scripts from project root. 
Build logs are under the deploys section for debug. 

### Domain
If successfully deployed, Netlify will provide a free sub-domain, which is long and ugly. You may use it for preview and debug, but I suggest you to buy a domain and bind it with your project.
For example, I have my domain `cong-li.com` hosted by google, and there are several sub-domains under it because some of my web apps are in google app engine and I use those sub-domains as entry-points.
So in my domain DNS configuration, I create a CNAME record like this
```
blog CNAMA 1h xxxx.netlify.com
```
Under netlify/settings/domain management, I add custom domain to my newly created subdomain `log.cong-li.com`.
Netlify also provides free HTTPS, please enable it, wait few minutes, go to your new blog site to check if it's updated.

### Be aware
1. I have a method that validate if a button's target path === current path, an error says 'window' is not defined while deploying. 
Reason is that when the server renders, it may be not in a browser so the `window` doesn't exist. One way to get it work is to put it inside ComponentDidMount. 
My situation is more complex, so I found another solution => 
Gatsby uses react-router that provides an injected property in route component (normally the layouts/index).
And this object is never mutated, which means we could pass it to any child components and access it through `this.props.location`.


---

## Contentful
To be honest, this is a jump considering the content handling I planned was just use markdown files and upload them to github manually.
But after some reading, I found Contentful's content api and infrastructure are pretty awesome. So why not pick the best option and learn more new skills?


### Install plugins  
```javascript
npm install --save gatsby-source-contentful
```

after registered on contentful,  go to space settings/API to create new API id & key, then replace the value below with them.  
```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `your_space_id`,
      accessToken: `your_access_token`,
    },
  },
];
```



