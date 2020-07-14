import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import classes from "./SearchResults.module.scss";
import { mockedPostings } from '../../___mock__/mockedPostings';
import Sidebar from "../../components/Sidebar/Sidebar";
import Postings from "../../components/Postings/Postings";
import { Container, Box } from "@material-ui/core";

const SearchResults = (props) => {
  const [postings, setPostings] = useState([]);

  useEffect(() => {
    
      const getPostings = async () => {
        try {
          setPostings(mockedPostings);
          console.log(postings);
        } catch (error) {
          alert(`Postings can't be loaded because (${error})`);
        }
      };
      getPostings();
  }, []);

  return (
    <Container>
      <Box display="flex" paddingTop={5}>
        <Box minWidth={300} width={300} marginRight={2}>
          <Sidebar />
        </Box>
        <Box flexGrow={1}>
          <Postings postingsList={postings}/>
        </Box>
      </Box>
    </Container>
  );
};

SearchResults.propTypes = {};

export default SearchResults;
