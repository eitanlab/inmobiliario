import React from "react";
import moment from 'moment';
import { Grid, Paper, Typography, Button, Box } from "@material-ui/core";
import { useStyles } from "./Post.styles";

const Post = (props) => {
  const classes = useStyles();

	let price = null;
	if (props.posting_prices[0].price) {
		price = (
			<Typography variant="h5">
				{props.posting_prices[0].price.amount.toLocaleString('es-AR', {
					style: 'currency',
					currency: props.posting_prices[0].price.currency,
					minimumFractionDigits: 0,
				})}
			</Typography>
		);
	}

	let expenses = null;
	if (props.posting_prices[0].expenses) {
		expenses = (
			<Typography variant="subtitle2">
			{`+ 
			${props.posting_prices[0].expenses.amount.toLocaleString('es-AR', {
				style: 'currency',
				currency: props.posting_prices[0].expenses.currency,
				minimumFractionDigits: 0,
			})}
			Expensas`}
			</Typography>
		);
	}

	let location = null;
	if (props.posting_location) {
		location = `${props.posting_location.address}, ${props.posting_location.zone}, ${props.posting_location.city}`
	}

	let publicationPlan = '';
	if (props.publication_plan) {
		publicationPlan = null;
	}

	let publishedDaysAgo = null
	if (props.publish_date) {
		const publishedDate = moment(props.publish_date, 'DD/MM/YYYY').format();
		const timeDiff  = (new Date()) - (new Date(publishedDate));
		publishedDaysAgo = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
	}

	return (
		<div className={classes.root}>
		<Paper className={classes.paper} elevation={2}>
			<Grid container spacing={0}>
			<Grid item>
				<Box className={classes.image}>
				<img
					className={classes.img}
					alt="complex"
					src={props.posting_picture}
				/>
				<Typography className={classes.imgCaption} variant="caption">
					{props.publication_plan}
				</Typography>
				</Box>
				<Box marginBottom={1} className={classes.amounts}>
					{price}
					{expenses}
				</Box>
			</Grid>
			<Grid className={classes.rightColumn} item xs={12} sm container>
				<Grid item xs container direction="column" spacing={2}>
				<Grid item xs>
					<Typography gutterBottom variant="subtitle1">
					{props.title}
					</Typography>
					<Typography variant="body2" gutterBottom>
					{location}
					</Typography>
					<Typography variant="body2" color="textSecondary">
					{props.posting_description}
					</Typography>
				</Grid>
				<Grid item>
					<Box
					display="flex"
					justifyContent="space-between"
					alignItems="center"
					>
					<Typography variant="body2" style={{ cursor: "pointer" }}>
						Publicado hace {publishedDaysAgo} días
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
};

export default Post;
