import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const styles = (theme) => ({
  post: {
    marginBottom: '0.75em',
  }
})

function Post({ classes, post, handleClickPost }) {
  return (
    <Card className={classes.post} square elevation={2}>
      <CardActionArea onClick={handleClickPost}>
        <CardMedia
          style={{ height: 200 }}
          image='http://via.placeholder.com/350x150'
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="body1">
            <strong>East Village</strong>
            </Typography>
          <Typography gutterBottom variant="body1">
            3 beds - 1 bath
          </Typography>
          <Typography gutterBottom variant="body1">
            Home Renters LLC
            </Typography>
        </CardContent>
      </CardActionArea>
    </Card>)
}

export default withStyles(styles)(Post);