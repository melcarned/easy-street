import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Header from './Header/Header';

const styles = {
  postFeed: {
    backgroundColor: '#eee'
  },
  post: {
    marginBottom: '1em'
  }
}

class PostFeed extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      post: '',
      posts: [
        {
          id: 0,
          text: 'First post'
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
        }
      ]
    }
  }

  updatePost = (event) => {
    console.log('updatePost: ' + event.target.value);
    this.setState({ post: event.target.value });
  }

  submitPost = (event) => {
    console.log('submitPost: ' + this.state.post);
    const nextPost = {
      id: this.state.posts.length,
      text: this.state.post
    }

    const posts = this.state.posts;
    posts.push(nextPost);

    this.setState({ posts });
  }

  render() {
    const { classes } = this.props;

    const currentPost = this.state.posts.map((post) =>
      (<Card className={classes.post} square elevation={0}>
        <CardActionArea>
          <CardMedia
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="title" component="h6">
              {post.text}
            </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>));

    return (
      <Grid
        className={classes.postFeed}
        item
        alignItems="stretch"
        lg={'auto'}
        md={'auto'}
        xs={'auto'}>
        <Header />
        {currentPost}
      </Grid>
    );
  }
}

export default withStyles(styles)(PostFeed);