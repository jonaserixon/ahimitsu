import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ExampleModal from './ExampleModal';

const styles = theme => ({
    appBar: {
      position: 'relative',
    },
    icon: {
      marginRight: theme.spacing.unit * 2,
    },
    heroUnit: {
      backgroundColor: theme.palette.background.paper,
    },
    heroContent: {
      maxWidth: 600,
      margin: '0 auto',
      padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    heroButtons: {
      marginTop: theme.spacing.unit * 4,
    },
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
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing.unit * 6,
    },
  });

  class UseMusic extends Component {
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
        const { classes } = this.props;

        return (
            <div className={classes.heroUnit}>
                <ExampleModal isOpen={this.state.isOpen} handleClose={this.handleClose}/> 

                <div className={classes.heroContent}>
                  <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
                    Using my music
                  </Typography>
                  <Typography variant="title" align="center" color="textSecondary" paragraph>
                    Terms of usage
                  </Typography>
                  <Typography variant="body1" align="center" color="textSecondary" paragraph>
                      <p>All my music can be used in your videos on <strong>Youtube</strong>, <strong>Facebook</strong> and <strong>Instagram</strong>. You can even monetize your videos on youtube.</p>
                          <p>
                              But to be able to use my music you need to agree with the terms below and follow the steps:
                          </p>
                          <ul>
                              <li>You must give me credit when using my music (Example below)</li>
                              <li>You can not make claims that my music is yours</li>
                              <li>If you use my music outside YouTube, Facebook or Instagram you need to contact me in order to get a special permission or license</li>
                          </ul>
                          <h4>Credit example:</h4>
                      <p>Music by A Himitsu (https://www.youtube.com/channel/UCgFwu-j5-xNJml2FtTrrB3A)</p>
                  </Typography>
                  <div className={classes.heroButtons}>
                    <Grid container spacing={16} justify="center">
                      <Grid item>
                        <Button variant="contained" color="primary" onClick={this.handleOpen}>
                          Screenshot example
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
              </div>
          </div>
        );
    }
}

UseMusic.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UseMusic);
