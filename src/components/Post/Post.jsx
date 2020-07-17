import React from "react";
import moment from 'moment';
import { Grid, Paper, Typography, Button, Box, Link } from "@material-ui/core";
import {CustomPaper} from '../UI/CustomPaper';
import { useStyles } from "./Post.styles";

const Post = (props) => {

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

	let description = null;
	if (props.posting_description) {
		description = props.posting_description.substring(0, 320) + '...';
	}

	const publicationPlan = () => {
		switch(props.publication_plan) {
			case 'SIMPLE':
				return {
					type: 'Simple',
					color: ''
				};
			case 'HIGHLIGHTED':
				return {
					type: 'Destacado',
					color: '#31d1a1'
				};
			case 'SUPERHIGHLIGHTED':
				return {
					type: 'Súper destacado',
					color: '#9371e0'
				};
			default:
				return null;
		} 
	}

	const classes = useStyles();

	const preventDefault = (event) => event.preventDefault();

	let publishedDaysAgo = null
	if (props.publish_date) {
		const publishedDate = moment(props.publish_date, 'DD/MM/YYYY').format();
		const timeDiff  = (new Date()) - (new Date(publishedDate));
		publishedDaysAgo = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
	}

	return (
		<div className={classes.root}>
		<CustomPaper color={publicationPlan().color} className={classes.paper} elevation={2}>
			<Grid container spacing={0}>
			<Grid item>
				<Box className={classes.image}>
				<img
					className={classes.img}
					alt="complex"
					src={props.posting_picture}
				/>
				<Typography className={classes.imgCaption} variant="caption">
					{publicationPlan().type}
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
					<Box marginBottom={4}>
						<Typography gutterBottom variant="subtitle1">
							<Link href={props.posting_slug} onClick={preventDefault} color='secondary'>
								{props.title}
							</Link>
						</Typography>
						<Typography variant="body2" gutterBottom>
							{location}
						</Typography>
					</Box>
					
					<Typography variant="body2" color="textSecondary">
						{description}
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
		</CustomPaper>
		</div>
	);
};

export default Post;
