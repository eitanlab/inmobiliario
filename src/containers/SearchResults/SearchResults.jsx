import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import classes from "./SearchResults.module.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Postings from "../../components/Postings/Postings";
import { Container, Box } from "@material-ui/core";

const SearchResults = (props) => {
  const [postings, setPostings] = useState([]);

  return (
    <Container>
      <Box display="flex" paddingTop={5}>
        <Box minWidth={300} width={300} marginRight={2}>
          <Sidebar />
        </Box>
        <Box flexGrow={1}>
          <Postings />
        </Box>
      </Box>
    </Container>
  );
};

SearchResults.propTypes = {};

export default SearchResults;
