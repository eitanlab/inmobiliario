import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        position: 'relative',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1,
            width: '100%',
            height: '3px',
            display: 'block',
            backgroundColor: props => props.color ? props.color : 'none',
        }    
    },
});

export const CustomPaper = (props) => {
    const classes = useStyles(props);
    return (
        <Paper className={classes.root}>
            {props.children}
        </Paper>
    );
}