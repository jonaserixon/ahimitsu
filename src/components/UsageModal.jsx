import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import imageExample from '../images/creditexample.PNG';

function getModalStyle() {
    const top = 50;
    const left = 50;

    if (window.innerWidth > 1000) {
        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
            overflowY: 'scroll'
        };
    }

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        width: '80%',
        height: '80%',
        overflowY: 'scroll'
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
    keywords: {
        color: 'gray',
        fontSize: '80%',
        marginBottom: '2vw'
    },
    typography: {
        fontSize: '80%',
        marginBottom: '2vw'
    },
    typography1: {
        fontSize: '80%',
        marginBottom: '2vw',
        textAlign: 'center',
        whiteSpace: 'pre-line'
    },
});
  
class UsageModal extends React.Component {
    
    render() {
        const { classes, track} = this.props;
        return (
            <Modal
                aria-labelledby="project-modal-title"
                aria-describedby="project-modal-description"
                open={this.props.isOpen}
                onClose={this.props.handleClose}
            >
            
                <div style={getModalStyle()} className={classes.paper}>
                <Typography variant="headline" id="modal-title" style={{textAlign: 'center', marginBottom: '2vh'}}>
                    Using my music
                    <IconButton onClick={(e) => this.props.handleClose(e)} style={{color: 'black', position: 'absolute', top: '5px', right: '5px'}}>
                        x
                    </IconButton>
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
                      <a href="https://i.imgur.com/6OGhbIf.png">Screenshot example of usage in YouTube</a>
                  </Typography>
                </div>
            </Modal>
        );
    }
}

UsageModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UsageModal);

