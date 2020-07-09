import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classes from "./SearchResults.module.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Properties from "../../components/Properties/Properties";
import { Container, Box } from "@material-ui/core";

const SearchResults = (props) => {
  return (
    <Container>
      <Box display="flex" paddingTop={5}>
        <Box width={250}>
          <Sidebar />
        </Box>
        <Box flexGrow={1}>
          <Properties />
        </Box>
      </Box>
    </Container>
  );
};

SearchResults.propTypes = {};

export default SearchResults;
