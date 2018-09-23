import React, { Component } from 'react';
import TrackCard from './TrackCard';
import {content} from '../content';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
          width: 1100,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
      cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
    },
    thumbnail: {
        height: '20vw',
        width: '100%',
        margin: '0 auto',
        borderRadius: '5px'
    },
    marginDiv: {
        marginTop: '5vh',
        margin: '0 auto',
        textAlign: 'center'
    },
    layout1: {
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
          width: 1100,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
      cardGrid1: {
        padding: `${theme.spacing.unit * 8}px 0`,
    },
});

class Discography extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        let discography = [];

        for (let i in content) {
            let track = content[i];

            discography.push(
                <TrackCard
                    key={i}
                    title={track.title}
                    hasLyrics={track.hasLyrics}
                    lyrics={track.lyrics}
                    lyrics_author={track.lyrics_author}
                    url={track.url}
                    info={track.info}
                    image={track.image} 
                    released={track.released} 
                    youtube={track.youtube}
                />
            );

        }

        return (
            <div className='Discography'>
            <div className={classNames(classes.layout, classes.cardGrid)}>
                    <Grid container={true}spacing={40}>
                        {discography}
                    </Grid>
                </div>
            </div>
        );
    };
}

Discography.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Discography);
