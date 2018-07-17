import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import ItemGrid from '../../components/Grid/ItemGrid';
import PostItemCard from '../../components/Cards/PostItemCard';
import {
  BabelIcon,
  GatsbyIcon,
  GraphQLIcon,
  MarkdownIcon,
  MaterialUIIcon,
  ReactIcon,
  ReduxIcon,
  NodeIcon,
  FirebaseIcon
} from '../../assets/svg/logos';
import indexEqualColumnStyle from '../../styles/components/indexEqualColumnStyle';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

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
  },
  Node: {
    icon: NodeIcon,
    bgColor: 'green'
  },
  Firebase: {
    icon: FirebaseIcon,
    bgColor: 'yellow'
  }
};

const generateTagAvatar = (tag, tagFillColor) => {
  let tagComponent = logosList[tag];
  return tagComponent ? <tagComponent.icon fill={tagFillColor} /> : null;
};

const EqualColumn = props => {
  const { posts, classes } = props;
  const tagFillColor = '';
  return (
    <Grid container className={classes.cardsGrid}>
      {posts.length&&posts.map(post => {
        return (
          <ItemGrid xs={12} sm={12} md={12} lg={6} key={post.node.id}>
            <PostItemCard
              icon={logosList[`${post.node.focus}`].icon}
              iconColor={logosList[`${post.node.focus}`].bgColor}
              postDate={post.node.date}
              title={post.node.title}
              postLink={post.node.slug}
              seriesNumber={post.node.seriesNumber}
            >
              <Grid container>
                <Grid item xs={12}>
                  <Grid container className={classes.tagGrid}>
                    {/*<div className={ classes.row }>*/}
                    {post.node.tags&&post.node.tags.map(tag => (
                      <Grid item key={`${post.node.id}${tag}`}>
                        <Avatar alt={tag} className={classes.tagAvatar}>
                          {generateTagAvatar(tag, tagFillColor)}
                        </Avatar>
                      </Grid>
                    ))}
                    {/*</div>*/}
                    <Divider />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={12}>
                      {post.node.snippet.snippet}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </PostItemCard>
          </ItemGrid>
        );
      })}
    </Grid>
  );
};

export default withStyles(indexEqualColumnStyle)(EqualColumn);
