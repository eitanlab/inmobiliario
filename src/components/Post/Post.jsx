import React from 'react';
import {Grid, Paper, Typography, Button, Box} from '@material-ui/core';
import { useStyles } from './Post.styles'

const Property = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={2}>
        <Grid container spacing={0}>
          <Grid item>
            <Box className={classes.image}>
              <img className={classes.img} alt="complex" src="https://preprostatic.zonapropcdn.com/avisos/1/00/44/55/79/81/360x266/1693121343.jpg" />
              <Typography color='contrast' className={classes.imgCaption} variant="caption">Destacado</Typography>
            </Box>
            <Box className={classes.amounts}>
                <Typography variant="h5">
                    $ 29.500
                </Typography>
                <Typography gutterBottom variant="subtitle2">
                    + $ 6.500 Expensas
                </Typography>
            </Box>
          </Grid>
          <Grid className={classes.rightColumn} item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  2 1/2 Ambientes con Balcón a Estrenar en Alquiler
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Villa Devoto, Capital federal
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Typography>
              </Grid>
              <Grid item>
                <Box display='flex' justifyContent='space-between' alignItems='center'>
                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                        Publicado hace 30 días
                    </Typography>
                    <Button variant="contained" color="primary">
                        Contactar
                    </Button>
                </Box>
                
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Property;