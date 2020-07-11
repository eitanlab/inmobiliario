import React from "react";
import PropTypes from "prop-types";
import classes from "./Sidebar.module.scss";
import {
  Box,
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  IconButton,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from '@material-ui/icons/Search';

const Sidebar = (props) => {
    const [tipoOperacion, setTipoOperacion] = React.useState('todos');
    
    const handleTipoOperacion = (event) => {
        setTipoOperacion(event.target.value);
    };

    return (
    <>
      <Paper elevation={3}>
        <Box display="flex" flexDirection="column">
          <Box paddingLeft={2} paddingTop={2}>
            <Typography variant="h5" component="h5">
              Filtrado actual
            </Typography>
          </Box>
          <Box>
            <Accordion expanded={true} square={true} elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="Filtrar por dirección"
                id="filtro-direccion"
              >
                <Typography variant="h6" component="h6">
                  Dirección
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box display='flex'>
                    <TextField
                        id="search-field"
                        defaultValue="Buscar por dirección"
                        variant="outlined" />
                    <IconButton color='secondary' aria-label="buscar por dirección">
                        <SearchIcon />
                    </IconButton>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box>
            <Accordion expanded={true} square={true} elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="Filtrar por tipo de operación"
                id="tipo-operacion"
              >
                <Typography variant="h6" component="h6">
                  Tipo de operación
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="Tipo de operación" name="operacion" value={tipoOperacion} onChange={handleTipoOperacion}>
                        <FormControlLabel value="comprar" control={<Radio color='primary'/>} label="Comprar" />
                        <FormControlLabel value="alquilar" control={<Radio color='primary'/>} label="Alquilar" />
                        <FormControlLabel value="temporal" control={<Radio color='primary'/>} label="Temporal" />
                        <FormControlLabel value="todos" control={<Radio color='primary'/>} label="Todos" />
                    </RadioGroup>
                </FormControl>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
