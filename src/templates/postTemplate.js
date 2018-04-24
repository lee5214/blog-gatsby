import React from 'react';
import { withStyles } from 'material-ui/styles';
import postTemplateStyle from '../styles/postTemplateStyle';
import moment from 'moment';
import Disqus from '../components/Disqus/Disqus';
const PostTemplate = ({ data, classes }) => {
  const { contentfulPost: post } = data;
  return (
    <div className={classes.container}>
      <div className={classes.detailFront}>
        <h1 className={classes.title}>{post.title}</h1>
        <p>{moment(post.date).format('MMMM DD YYYY')}</p>
        <div className={classes.tagContainer}>
          {post.tags.map(tag => (
            <span className={classes.tag} key={post.id + tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div
        className={classes.postContentWrapper}
        dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html }}
      />
      <div>
        <Disqus
          title={post.title}
          slug={post.slug}
          postID={post.id}
        />
      </div>
    </div>
  );
};
export default withStyles(postTemplateStyle)(PostTemplate);

export const postQuery = graphql`
  query BlogPostByPath($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      id
      slug
      title
      date
      tags
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
