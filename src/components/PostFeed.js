import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import Header from './Header/Header';
import Post from './Post';
import ViewPost from './ViewPost';
import CreatePost from './CreatePost';

const styles = (theme) => ({
  postFeed: {
    backgroundColor: '#666'
  },
  post: {
    marginBottom: '0.4em',
    // border: '1px solid #bbb'
  }
})

const mockPosts = [
  {
    id: 0,
    text: 'Lizards are a widespread group of squamate reptiles, with over 6,000',
    author: 'damiano',
    title: 'good title',
    content: 'good content'
  },
  {
    id: 1,
    text: 'Lizards are a widespread group of squamate reptiles, with over 6,000'
  },
  {
    id: 2,
    text: 'Lizards are a widespread group of squamate reptiles, with over 6,000'
  },
  {
    id: 3,
    text: 'Lizards are a widespread group of squamate reptiles, with over 6,000'
  },
  {
    id: 4,
    text: 'Lizards are a widespread group of squamate reptiles, with over 6,000'
  },
  {
    id: 5,
    text: 'Lizards are a widespread group of squamate reptiles, with over 6,000'
  },
  {
    id: 6,
    text: 'Lizards are a widespread group of squamate reptiles, with over 6,000'
  },
  {
    id: 7,
    text: 'Lizards are a widespread group of squamate reptiles, with over 6,000'
  }
]

function PostFeed({ classes }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [viewingPost, setViewingPost] = useState(false);
  const [creatingPost, setCreatingPost] = useState(false);
  // const [post, setPost] = useState(false);
  const [posts, setPosts] = useState(mockPosts);

  // function updatePost(event) {
  //   setPost(event.target.value);
  // }

  
  function handleClickNewPost() {
    setCreatingPost(true);
    setAnchorEl(null);
  };

  function handleCloseCreatePost() {
    setCreatingPost(false);
  };

  function handleClickPost() {
    setViewingPost(true);
  };

  function handleClosePostView() {
    setViewingPost(false);
  };

  function getCurrentPosts() {
    const currentPosts = posts.map(post =>
      (<Post key={post.id} post={post} handleClickPost={handleClickPost} />));

    return currentPosts;
  }

  return (
    <React.Fragment>
      <Header
        anchorEl={anchorEl}
        handleClickPost={handleClickNewPost}
      />
      {getCurrentPosts()}
      <ViewPost
        openViewPost={viewingPost}
        handleClose={handleClosePostView}
        postContent={{ ...posts[0] }}
      />
      <CreatePost
        openCreatePost={creatingPost}
        handleClose={handleCloseCreatePost}
      />
    </React.Fragment>
  );
};

export default withStyles(styles)(PostFeed);