import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import LyricModal from './LyricModal';

const styles = theme => ({
    card: {
        height: '100%',
        minWidth: '250px',
        display: 'flex',
        flexDirection: 'column',
      },
      cardMedia: {
        paddingTop: '56.25%', // 16:9
      },
      cardContent: {
        flexGrow: 1,
    },
});

class TrackCard extends Component {
    state = {
        isOpen: false,
    };
  
    handleOpen = () => {
        this.setState({ isOpen: true });
    };
  
    handleClose = () => {
        this.setState({ isOpen: false });
    };

    render() {
        const { classes, title, url, hasLyrics, lyrics, lyrics_author, image, info, released, download, youtube } = this.props;
        return (
            <Grid item  sm={6} md={4} lg={3}>
             <LyricModal isOpen={this.state.isOpen} handleClose={this.handleClose} track={this.props} /> 
                <Card className={classes.card}>
                <a href={'/ahimitsu/#/tracks/' + url}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={image}
                        title="Image title"
                        style={{cursor: 'pointer'}}
                    />
                </a>
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="headline" component="h2" className={classes.typographyHeadline}>{title}</Typography>
                        <Typography component="p" className={classes.keywords} >{released}</Typography>
                    </CardContent>
                    <CardActions>
                        <a href={'/ahimitsu/#/tracks/' + url} className={classes.projectLinks} style={{textDecoration:'none'}}>
                            <Button size="small" color="primary" variant="contained" className={classes.button}>
                                Listen
                            </Button>
                        </a>

                        {hasLyrics ? 
                            (
                                <Button size="small" color="secondary" variant="contained" onClick={this.handleOpen}>
                                    LYRICS
                                </Button>
                            )
                            :
                            null
                        }
                    </CardActions>
                </Card>
            </Grid>
        );
    };
}

TrackCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TrackCard);
