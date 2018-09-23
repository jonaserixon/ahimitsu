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
  
class ExampleModal extends React.Component {
    
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
                    <Typography variant="headline" id="modal-title" style={{textAlign: 'center'}}>
                        Credit example
                        <IconButton onClick={(e) => this.props.handleClose(e)} style={{color: 'black', position: 'absolute', top: '5px', right: '5px'}}>
                            x
                        </IconButton>
                    </Typography>

                    <img src={imageExample} />

                </div>
            </Modal>
        );
    }
}

ExampleModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExampleModal);

