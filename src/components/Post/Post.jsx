import React from "react";
import { Grid, Paper, Typography, Button, Box, Link } from "@material-ui/core";
import { CustomPaper } from "../UI/CustomPaper";
import { useStyles } from "./Post.styles";

const Post = (props) => {
  const {
    plan,
    picture,
    prices,
    expenses,
    title,
    slug,
    location,
    description,
    daysPublished,
  } = props;
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <div className={classes.root}>
      <CustomPaper color={plan.color} className={classes.paper} elevation={2}>
        <Grid container spacing={0}>
          <Grid item>
            <Box className={classes.image}>
              <img className={classes.img} alt="complex" src={picture} />
              <Typography className={classes.imgCaption} variant="caption">
                {plan.type}
              </Typography>
            </Box>
            <Box marginBottom={1} className={classes.amounts}>
              <Typography variant="h5">{prices.price}</Typography>
              <Typography variant="subtitle2">+ {prices.expenses} Expensas</Typography>
            </Box>
          </Grid>
          <Grid className={classes.rightColumn} item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Box marginBottom={4}>
                  <Typography gutterBottom variant="subtitle1">
                    <Link
                      href={slug}
                      onClick={preventDefault}
                      color="secondary"
                    >
                      {title}
                    </Link>
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {location}
                  </Typography>
                </Box>

                <Typography variant="body2" color="textSecondary">
                  {description.substring(0, 320)}...
                </Typography>
              </Grid>
              <Grid item>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="body2">
                    Publicado hace {daysPublished} días
                  </Typography>
                  <Button variant="contained" color="primary">
                    Contactar
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CustomPaper>
    </div>
  );
};

export default Post;
