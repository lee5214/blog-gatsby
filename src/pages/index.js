import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EqualColumn from '../components/Index/EqualColumn';
import {
  BabelIcon,
  GatsbyIcon,
  GraphQLIcon,
  MarkdownIcon,
  MaterialUIIcon,
  ReactIcon,
  ReduxIcon
} from '../assets/svg/logos';

const logosList = {
  React: {
    icon: ReactIcon,
    bgColor: 'blue'
  },
  Redux: {
    icon: ReduxIcon,
    bgColor: 'blue'
  },
  GraphQL: {
    icon: GraphQLIcon,
    bgColor: 'rose'
  },
  Babel: {
    icon: BabelIcon,
    bgColor: 'red'
  },
  Gatsby: {
    icon: GatsbyIcon,
    bgColor: 'purple'
  },
  Markdown: {
    icon: MarkdownIcon,
    bgColor: 'white'
  },
  MaterialUI: {
    icon: MaterialUIIcon,
    bgColor: 'black'
  }
};

/**
 * @param tag is a string got from markdown frontmatter
 * @returns component Avatar
 * this function is for generating tag avatar dynamically based on tag name
 * syntax <logoList[tag].icon is not allowed, so I abstracted this function.
 */
class IndexPage extends Component {
  generateTagAvatar = (tag, tagFillColor) => {
    let tagComponent = logosList[tag];
    return tagComponent ? <tagComponent.icon fill={tagFillColor} /> : null;
  };

  render() {
    const { data, classes } = this.props;
    const { edges: posts } = data.allContentfulPost;
    const tagFillColor = '';

    return <EqualColumn posts={posts} />;
  }
}

export const listQuery = graphql`
  query PageIndexQuery {
    allContentfulPost {
      edges {
        node {
          id
          title
          slug
          focus
          date
          tags
          seriesNumber
          snippet {
            snippet
          }
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
  //classes : PropTypes.object.isRequired,
};

export default IndexPage;
