import React, { Component } from 'react';import ReactDisqusComments from 'react-disqus-comments';class Disqus extends Component {  constructor(props) {    super(props);    this.state = {      toasts: []    };    this.notifyAboutComment = this.notifyAboutComment.bind(this);    this.onSnackbarDismiss = this.onSnackbarDismiss.bind(this);  }  onSnackbarDismiss() {    const [, ...toasts] = this.state.toasts;    this.setState({ toasts });  }  notifyAboutComment() {    const toasts = this.state.toasts.slice();    toasts.push({ text: 'New comment available!' });    this.setState({ toasts });  }  handleNewComment = comment => {    console.log(comment.text);  };  render() {    const { title, slug, postID } = this.props;    console.log(title, slug);    // if (!config.disqusShortname) {    //   return null    // }    const url = 'http://blog.cong-li.com/' + slug;    console.log(url);    return (      <div>        <ReactDisqusComments          shortname={"conglis-blog"}          identifier={title}          title={title}          url={url}          category_id={postID}          onNewComment={this.handleNewComment}        />        AAAA      </div>    );  }}export default Disqus;