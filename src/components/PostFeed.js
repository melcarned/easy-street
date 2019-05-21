import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Header from './Header/Header';
import ViewPost from './ViewPost';
import CreatePost from './CreatePost';

const styles = (theme) => ({
  headerAdjustment: {
    marginBottom: '0.1em',
    ...theme.mixins.toolbar
  },
  postFeed: {
    backgroundColor: '#ddd'
  },
  post: {
    marginTop: '0.4em',
    // border: '1px solid #bbb'
  }
})

const mockPosts = [
  {
    id: 0,
    text: 'First post',
    author: 'damiano',
    title: 'good title',
    content: 'good content'
  },
  {
    id: 1,
    text: 'Second post'
  },
  {
    id: 2,
    text: 'Third Post'
  },
  {
    id: 3,
    text: 'Fourth Post'
  },
  {
    id: 4,
    text: 'Fifth Post'
  },
  {
    id: 5,
    text: '6 Post'
  },
  {
    id: 6,
    text: '7 Post'
  },
  {
    id: 7,
    text: '8 Post'
  }
]

const PostFeed = ({ classes }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [viewingPost, setViewingPost] = useState(false);
  const [creatingPost, setCreatingPost] = useState(false);
  const [post, setPost] = useState(false);
  const [posts, setPosts] = useState(mockPosts);

  function updatePost(event) {
    setPost(event.target.value);
  }

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
    const currentPosts = posts.map((post) =>
      (<Card key={post.id} className={classes.post} square elevation={0}>
        <CardActionArea onClick={handleClickPost}>
          <CardMedia
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Avatar>D</Avatar>
            <Typography gutterBottom variant="body1">
              Posted by damiano.melcarne - 1h
            </Typography>
            <Typography gutterBottom variant="title">
              {post.text}
            </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>));

      return currentPosts;
  }

  return (
    <React.Fragment>
      <Header 
        anchorEl={anchorEl}
        handleClickPost={handleClickNewPost}
      />
      <div className={classes.headerAdjustment} />
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