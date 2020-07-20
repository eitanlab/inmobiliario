import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import moment from 'moment';
import classes from "./SearchResults.module.scss";
import { mockedPostings } from '../../___mock__/mockedPostings';
import Sidebar from "../../components/Sidebar/Sidebar";
import Postings from "../../components/Postings/Postings";
import { Container, Box } from "@material-ui/core";

const SearchResults = (props) => {
  const [postings, setPostings] = useState([]);
  const [filters, setFilters] = useState({operationType: '0', address: '', searchByAdress: false})
  const [postingsToShow, setPostingsToShow] = useState([]);

  useEffect(() => {
      const getPostings = async () => {
        try {
          mockedPostings.map(post => {
            const curatedPost = {};
            curatedPost['id'] = post.posting_id;
            curatedPost['prices'] = {
              price: setPostPrices(post.posting_prices[0].price),
              expenses: setPostPrices(post.posting_prices[0].expenses)
            }
            curatedPost['location'] = setPostLocation(post.posting_location);
            curatedPost['title'] = post.title;
            curatedPost['slug'] = post.posting_slug;
            curatedPost['description'] = post.posting_description;
            curatedPost['plan'] = setPostPublicationPlan(post.publication_plan);
            curatedPost['daysPublished'] = setPostDaysPublished(post.publish_date);
            curatedPost['picture'] = post.posting_picture;
            curatedPost['wishlist'] = false;
            curatedPost['operationType'] = post.operation_type.operation_type_id.toString();
            console.log(curatedPost)
            setPostings(postings => [...postings,curatedPost]);
          });
        } catch (error) {
          alert(`No se pueden cargar propiedades - Error(${error})`);
        }
      };
      getPostings();
  }, []);

  useEffect(() => {
    const filteredPostings = postings.filter(post => {
      if(filters.operationType !== '0' && filters.operationType !== post.operationType) {
        return false;
      }
      if(filters.address !== "" && post.location.toLowerCase().search(filters.address.toLowerCase()) === -1) {
        return false;
      }
      return true;
    });
    setPostingsToShow(filteredPostings);
    setFilters({...filters, searchByAdress: false})
  }, [filters.operationType, filters.searchByAdress, postings]);

  const setPostPrices = value => {
    if (value) {
      return value.amount.toLocaleString('es-AR', {
          style: 'currency',
          currency: value.currency,
          minimumFractionDigits: 0,
      });
    }
  }

  const handleFilterChange = (e) => {
    //console.log(e.target.value)
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  }

  const handleSearchByAddress = () => {
    setFilters({
      ...filters, 
      searchByAdress: true
    });
  }

  const setPostLocation = location => {
    if (location) {
      return `${location.address}, ${location.zone}, ${location.city}`
    }
  }

  const setPostPublicationPlan = plan => {
		switch(plan) {
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

  const setPostDaysPublished = date => {
    if (date) {
      const publishedDate = moment(date, 'DD/MM/YYYY').format();
      const timeDiff  = (new Date()) - (new Date(publishedDate));
      return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    }
  } 

  return (
    <Container>
      <Box display="flex" paddingTop={5}>
        <Box minWidth={300} width={300} marginRight={2}>
          <Sidebar 
            operationType={filters.operationType}
            address={filters.address} 
            onFilterChange={handleFilterChange}
            searchByAddress={handleSearchByAddress} />
        </Box>
        <Box flexGrow={1}>
          <Postings postingsList={postingsToShow}/>
        </Box>
      </Box>
    </Container>
  );
};

SearchResults.propTypes = {};

export default SearchResults;
